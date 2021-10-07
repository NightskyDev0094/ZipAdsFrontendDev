import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TargetingPage from '../pages/TargetingPage';
import { updateTargetInfo } from '../../../actions/formInfoActions';
import {
  addFBLocations,
  addFBInterests,
  searchFBInterests,
  searchFBLocations,
} from '../../../actions/targeting.fbActions';

import {
  saveGoogleKeywordPlan,
  searchGoogleKeywords,
  searchGoogleLocations,
  saveGoogleLocationPlans,
} from '../../../actions/targeting.googleActions';
import { getAddresses } from '../../../actions/userInfoActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { updateCampaign } from '../../../actions/campaignActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGaAdAccounts } from '../../../actions/account.gaAdActions';
import { getFbPages } from '../../../actions/account.fbPageActions';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../../../actions/step.actions';

const TargetingContainer = ({
  hasTargetStepBeenCompleted,
  completeStep,
  campaigns,
  currentCampaign,
  keywords,
  keywordList,
  keywordPlan,
  locationList,
  getAddresses,
  getBusinessInfo,
  updateCampaign,
  updateTargetInfo,
  addFBLocations,
  addFBInterests,
  searchFBInterests,
  searchFBLocations,
  saveGoogleKeywordPlan,
  saveGoogleLocationPlans,
  searchGoogleKeywords,
  searchGoogleLocations,
  getFbAdAccounts,
  getGaAdAccounts,
  getFbPages,
  businessInfo,
  businessInfoLoading,
}) => {
  useEffect(() => {
    // Get info from server to populate defaults when component loads
    getAddresses();
    getBusinessInfo();
    getGaAdAccounts();
    getFbAdAccounts();
    getFbPages();
    // eslint-disable-next-line
  }, []);

  const [streetVal, setStreetVal] = useState(currentCampaign.street_address || '');
  const [cityVal, setCityVal] = useState(currentCampaign.city_name || '');
  const [stateVal, setStateVal] = useState(currentCampaign.state_code || '');
  const [zipVal, setZipVal] = useState(currentCampaign.zip_code || '');
  const [distance, setDistance] = useState(currentCampaign.geotargeting || 'hyper-local');
  const [interest, setInterest] = useState(currentCampaign.search_term || '');
  const [localeFormat, setLocaleFormat] = useState(currentCampaign.locale_type || 'zip');
  useEffect(() => {
    // Set Address values
    setLocaleVals();
  }, [businessInfo]);
  useEffect(() => {
    // Set Address values
    setSavedVals();
  }, []);

  const setLocaleVals = () => {
    if (currentCampaign.campaign_type === 'New') {
      if (!businessInfoLoading && typeof businessInfo !== 'undefined') {
        if (businessInfo.length !== 0) {
          if (typeof businessInfo[0].street !== 'undefined') {
            setStreetVal(businessInfo[0].street || '');
          }
          if (typeof businessInfo[0].city !== 'undefined') {
            setCityVal(businessInfo[0].city || '');
          }
          if (typeof businessInfo[0].state !== 'undefined') {
            setStateVal(businessInfo[0].state || '');
          }
          if (typeof businessInfo[0].zip !== 'undefined') {
            setZipVal(businessInfo[0].zip || '');
          }
        }
      }
    }
  };
  const setSavedVals = () => {
    if (currentCampaign.campaign_type === 'Draft' || currentCampaign.campaign_type === 'Template') {
      setStreetVal(currentCampaign.street_address || '');
      setCityVal(currentCampaign.city_name || '');
      setStateVal(currentCampaign.state_code || '');
      setZipVal(currentCampaign.zip_code || '');
      setInterest(currentCampaign.search_term || '');
    }
  };

  const submitTargetInfo = (targetInfo) => {
    // TODO
    // hook up targeting action to handle posting the target info
    // const { addresses } = targetInfo;
    // Get campaign Id from state
    const campaignId = campaigns.current.id;
    const formDataCampaign = new FormData();
    formDataCampaign.append('interest_targeting', targetInfo.interest);
    // let formDataFBLocations = new FormData();
    // Check if anywhere
    // Get list of facebook locations
    const formDataLocationSearch = new FormData();
    formDataLocationSearch.append('search_city', cityVal);
    formDataLocationSearch.append('search_state', stateVal);
    formDataLocationSearch.append('search_zip', zipVal);
    formDataLocationSearch.append('distance', targetInfo.distance);
    formDataLocationSearch.append('current_campaign', campaignId);
    formDataLocationSearch.append('search_term', interest);
    searchFBLocations(formDataLocationSearch);

    // Search Google Locations
    searchGoogleLocations(formDataLocationSearch);
    if (targetInfo.interests !== '') {
      // // Search Facebook Interests
      const formDataInterestSearch = new FormData();
      formDataInterestSearch.append('search_term', targetInfo.interest);
      formDataInterestSearch.append('current_campaign', campaignId);
      searchFBInterests(formDataInterestSearch);

      // Search for google keywords
      searchGoogleKeywords(formDataInterestSearch);
    }
    formDataCampaign.append('geotargeting', targetInfo.distance);
    formDataCampaign.append('street_address', streetVal);
    formDataCampaign.append('city_name', cityVal);
    formDataCampaign.append('state_code', stateVal);
    formDataCampaign.append('zip_code', zipVal);
    // Save Targeting options to Campaign_Info
    updateCampaign(formDataCampaign, campaignId);
    updateTargetInfo(targetInfo);
  };

  return (
    <TargetingPage
      handleSubmitTargetInfo={submitTargetInfo}
      businessInfo={businessInfo}
      hasTargetStepBeenCompleted={hasTargetStepBeenCompleted}
      businessInfoLoading={businessInfoLoading}
      completeStep={completeStep}
      streetVal={streetVal}
      cityVal={cityVal}
      stateVal={stateVal}
      zipVal={zipVal}
      setStreetVal={setStreetVal}
      setCityVal={setCityVal}
      setStateVal={setStateVal}
      setZipVal={setZipVal}
      distance={distance}
      setDistance={setDistance}
      interest={interest}
      setInterest={setInterest}
      localeFormat={localeFormat}
      setLocaleFormat={setLocaleFormat}
    />
  );
};

const mapStateToProps = (state) => ({
  // addresses: state.businessInfo.current.data,
  campaigns: state.campaigns,
  currentCampaign: state.campaigns?.current,
  keywords: state.googleTargeting.keywords,
  keywordList: state.googleTargeting.keywordList,
  keywordPlan: state.googleTargeting.keywordPlan,
  locationList: state.googleTargeting.locationList,
  businessInfo: state.businessInfo.businessInfos,
  businessInfoLoading: state.businessInfo.businessInfoLoading,
  hasTargetStepBeenCompleted: state.stepTracker.TARGET_AUDIENCE_STEP,
});

export default connect(mapStateToProps, {
  getAddresses,
  getBusinessInfo,
  updateCampaign,
  updateTargetInfo,
  addFBLocations,
  addFBInterests,
  searchGoogleKeywords,
  saveGoogleKeywordPlan,
  saveGoogleLocationPlans,
  searchGoogleLocations,
  searchFBInterests,
  searchFBLocations,
  getFbAdAccounts,
  getGaAdAccounts,
  getFbPages,
  completeStep,
})(TargetingContainer);
