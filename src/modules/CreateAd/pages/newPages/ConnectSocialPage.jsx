import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../../components/ErrorBoundary.Component';
import ReSubmitFormModal from '../../components/ReSubmit.Form.Modal';
import Box from '@material-ui/core/Box';
import NetworkCheckBox from '../../components/CreateAd.NetworkCheckBox';
import InstagramLogoImage from '../../../../img/instagram-logo.png';
import FacebookLogoImage from '../../../../img/FacebookLogin/facebook.png';
import GoogleLogoImage from '../../../../img/google-icon.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StepperWrapper from '../../components/StepperWrapper';
import useCheckNetwork from '../../hooks/useCheckNetwork';

export const SOCIAL_NETWORK_TITLES = {
  InstagramAd: 'Instagram Ad',
  FacebookAd: 'Facebook Ad',
  FacebookAudienceNetworkAd: 'Facebook Audience Network Ad',
  GoogleAwards: 'Google Awards',
  GoogleDisplayNetworkAd: 'Google Display Network Ad',
};

const useStyles = makeStyles({
  PageVessel: {
    width: '100%',
    minHeight: '94em',
    position: 'relative',
    marginTop: '10em',

    ['@media (min-width:400px)']: {
      marginTop: '0em',
    },
  },
  BlueText: {
    color: '#394044',
    'font-weight': 600,
    fontSize: '2rem',
    width: '100%',
    textAlign: 'center',

    ['@media (min-width:450px)']: {
      fontSize: '3rem',
    },
  },
  FlexVessel: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5em',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    ['& > *']: {
      flex: '1 1 33%',
    },
  },
});

export default function ConnectSocialPage({
  completeStep,
  fbAdAccounts,
  googleAdAccounts,
  googleToken,
  facebookToken,
  getGoogleAdAccounts,
  getFbAdAccounts,
  // createManagedAccount,
  handleSubmitSocials,
  addresses,
  basicInformation,
  // google creation state
  userAccountInformation,
  getUserProfileSuccess,
  getUserProfileInformationLoading,
  getUserAccountInformationError,
  getUserProfileInformation,
  // google creation state and actions
  createGoogleBusinessAccount,
  createGoogleAccountError,
  createGoogleAccountSuccessful,
  createGoogleAccountLoading,
  // facebook creation state and actions
  createFacebookAccountError,
  createFacebookAccountLoading,
  createFacebookAccountSuccess,
  isManagedAccountCreated,
  hasConnectSocialStepBeenCompleted,
}) {
  const { networkError, setNetworkError } = useCheckNetwork(
    googleToken,
    facebookToken,
    getGoogleAdAccounts,
    getFbAdAccounts
  );
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const NETWORKS = [
    {
      titleText: SOCIAL_NETWORK_TITLES.InstagramAd,
      iconSrc: InstagramLogoImage,
    },
    {
      titleText: SOCIAL_NETWORK_TITLES.FacebookAd,
      iconSrc: FacebookLogoImage,
    },
    {
      titleText: SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd,
      iconSrc: FacebookLogoImage,
    },
    {
      titleText: SOCIAL_NETWORK_TITLES.GoogleAwards,
      iconSrc: GoogleLogoImage,
    },
    {
      titleText: SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd,
      iconSrc: GoogleLogoImage,
    },
  ];

  const [selectedNetworks, setSelectedNetworks] = useState(
    NETWORKS.map((network) => network.titleText)
  );

  const submitSelectedNetworksAndGoToNextPage = async (e) => {
    e.preventDefault();
    try {
      const submitSocialsData = new FormData();
      if (googleToken) submitSocialsData.append('google_account_id', googleToken);
      if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
      await handleSubmitSocials(selectedNetworks);
      if (selectedNetworks.length !== 0) {
        getUserProfileInformation();
        completeStep(2);
        history.push('/create/create-campaign');
      } else if (addresses === undefined) {
        history.push('/onboarding/1');
      } else {
        history.push('/create/create-campaign');
      }
    } catch (e) {
      setNetworkError(e.message);
    }
  };

  const goToNextForModal = () => {
    try {
      const submitSocialsData = new FormData();
      if (googleToken) submitSocialsData.append('google_account_id', googleToken);
      if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
      handleSubmitSocials(submitSocialsData);
      if (selectedNetworks.length !== 0) {
        getUserProfileInformation();
        completeStep(2);
        history.push('/create/create-campaign');
      } else if (addresses === undefined) {
        history.push('/onboarding/1');
      } else {
        history.push('/create/create-campaign');
      }
    } catch (e) {
      setNetworkError(e.message);
    }
  };

  // TODO: complete the submitAndGoToNextLogic, part of the stepper
  return (
    <>
      {networkError && <ErrorFallBackPage error={networkError} />}
      {hasConnectSocialStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={goToNextForModal}
          nextRoute={'/create/create-campaign'}
          formData={{}}
        />
      )}
      <ErrorHandler>
        <StepperWrapper pageHeading={'Choose Which Networks to Run Ads On'}>
          <form onSubmit={submitSelectedNetworksAndGoToNextPage}>
            <Box className={classes.FlexVessel}>
              {NETWORKS.map((network) => (
                <NetworkCheckBox
                  key={crypto.randomUUID()}
                  iconSrc={network.iconSrc}
                  titleText={network.titleText}
                  selectedNetworks={selectedNetworks}
                  setSelectedNetworks={setSelectedNetworks}
                />
              ))}
            </Box>
            <button type="submit">TEMPORARY SUBMIT TILL STEPPER IS COMPLETE</button>
          </form>
        </StepperWrapper>
      </ErrorHandler>
    </>
  );
}
