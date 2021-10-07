import React, { Fragment } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

// const CLIENT_ID =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const GOOGLE_OAUTH2_KEY =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_OAUTH2_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const url = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadwords&redirect_uri=urn:ietf:wg:oauth:2.0:oob&access_type=offline&approval_prompt=auto`;

const FacebookConnect = ({ handleFbLogin }) => {
  const [code, setCode] = React.useState('');
  const responseFacebook = (response) => {
    setCode(response);
    const formData = new FormData();
    formData.append('access_token', code);
    handleFbLogin(formData);
  };
  return (
    <>
      <FacebookLogin
        clientId="1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.Facebookusercontent.com"
        buttonText="Connect to Facebook"
        accessType="offline"
        responseType="code"
        approvalPrompt="force"
        prompt="consent"
        scope="https://www.Facebookapis.com/auth/adwords"
        onSuccess={responseFacebook}
        onFailure={responseFacebook}
      />
      {/* <button onClick={getUserInfo}>get info</button> */}
    </>
  );
};
export default FacebookConnect;
