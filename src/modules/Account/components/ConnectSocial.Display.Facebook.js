import React from 'react';

import { makeStyles } from '@material-ui/core';
import CampaignImageDisplay from './Campaign.ImageDisplay';
import facebook_t from '../../../img/facebook_t.png';
import facebook_b from '../../../img/facebook_b.png';

const MOCK_FORM = {
  file:
    'https://images.unsplash.com/photo-1598054437544-d81eea4b1fd0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
  ad_link: 'go here',
  ad_description: 'something goes here',
};

const useStyles = makeStyles((theme) => ({
  topImage: {
    width: '400px',
    '@media (max-width:700px)': {
      width: '80vw',
    },
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

const FacebookSocialDisplay = ({ currentCampaign }) => {
  const classes = useStyles();
  return (
    <div className={classes.facebookImageContainer}>
      <img src={facebook_t} className={classes.topImage} width="400px" />
      <CampaignImageDisplay
        currentCampaign={currentCampaign}
        form={currentCampaign} // wow dudes a genuius
        height="200px"
        isFacebook
      />
      <img src={facebook_b} className={classes.topImage} width="400px" />
    </div>
  );
};

export default FacebookSocialDisplay;
