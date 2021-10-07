import React, { Fragment } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

const GoogleConnect = ({ handleGoogleLogin }) => {
  const responseGoogle = (response) => {
    const formData = new FormData();
    formData.append('code', response.code);
    handleGoogleLogin(formData);
  };
  return (
    <>
      <GoogleLogin
        clientId="1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com"
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
