import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AdPreviewCarousel from '../../components/AdPreviewCarousel';
import CampaignForm from '../../components/CampaignForm';

const useStyles = makeStyles({
  CampaignVessel: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    margin: '2em 0px',

    ['@media (min-width:1250px)']: {
      gridTemplateColumns: '1fr 1fr',
    },

    ['& :first-child']: {
      order: 2,
      ['@media (min-width:1250px)']: {
        order: 'initial',
      },
    },
  },
});

export default function CampaignPage({ formInfo, selectedNetworks, previews }) {
  const classes = useStyles();

  return (
    <Box className={classes.CampaignVessel}>
      <AdPreviewCarousel
        chosenSocialNetworks={selectedNetworks}
        formInfo={formInfo}
        previews={previews}
      />
      <CampaignForm formInfo={formInfo} />
    </Box>
  );
}
