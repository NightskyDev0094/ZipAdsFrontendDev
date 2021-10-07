import React, { Fragment } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

// const CLIENT_ID =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const GOOGLE_OAUTH2_KEY =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_OAUTH2_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const url = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadwords&redirect_uri=urn:ietf:wg:oauth:2.0:oob&access_type=offline&approval_prompt=auto`;

const GoogleConnect = ({ handleGoogleLogin }) => {
  const responseGoogle = async (response) => {
    const useAccessCode = await axios
      .post('', {
        access_token: response.code,
      })
      .then((res) => {
        console.log('GOOGLE RESPOSNSE::::', res.data);
      })
      .catch((err) => {
      });
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
