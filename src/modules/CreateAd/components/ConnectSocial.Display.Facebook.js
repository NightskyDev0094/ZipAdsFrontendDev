import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import CampaignImageDisplay from './Campaign.ImageDisplay';
import facebook_t from '../../../img/facebook_t.png';
import facebook_b from '../../../img/facebook_b.png';

const MOCK_FORM = {
  file: 'https://images.unsplash.com/photo-1598054437544-d81eea4b1fd0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
  ad_link: 'go here',
  ad_description: 'something goes here',
};

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles((theme) => ({
  topImage: {
    width: '400px',
    '@media (max-width:700px)': {
      width: '80vw',
    },
  },
  facebookTextContainer: {
    position: 'relative',
  },
  facebookText: {
    position: 'absolute',
    paddingLeft: '1rem',
    bottom: 2,
    zIndex: 1,
    backgroundColor: 'white',
    width: '380px',
  },
  bottomImage: {
    width: '400px',
    '@media (max-width:700px)': {
      width: '80vw',
    },
  },
  facebookImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const FacebookSocialDisplay = ({ currentCampaign, previewUrl, ...props }) => {
  const classes = useStyles();
  return (
    <div data-test="facebook-social-display" className={classes.facebookImageContainer}>
      <div className={classes.facebookTextContainer}>
        <img src={facebook_t || DEFAULT_IMAGE} className={classes.topImage} width="400px" />
        <div className={classes.facebookText}>{currentCampaign.ad_description}</div>
      </div>
      <CampaignImageDisplay
        currentCampaign={currentCampaign}
        form={currentCampaign}
        height="200px"
        isFacebook
        previewUrl={previewUrl}
        {...props}
      />
      <img src={facebook_b} className={classes.topImage} width="400px" />
    </div>
  );
};

FacebookSocialDisplay.propTypes = {
  currentCampaign: PropTypes.object,
  previewUrl: PropTypes.string,
};

export default FacebookSocialDisplay;
