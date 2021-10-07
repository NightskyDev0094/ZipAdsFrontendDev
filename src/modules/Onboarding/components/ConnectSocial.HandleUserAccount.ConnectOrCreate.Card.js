import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';

import SelectAccountComponent from './ConnectSocial.HandleUserAccount.SelectAccount.Component';
import CreateNewAccountComponent from './ConnectSocial.HandleUserAccount.CreateNewAccount.Component';

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
    return (
      <Paper className={classes.paper} style={{ ...styles.paper }} elevation={3}>
        <h2 style={{ ...styles.title }} className={classes.title}>
          <LoginIcon />
          {'  '} {title}
        </h2>
        <div style={{ ...styles.content }} className={classes.content}>
          {/* <div
            style={{ ...styles.connectButtonContainer }}
            className={classes.connectButtonContainer}
          >
            <h3 className={classes.selectAccountTitle}>Connect to an existing account</h3>
            <p className={classes.selectAccountSubTitle}>
              If you would like to login to an account you have? Selecting this option will use this
              account for ad placement
            </p>
            {!token && <LoginComponent />}
          </div> */}
          {doesUserHaveAdAccounts && token && (
            <SelectAccountComponent
              classes={classes}
              setComponentState={setComponentState}
              adAccounts={adAccounts}
              componentState={componentState}
              setAcccountCreated={setAcccountCreated}
              {...props}
            />
          )}
          {doesUserHaveAdAccounts && !token && (
            <CreateNewAccountComponent
              placeHolder={placeHolder}
              defaultValue={defaultValue}
              inputProps={inputProps}
              setComponentState={setComponentState}
              createAccount={createAccount}
              componentState={componentState}
              classes={classes}
            />
          )}
        </div>
      </Paper>
    );
  };

  export default ConnectOrCreateManagedAccountComponent; 