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
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import connect from 'react-redux';

import FacebookLogin from './ConnectSocial.FacebookLogin';
import GoogleLogin from './ConnectSocial.GoogleLogin';



export const LoadingSpinner = () => (
  <div>
    <CircularProgress style={{ marginTop: '300px' }} size={120} />
  </div>
);

/****************************************************************
 * This component shows when a user successfully creates a
 * Facebook, Google, or Instagram account
 * @param {string} message: your success message
 * @param {string} subText: your success secondary message
 * @returns <Component />
 */

const successCardStyles = makeStyles(() => ({
  successCard: {
    width: '600px',
    height: '600px',
    maxWidth: '600px',
    maxHeight: '600px',
    padding: '25px',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid rgba(232, 232, 232, 1.3)',
  },
  message: {},
  subText: {},
  successCardIcon: {
    width: '300px',
    height: '300px',
  },
}));

export const SuccessCard = ({ message, styles, classes, subText }) => {
  return (
    <Paper elevation={3} className={classes.successCard} styles={{ ...styles.successCard }}>
      <Typography
        styles={{ ...styles?.message }}
        className={classes.message}
        component="h4"
        variant="h4"
      >
        {message}
      </Typography>
      <Typography
        styles={{ ...styles?.subText }}
        className={classes.subText}
        component="h5"
        variant="h5"
      >
        {subText}
      </Typography>
      <CheckCircleOutlineIcon
        className={classes.successCardIcon}
        color="primary"
        fontSize="large"
      />
    </Paper>
  );
};

SuccessCard.defaultProps = {
  message: 'Your Success Messsage Here',
  styles: {},
  classes: {},
};

SuccessCard.propTypes = {
  message: PropTypes.string,
  styles: PropTypes.object,
  classes: PropTypes.object,
};


/****************************************************************
 * This is SelectAccountComponent
 * @param {{}} classes:
 * @param {function} setComponentState:
 * @param {{}} componentState
 * sets component state in ConnectOrCreateManagedAccountComponent
 * @param {[{}]} adAccounts: ad accounts
 * @returns <Component />
 */
export const SelectAccountComponent = ({
  classes,
  setComponentState,
  adAccounts,
  componentState,
  setAcccountCreated
}) => {
  const [selectedAccount, setSelectedAccount] = useState('');

  return (
    <Paper className={classes.managedAccountSelection}>
      <h3 className={classes.selectAccountTitle}>Select an Existing Account</h3>
      <p className={classes.selectAccountSubTitle}>
        It looks like you have an account! Would you like to use an existing account?
      </p>
      <div className={classes.selectAndLinkAccountContainer}>
        <Select
          className={classes.selectInput}
          variant="outlined"
          onChange={(e) => {
            setSelectedAccount(e.target.value);
          }}
        >
          <ListSubheader style={{ color: 'black', fontSize: '18px', fontWeight: 800 }}>
            Managed Accounts
          </ListSubheader>
          {adAccounts.map((account, index) => {
            if (account?.managed) {
              return (
                <MenuItem
                  style={{ marginRight: '10px' }}
                  value={account.name}
                  key={`${index}${account.name}`}
                >
                  {account.name}
                </MenuItem>
              );
            }
          })}
          <ListSubheader style={{ color: 'black', fontSize: '18px', fontWeight: 800 }}>
            UnManaged Accounts
          </ListSubheader>
          {adAccounts.map((account, index) => {
            if (!account?.managed) {
              return (
                <MenuItem
                  style={{ marginRight: '10px' }}
                  value={account.name}
                  key={`${index}${account.name}`}
                >
                  {account.name}
                </MenuItem>
              );
            }
          })}
        </Select>
        <Button
          variant="contained"
          color="primary"
          disabled={selectedAccount.length ? false : true}
          onClick={() => {
            setComponentState({
              ...componentState,
              loading: true,
              error: false,
              success: false,
            });
            setAcccountCreated(true);

            setTimeout(() => {
              setComponentState({
                ...componentState,
                loading: false
              });
            }, [3000])
          }}
          className={classes.createAccountButton}
        >
          Link account
        </Button>
      </div>
    </Paper>
  );
};

SelectAccountComponent.defaultProps = {
  classes: {},
  setComponentState: () => {},
  adAccounts: [{}],
};

SelectAccountComponent.propTypes = {
  classes: PropTypes.object,
  setComponentState: PropTypes.func,
  adAccounts: PropTypes.object,
};


/****************************************************************
 * This is CreateNewAccountComponent 
   @param {{}} classes:
   @param {{}} inputProps: input Props for TextField
   @param {string} defaultValue: "placeholder" value for TextField
   @param {function} createAccount: action creator for    
 * @returns <Component />
 */

export const CreateNewAccountComponent = ({
  classes,
  inputProps,
  defaultValue,
  setComponentState,
  createAccount,
  componentState,
}) => {
  const [newAccountName, setNewAccountName] = useState('');
  return (
    <div className={classes.createBusinessNameContainer}>
      <h4 className={classes.selectAccountTitle}>Create a New Account</h4>
      <p className={classes.selectAccountSubTitle}>
        Create a new account with your existing business name
      </p>
      <div className={classes.createBusinessNameContent}>
        <TextField
          variant="outlined"
          name="facebook"
          value={newAccountName} //temp
          defaultValue={defaultValue}
          InputProps={inputProps}
          onChange={(e) => setNewAccountName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setComponentState({
              ...componentState,
              loading: true,
              error: false,
              success: false,
            });
            createAccount(newAccountName);
          }}
          className={classes.createAccountButton}
        >
          Create account
        </Button>
      </div>
    </div>
  );
};

CreateNewAccountComponent.propTypes = {
  classes: PropTypes.object,
  inputProps: PropTypes.object,
  defaultValue: PropTypes.string,
  setComponentState: PropTypes.func,
  createAccount: PropTypes.func,
  componentState: PropTypes.func,
};

CreateNewAccountComponent.defaultProps = {
  classes: {},
  inputProps: {},
  defaultValue: '',
  setComponentState: () => {},
  createAccount: () => {},
  componentState: {},
};

/**************************************************************
 * This is ConnectOrCreateManagedAccountComponent
 * @param {{}} classes:
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
export const ConnectOrCreateManagedAccountComponent = ({
  classes,
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
  setAcccountCreated //temporary function that creates accounts
}) => {
  return (
    <Paper className={classes.paper} style={{ ...styles.paper }} elevation={3}>
      <h2 style={{ ...styles.title }} className={classes.title}>
        <LoginIcon />
        {'  '} {title}
      </h2>
      <div style={{ ...styles.content }} className={classes.content}>
        <div
          style={{ ...styles.connectButtonContainer }}
          className={classes.connectButtonContainer}
        >
          <h3 className={classes.selectAccountTitle}>Connect to an existing account</h3>
          <p className={classes.selectAccountSubTitle}>
            If you would like to login to an account you have? Selecting this option will use this
            account for ad placement
          </p>
          {!token && <LoginComponent />}
        </div>
        {doesUserHaveAdAccounts && token && (
          <SelectAccountComponent
            classes={classes}
            setComponentState={setComponentState}
            adAccounts={adAccounts}
            componentState={componentState}
            setAcccountCreated={setAcccountCreated}
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

const baseStylesForConnectSocialMenu = makeStyles(() => ({
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
}) => {
  const classes = { ...successCardStyles(), ...baseStylesForConnectSocialMenu() };

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

  useEffect(() => {
    if (createGoogleAccountSuccessful) {
      setComponentState({
        ...componentState,
        loading: false,
        error: false,
      });
    }
  }, [createGoogleAccountSuccessful]);

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
              LoginComponent={() => <FacebookLogin />}
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
              createAccount={(name) => {
                setComponentState({
                  loading: true,
                  error: false,
                  success: false,
                });
                createFacebookManagedAccount(name);
                setMockToken(true);
                setComponentState({
                  loading: false,
                  error: false,
                  success: true,
                });
              }}
            />
          )}
          <ConnectOrCreateManagedAccountComponent
            classes={classes}
            styles={styles}
            title={'Connect to Instagram'}
            placeHolder={'Your Business Name'}
            defaultValue={'Your Business Name'}
            inputProps={{ readOnly: true }}
            LoginComponent={
              // NO instagram login yet
              () => <FacebookLogin handleFbLogin={() => {}} />
            }
            LoginIcon={() => <InstagramIcon />}
            doesUserHaveAdAccounts={false}
            adAccounts={[]} //no instagram funcionality right now
            currentBusinessName={currentBusinessName}
            componentState={componentState}
            setComponentState={setComponentState}
          />
          {
            /*createGoogleAccountSuccessful*/ false ? (
              <SuccessCard
                message={'You have successfully created a Google Ad Account!'}
                classes={classes}
                subText={'Feel free to connect accounts on other social media!'}
              />
            ) : (
              <ConnectOrCreateManagedAccountComponent
                classes={classes}
                styles={styles}
                title={'Connect to Google'}
                placeHolder={'Your Business Name'}
                defaultValue={'Your Business Name'}
                // inputProps={{ readOnly: true }}
                LoginComponent={() => <GoogleLogin />}
                LoginIcon={() => <GTranslateIcon />}
                doesUserHaveAdAccounts={doesUserHaveGoogleManagedAccounts}
                adAccounts={googleAdAccounts}
                currentBusinessName={currentBusinessName}
                componentState={componentState}
                setComponentState={setComponentState}
                createAccount={createGoogleManagedAccount}
              />
            )
          }
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
