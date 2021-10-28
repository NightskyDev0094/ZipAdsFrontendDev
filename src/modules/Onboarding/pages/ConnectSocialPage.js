import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Button, Typography, LinearProgress, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import ConnectSocialForm from '../components/ConnectSocial.Form';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo, addBusinessInfo } from '../../../actions/businessInfoActions';
import {
  getUserProfileInformation,
  createGoogleBusinessAccount,
  createFacebookAccount,
  resetManagedAccountState,
} from '../../../actions/connectSocial.managedAccountActions';
import { login, connectGoogleOAuth, connectFacebookAuth } from '../../../actions/authActions';

import { ConnectSocialMenu } from '../components/ConnectSocial.HandleUserAccount.Components';
import backgroundImage from '../../../BlueTecUIKit/images/background/4.png';
import StepProgress from '../components/StepProgress';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
    '@media (max-width:700px)': {
      marginBottom: '200px',
    },
  },
  pageHeader: {
    textAlign: 'center',
    marginTop: '50px',
  },
  paper: {
    width: '88vw',
    marginBottom: '100px',
    paddingBottom: '50px',
    height: '100vh',
    margin: '0 auto',
    overflow: 'auto',
    '@media (max-width:700px)': {
      overflow: 'unset !important',
    },
  },
  pageBody: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    marginTop: '100px',
    '@media (max-width:1200px)': {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  nextButtonContainer: {
    marginBottom: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 60px 0px 60px ',
  },
  progressBarTypography: {
    textAlign: 'end',
    fontSize: '24px',
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
  },
  connectSocialMenuTitle: {
    width: '100%',
    textAlign: 'center',
  },
  createBusinessNameContainer: {
    textAlign: 'center',
  },
}));

const ConnectSocialPage = ({
  createFacebookAccount,
  connectGoogleAuth,
  connectFacebookAuth,
  currentBusinessName,
  fbAdAccounts,
  googleAdAccounts,
  googleToken,
  facebookToken,
  getGoogleAdAccounts,
  getFbAdAccounts,
  getBusinessInfo,
  createManagedAccount,
  addresses,
  basicInformation,
  // google creation state
  userAccountInformation,
  getUserProfileSuccess,
  getUserProfileInformationLoading,
  getUserAccountInformationError,
  getUserProfileInformation,
  // google creation state and actions
  createGoogleBusinessAccount,
  createGoogleAccountError,
  createGoogleAccountSuccessful,
  createGoogleAccountLoading,
  // facebook creation state and actions
  createFacebookAccountError,
  createFacebookAccountLoading,
  createFacebookAccountSuccess,
  resetManagedAccountState,
  isManagedAccountCreated,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [doesUserHaveManagedAccounts, setUserHasManagedAccounts] = useState({
    fbAdAccounts: false,
    googleAdAccounts: false,
  });
  const [managedAccounts, setManagedAccounts] = useState({
    fbAdAccounts: [],
    googleAdAccounts: [],
  });
  const [networksSelected, _] = useState('');

  const [adSlideNumber, setAdSlideNumber] = useState(0);

  const changeAdImage = (e) => setAdSlideNumber(e);

  const checkForGoogleManagedAccount = useCallback(async () => {
    await getGoogleAdAccounts();
  });

  const checkForFacebookManagedAccount = useCallback(async () => {
    await getFbAdAccounts();
  });

  const createFacebookManagedAccount = useCallback(async (name) => {
    await createFacebookAccount(name);
  });

  const createGoogleManagedAccount = useCallback(async (name) => {
    await createGoogleBusinessAccount(name);
  });

  //check for managed Accounts
  useEffect(() => {
    if (facebookToken) checkForFacebookManagedAccount();
  }, [facebookToken]);

  useEffect(() => {
    if (googleToken) checkForGoogleManagedAccount();
  }, [googleToken]);

  useEffect(() => {
    if (fbAdAccounts.length) {
      setUserHasManagedAccounts({
        ...doesUserHaveManagedAccounts,
        fbAdAccounts: true,
      });

      setManagedAccounts({
        ...managedAccounts,
        fbAdAccounts: fbAdAccounts,
      });
    }

    if (googleAdAccounts.length) {
      setUserHasManagedAccounts({
        ...doesUserHaveManagedAccounts,
        googleAdAccounts: true,
      });
      setManagedAccounts({
        ...managedAccounts,
        googleAdAccounts: googleAdAccounts,
      });
    }
  }, [fbAdAccounts, googleAdAccounts, googleToken, facebookToken]);

  // next button
  const goToNext = async () => {
    history.push('/onboarding/3');
  };

  return (
    <Box className={classes.container}>
      <div className={classes.pageHeader}>
        <Typography variant="h2">Connect To Ad Networks</Typography>
        <div className={classes.progressBarContainer}>
          <StepProgress formStep={2} />
        </div>
      </div>
      <Paper elevation={2} className={classes.paper}>
        <div className={classes.nextButtonContainer}>
          <Button variant="contained" color="primary" onClick={() => history.push('/onboarding/1')}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={goToNext}>
            Next
          </Button>
        </div>
        {/* <h2 className={classes.connectSocialMenuTitle}>
          Connect Social Accounts or Create Social Account
        </h2> */}
        <h2 className={classes.connectSocialMenuTitle}>
          Create Social Account
        </h2>
        <div className={classes.pageBody}>
          <ConnectSocialMenu
            doesUserHaveGoogleManagedAccounts={doesUserHaveManagedAccounts.googleAdAccounts}
            doesUserHaveFacebookManagedAccounts={doesUserHaveManagedAccounts.fbAdAccounts}
            createFacebookManagedAccount={createFacebookManagedAccount}
            createGoogleManagedAccount={createGoogleManagedAccount}
            facebookAdAccounts={managedAccounts.fbAdAccounts}
            googleAdAccounts={managedAccounts.googleAdAccounts}
            currentBusinessName={currentBusinessName}
            createGoogleAccountSuccessful={createGoogleAccountSuccessful}
            connectGoogleAuth={connectGoogleAuth}
            connectFacebookAuth={connectFacebookAuth}
            googleToken={googleToken}
            changeAdImage={changeAdImage}
            {...props}
          />
        </div>
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  googleToken: state.googleAdAccount?.gaToken,
  facebook: state.fbAdAccount.fbToken,
  currentBusinessName: state.businessInfo.current?.data?.business_name,
  businessInformation: state.businessInfo.businessInfos,
  fbAdAccounts: state.fbAdAccount?.adAccounts,
  googleAdAccounts: state.googleAdAccount?.adAccounts,
  isManagedAccountCreated: state.businessInfo.businessInfoCreationSuccess,
  basicInformation: state.basicInfo,
  // User Profile Status
  getUserProfileSuccess:
    state.managedBusinessAccounts.userAccount.getUserAccountInformationSuccessful,
  getUserProfileInformationLoading:
    state.managedBusinessAccounts.userAccount.getUserAccountInformationLoading,
  userAccountInformation: state.managedBusinessAccounts.userAccount.userAccountInformation,
  getUserAccountInformationError: state.managedBusinessAccounts.userAccount.error,
  // Google Account Status
  createGoogleAccountError: state.managedBusinessAccounts.googleBusinessAccount.error,
  createGoogleBusinessAccountLoading:
    state.managedBusinessAccounts.googleBusinessAccount.createGoogleAccountLoading,
  createGoogleAccountSuccessful:
    state.managedBusinessAccounts.googleBusinessAccount.isGoogleBusinessAccountCreationSuccessful,
  // Facebook Account Status
  createFacebookAccountError: state.managedBusinessAccounts.facebookBusinessAccount.error,
  createFacebookAccountLoading:
    state.managedBusinessAccounts.facebookBusinessAccount.createFacebookAccountInformationLoading,
  createFacebookAccountSuccess:
    state.managedBusinessAccounts.facebookBusinessAccount.createFacebookAccountSuccess,
});

const mapDispatchToProps = (dispatch, state) => ({
  getFbAdAccounts,
  getGoogleAdAccounts,
  getBusinessInfo,
  connectGoogleOAuth,
  connectFacebookAuth,
  getUserProfileInformation: () => getUserProfileInformation(dispatch),
  createGoogleBusinessAccount: (business_name) =>
    createGoogleBusinessAccount(dispatch, business_name),
  createFacebookAccount: (business_name) => {
    createFacebookAccount(dispatch, business_name);
  },
  resetManagedAccountState: () => resetManagedAccountState(dispatch),
  createManagedAccount: (businessInfo) => addBusinessInfo(businessInfo)(dispatch, state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectSocialPage);
