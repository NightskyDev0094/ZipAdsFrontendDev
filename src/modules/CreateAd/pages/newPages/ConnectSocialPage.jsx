import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import NetworkCheckBox from '../../components/CreateAd.NetworkCheckBox';
import InstagramLogoImage from '../../../../img/instagram-logo.png';
import FacebookLogoImage from '../../../../img/FacebookLogin/facebook.png';
import GoogleLogoImage from '../../../../img/google-icon.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StepperWrapper from '../../components/StepperWrapper';
import AdPreviewCarousel from '../../components/AdPreviewCarousel';
import CampaignForm from '../../components/CampaignForm';
import useCheckNetwork from '../../hooks/useCheckNetwork';
import { SOCIAL_NETWORK_TITLES } from '../../hooks/useCampaignForm';

const useStyles = makeStyles({
  ConnectSocialsVessel: {
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

  CampaignVessel: {
    display: 'grid',
    gridTemplateColumns: '1fr',

    ['@media (min-width:750px)']: {
      gridTemplateColumns: '1fr 1fr',
    },

    ['& :first-child']: {
      order: 2,
      ['@media (min-width:750px)']: {
        order: 'initial',
      },
    },
  },
});

export default function ConnectSocialPage({ selectedNetworks, setSelectedNetworks }) {
  // const history = useHistory();
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

  // const submitSelectedNetworksAndGoToNextPage = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const submitSocialsData = new FormData();
  //     if (googleToken) submitSocialsData.append('google_account_id', googleToken);
  //     if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
  //     await handleSubmitSocials(selectedNetworks);
  //     if (selectedNetworks.length !== 0) {
  //       getUserProfileInformation();
  //       completeStep(2);
  //       history.push('/create/create-campaign');
  //     } else if (addresses === undefined) {
  //       history.push('/onboarding/1');
  //     } else {
  //       history.push('/create/create-campaign');
  //     }
  //   } catch (e) {
  //     setNetworkError(e.message);
  //   }
  // };

  // const goToNextForModal = () => {
  //   try {
  //     const submitSocialsData = new FormData();
  //     if (googleToken) submitSocialsData.append('google_account_id', googleToken);
  //     if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
  //     handleSubmitSocials(submitSocialsData);
  //     if (selectedNetworks.length !== 0) {
  //       getUserProfileInformation();
  //       completeStep(2);
  //       history.push('/create/create-campaign');
  //     } else if (addresses === undefined) {
  //       history.push('/onboarding/1');
  //     } else {
  //       history.push('/create/create-campaign');
  //     }
  //   } catch (e) {
  //     setNetworkError(e.message);
  //   }
  // };

  // TODO: complete the submitAndGoToNextLogic, part of the stepper
  return (
    <Box className={classes.ConnectSocialsVessel}>
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
  );
}
