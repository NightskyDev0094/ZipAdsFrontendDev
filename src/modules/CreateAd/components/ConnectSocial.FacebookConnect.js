import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { addFacebookToken } from '../../../actions/oauth.facebookActions';

const FacebookConnect = ({ handleFacebookLogin }) => {
  useEffect(() => {
    // Load the required SDK asynchronously for facebook, google and linkedin
    // Load the required SDK asynchronously for facebook, google and linkedin
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '338696654226361',
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v10.0',
      });
      // Get Login Status and credentials from facebook
      // window.FB.getLoginStatus(function (response) {
      //   statusChangeCallback(response);
      // });
    };
    // eslint-disable-next-line
  }, []);
  // <!-- Facebook Auth -->
  const facebookLogin = () => {
    /* window.FB.login(
        this.checkLoginState(), 
        { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
    ); */

    window.FB.login(
      (resp) => {
        statusChangeCallback(resp);
      },
      {
        scope: 'email,ads_management,ads_read,pages_show_list,pages_manage_ads',
      }
    );
  };
  // Check if logged in
  const statusChangeCallback = (response) => {
    // console.log('statusChangeCallback');
    if (response.status === 'connected') {
      const token = response.authResponse.accessToken;
      // console.log('token', token);
      // console.log('Saving token');
      const fbAuth = { token };
      // addFbToken(fbAuth);
      // console.log('fbAuth::::', fbAuth.token);
      const formData = new FormData();
      formData.append('token', fbAuth.token);
      handleFacebookLogin(formData);
    } else if (response.status === 'not_authorized') {
      // console.log('Import error', 'Authorize app to import data', 'error');
    } else {
      // console.log('Import error', 'Error occured while importing data', 'error');
    }
  };
  return (
    <>
      <div>
        <div id="login-view">
          <h3 style={{ textAlign: 'center' }} className="mt-4" id="login-msg">
            Connect to Facebook.
          </h3>
          <div className="row ">
            <div className="form-group mx-auto my-2">
              <button title="facebook login" alt="facebook" onClick={() => facebookLogin()}>
                Facebook Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacebookConnect;
