import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../../components/ErrorBoundary.Component';
import Box from '@material-ui/core/Box';
import NetworkCheckBox from '../../components/CreateAd.NetworkCheckBox';
import InstagramLogoImage from '../../../../img/instagram-logo.png';
import FacebookLogoImage from '../../../../img/FacebookLogin/facebook.png';
import GoogleLogoImage from '../../../../img/google-icon.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StepperWrapper from '../../components/StepperWrapper';
import useCheckNetwork from '../../hooks/useCheckNetwork';

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
  const history = useHistory();
  const classes = useStyles();
  const NETWORKS = [
    {
      titleText: 'Instagram Ad',
      iconSrc: InstagramLogoImage,
    },
    {
      titleText: 'Facebook Ad',
      iconSrc: FacebookLogoImage,
    },
    {
      titleText: 'Facebook Audience Network Ad',
      iconSrc: FacebookLogoImage,
    },
    {
      titleText: 'Google Awards',
      iconSrc: GoogleLogoImage,
    },
    {
      titleText: 'Google Display Network Ad',
      iconSrc: GoogleLogoImage,
    },
  ];

  const [selectedNetworks, setSelectedNetworks] = useState(
    NETWORKS.map((network) => network.titleText)
  );

  // next button
  const submitAndGoToNextPage = async () => {
    try {
      const submitSocialsData = new FormData();
      if (googleToken) submitSocialsData.append('google_account_id', googleToken);
      if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
      completeStep(2);
      handleSubmitSocials(submitSocialsData);
      if (selectedNetworks.length !== 0) {
        getUserProfileInformation();
      } else if (addresses !== undefined) {
        /** Re-route either way  */
        history.push('/create/create-campaign');
      } else {
        history.push('/onboarding/1');
      }
      history.push('/create/create-campaign');
    } catch (e) {
      setNetworkError(e);
    }
  };

  // TODO: complete the submitandGoToNextLogic, part of the stepper
  return (
    <>
      {networkError && <ErrorFallBackPage error={error} />}
      <ErrorHandler>
        <StepperWrapper pageHeading={'Choose Which Networks to Run Ads On'}>
          <Box className={classes.FlexVessel}>
            {NETWORKS.map((network) => (
              <NetworkCheckBox
                key={crypto.randomUUID()}
                iconSrc={network.iconSrc}
                titleText={network.titleText}
                setSelectedNetworks={setSelectedNetworks}
              />
            ))}
          </Box>
        </StepperWrapper>
      </ErrorHandler>
    </>
  );
}
