import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Button, Typography, LinearProgress, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import ConnectSocialForm from '../components/ConnectSocial.Form';
import SocialDisplays from '../components/ConnectSocial.Displays';
import SelectAccounts from '../components/ConnectSocial.SelectAccounts';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getBusinessInfo, addBusinessInfo } from '../../../actions/businessInfoActions';
import OuterCarouselWrapper from '../components/Campaign.Display.AdCarousel';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';

import StepProgress from '../components/StepProgress';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import backgroundImage from '../../../BlueTecUIKit/images/background/4.png';
import { completeStep } from '../../../actions/step.actions';

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
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonContainer: {
    marginBottom: '2em',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '60px',
    paddingLeft: '60px',
    paddingTop: '20px',
    ['@media (max-width:1000px)']: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingRight: 0,
      paddingLeft: 0,
    },
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
    // marginBottom: '200px'
  },
  createBusinessNameContainer: {
    textAlign: 'center',
  },
  socialFormContainer: {
    margin: '100px auto',
  },
}));

/**
 * This will mix in with base styles for
 * ad displays
 */
const passedAdDisplayStyles = {
  container: {
    marginTop: '200px',
    '@media (max-width:700px)': {
      marginTop: '0 !important',
    },
  },
};

const ConnectSocialPage = ({
  completeStep,
  fbAdAccounts,
  googleAdAccounts,
  googleToken,
  facebookToken,
  getGoogleAdAccounts,
  getFbAdAccounts,
  // createManagedAccount,
  handleSubmitSocials,
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
  isManagedAccountCreated,
  hasConnectSocialStepBeenCompleted,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [networksSelected, setNetworksSelected] = useState([]);
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);

  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });

  const checkForGoogleManagedAccount = useCallback(async () => {
    try {
      await getGoogleAdAccounts();
    } catch (e) {
      setError({ isError: true, message: e });
    }
  });

  const checkForFacebookManagedAccount = useCallback(async () => {
    try {
      await getFbAdAccounts();
    } catch (e) {
      setError({ isError: true, message: e });
    }
  });

  //check for managed Accounts
  useEffect(() => {
    if (facebookToken) checkForFacebookManagedAccount();
  }, [facebookToken]);

  useEffect(() => {
    if (googleToken) checkForGoogleManagedAccount();
  }, [googleToken]);

  const goToNextForModal = ({}) => {
    try {
      const submitSocialsData = new FormData();
      if (googleToken) submitSocialsData.append('google_account_id', googleToken);
      if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
      const networks = Object.values(networksSelected);
      handleSubmitSocials(submitSocialsData);
      if (networks.length !== 0) {
        getUserProfileInformation();
      } else if (addresses !== undefined) {
        /** Re-route either way  */
        history.push('/create/create-campaign');
      } else {
        history.push('/onboarding/1');
      }
      history.push('/create/create-campaign');
    } catch (e) {
      setError({ isError: true, message: e });
    }
  };

  // next button
  const goToNext = async () => {
    // if (hasConnectSocialStepBeenCompleted === 'STEP_COMPLETED') {
    //   console.log('1');
    //   setIsResubmitModalOpen(true);
    // } else {
    //   console.log('2');
      try {
        const submitSocialsData = new FormData();
        if (googleToken) submitSocialsData.append('google_account_id', googleToken);
        if (facebookToken) submitSocialsData.append('facebook_account_id', facebookToken);
        const networks = Object.values(networksSelected);
        completeStep(2);
        handleSubmitSocials(submitSocialsData);
        if (networks.length !== 0) {
          getUserProfileInformation();
        } else if (addresses !== undefined) {
          /** Re-route either way  */
          history.push('/create/create-campaign');
        } else {
          history.push('/onboarding/1');
        }
        history.push('/create/create-campaign');
      } catch (e) {
        setError({ isError: true, message: e });
      }
    // }
  };

  return (
    <>
      {error.isError && <ErrorFallBackPage error={error} />}
      {hasConnectSocialStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={goToNextForModal}
          nextRoute={'/create/create-campaign'}
          formData={{}}
        />
      )}
      {!error.isError && (
        <ErrorHandler>
          <Box className={classes.container}>
            <div className={classes.pageHeader}>
              <Typography variant="h2">Create an Ad</Typography>
              <div className={classes.progressBarContainer}>
                <StepProgress formStep={1} />
              </div>
            </div>
            <Paper elevation={2} className={classes.paper}>
              <div className={classes.nextButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => history.push('/select-campaign')}
              >
                Back
              </Button>
                <Button variant="contained" color="primary" onClick={goToNext}>
                  Next
                </Button>
              </div>
              <h2 className={classes.connectSocialMenuTitle}>Select Networks and Accounts</h2>
              <div className={classes.pageBody}>
                <div className={classes.socialFormContainer}>
                  <ConnectSocialForm
                    networksSelected={networksSelected}
                    setNetworksSelected={setNetworksSelected}
                    basicInformation={basicInformation}
                    {...props}
                  />
                  <SelectAccounts classes={classes} {...props} />
                </div>
              </div>
            </Paper>
          </Box>
        </ErrorHandler>
      )}
    </>
  );
};

export default ConnectSocialPage;
