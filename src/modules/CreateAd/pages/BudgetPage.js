import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
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
  TextField,
  Input,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { green, purple } from '@material-ui/core/colors';

import { InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import StepProgress from '../components/StepProgress';
import StepperWrapper from '../components/StepperWrapper';
import StyledRadio from '../components/StyledRadio';
import { getCampaignAsync, makeCurrent } from '../../../actions/campaignActions';
import { postGoogleSearchAd } from '../../../actions/gsAdActions';
import { postFBFeedAd } from '../../../actions/fbAdActions';
import { completeStepByNormalFunction as completeStep } from '../../../actions/step.actions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';

import backgroundImage from '../../../BlueTecUIKit/images/background/3.png';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';
import alert from '../../../BlueTecUIKit/images/budget.png';

const useStyles = makeStyles((theme) => ({
  page: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  paper: {
    width: '88vw',
    // height: '1300px',
    // marginBottom: '200px',
    margin: '0 auto',
    position: 'relative',
    '@media (max-width:1400px)': {
      // height: '1900px',
    },
    '@media (max-width:500px)': {
      // marginBottom: '300px',
      // height: '2400px',
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
    position: 'sticky',
    top: 0,
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
  InputItem: {
    width: '100%',
    height: '3rem',
    fontSize: '1.25rem !important',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    borderRadius: '0.25rem',
    'margin-bottom': '1em',
    maxWidth: '250px',
    marginTop: '20px',

    ['@media (min-width: 450px)']: { height: '3.5rem', fontSize: '1.7rem' },
  },
  textStyle: {
    fontSize: '1.25rem',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  },
  submitButton: {
    padding: '1rem 8rem',
    borderRadius: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: 'none',
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
  currentCampaign,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });
  const [isActiveBorder, setIsActiveBorder] = useState(false);
  const [objective, setObjective] = useState(currentCampaign.objective || 'Conversions');
  const [campaignData, setCampaignData] = useState({});

  const submitAds = () => {
    // setCheckoutStatus(SUBMIT_STATUS.LOADING);
    // if (creditAmount >= totalBudget) {
    const adId = currentCampaign.id;
    if (socialsToPost.includes('facebook feed ad')) {
      let fbfFormData = new FormData();
      fbfFormData.append('ad_id', adId);
      fbfFormData.append('ad_type', 'feed');
      // Post Ad to Facebook
      postFBFeedAd(fbfFormData);
    }
    if (socialsToPost.includes('facebook display ad')) {
      let fbaFormData = new FormData();
      fbaFormData.append('ad_id', adId);
      fbaFormData.append('ad_type', 'audience');
      // Post Ad to Facebook
      postFBFeedAd(fbaFormData);
    }
    if (socialsToPost.includes('instagram ad')) {
      let igFormData = new FormData();
      igFormData.append('ad_id', adId);
      igFormData.append('ad_type', 'instagram');
      // Post Ad to Facebook
      postFBFeedAd(igFormData);
    }
    if (socialsToPost.includes('google adwords')) {
      let gsaFormData = new FormData();
      gsaFormData.append('ad_id', adId);
      gsaFormData.append('ad_type', 'search');
      // Post Ad to Google
      postGoogleSearchAd(gsaFormData);
    }
    if (socialsToPost.includes('google display ad')) {
      let gdaFormData = new FormData();
      gdaFormData.append('ad_id', adId);
      gdaFormData.append('ad_type', 'display');
      // Post Ad to Google
      postGoogleSearchAd(gdaFormData);
    }
    history.push('/create/summary');
    // setCheckoutStatus(SUBMIT_STATUS.SUCCESS);
    // history.push('/create/success');
    // } else {
    //   // setCheckoutStatus(SUBMIT_STATUS.ERROR);
    //   setHandleError({ isError: true, message: 'Error: Please add more credits' });
    // }
  };

  useEffect(() => {
    let budgets = [];
    if (!currentCampaign) return;
    if (socialsToPost.includes('facebook feed ad')) {
      budgets.push(
        parseFloat(currentCampaign.facebook_feed_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('facebook display ad')) {
      budgets.push(
        parseFloat(currentCampaign.facebook_audience_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('instagram ad')) {
      budgets.push(
        parseFloat(currentCampaign.instagram_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('google search ad')) {
      budgets.push(
        parseFloat(currentCampaign.google_search_budget) * currentCampaign.ga_campaign_length
      );
    }
    if (socialsToPost.includes('google display ad')) {
      budgets.push(
        parseFloat(currentCampaign.google_display_budget) * currentCampaign.ga_campaign_length
      );
    }
    let budgetVal = budgets.reduce((a, b) => a + b, 0);
    setTotalBudget(budgetVal);
    setCampaignData(currentCampaign);
  }, [currentCampaign]);

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
            {/* <div style={{ marginRight: 'auto', marginLeft: 'auto', textAlign: 'center' }}>
              <Typography variant="h2" textAlign="center">
                Create an Ad
              </Typography>
            </div>
            <div className={classes.progressBarContainer}>
              <StepProgress formStep={5} />
            </div> */}
            <div elevation={2} className={classes.paper}>
              {/* <div className={classes.nextButtonContainer}>
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
              </div> */}
              <StepperWrapper pageHeading={'Choose Your Budget'}>
                <div className={classes.pageBody}>
                  <div elevation={2} className={classes.createBudgetContainer}>
                    {/*  <InputMainLabel className={classes.textStyle}>Create a Budget</InputMainLabel>
                  <Typography>Enter the budget for your ad campaign.</Typography>
                  {(socialsToPost === undefined || socialsToPost.length === 0) && (
                    <>
                       <InputMainLabel className={classes.textStyle}>No Ad Network Selected</InputMainLabel>
                      <Typography>
                        Please go back and select an Ad Network to run your campaign on.
                      </Typography>
                    </>
                  )} */}
                    {budgetOption === 'automatic' && (
                      <>
                        <Tooltip title="This is the maximum amount you will spend on all ads daily.">
                          <>
                            <Box className={classes.dailyFacebookAdsBudgetInput}>
                              <InputMainLabel
                                className={classes.textStyle}
                                style={{ fontWeight: 'bold' }}
                              >
                                What's the total amount (in USD) that you would like to spend on
                                your campaign per day?
                              </InputMainLabel>
                              <Input
                                onChange={(e) => setTotalBudget(e.target.value)}
                                value={totalBudget}
                                defaultValue="10.00"
                                // className={isActiveBorder ? classes.activeBorder : ''}
                                // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                disableUnderline
                                className={classes.InputItem}
                              />
                              {/* <InputSmallLabel>
                              What is the max amount you want to spend on ads daily (in USD)?
                            </InputSmallLabel> */}
                            </Box>
                            <Box className={classes.facebookAdsCampaignLength}>
                              <InputMainLabel
                                className={classes.textStyle}
                                style={{ fontWeight: 'bold' }}
                              >
                                For how many doays would you like your campaign to run?
                              </InputMainLabel>

                              <Input
                                onChange={(e) => setAllCampaignLength(e.target.value)}
                                value={allCampaignLength}
                                defaultValue="7"
                                className={isActiveBorder ? classes.activeBorder : ''}
                                // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                disableUnderline
                                className={classes.InputItem}
                                // inputProps={{
                                //   startAdornment: (
                                //     <InputAdornment position="start">$</InputAdornment>
                                //   ),
                                // }}
                              />
                              {/* <InputSmallLabel>
                              How long should your ads run (in days)?
                            </InputSmallLabel> */}
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
                                  <InputMainLabel
                                    className={classes.textStyle}
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    Daily Google Ads Budget
                                  </InputMainLabel>
                                  <Input
                                    onChange={(e) => setGoogleSearchBudget(e.target.value)}
                                    value={google_search_budget}
                                    defaultValue="10.00"
                                    // className={isActiveBorder ? classes.activeBorder : ''}
                                    // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                    startAdornment={
                                      <InputAdornment position="start">$</InputAdornment>
                                    }
                                    disableUnderline
                                    className={classes.InputItem}
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
                                      This is the maximum amount you will spend on Google Display
                                      Ads daily.
                                    </p>
                                  </div>
                                }
                              >
                                <Box className={classes.dailyGoogleAdsBudgetInput}>
                                  <InputMainLabel
                                    className={classes.textStyle}
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    Daily Google Ads Budget
                                  </InputMainLabel>
                                  <Input
                                    onChange={(e) => setGoogleDisplayBudget(e.target.value)}
                                    value={google_display_budget}
                                    defaultValue="10.00"
                                    // className={isActiveBorder ? classes.activeBorder : ''}
                                    // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                    startAdornment={
                                      <InputAdornment position="start">$</InputAdornment>
                                    }
                                    disableUnderline
                                    className={classes.InputItem}
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
                                <InputMainLabel
                                  className={classes.textStyle}
                                  style={{ fontWeight: 'bold' }}
                                >
                                  Google Ads CPC
                                </InputMainLabel>

                                <Input
                                  onChange={(e) => setGoogleCPC(e.target.value)}
                                  value={google_cpc}
                                  defaultValue="1.00"
                                  // className={isActiveBorder ? classes.activeBorder : ''}
                                  // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                  startAdornment={
                                    <InputAdornment position="start">$</InputAdornment>
                                  }
                                  disableUnderline
                                  className={classes.InputItem}
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
                                <InputMainLabel
                                  className={classes.textStyle}
                                  style={{ fontWeight: 'bold' }}
                                >
                                  Google Ads Campaign Length
                                </InputMainLabel>

                                <Input
                                  onChange={(e) => setGACampaignLength(e.target.value)}
                                  value={ga_campaign_length}
                                  defaultValue="7"
                                  // className={isActiveBorder ? classes.activeBorder : ''}
                                  // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                  startAdornment={
                                    <InputAdornment position="start">$</InputAdornment>
                                  }
                                  disableUnderline
                                  className={classes.InputItem}
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
                                  <InputMainLabel
                                    className={classes.textStyle}
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    Daily Facebook Ads Budget
                                  </InputMainLabel>
                                  <Input
                                    onChange={(e) => setFacebookFeedBudget(e.target.value)}
                                    value={facebook_feed_budget}
                                    defaultValue="10.00"
                                    // className={isActiveBorder ? classes.activeBorder : ''}
                                    // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                    startAdornment={
                                      <InputAdornment position="start">$</InputAdornment>
                                    }
                                    disableUnderline
                                    className={classes.InputItem}
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
                                  <InputMainLabel
                                    className={classes.textStyle}
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    Daily Facebook Ads Budget
                                  </InputMainLabel>
                                  <Input
                                    onChange={(e) => setFacebookAudienceBudget(e.target.value)}
                                    value={facebook_audience_budget}
                                    defaultValue="10.00"
                                    // className={isActiveBorder ? classes.activeBorder : ''}
                                    // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                    startAdornment={
                                      <InputAdornment position="start">$</InputAdornment>
                                    }
                                    disableUnderline
                                    className={classes.InputItem}
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
                                  <InputMainLabel
                                    className={classes.textStyle}
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    Daily Facebook Ads Budget
                                  </InputMainLabel>
                                  <Input
                                    onChange={(e) => setInstagramBudget(e.target.value)}
                                    value={instagram_budget}
                                    defaultValue="10.00"
                                    // className={isActiveBorder ? classes.activeBorder : ''}
                                    // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                    startAdornment={
                                      <InputAdornment position="start">$</InputAdornment>
                                    }
                                    disableUnderline
                                    className={classes.InputItem}
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
                                <InputMainLabel
                                  className={classes.textStyle}
                                  style={{ fontWeight: 'bold' }}
                                >
                                  Facebook Ads Campaign Length
                                </InputMainLabel>
                                <Input
                                  onChange={(e) => setFBCampaignLength(e.target.value)}
                                  value={fb_campaign_length}
                                  defaultValue="7"
                                  // className={isActiveBorder ? classes.activeBorder : ''}
                                  // style={{ border: '1px solid transparent', transition: '0.7s' }}
                                  disableUnderline
                                  className={classes.InputItem}
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
                      <InputMainLabel
                        style={{
                          textDecoration: 'underline',
                          fontStyle: 'italic',
                          color: '#0b4d93',
                          textDecoration: 'underline',
                          fontWeight: 'bold',
                          fontSize: '1.25rem',
                        }}
                      >
                        Advanced Options
                      </InputMainLabel>
                      {/* <RadioGroup
                        aria-label="distance"
                        name="distance"
                        value={budgetOption}
                        onChange={(e) => setOption(e.target.value)}
                      >
                        <FormControlLabel value="automatic" control={<StyledRadio />} label="Automatic" />
                        <FormControlLabel
                          value="advanced"
                          control={<StyledRadio />}
                          label="Advanced Options"
                        />
                      </RadioGroup> */}
                    </Box>
                    <Box className={classes.dailyFacebookAdsBudgetInput}>
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        What is your main advertising objective for your business?
                      </InputMainLabel>
                      <RadioGroup
                        aria-label="distance"
                        name="distance"
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                      >
                        <FormControlLabel
                          value="Conversions"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>
                              Generate sales or signups
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="Brand Awareness"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>
                              Make people aware of my business
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="Store Traffic"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>
                              Increase visits to my business's physical location
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="Traffic"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>
                              Generate web traffic
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </Box>
                    <Box className={classes.dailyFacebookAdsBudgetInput}>
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        Please confirm your total ad spend for this campaign:
                      </InputMainLabel>
                      <InputMainLabel
                        style={{
                          margin: '3rem 0 1rem 0',
                          color: '#00468f',
                          fontWeight: 'bold',
                          fontSize: '2rem',
                        }}
                      >
                        ${allCampaignLength * totalBudget}
                      </InputMainLabel>
                      <Typography className={classes.textStyle} style={{ color: '#00468f' }}>
                        Based on ${totalBudget} daily spend x {allCampaignLength} days campaign
                        length.
                      </Typography>
                    </Box>
                    <Box marginTop={4} width="100%" display="flex" justifyContent="center">
                      {/* <ColorButton variant="contained" className={classes.submitButton}>
                        Submit
                      </ColorButton> */}
                      <input
                        type="button"
                        value="Submit"
                        id="send_message"
                        style={{
                          color: '#00468f',
                          backgroundColor: '#47e362',
                          borderRadius: '10px',
                          padding: '1rem 8rem',
                          fontSize: '1.5rem',
                          width: 'fit-content',
                        }}
                        className="btn btn-custom color-2 border-0"
                        onClick={submitAds}
                      />
                    </Box>
                  </div>
                </div>
                {/* <img src={alert} className="position-absolute" style={{ bottom: 0 }} /> */}
              </StepperWrapper>
            </div>
          </Box>
        </ErrorHandler>
      )}
      <BlueTecLandingFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentCampaign: state.campaigns?.current,
});
const mapDispatchToProps = (dispatch) => ({
  postFBFeedAd: (formData) => postFBFeedAd(formData, dispatch),
  postGoogleSearchAd: (formData) => postGoogleSearchAd(formData, dispatch),
  getCampaignAsync: () => getCampaignAsync(dispatch),
  getFbAdAccounts: () => getFbAdAccounts(dispatch),
  getGoogleAdAccounts: () => getGoogleAdAccounts(dispatch),
  getBusinessInfo: () => getBusinessInfo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPage);
