import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SummaryPage from '../pages/SummaryPage';

import { updateCampaign, getCampaignAsync, makeCurrent } from '../../../actions/campaignActions';
import { getTemplateImages } from '../../../actions/imageActions';
import { postGoogleSearchAd } from '../../../actions/gsAdActions';
import { postFBFeedAd } from '../../../actions/fbAdActions';
import { completeStepByNormalFunction as completeStep } from '../../../actions/step.actions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';

import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import StepperWrapper from '../components/StepperWrapper';
import useCheckNetwork from '../hooks/useCheckNetwork';
import useCreateCampaignForm from '../hooks/useCreateCampaignForm';

const SummaryContainer = ({
  completeStep,
  postGoogleSearchAd,
  postFBFeedAd,
  adInfo,
  campaigns,
  updateCampaign,
  currentCampaign,
  googleToken,
  facebookToken,
  getTemplateImages,
  fbPages,
  getCampaignAsync,
  makeCurrent,
  socialsToPost,
  getFbAdAccounts,
  getGoogleAdAccounts,
  getBusinessInfo,
}) => {
  const SUBMIT_STATUS = {
    UNSET: 'UNSET',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
  };
  const history = useHistory();
  const { networkError, setNetworkError } = useCheckNetwork(
    googleToken,
    facebookToken,
    getGoogleAdAccounts,
    getFbAdAccounts
  );
  const { selectedNetworks, formInfo, cropper, previews, imgOption, submitCampaign } =
    useCreateCampaignForm(
      getTemplateImages,
      updateCampaign,
      currentCampaign,
      googleToken,
      facebookToken,
      fbPages,
      socialsToPost
    );

  const [checkoutStatus, setCheckoutStatus] = useState(SUBMIT_STATUS.UNSET);

  /** Incase we ever need to show the cost of this ad */
  // useEffect(() => {
  //   let budgets = [];
  //   if (!currentCampaign) return;
  //   if (socialsToPost.includes('facebook feed ad')) {
  //     budgets.push(
  //       parseFloat(currentCampaign.facebook_feed_budget) * currentCampaign.fb_campaign_length
  //     );
  //   }
  //   if (socialsToPost.includes('facebook display ad')) {
  //     budgets.push(
  //       parseFloat(currentCampaign.facebook_audience_budget) * currentCampaign.fb_campaign_length
  //     );
  //   }
  //   if (socialsToPost.includes('instagram ad')) {
  //     budgets.push(
  //       parseFloat(currentCampaign.instagram_budget) * currentCampaign.fb_campaign_length
  //     );
  //   }
  //   if (socialsToPost.includes('google search ad')) {
  //     budgets.push(
  //       parseFloat(currentCampaign.google_search_budget) * currentCampaign.ga_campaign_length
  //     );
  //   }
  //   if (socialsToPost.includes('google display ad')) {
  //     budgets.push(
  //       parseFloat(currentCampaign.google_display_budget) * currentCampaign.ga_campaign_length
  //     );
  //   }
  //   let budgetVal = budgets.reduce((a, b) => a + b, 0);
  //   setTotalBudget(budgetVal);
  //   setCampaignData(currentCampaign);
  // }, [currentCampaign]);

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
  };

  return (
    <>
      {networkError && <ErrorFallBackPage error={networkError} />}
      <ErrorHandler>
        <StepperWrapper pageHeading="Let's Get Your Ad Online">
          <SummaryPage
            onHandleClick={onClick}
            SUBMIT_STATUS={SUBMIT_STATUS}
            formInfo={formInfo}
            selectedNetworks={selectedNetworks}
            previews={previews}
          />
        </StepperWrapper>
      </ErrorHandler>
    </>
  );
};

const mapStateToProps = (state) => ({
  adInfo: state.newAdInfo,
  currentCampaign: state.campaigns.current,
  campaigns: state.campaigns.campaigns,
  socialsToPost: state.newAdInfo.socialsToPost,
  googleToken: state.googleAdAccount.gaToken,
  facebookToken: state.fbAdAccount.fbToken,
  fbPages: state.fbPages.pages,
  campaignInfo: state.newAdInfo,
  hasPostAdStepBeenCompleted: state.stepTracker.POST_AD_STEP,
});

const mapDispatchToProps = (dispatch) => ({
  postGoogleSearchAd: (formData) => postGoogleSearchAd(formData, dispatch),
  completeStep: (stepNumber) => completeStep(dispatch, stepNumber),
  postFBFeedAd: (formData) => postFBFeedAd(formData, dispatch),
  getTemplateImages,
  makeCurrent,
  updateCampaign,
  getCampaignAsync: () => getCampaignAsync(dispatch),
  getFbAdAccounts: () => getFbAdAccounts(dispatch),
  getGoogleAdAccounts: () => getGoogleAdAccounts(dispatch),
  getBusinessInfo: () => getBusinessInfo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);
