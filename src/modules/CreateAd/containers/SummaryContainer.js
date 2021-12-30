import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SummaryPage from '../pages/SummaryPage';

import { getCampaignAsync, makeCurrent } from '../../../actions/campaignActions';
import { postGoogleSearchAd } from '../../../actions/gsAdActions';
import { postFBFeedAd } from '../../../actions/fbAdActions';
import { completeStepByNormalFunction as completeStep } from '../../../actions/step.actions';
// import {
//   createCreditAmount,
//   updateCreditAmount,
//   getCreditAmount,
//   getClientId,
//   clearCreditSuccess,
// } from '../../../actions/credit.actions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';

const SummaryContainer = ({
  completeStep,
  // userCredits,
  // getCreditAmount,
  postGoogleSearchAd,
  postFBFeedAd,
  adInfo,
  campaigns,
  currentCampaign,
  getCampaignAsync,
  makeCurrent,
  socialsToPost,
  getFbAdAccounts,
  getGoogleAdAccounts,
  getBusinessInfo,
  ...props
}) => {
  const SUBMIT_STATUS = {
    UNSET: 'UNSET',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
  };
  const history = useHistory();
  const [campaignData, setCampaignData] = useState({});
  // const [creditAmount, setCreditAmount] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  // const getCreditData = useCallback(async () => await getCreditAmount());
  const getCampaignData = useCallback(async () => await getCampaignAsync());
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState(SUBMIT_STATUS.UNSET);
  const [fbFeedNum, setFbFeedNum] = useState(0);
  const [fbAudienceNum, setFbAudienceNum] = useState(0);
  const [instagramNum, setInstagramNum] = useState(0);
  const [gaSearchNum, setGaSearchNum] = useState(0);
  const [gaDisplayNum, setGaDisplayNum] = useState(0);
  const [gaSquareDisplayNum, setGaSquareDisplayNum] = useState(0);
  const [rectangleImgPreviewUrl, setRectangleImgPreviewUrl] = useState(currentCampaign?.rectangle_img_upload || currentCampaign?.rectangle_img_url || '');
  const [squareImgPreviewUrl, setSquareImgPreviewUrl] = useState(currentCampaign?.square_img_upload || currentCampaign?.square_img_url || '');
  const [adSlideLength, setAdSlideLength] = useState(socialsToPost.length);

  const getAmount = () => {};
  const [handleError, setHandleError] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    getCampaignData();
    // getCreditData();
  }, []);

  useEffect(() => {
    getFbAdAccounts();
    getGoogleAdAccounts();
    getBusinessInfo();
    let val = 0;
    if (socialsToPost.includes('facebook feed ad')) {
      val++;
      setFbFeedNum(val);
    }
    if (socialsToPost.includes('facebook display ad')) {
      val++;
      setFbAudienceNum(val);
    }
    if (socialsToPost.includes('instagram ad')) {
      val++;
      setInstagramNum(val);
    }
    if (socialsToPost.includes('google search ad')) {
      val++;
      setGaSearchNum(val);
    }
    if (socialsToPost.includes('google display ad')) {
      val++;
      setGaDisplayNum(val);
      val++;
      setGaSquareDisplayNum(val);
    }
    setAdSlideLength(val);
    if(currentCampaign?.img_option === 'custom' && currentCampaign?.rectangle_img_upload !== '' &&  currentCampaign?.square_img_upload !== ''){
      setRectangleImgPreviewUrl(currentCampaign.rectangle_img_upload)
      setSquareImgPreviewUrl(currentCampaign.square_img_upload)
    } else {
      setRectangleImgPreviewUrl(currentCampaign.rectangle_img_url)
      setSquareImgPreviewUrl(currentCampaign.square_img_url)
    }
    
  }, []);

 
  //get sum of users credits
  // useEffect(() => {
  //   if (!userCredits || !userCredits?.length) return;
  //   if (userCredits.length >= 1) {
  //     const highestAmount = userCredits?.pop()['amount'];
  //     setCreditAmount(highestAmount);
  //   }
  // }, [userCredits]);

  useEffect(() => {
    let budgets = [];
    if(!currentCampaign) return;
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


  if (currentCampaign) {
    // Check if not currentCampaign
    if (Object.keys(currentCampaign)?.length === 0 && currentCampaign?.constructor === Object) {
      if (campaigns.length >= 1) {
        makeCurrent(campaigns[campaigns.length - 1]);
      }
    }
  }

  useEffect(() => {
    if (checkoutStatus === SUBMIT_STATUS.SUCCESS) {
      setTimeout(() => {
        history.push('/create/success');
      }, 1000);
    }
  }, [checkoutStatus]);

  const onClick = () => {
    setCheckoutStatus(SUBMIT_STATUS.LOADING);
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
      completeStep(7);
      setCheckoutStatus(SUBMIT_STATUS.SUCCESS);
      // history.push('/create/success');
    // } else {
    //   // setCheckoutStatus(SUBMIT_STATUS.ERROR);
    //   setHandleError({ isError: true, message: 'Error: Please add more credits' });
    // }
  };

  return (
    <SummaryPage
      currentCampaign={currentCampaign}
      targetingInfo={adInfo.targetingInfo}
      budgetInfo={adInfo.budgetInfo}
      onHandleClick={onClick}
      onMakeCurrent={makeCurrent}
      socialsToPost={socialsToPost}
      totalBudget={totalBudget}
      setHandleError={setHandleError}
      handleError={handleError}
      checkoutStatus={checkoutStatus}
      SUBMIT_STATUS={SUBMIT_STATUS}
      // creditAmount={creditAmount}
      getFbAdAccounts={getFbAdAccounts}
      getGoogleAdAccounts={getGoogleAdAccounts}
      getBusinessInfo={getBusinessInfo}
      fbFeedNum={fbFeedNum}
      fbAudienceNum={fbAudienceNum}
      instagramNum={instagramNum}
      gaSearchNum={gaSearchNum}
      gaDisplayNum={gaDisplayNum}
      gaSquareDisplayNum={gaSquareDisplayNum}
      rectangleImgPreviewUrl={rectangleImgPreviewUrl}
      squareImgPreviewUrl={squareImgPreviewUrl}  
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  adInfo: state.newAdInfo,
  currentCampaign: state.campaigns.current,
  campaigns: state.campaigns.campaigns,
  socialsToPost: state.newAdInfo.socialsToPost,
  // userCredits: state.credits?.userCredits || 0,
  campaignInfo: state.newAdInfo,
  // stripeCheckoutToken: state.credits.userClientId,
  // clientIDError: state.credits.error,
  // areCreditsSuccessfullyPurchased: state.credits.success,
  hasPostAdStepBeenCompleted: state.stepTracker.POST_AD_STEP,
});

const mapDispatchToProps = (dispatch) => ({
  postGoogleSearchAd: (formData) => postGoogleSearchAd(formData, dispatch),
  completeStep: (stepNumber) => completeStep(dispatch, stepNumber),
  postFBFeedAd: (formData) => postFBFeedAd(formData, dispatch),
  makeCurrent,
  // updateCreditAmount: (amount) => updateCreditAmount(amount, dispatch),
  // createCreditAmount: (amount) => createCreditAmount(amount, dispatch),
  // getClientId: (amount, preExistingAmount) => getClientId(amount, preExistingAmount, dispatch),
  // getCreditAmount: () => getCreditAmount(dispatch),
  getCampaignAsync: () => getCampaignAsync(dispatch),
  // clearCreditSuccess: () => clearCreditSuccess(dispatch),
  getFbAdAccounts: () => getFbAdAccounts(dispatch),
  getGoogleAdAccounts: () => getGoogleAdAccounts(dispatch),
  getBusinessInfo: () => getBusinessInfo(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);
