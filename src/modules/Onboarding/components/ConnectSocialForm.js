import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Dropdown } from 'semantic-ui-react';
import { Box, Typography } from '@material-ui/core';
import {
  updateGoogleAccountInfo,
  updateFacebookAccountInfo,
} from '../../../actions/socialInfoActions';
import GoogleConnect from './ConnectSocial.GoogleLogin';
import FacebookConnect from './ConnectSocial.FacebookLogin';

import { addGoogleToken } from '../../../actions/oauth.googleActions';
import { addFacebookToken } from '../../../actions/oauth.facebookActions';

const ConnectSocialForm = ({
  facebookAccountInfo,
  googleAccountInfo,
  addGoogleToken,
  addFacebookToken,
}) => {
  const handleFacebookLogin = (formData) => {
    addFacebookToken(formData);
  };

  const handleGoogleLogin = (formData) => {
    addGoogleToken(formData);
  };

  return (
    <>
      <Box marginTop={3}>
        <Typography>
          <strong>Connect to Facebook Ads Network</strong>
        </Typography>
      </Box>
      <Box marginTop={3}>
        {/* <Input placeholder="First and Last Name" name="facebookAccountInfo"
          value={facebookAccountInfo} onChange={(e) => updateFacebookAccountInfo(e.target.value)} /> */}
        <FacebookConnect handleFacebookLogin={handleFacebookLogin} />
      </Box>
      <Box marginTop={3}>
        <Typography>
          <strong>Connect to Google Ads Network</strong>
        </Typography>
      </Box>
      <Box marginTop={2}>
        {/* <Input placeholder="Business Name" name="googleAccountInfo" value={googleAccountInfo} onChange={(e) => updateGoogleAccountInfo(e.target.value)} /> */}
        <GoogleConnect handleGoogleLogin={handleGoogleLogin} />
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  facebookAccountInfo: state.socialInfo.facebookAccountInfo,
  googleAccountInfo: state.socialInfo.googleAccountInfo,
});

export default connect(mapStateToProps, {
  updateGoogleAccountInfo,
  updateFacebookAccountInfo,
  addGoogleToken,
  addFacebookToken,
})(ConnectSocialForm);
