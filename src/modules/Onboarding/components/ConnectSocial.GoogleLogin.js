import React, { Fragment } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import {GOOGLE_KEY} from '../../../environmentVariables';

const GoogleConnect = ({ handleGoogleLogin }) => {
  const responseGoogle = (response) => {
    console.log('responseGoogle running!!!!!')
    const formData = new FormData();
    formData.append('code', response.code);
    handleGoogleLogin(formData);
  };
  return (
    <>
      <GoogleLogin
        clientId={GOOGLE_KEY}
        buttonText="Connect to Google"
        accessType="offline"
        responseType="code"
        approvalPrompt="force"
        prompt="consent"
        scope="https://www.googleapis.com/auth/adwords"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      {/* <button onClick={getUserInfo}>get info</button> */}
    </>
  );
};
export default GoogleConnect;
