import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import NetworkCheckBox from '../../components/CreateAd.NetworkCheckBox';
import InstagramLogoImage from '../../../../img/instagram-logo.png';
import FacebookLogoImage from '../../../../img/FacebookLogin/facebook.png';
import GoogleLogoImage from '../../../../img/google-icon.png';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SOCIAL_NETWORK_TITLES } from '../../hooks/useCreateCampaignForm';
import Shoutbox from '../../components/Shoutbox';

const useStyles = makeStyles({
  ConnectSocialsVessel: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5em',
    paddingBottom: '5em',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    ['& > *']: {
      flex: '1 1 33%',
    },
    '@media (max-width:1540px)': {
      paddingBottom: '0',
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

  return (
    <Box className="position-relative w-100">
      <div className={classes.ConnectSocialsVessel}>
        {NETWORKS.map((network) => (
          <NetworkCheckBox
            key={crypto.randomUUID()}
            iconSrc={network.iconSrc}
            titleText={network.titleText}
            selectedNetworks={selectedNetworks}
            setSelectedNetworks={setSelectedNetworks}
          />
        ))}
      </div>
      <Shoutbox>We recommend checking off all of them to optimize your campaign.</Shoutbox>
    </Box>
  );
}
