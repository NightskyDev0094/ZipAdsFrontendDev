import React, { useState, Fragment } from 'react';
import {
  Box,
  Grid,
  Button,
  LinearProgress,
  Paper,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Tooltip,
  InputAdornment,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import StepProgress from '../components/StepProgress';
import backgroundImage from '../../../BlueTecUIKit/images/background/3.png';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';

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
    height: '1300px',
    marginBottom: '200px',
    margin: '0 auto',
    '@media (max-width:1400px)': {
      height: '1900px',
    },
    '@media (max-width:500px)': {
      marginBottom: '300px',
      height: '2400px',
    },
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media (max-width:1400px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
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
  objectiveContainer: {
    padding: '2rem 4rem',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0rem 2rem',
    '@media (max-width:600px)': {
      height: '900px',
      padding: '2rem',
      margin: 0,
    },
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
  },
  createBudgetContainer: {
    padding: '2rem',
    margin: '0rem 2rem',
    '@media (max-width:1400px)': {
      marginBottom: '100px',
      minHeight: '525px',
      margin: 0,
    },
  },
  dailyGoogleAdsBudgetInput: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dailyFacebookAdsBudgetInput: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  googleAdsCPCContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  googleAdsCampaignLengthContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  facebookAdsCampaignLength: {
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  selectGoogleAdAccounts: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectFacebookAdAccounts: {
    display: 'flex',
    flexDirection: 'column',
  },
  noGoogleAccountPlaceHolder: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  noFacebookAccountPlaceHolder: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  toolTipContainer: {
    padding: '10px 0',
  },
  tooltip: {
    fontSize: '15px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '10px 0',
  },
  activeBorder: {
    border: '1px solid lime !important',
    borderRadius: '6px',
  },
}));

const BudgetPage = ({
  completeStep,
  hasBudgetStepBeenCompleted,
  handleSubmitBudget,
  socialsToPost,
  budgetOption,
  setBudgetOption,
  totalBudget,
  setTotalBudget,
  google_search_budget,
  setGoogleSearchBudget,
  google_display_budget,
  setGoogleDisplayBudget,
  facebook_feed_budget,
  setFacebookFeedBudget,
  facebook_audience_budget,
  setFacebookAudienceBudget,
  instagram_budget,
  setInstagramBudget,
  ga_campaign_length,
  setGACampaignLength,
  google_cpc,
  setGoogleCPC,
  fb_campaign_length,
  setFBCampaignLength,
  allCampaignLength,
  setAllCampaignLength,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });
  const [isActiveBorder, setIsActiveBorder] = useState(false);

  const nextClick = () => {
    if (hasBudgetStepBeenCompleted === 'STEP_COMPLETED') {
      setIsResubmitModalOpen(true);
    } else {
      try {
        handleSubmitBudget();
        completeStep(5);
        history.push('/create/objective');
      } catch (e) {
        setError({ isError: true, message: e });
      }
    }
  };

  const setOption = (value) => {
    setIsActiveBorder(true);
    setTimeout(() => {
      setIsActiveBorder(false);
    }, 1000);
    setBudgetOption(value);
  };

  return (
    <>
      {error.isError && <ErrorFallBackPage />}
      {hasBudgetStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={({}) => handleSubmitBudget()}
          nextRoute={'/create/objective'}
          formData={{}}
        />
      )}
      {!error.isError && (
        <ErrorHandler>
          <Box className={classes.page}>
            <div className={classes.pageHeader}>
              <Typography variant="h2">Create an Ad</Typography>
              <div className={classes.progressBarContainer}>
                <StepProgress formStep={5} />
              </div>
            </div>
            <Paper elevation={2} className={classes.paper}>
              <div className={classes.nextButtonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push('/create/expanded-targeting')}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextClick}>
                  Next
                </Button>
              </div>
              <div className={classes.pageBody}>
                <Paper elevation={2} className={classes.createBudgetContainer}>
                  <InputMainLabel>Create a Budget</InputMainLabel>
                  <Typography>Enter the budget for your ad campaigns.</Typography>
                  {(socialsToPost === undefined || socialsToPost.length === 0) && (
                    <>
                      <InputMainLabel>No Ad Network Selected</InputMainLabel>
                      <Typography>
                        Please go back and select an Ad Network to run your campaign on.
                      </Typography>
                    </>
                  )}
                  {budgetOption === 'automatic' && (
                    <>
                      <Tooltip title="This is the maximum amount you will spend on all ads daily.">
                        <>
                          <Box className={classes.dailyFacebookAdsBudgetInput}>
                            <InputMainLabel>Set your Total Daily Budget</InputMainLabel>
                            <Input
                              small
                              onChange={(e) => setTotalBudget(e.target.value)}
                              value={totalBudget}
                              defaultValue="5.00"
                              className={isActiveBorder ? classes.activeBorder : ''}
                              style={{ border: '1px solid transparent', transition: '0.7s' }}
                            />
                            <InputSmallLabel>
                              What is the max amount you want to spend on ads daily (in USD)?
                            </InputSmallLabel>
                          </Box>
                          <Box className={classes.facebookAdsCampaignLength}>
                            <InputMainLabel>Campaign Length</InputMainLabel>

                            <Input
                              small
                              onChange={(e) => setAllCampaignLength(e.target.value)}
                              value={allCampaignLength}
                              defaultValue="7"
                              className={isActiveBorder ? classes.activeBorder : ''}
                              style={{ border: '1px solid transparent', transition: '0.7s' }}
                            />
                            <InputSmallLabel>
                              How long should your ads run (in days)?
                            </InputSmallLabel>
                          </Box>
                        </>
                      </Tooltip>
                    </>
                  )}
                  {budgetOption === 'advanced' && (
                    <>
                      {socialsToPost.includes('google search ad' || 'google display ad') && (
                        <>
                          {socialsToPost.includes('google search ad') && (
                            <Tooltip
                              title={
                                <div className={classes.toolTipContainer}>
                                  <p className={classes.tooltip}>
                                    This is the maximum amount you will spend on Google Search Ads
                                    daily
                                  </p>
                                </div>
                              }
                            >
                              <Box className={classes.dailyGoogleAdsBudgetInput}>
                                <InputMainLabel>Daily Google Ads Budget</InputMainLabel>
                                <Input
                                  small
                                  onChange={(e) => setGoogleSearchBudget(e.target.value)}
                                  value={google_search_budget}
                                  defaultValue="5.00"
                                  className={isActiveBorder ? classes.activeBorder : ''}
                                  style={{ border: '1px solid transparent', transition: '0.7s' }}
                                />
                                <InputSmallLabel>
                                  Whats the max amount you want to spend on Google Ads
                                </InputSmallLabel>
                              </Box>
                            </Tooltip>
                          )}
                          {socialsToPost.includes('google display ad') && (
                            <Tooltip
                              title={
                                <div className={classes.toolTipContainer}>
                                  <p className={classes.tooltip}>
                                    This is the maximum amount you will spend on Google Display Ads
                                    daily.
                                  </p>
                                </div>
                              }
                            >
                              <Box className={classes.dailyGoogleAdsBudgetInput}>
                                <InputMainLabel>Daily Google Ads Budget</InputMainLabel>
                                <Input
                                  small
                                  onChange={(e) => setGoogleDisplayBudget(e.target.value)}
                                  value={google_display_budget}
                                  defaultValue="5.00"
                                  className={isActiveBorder ? classes.activeBorder : ''}
                                  style={{ border: '1px solid transparent', transition: '0.7s' }}
                                />
                                <InputSmallLabel>
                                  Whats the max amount you want to spend on Google Ads
                                </InputSmallLabel>
                              </Box>
                            </Tooltip>
                          )}
                          <Tooltip
                            title={
                              <div className={classes.toolTipContainer}>
                                <p className={classes.tooltip}>
                                  CPC is your maximum cost per click on a google ad.
                                </p>
                              </div>
                            }
                          >
                            <Box className={classes.googleAdsCPCContainer}>
                              <InputMainLabel>Google Ads CPC</InputMainLabel>
                              <Input
                                small
                                onChange={(e) => setGoogleCPC(e.target.value)}
                                value={google_cpc}
                                defaultValue="1.00"
                                className={isActiveBorder ? classes.activeBorder : ''}
                                style={{ border: '1px solid transparent', transition: '0.7s' }}
                              />
                              <InputSmallLabel>
                                Whats the max amount you want to spend on Google Ads
                              </InputSmallLabel>
                            </Box>
                          </Tooltip>
                          <Tooltip
                            title={
                              <div className={classes.toolTipContainer}>
                                <p className={classes.tooltip}>
                                  This is the number of days your Google Ads will run.
                                </p>
                              </div>
                            }
                          >
                            <Box className={classes.googleAdsCampaignLengthContainer}>
                              <InputMainLabel>Google Ads Campaign Length</InputMainLabel>

                              <Input
                                small
                                onChange={(e) => setGACampaignLength(e.target.value)}
                                value={ga_campaign_length}
                                defaultValue="7"
                                className={isActiveBorder ? classes.activeBorder : ''}
                                style={{ border: '1px solid transparent', transition: '0.7s' }}
                              />
                              <InputSmallLabel>
                                How long should your Google Ad run (in days)
                              </InputSmallLabel>
                            </Box>
                          </Tooltip>
                        </>
                      )}
                      {socialsToPost.includes('facebook feed ad' || 'facebook display ad') && (
                        <>
                          {socialsToPost.includes('facebook feed ad') && (
                            <Tooltip
                              title={
                                <div className={classes.toolTipContainer}>
                                  <p className={classes.tooltip}>
                                    This is the maximum amount you will spend on Facebook Feed Ads
                                    daily
                                  </p>
                                </div>
                              }
                            >
                              <Box className={classes.dailyFacebookAdsBudgetInput}>
                                <InputMainLabel>Daily Facebook Ads Budget</InputMainLabel>
                                <Input
                                  small
                                  onChange={(e) => setFacebookFeedBudget(e.target.value)}
                                  value={facebook_feed_budget}
                                  defaultValue="5.00"
                                  className={isActiveBorder ? classes.activeBorder : ''}
                                  style={{ border: '1px solid transparent', transition: '0.7s' }}
                                />
                                <InputSmallLabel>
                                  Whats the max amount you want to spend on Facebook Ads
                                </InputSmallLabel>
                              </Box>
                            </Tooltip>
                          )}
                          {socialsToPost.includes('facebook display ad') && (
                            <Tooltip
                              title={
                                <div className={classes.toolTipContainer}>
                                  <p className={classes.tooltip}>
                                    This is the maximum amount you will spend on Facebook Feed Ads
                                    daily
                                  </p>
                                </div>
                              }
                            >
                              <Box className={classes.dailyFacebookAdsBudgetInput}>
                                <InputMainLabel>Daily Facebook Ads Budget</InputMainLabel>
                                <Input
                                  small
                                  onChange={(e) => setFacebookAudienceBudget(e.target.value)}
                                  value={facebook_audience_budget}
                                  defaultValue="5.00"
                                  className={isActiveBorder ? classes.activeBorder : ''}
                                  style={{ border: '1px solid transparent', transition: '0.7s' }}
                                />
                                <InputSmallLabel>
                                  Whats the max amount you want to spend on Facebook Ads
                                </InputSmallLabel>
                              </Box>
                            </Tooltip>
                          )}
                          {socialsToPost.includes('instagram ad') && (
                            <Tooltip
                              title={
                                <div className={classes.toolTipContainer}>
                                  <p className={classes.tooltip}>
                                    This is the maximum amount you will spend on Instagram Ads
                                    daily.
                                  </p>
                                </div>
                              }
                            >
                              <Box className={classes.dailyFacebookAdsBudgetInput}>
                                <InputMainLabel>Daily Facebook Ads Budget</InputMainLabel>
                                <Input
                                  small
                                  onChange={(e) => setInstagramBudget(e.target.value)}
                                  value={instagram_budget}
                                  defaultValue="5.00"
                                  className={isActiveBorder ? classes.activeBorder : ''}
                                  style={{ border: '1px solid transparent', transition: '0.7s' }}
                                />
                                <InputSmallLabel>
                                  Whats the max amount you want to spend on Facebook Ads
                                </InputSmallLabel>
                              </Box>
                            </Tooltip>
                          )}
                          <Tooltip
                            title={
                              <div className={classes.toolTipContainer}>
                                <p className={classes.tooltip}>
                                  This is the number of days your Facebook and Instagram Ads will
                                  run
                                </p>
                              </div>
                            }
                          >
                            <Box className={classes.facebookAdsCampaignLength}>
                              <InputMainLabel>Facebook Ads Campaign Length</InputMainLabel>
                              <Input
                                small
                                onChange={(e) => setFBCampaignLength(e.target.value)}
                                value={fb_campaign_length}
                                defaultValue="7"
                                className={isActiveBorder ? classes.activeBorder : ''}
                                style={{ border: '1px solid transparent', transition: '0.7s' }}
                              />
                              <InputSmallLabel>
                                How long should your Facebook Ad run (in days)
                              </InputSmallLabel>
                            </Box>
                          </Tooltip>
                        </>
                      )}
                    </>
                  )}
                  <Box>
                    <InputMainLabel>Show Advanced Options</InputMainLabel>
                    <RadioGroup
                      aria-label="distance"
                      name="distance"
                      value={budgetOption}
                      onChange={(e) => setOption(e.target.value)}
                    >
                      <FormControlLabel value="automatic" control={<Radio />} label="Automatic" />
                      <FormControlLabel
                        value="advanced"
                        control={<Radio />}
                        label="Advanced Options"
                      />
                    </RadioGroup>
                  </Box>
                </Paper>
              </div>
            </Paper>
          </Box>
        </ErrorHandler>
      )}
    </>
  );
};

export default BudgetPage;
