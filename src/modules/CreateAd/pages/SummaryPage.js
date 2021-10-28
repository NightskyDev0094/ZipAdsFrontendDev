import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import StepProgress from '../components/StepProgress';
import { InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import backgroundImage from '../../../BlueTecUIKit/images/background/3.png';
import AdPreviewCarousel from '../components/Campaign.Display.AdCarousel';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  pageHeader: {
    textAlign: 'center',
    marginTop: '50px',
  },
  paper: {
    width: '88vw',
    height: 'fit-content',
    minHeight: '1200px',
    marginBottom: '200px',
    margin: '0 auto',
    '@media (max-width:1000px)': {
      boxShadow: 'none',
    },
  },
  //Ad Preview Container style
  adPreviewContainer: {
    '@media (max-width:1600px)': {
      width: '60vw',
    },
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px',
    '@media (max-width:1600px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
  nextButtonContainer: {
    marginBottom: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '60px',
    paddingTop: '30px',
    paddingLeft: '60px',
  },
  progressBarTypography: {
    textAlign: 'end',
    fontSize: '24px',
  },
  formContainer: {
    padding: '3rem 5rem',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginRight: '50px',
    width: '50%',
    '@media (max-width:1600px)': {
      marginRight: 0,
    },
    '@media (max-width:1000px)': {
      width: '100vw',
      boxShadow: 'none',
    },
    '@media (max-width:800px)': {
      height: 'fit-content',
      marginTop: '0px',
    },
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:900px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  listItemDescription: {
    '@media (max-width:900px)': {
      margin: '10px 0px',
    },
  },
  listItemContent: {
    '@media (max-width:900px)': {},
  },
  targetingAudienceInterest: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    marginTop: '1rem',
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
  },
  contentContainer: {
    maxWidth: '700px',
    margin: '100px auto',
  },
  campaignContainer: {
    maxWidth: '700px',
    margin: '100px auto',
  },
  runAdsContainer: {
    padding: '0 20%',
    width: '100%',
    marginBottom: '50px',
    '@media (max-width:700px)': {
      maxWidth: '100%',
      width: '100vw',
    },
  },
}));

const ListItem = ({ description, content, classes = {} }) => (
  <div className={classes.listItem}>
    {description && (
      <span className={classes.listItemDescription}>
        <strong>{description}</strong>
      </span>
    )}
    {content && <span className={classes.listItemContent}>{content}</span>}
  </div>
);

const SummaryPage = ({
  onHandleClick,
  currentCampaign,
  targetingInfo,
  budgetInfo,
  socialsToPost,
  totalBudget,
  handleError,
  checkoutStatus,
  SUBMIT_STATUS,
  creditAmount,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [adSlideNumber, setAdSlideNumber] = useState(1);
  const [fbFeedPreviewUrl, setFBFeedPreviewUrl] = useState('');
  const [fbAudiencePreviewUrl, setFBAudiencePreviewUrl] = useState('');
  const [instagramPreviewUrl, setInstagramPreviewUrl] = useState('');
  const [gaDisplayPreviewUrl, setGADisplayPreviewUrl] = useState('');
  const [gaSquareDisplayPreviewUrl, setGASquareDisplayPreviewUrl] = useState('');
  const [adSlideLength, setAdSlideLength] = useState(socialsToPost.length);
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });


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

  /**
   * Stripe has a feature that doesnt allow more then one CardElement
   * component on a page at any given time. If we open our AddCreditsModal
   * which has a CardElement then we have to hide the other one.
   */
  return (
    <>
      {error.isError && <ErrorFallBackPage error={error} />}
      <Box className={classes.page}>
        <div className={classes.pageHeader}>
          <Typography variant="h2">Create an Ad</Typography>
          <div className={classes.progressBarContainer}>
            <StepProgress formStep={8} />
          </div>
        </div>
        <Paper className={classes.paper} elevation={2}>
          <div className={classes.pageBody}>
            <Paper elevation={2} className={classes.formContainer}>
              <Box marginTop="1rem">
                <InputMainLabel>Review and Post Ad</InputMainLabel>
                <Box>
                  <Typography className={classes.subTitle}>
                    Make sure all your info is correct and post your ad to selected networks.
                  </Typography>
                </Box>
                <Box marginTop="3rem">
                  <InputMainLabel>Targeting Audience Interest</InputMainLabel>
                  <Box>
                    <div className={classes.targetingAudienceInterest}>
                      <strong>{targetingInfo?.interest}</strong>
                    </div>
                  </Box>
                </Box>
                <Box className={classes.campaignContainer} marginTop="3rem">
                  <InputMainLabel>Campaign</InputMainLabel>
                  <Box>
                    <ListItem
                      classes={classes}
                      description="Total Ads Budget"
                      content={totalBudget || 0}
                    />
                    <ListItem
                      classes={classes}
                      description="People interested in"
                      content={budgetInfo?.objective}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.runAdsContainer}>
                {checkoutStatus === SUBMIT_STATUS.SUCCESS && (
                  <Alert severity="success">
                    Campaign Created!, You will be redirected shortly
                  </Alert>
                )}
                {checkoutStatus === SUBMIT_STATUS.LOADING && (
                  <Alert severity="info">Creating Campaign...</Alert>
                )}
                {checkoutStatus === SUBMIT_STATUS.ERROR && (
                  <Alert severity="error">An Error has occured, please refresh page</Alert>
                )}
              </Box>
              <div className={classes.runAdsContainer}>
                {handleError.isError && (
                  <Alert severity="error">Error: Please add more credits</Alert>
                )}
                <Box marginTop={3} display="flex">
                  <InputMainLabel>Ready to Run Ads?</InputMainLabel>
                </Box>
                <Box>
                  <Typography>Total cost of campaign: ${totalBudget || 0}</Typography>
                  {totalBudget > creditAmount && (
                    <Alert severity="info">
                      You have ${creditAmount}, please purchase more credits.
                    </Alert>
                  )}
                  {totalBudget < creditAmount && (
                    <Alert severity="success">
                      You have ${creditAmount}, feel free to checkout
                    </Alert>
                  )}
                </Box>
                <Box marginTop={4} width="100%" display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/create/credits')}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => onHandleClick()}>
                    Submit
                  </Button>
                </Box>
              </div>
            </Paper>
            <AdPreviewCarousel
              currentCampaign={currentCampaign}
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
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default SummaryPage;
