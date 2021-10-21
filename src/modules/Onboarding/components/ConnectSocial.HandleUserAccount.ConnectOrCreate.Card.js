import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import GoogleConnect from './ConnectSocial.GoogleLogin';
import FacebookConnect from './ConnectSocial.FacebookLogin.js';
import { addGoogleToken } from '../../../actions/oauth.googleActions';
import { addFacebookToken } from '../../../actions/oauth.facebookActions';

const baseStyles = makeStyles(() => ({
  connectSocialMenuTitle: {
    transform: 'translateY(50px)',
    margin: '125px 0px',
  },
  connectSocialMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  managedAccountSelection: {
    //select an existing account
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 50px',
    justifyContent: 'space-evenly',
    margin: '15px 0px',
  },
  connectButtonContainer: {
    //connect existing account container
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 50px',
    justifyContent: 'space-evenly',
  },
  selectAndLinkAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  selectInput: {
    width: '200px',
  },
  paper: {
    width: '600px',
    borderRadius: '20px',
    padding: '50px',
    border: '1px solid rgba(232, 232, 232, 1.3)',
  },
  createBusinessNameContainer: {
    //create a new account
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 50px',
    justifyContent: 'space-evenly',
  },
  createBusinessNameContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  socialMenuContainer: {},
  facebookSelection: {},
  googleSelection: {},
  instagramSelection: {},
  title: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
  },
}));

/**************************************************************
 * This is ConnectOrCreateManagedAccountComponent
 * @param {{}} styles: styles override classes
 * @param {string} title: title
 * @param {<Component />} LoginComponent:
 * Facebook, Google, or Instagram Login
 * @param {<Component />} LoginIcon:
 * @param {string} placeHolder
 * @param {string} defaultValue
 * @param {{}} inputProps
 * @param {boolean} doesUserHaveAdAccounts:
 * This is a true or false whether selected user accounts
 * was successfully created
 * @param {[{}]} adAccounts
   @param {string} token: 
   Token that you get back from either Google or Facebook
   Login  
* @returns <Component />
 */
const ConnectOrCreateManagedAccountComponent = ({
  styles,
  title,
  LoginComponent,
  LoginIcon,
  placeHolder,
  defaultValue,
  inputProps,
  doesUserHaveAdAccounts,
  adAccounts,
  componentState,
  setComponentState,
  createAccount,
  token,
  setAcccountCreated, //temporary function that creates accounts
  ...props
}) => {
  const classes = baseStyles();
  const handleFacebookLogin = (formData) => {
    addFacebookToken(formData);
  };
  const handleGoogleLogin = (formData) => {
    addGoogleToken(formData);
  };
  return (
    <Paper className={classes.paper} style={{ ...styles.paper }} elevation={3}>
      <h2 style={{ ...styles.title }} className={classes.title}>
        <LoginIcon />
        {'  '} {title}
      </h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {title == 'Connect to Facebook' ? (
          <FacebookConnect handleGoogleLogin={handleGoogleLogin} />
        ) : (
          <GoogleConnect handleGoogleLogin={handleGoogleLogin} />
        )}
      </div>
    </Paper>
  );
};

export default ConnectOrCreateManagedAccountComponent;
