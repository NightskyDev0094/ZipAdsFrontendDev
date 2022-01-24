import React, { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FacebookLogoRoundedIcon from '../../../img/facebook-logo-rounded.png';
import GoogleLogoIcon from '../../../img/googleIcon.png';
import GoogleLogin from 'react-google-login';

import { connect } from 'react-redux';
import { addGoogleToken } from '../../../actions/oauth.googleActions';
import { addFacebookToken } from '../../../actions/oauth.facebookActions';
import { GOOGLE_KEY, FACEBOOK_KEY } from '../../../environmentVariables';

const useStyles = makeStyles({
  ConnectNetworkButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em auto',
  },
  Button: {
    backgroundColor: (props) => props.buttonColor,
    width: '17em',
    border: 'none',
    borderRadius: '0.25em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1em',
    ['&:hover']: { backgroundColor: (props) => props.hoverButtonColor },

    ['& > img']: { width: '2em', height: '2em', margin: '0px 1.25em 0px 0px' },
    ['& > h3']: { fontSize: '1.25em', color: 'white' },
  },
  Input: {
    width: '2em',
    height: '2em',
    margin: '0px 0px 0px 1em',
  },
});

/**
 *
 * @param {string} socialNetworkName either 'Google' or 'Facebook
 * @returns
 */
function ConnectSocialNetworkButton({ socialNetworkName, addGoogleToken, addFacebookToken }) {
  const buttonColor = socialNetworkName === 'Google' ? '#bebebe' : '#4267B2';
  const hoverButtonColor = socialNetworkName === 'Google' ? '#a4a4a4' : '#365595';
  const classes = useStyles({ buttonColor, hoverButtonColor });
  const socialNetworkIcon =
    socialNetworkName === 'Google' ? GoogleLogoIcon : FacebookLogoRoundedIcon;

  /** FACEBOOK CONNECT SECTION */
  const handleFacebookLogin = (formData) => {
    addFacebookToken(formData);
  };

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
        appId: { FACEBOOK_KEY },
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

  /** GOOGLE CONNECT SECTION */
  const handleGoogleLogin = (formData) => {
    addGoogleToken(formData);
  };

  const responseGoogle = (response) => {
    const formData = new FormData();
    formData.append('code', response.code);
    handleGoogleLogin(formData);
  };

  //TODO: the check status should change when the user is authenticated with the social network
  /** This is the display for both the social networks */
  const CustomSocialNetworkButton = ({ onClick, disabled }) => {
    return (
      <>
        <button onClick={onClick} disabled={disabled} className={classes.Button}>
          <img src={socialNetworkIcon} alt={`${socialNetworkName} logo img`} />
          <h3>{`Connect ${socialNetworkName}`}</h3>
        </button>
        <input type="checkbox" className={classes.Input} checked={false} />
      </>
    );
  };

  return (
    <div className={classes.ConnectNetworkButtonContainer}>
      {socialNetworkName === 'Google' ? (
        <GoogleLogin
          clientId={GOOGLE_KEY}
          render={(renderProps) => (
            <CustomSocialNetworkButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          buttonText="Login"
          accessType="offline"
          responseType="code"
          approvalPrompt="force"
          prompt="consent"
          scope="https://www.googleapis.com/auth/adwords"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      ) : (
        <CustomSocialNetworkButton onClick={() => facebookLogin()} />
      )}
    </div>
  );
}
// TODO: Figure out why the Facebook button redirects to onboarding/2

export default connect(null, { addGoogleToken, addFacebookToken })(ConnectSocialNetworkButton);
