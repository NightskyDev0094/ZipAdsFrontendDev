import React, { useState, useEffect, useCallback } from 'react';
import {
  Select,
  MenuItem,
  TextField,
  Button,
  Paper,
  makeStyles,
  CircularProgress,
  Typography,
  Dialog,
  IconButton,
  ListSubheader,
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import CloseIcon from '@material-ui/icons/Close';

import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import connect from 'react-redux';

import FacebookLogin from './ConnectSocial.FacebookLogin';
import GoogleLogin from './ConnectSocial.GoogleLogin';
import SuccessCard from './ConnectSocial.HandleUserAccount.SuccessCard.Component';
import ConnectOrCreateManagedAccountComponent from './ConnectSocial.HandleUserAccount.ConnectOrCreate.Card';


export const LoadingSpinner = () => (
  <div>
    <CircularProgress style={{ marginTop: '200px' }} size={120} />
  </div>
);


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


/****************************************************************
 * MAIN EXPORT
 * @param {{}} styles: override class styles
 * @param {function} changeAdImage: function that controls the ads image shown
 * @returns <Component />
 */
export const ConnectSocialMenu = ({
  styles,
  doesUserHaveGoogleManagedAccounts,
  doesUserHaveFacebookManagedAccounts,
  createFacebookManagedAccount,
  createGoogleAccountSuccessful,
  createGoogleManagedAccount,
  facebookAdAccounts,
  googleAdAccounts,
  currentBusinessName,
  connectGoogleAuth,
  connectFacebookAuth,
  googleToken,
  changeAdImage,
  ...props
}) => {
  const classes = baseStyles();

  const [componentState, setComponentState] = useState({
    loading: false,
    error: false,
    success: false,
  });

  // temporary state until facebook issue is fixed
  // Eventually we want to pass createFacebookManagedAccount as an action
  // and then from ConnectSocial Page, we pass
  //state.managedAccounts.facebookManagedAccount.blahblahblah
  const [isFacebookAccountCreated, setIsFacebookAccountCreated] = useState(false);
  const [isGoogleManagedAccountSubmitted, setIsGoogleManagedAccountSubmitted] = useState(false);

  useEffect(() => {
    if (isGoogleManagedAccountSubmitted) {
      setTimeout(() => {
        setComponentState({...componentState, loading: false, error: false });
      }, 2000);
    }
    if (createGoogleAccountSuccessful) {
      setComponentState({
        ...componentState,
        loading: false,
        error: false,
      });
    }
  }, [createGoogleAccountSuccessful, isGoogleManagedAccountSubmitted]);

  const [mockToken, setMockToken] = useState(false);
  const mockFacebookData = [
    { name: 'Sample Company', managed: true },
    { name: 'Sample Company', managed: true },
    { name: 'Sample Company', managed: true },
    { name: 'Sample Company', managed: false },
    { name: 'Sample Company', managed: false },
    { name: 'Sample Company', managed: false },
    { name: 'Sample Company', managed: true },
  ];

  return (
    <div
      style={{ ...styles.connectSocialMenuContainer }}
      className={classes.connectSocialMenuContainer}
    >
      {!componentState.loading ? (
        <Carousel
          style={{ ...styles.socialMenuContainer }}
          className={classes.socialMenuContainer}
          navButtonsAlwaysVisible={true}
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosIcon />}
          autoPlay={false}
          onChange={changeAdImage}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: 'transparent',
              color: 'black',
              borderRadius: 0,
              boxShadow: 'none',
              '&:hover': {
                cursor: 'pointer !important',
              },
            },
          }}
        >
          {isFacebookAccountCreated ? (
            <SuccessCard
              message={'You have successfully created a Facebook Ad Account!'}
              classes={classes}
              subText={'Feel free to connect accounts on other social media!'}
            />
          ) : (
            ///Facebook Card Accounts are mocked until
            // we have Facebook permissions to create accounts
            <ConnectOrCreateManagedAccountComponent
              classes={classes}
              styles={styles}
              title={'Connect to Facebook'}
              placeHolder={'Your Business Name'}
              defaultValue={'Your Business Name'}
              inputProps={{}}
              LoginComponent={() => <FacebookLogin {...props} />}
              doesUserHaveAdAccounts={doesUserHaveFacebookManagedAccounts}
              LoginIcon={() => <FacebookIcon />}
              // adAccounts={facebookAdAccounts}
              adAccounts={mockFacebookData}
              currentBusinessName={currentBusinessName}
              doesUserHaveAdAccounts={true}
              componentState={componentState}
              token={mockToken}
              setComponentState={setComponentState}
              setAcccountCreated={setIsFacebookAccountCreated}
              {...props}
              createAccount={(name) => {
                setComponentState({ loading: true, error: false, success: false });
                createFacebookManagedAccount(name);
                setMockToken(true);
                setComponentState({ loading: false, error: false, success: true });
              }}
            />
          )}
          {isGoogleManagedAccountSubmitted ? (
            <SuccessCard
              message={'You have successfully created a Google Ad Account!'}
              classes={classes}
              subText={'Feel free to connect accounts on other social media!'}
            />
          ) : (
            <ConnectOrCreateManagedAccountComponent
              styles={styles}
              title={'Connect to Google'}
              placeHolder={'Your Business Name'}
              defaultValue={'Your Business Name'}
              // inputProps={{ readOnly: true }}
              token={false}
              LoginComponent={() => <GoogleLogin {...props} />}
              LoginIcon={() => <GTranslateIcon />}
              doesUserHaveAdAccounts={true}
              adAccounts={googleAdAccounts}
              componentState={componentState}
              setComponentState={setComponentState}
              {...props}
              createAccount={(name) => {
                // setIsGoogleManagedAccountSubmitted is mostly for testing purposes.
                // it can be removed later for production
                setIsGoogleManagedAccountSubmitted(true);
                createGoogleManagedAccount(name);
              }}
            />
          )}
        </Carousel>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

ConnectSocialMenu.propTypes = {
  managedAccounts: PropTypes.array,
  classes: PropTypes.object,
  styles: PropTypes.object,
};

ConnectSocialMenu.defaultProps = {
  managedAccounts: [],
  classes: {},
  styles: {},
};
