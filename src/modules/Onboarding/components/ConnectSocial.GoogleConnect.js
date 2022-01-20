import React, { Fragment } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import {GOOGLE_KEY} from '../../../environmentVariables';

// const CLIENT_ID =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const GOOGLE_OAUTH2_KEY =
//   "1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com";
// const GOOGLE_OAUTH2_SECRET = "RrG0O-aTGbV5SOUeKOaNIq-Y";
// const url = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadwords&redirect_uri=urn:ietf:wg:oauth:2.0:oob&access_type=offline&approval_prompt=auto`;

/**
 *
 * @param {function} handleGoogleLogin redux action for handling GoogleLogin
 * @param {React.ReactChild} customButton react element that is the custom Google Connect Button. Needs an onClick and disabled props which will be passed in by GoogleLogin render attribute
 * @see - https://www.npmjs.com/package/react-google-login
 * @returns
 */
const GoogleConnect = ({ handleGoogleLogin, CustomButton }) => {
  const responseGoogle = (response) => {
    const formData = new FormData();
    formData.append('code', response.code);
    handleGoogleLogin(formData);
  };
  return (
    <>
      <h3 style={{ textAlign: 'center' }} className="mt-4" id="login-msg">
        Connect to Google.
      </h3>
      <div className="row ">
        <div className="form-group mx-auto my-2">
          <GoogleLogin
            clientId={GOOGLE_KEY}
            buttonText="Login"
            accessType="offline"
            responseType="code"
            approvalPrompt="force"
            prompt="consent"
            scope="https://www.googleapis.com/auth/adwords"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
      {/* <button onClick={getUserInfo}>get info</button> */}
    </>
  );
};
export default GoogleConnect;
