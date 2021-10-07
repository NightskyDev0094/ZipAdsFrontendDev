import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BudgetPage from '../pages/BudgetPage';
import { updateBudgetInfo } from '../../../actions/formInfoActions';
import { updateCampaign } from '../../../actions/campaignActions';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../../../actions/step.actions';

const BudgetContainer = ({
  campaigns,
  currentCampaign,
  socialsToPost,
  hasBudgetStepBeenCompleted,
  updateCampaign,
  completeStep,
}) => {
  const [budgetOption, setBudgetOption] = useState(currentCampaign.budget_type || 'automatic');
  const [totalBudget, setTotalBudget] = useState(
    socialsToPost.length * currentCampaign.google_search_budget || socialsToPost.length * 5
  );
  const [google_search_budget, setGoogleSearchBudget] = useState(
    currentCampaign.google_search_budget || 5.0
  );
  const [google_display_budget, setGoogleDisplayBudget] = useState(
    currentCampaign.google_display_budget || 5.0
  );
  const [facebook_feed_budget, setFacebookFeedBudget] = useState(
    currentCampaign.facebook_feed_budget || 5.0
  );
  const [instagram_budget, setInstagramBudget] = useState(currentCampaign.instagram_budget || 5.0);
  const [facebook_audience_budget, setFacebookAudienceBudget] = useState(
    currentCampaign.facebook_audience_budget || 5.0
  );
  const [google_cpc, setGoogleCPC] = useState(currentCampaign.google_cpc || 1.0);
  const [allCampaignLength, setAllCampaignLength] = useState(
    currentCampaign.ga_campaign_length || '7'
  );
  const [ga_campaign_length, setGACampaignLength] = useState(
    currentCampaign.ga_campaign_length || '7'
  );
  const [fb_campaign_length, setFBCampaignLength] = useState(
    currentCampaign.ga_campaign_length || '7'
  );
  const submitBudget = () => {
    // updateBudgetInfo(budgetInfo);
    const formData = new FormData();
    if (budgetOption === 'automatic') {
      let num = socialsToPost.length;
      let val = totalBudget / num;
      formData.append('budget_type', budgetOption);
      formData.append('google_search_budget', val);
      formData.append('google_display_budget', val);
      formData.append('facebook_audience_budget', val);
      formData.append('facebook_feed_budget', val);
      formData.append('instagram_budget', val);
      formData.append('ga_campaign_length', allCampaignLength);
      formData.append('fb_campaign_length', allCampaignLength);
    } else {
      formData.append('google_search_budget', google_search_budget);
      formData.append('google_display_budget', google_display_budget);
      formData.append('facebook_audience_budget', facebook_audience_budget);
      formData.append('facebook_feed_budget', facebook_feed_budget);
      formData.append('instagram_budget', instagram_budget);
      formData.append('ga_campaign_length', ga_campaign_length);
      formData.append('fb_campaign_length', fb_campaign_length);
    }

    formData.append('google_cpc', google_cpc);

    // Get campaign Id from state

    const campaignId = campaigns.current.id;
    // Save Targeting options to Campaign_Info
    updateCampaign(formData, campaignId);
  };

  return (
    <BudgetPage
      socialsToPost={socialsToPost}
      handleSubmitBudget={submitBudget}
      budgetOption={budgetOption}
      setBudgetOption={setBudgetOption}
      totalBudget={totalBudget}
      hasBudgetStepBeenCompleted={hasBudgetStepBeenCompleted}
      setTotalBudget={setTotalBudget}
      google_search_budget={google_search_budget}
      setGoogleSearchBudget={setGoogleSearchBudget}
      google_display_budget={google_display_budget}
      setGoogleDisplayBudget={setGoogleDisplayBudget}
      facebook_feed_budget={facebook_feed_budget}
      setFacebookFeedBudget={setFacebookFeedBudget}
      facebook_audience_budget={facebook_audience_budget}
      setFacebookAudienceBudget={setFacebookAudienceBudget}
      instagram_budget={instagram_budget}
      setInstagramBudget={setInstagramBudget}
      ga_campaign_length={ga_campaign_length}
      setGACampaignLength={setGACampaignLength}
      google_cpc={google_cpc}
      setGoogleCPC={setGoogleCPC}
      fb_campaign_length={fb_campaign_length}
      setFBCampaignLength={setFBCampaignLength}
      allCampaignLength={allCampaignLength}
      setAllCampaignLength={setAllCampaignLength}
      completeStep={completeStep}
    />
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  currentCampaign: state.campaigns?.current,
  socialsToPost: state.newAdInfo.socialsToPost,
  hasBudgetStepBeenCompleted: state.stepTracker.BUDGET_STEP,
});

export default connect(mapStateToProps, {
  completeStep,
  updateBudgetInfo,
  updateCampaign,
})(BudgetContainer);
