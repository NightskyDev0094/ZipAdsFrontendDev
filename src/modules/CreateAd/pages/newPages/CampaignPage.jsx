import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AdPreviewCarousel from '../../components/AdPreviewCarousel';
import CampaignForm from '../../components/CampaignForm';

const useStyles = makeStyles({
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

export default function CampaignPage({ formInfo, selectedNetworks }) {
  const classes = useStyles();

  return (
    <Box className={classes.CampaignVessel}>
      <AdPreviewCarousel chosenSocialNetworks={selectedNetworks} />
      <CampaignForm formInfo={formInfo} />
    </Box>
  );
}
