import React from 'react';
import { addGoogleToken } from '../../../actions/oauth.googleActions';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';

const GoogleConnect = ({ addGoogleToken }) => {
  // Response containing one time auth code
  const responseGoogle = (response) => {
    if (response.hasOwnProperty('code')) {
      const formData = new FormData();
      formData.append('code', response.code);
      addGoogleToken(formData);
    }
  };

  return (
    <>
      <h3>Login with Google</h3>
      {/* Google Login Button */}
      {/* <GoogleLogin
        clientId="1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com"
        buttonText="Login"
        accessType="offline"
        responseType="code"
        approvalPrompt="force"
        prompt={('consent', 'select_account')}
        scope={('https://www.googleapis.com/auth/adwords', 'profile', 'email')}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      /> */}
      <GoogleLogin
        clientId="1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com"
        buttonText="Login"
        accessType="offline"
        responseType="code"
        approvalPrompt="force"
        prompt="consent"
        scope="https://www.googleapis.com/auth/adwords"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
};

export default connect(null, { addGoogleToken })(GoogleConnect);
