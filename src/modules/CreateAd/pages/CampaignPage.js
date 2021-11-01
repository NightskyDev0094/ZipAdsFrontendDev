import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Box, Grid, Button, Typography, LinearProgress, Paper } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CampaignImageDisplay from '../components/Campaign.ImageDisplay';
import CreateCampaignForm from '../components/Campaign.Form';
import StepProgress from '../components/StepProgress';
import backgroundImage from '../../../BlueTecUIKit/images/background/2.png';
import AdPreviewCarousel from '../components/Campaign.Display.AdCarousel';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  pageHeader: {
    textAlign: 'center',
    marginTop: '3em',
  },
  paper: {
    width: '88vw',
    margin: '0 auto',

    ['@media (max-width:1000px)']: {
      boxShadow: 'none',
    },
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    ['@media (max-width:1550px)']: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    ['@media (max-width:1000px)']: {
      width: '100%',
    },
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
  button: {
    margin: '0 30px',
  },
}));

const CreateCampaign = ({
  formInfo,
  setFormInfo,
  handleSubmitCampaign,
  hasCreateCampaignStepBeenCompleted,
  businessInfoLoading,
  currentCampaign,
  urlVal,
  completeStep,
  socialsToPost,
  adSlideLength,
  setFBFeedPreviewUrl,
  fbFeedPreviewUrl,
  setFBAudiencePreviewUrl,
  fbAudiencePreviewUrl,
  setInstagramPreviewUrl,
  instagramPreviewUrl,
  setGADisplayPreviewUrl,
  setGASquareDisplayPreviewUrl,
  gaDisplayPreviewUrl,
  gaSquareDisplayPreviewUrl,
  ...props
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });

  const [adSlideNumber, setAdSlideNumber] = useState(1);

  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);

  const reverseAdSlide = () => {
    if (adSlideNumber === 1) {
      setAdSlideNumber(adSlideLength);
      return;
    }
    setAdSlideNumber(adSlideNumber - 1);
  };

  const changeAdSlide = () => {
    if (adSlideNumber === adSlideLength) {
      setAdSlideNumber(1);
      return;
    }
    setAdSlideNumber(adSlideNumber + 1);
  };

  const updateForm = (formInput) => {
    setFormInfo(formInput);
  };

  const goToNext = () => {
    // if (hasCreateCampaignStepBeenCompleted === 'STEP_COMPLETED') {
    //   setIsResubmitModalOpen(true);
    // } else {
      try {
        completeStep(1);
        handleSubmitCampaign(formInfo);
        history.push('/create/targeting');
      } catch (e) {
        setError({ message: e.message, setError: true });
      }
    // }
  };

  return (
    <ErrorHandler>
      {error.isError && <ErrorFallBackPage error={error} />}
      {hasCreateCampaignStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={handleSubmitCampaign}
          nextRoute={'/create/targeting'}
          formInfo={formInfo}
        />
      )}
      {!error.isError && (
        <Box className={classes.pageContainer}>
          <div className={classes.pageHeader}>
            <Typography variant="h2">Create an Ad</Typography>
            <div className={classes.progressBarContainer}>
              <StepProgress formStep={2} />
            </div>
          </div>
          <Paper elevation={2} className={classes.paper}>
            <div className={classes.nextButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => history.push('/create/connect-social')}
              >
                Back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={goToNext}
              >
                Next
              </Button>
            </div>
            <div className={classes.pageBody}>
              {/* <CampaignImageDisplay form={formInfo} {...props} /> */}
              <AdPreviewCarousel
                currentCampaign={formInfo}
                fbFeedPreviewUrl={fbFeedPreviewUrl}
                fbAudiencePreviewUrl={fbAudiencePreviewUrl}
                instagramPreviewUrl={instagramPreviewUrl}
                gaDisplayPreviewUrl={gaDisplayPreviewUrl}
                gaSquareDisplayPreviewUrl={gaSquareDisplayPreviewUrl}
                adSlideNumber={adSlideNumber}
                changeAdSlide={changeAdSlide}
                reverseAdSlide={reverseAdSlide}
                socialsToPost={socialsToPost}
                {...props}
              />
              <CreateCampaignForm
                formInfo={formInfo}
                setFormInfo={setFormInfo}
                setError={setError}
                handleUpdateForm={(formInput) => updateForm(formInput)}
                fbFeedPreviewUrl={fbFeedPreviewUrl}
                fbAudiencePreviewUrl={fbAudiencePreviewUrl}
                instagramPreviewUrl={instagramPreviewUrl}
                gaDisplayPreviewUrl={gaDisplayPreviewUrl}
                gaSquareDisplayPreviewUrl={gaSquareDisplayPreviewUrl}
                setFBFeedPreviewUrl={setFBFeedPreviewUrl}
                setFBAudiencePreviewUrl={setFBAudiencePreviewUrl}
                setInstagramPreviewUrl={setInstagramPreviewUrl}
                setGADisplayPreviewUrl={setGADisplayPreviewUrl}
                setGASquareDisplayPreviewUrl={setGASquareDisplayPreviewUrl}
                adSlideNumber={adSlideNumber}
                changeAdSlide={changeAdSlide}
                reverseAdSlide={reverseAdSlide}
                socialsToPost={socialsToPost}
                {...props}
              />
            </div>
          </Paper>
        </Box>
      )}
    </ErrorHandler>
  );
};

export default CreateCampaign;
