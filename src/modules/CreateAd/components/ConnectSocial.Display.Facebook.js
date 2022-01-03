import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import CampaignImageDisplay from './Campaign.ImageDisplay';
import facebook_t from '../../../img/facebook_t.png';
import facebook_b from '../../../img/facebook_b.png';
import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles((theme) => ({
  topImage: {
    width: '400px',
    marginBottom: '0.25rem',
    '@media (max-width:700px)': {
      width: '80vw',
    },
  },
  facebookTextContainer: {
    position: 'relative',
  },
  facebookText: {
    position: 'absolute',
    minHeight: '3.75rem',
    verticalAlign: 'bottom',
    padding: '0 1em 0 1em',
    bottom: -10,
    zIndex: 1,
    backgroundColor: 'white',
    width: '380px',
    '@media (max-width:700px)': {
      bottom: -40,
      minHeight: '5.25rem',
      width: '100%',
    },
  },
  bottomImage: {
    width: '400px',
    '@media (max-width:700px)': {
      width: '80vw',
    },
  },
  facebookImageContainer: {},
}));

const FacebookSocialDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '340px',
    mobileHeight: '272px', // width - (width/5)
    width: '650px',
    height: '520px', // width - (width/5)
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div className={classes.facebookTextContainer}>
        <img src={facebook_t || DEFAULT_IMAGE} className={classes.topImage} width="400px" />
        <div
          className={classes.facebookText}
        >{`${currentCampaign.headline}: ${currentCampaign.headline2}`}</div>
      </div>
      <CampaignImageDisplay
        currentCampaign={currentCampaign}
        form={currentCampaign}
        height="200px"
        isFacebook
        previewUrl={previewUrl}
      />
      <img src={facebook_b} className={classes.topImage} width="400px" />
    </AdPreviewDisplayContainer>
  );
};

FacebookSocialDisplay.propTypes = {
  currentCampaign: PropTypes.object,
  previewUrl: PropTypes.string,
};

export default FacebookSocialDisplay;

// TODO: make this look better