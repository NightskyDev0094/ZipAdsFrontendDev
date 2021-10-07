import React, { useEffect, useState, Fragment } from 'react';
// import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { addGoogleManagerAccounts } from '../../actions/googleManagerAccountActions';
import config from '../socialAuth/config';

const GoogleManagerAccounts = ({ addGoogleManagerAccounts }) => {
  // useEffect(() => {
  //   // Load the required SDK asynchronously for google, google and linkedin
  //   (function () {
  //     var e = document.createElement("script");
  //     e.type = "text/javascript";
  //     e.async = true;
  //     e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
  //     var t = document.getElementsByTagName("script")[0];
  //     t.parentNode.insertBefore(e, t);
  //   })();
  //   // eslint-disable-next-line
  // }, []);

  // //Triggering login for google
  // const googleLogin = (e) => {
  //   e.preventDefault();
  //   let response = null;
  //   console.log(response);

  //   console.log("RUNS TO HERE !!!!");
  //   window.gapi.auth.signIn({
  //     callback: function (authResponse) {
  //       googleSignInCallback(authResponse);
  //     },
  //     clientid: config.google, //Google client Id
  //     cookiepolicy: "single_host_origin",
  //     requestvisibleactions: "http://schema.org/AddAction",
  //     scopes: [
  //       "https://www.googleapis.com/auth/adwords",
  //       "https://googleads.googleapis.com/v2",
  //     ],
  //   });
  // };
  // // Handle response from sign in to google
  // const googleSignInCallback = (e) => {
  //   // console.log(e);

  //   if (e["status"]["signed_in"]) {
  //     if (e["access_token"]) {
  //       let token = e["access_token"];
  //       let expires = e["expires_at"];
  //       console.log("google token", token);
  //       console.log("expires_at", expires);
  //       // addGoogleToken(googleAuth);
  //       // getUserGoogleClientIds( e["access_token"] )
  //     } else if (e["error"]) {
  //       console.log("Import error", "No access token");
  //     }
  //   } else {
  //     console.log("Oops... Error occured while signing in");
  //   }
  // };
  // const onSubmit = (e) => {
  //   // Prevent redirection
  //   e.preventDefault();
  //   // Create formData and add fields that are completed
  //   let formData = new FormData();
  //   if (name !== "") {
  //     formData.append("name", name);
  //   }
  //   if (manager_account_id !== "") {
  //     formData.append("manager_account_id", manager_account_id);
  //   }
  //   addGoogleManagerAccounts(formData);

  // };
  const responseGoogle = (e) => {
    console.log('Google Response::::', e);
  };
  return (
    // Materialize theme
    <>
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId="1062228155409-ggkaciv0u6dc23l2235o3jfidnv65rg1.apps.googleusercontent.com"
        buttonText="Login"
        accessType="offline"
        responseType="code"
        approvalPrompt="force"
        prompt="consent"
        scope={('adwords', 'profile', 'email')}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
};

GoogleManagerAccounts.propTypes = {
  addGoogleManagerAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  googleManagerAccount: state.googleManagerAccount,
});

export default connect(mapStateToProps, {
  addGoogleManagerAccounts,
})(GoogleManagerAccounts);
