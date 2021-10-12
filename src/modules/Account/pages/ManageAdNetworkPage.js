import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Button, Typography, LinearProgress, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo, addBusinessInfo } from '../../../actions/businessInfoActions';
import {
  getUserProfileInformation,
  createGoogleBusinessAccount,
  createFacebookAccount,
  resetManagedAccountState,
} from '../../../actions/connectSocial.managedAccountActions';
import { connectGoogleOAuth, connectFacebookAuth } from '../../../actions/authActions';

import { ConnectSocialMenu } from '../components/ConnectSocial.HandleUserAccount.Components';
import backgroundImage from '../../../BlueTecUIKit/images/background/4.png';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';

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
    margin: '0 auto',
    overflow: 'auto',
    '@media (max-width:700px)': {
      overflow: 'unset !important',
      boxShadow: 'none',
    },
  },
  pageBody: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '15vw 0',
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
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createBusinessNameContainer: {
    textAlign: 'center',
  },
  selectAccountTitle: {
    textAlign: 'center',
  },
}));

const ManageAdNetworkPage = ({
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

  const [componentState, setComponentState] = useState({
    success: false,
    loading: false,
    error: false,
  });

  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });

  return (
    <>
      {error.isError && <ErrorFallBackPage />}
      {!error.isError && (
        <ErrorHandler>
          <Box className={classes.container}>
            <div className={classes.pageHeader}>
              <Typography variant="h2">Connect To Ad Networks</Typography>
            </div>
            <Paper elevation={2} className={classes.paper}>
              <h2 className={classes.connectSocialMenuTitle}>
                Connect Social Accounts or Create Social Account
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
                  isManagedAccountCreated={isManagedAccountCreated}
                  componentState={componentState}
                  setComponentState={setComponentState}
                />
              </div>
            </Paper>
          </Box>
        </ErrorHandler>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  googleToken: state.googleAdAccount?.gaToken,
  facebook: state.fbAdAccount.fbToken,
  currentBusinessName: state.businessInfo.current?.data?.business_name,
  businessInformation: state.businessInfo.businessInfos,
  fbAdAccounts: state.fbAdAccount?.adAccounts,
  googleAdAccounts: state.googleAdAccount?.adAccounts,
  isManagedAccountCreated: state.managedBusinessAccounts.googleBusinessAccount,
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageAdNetworkPage);
