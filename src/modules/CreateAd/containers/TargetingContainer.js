import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TargetingPage from '../pages/TargetingPage';
import ExpandedTargetingPage from '../pages/ExpandedTargetingPage';
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
import {
  updateFBInterests as updateFBInterestsRequest,
  updateFBLocations as updateFBLocationRequest,
} from '../../../actions/targeting.fbActions';
import {
  updateGoogleKeywords as updateGoogleKeywordsRequest,
  updateGoogleLocationPlans as updateGoogleLocationsRequest,
} from '../../../actions/targeting.googleActions';

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
  hasExpandedTargetingStepBeenCompleted,
  // Google Store state and actions
  googleGeoTargeting,
  googleKeywords,
  googleLocationId,
  googleKeywordListId,
  updateGoogleKeywordsRequest,
  updateGoogleLocationsRequest,
  // Facebook Store state and actions
  facebookInterestGroups,
  facebookGeoTargeting,
  fbInterestsListId,
  fbGeoLocationId,
  updateFBInterestsRequest,
  updateFBLocationRequest,

  ...props
}) => {
  useEffect(() => {
    // Get info from server to populate defaults when component loads
    getAddresses();
    // getBusinessInfo();
    getGaAdAccounts();
    getFbAdAccounts();
    getFbPages();
  }, []);

  const [streetVal, setStreetVal] = useState(currentCampaign.street_address || '');
  const [cityVal, setCityVal] = useState(currentCampaign.city_name || '');
  const [stateVal, setStateVal] = useState(currentCampaign.state_code || '');
  const [zipVal, setZipVal] = useState(currentCampaign.zip_code || '');
  const [distance, setDistance] = useState(currentCampaign.geotargeting || 'hyper-local');
  const [interest, setInterest] = useState(currentCampaign.search_term || '');
  const [localeFormat, setLocaleFormat] = useState(currentCampaign.locale_type || 'zip');
  const [advTargeting, setAdvTargeting] = useState(false);
  // Advanced targeting state
  // const classes = useStyles();
  const history = useHistory();
  const [isTargetSubmitted, setIsTargetSubmitted] = useState(false);
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });
  const [displayState, setDisplayState] = useState({
    displayGoogleComponent: false,
    displayFacebookComponent: false,
    displayAllComponents: true,
  });

  const [fbTableState, setFBTableState] = useState({
    geoTargetingArray: [],
    interestGroupArray: [],
  });

  const [googleTableState, setGoogleTableState] = useState({
    geoTargetingArray: [],
    keywordArray: [],
  });

  const [selectedFacebookRows, setSelectedFacebookRows] = useState({
    selectedInterestGroupRows: [],
    selectedGeoTargeting: [],
  });

  const [selectedGoogleRows, setSelectedGoogleRows] = useState({
    selectedKeywordGroupRows: [],
    selectedGeoTargeting: [],
  });

  const handleToggle = (event) => {
    setDisplayState({
      ...displayState,
      [event.target.name]: event.target.checked,
    });
  };
  // useEffect(() => {
  //   // Set Address values
  //   setLocaleVals();
  // }, [businessInfo]);
  useEffect(() => {
    // Set Address values
    setSavedVals();
  }, []);

  // const setLocaleVals = () => {
  //   // if (currentCampaign.campaign_type === 'New') {
  //   if (!businessInfoLoading && typeof businessInfo !== 'undefined') {
  //     if (businessInfo.length !== 0) {
  //       if (typeof businessInfo[0].street !== 'undefined') {
  //         setStreetVal(businessInfo[0].street || '');
  //       }
  //       if (typeof businessInfo[0].city !== 'undefined') {
  //         setCityVal(businessInfo[0].city || '');
  //       }
  //       if (typeof businessInfo[0].state !== 'undefined') {
  //         setStateVal(businessInfo[0].state || '');
  //       }
  //       if (typeof businessInfo[0].zip !== 'undefined') {
  //         setZipVal(businessInfo[0].zip || '');
  //       }
  //     }
  //   }
    // }
  // };
  const setSavedVals = () => {
    // if (currentCampaign.campaign_type === 'Draft' || currentCampaign.campaign_type === 'Template') {
      setStreetVal(currentCampaign.street_address || '');
      setCityVal(currentCampaign.city_name || '');
      setStateVal(currentCampaign.state_code || '');
      setZipVal(currentCampaign.zip_code || '');
      setInterest(currentCampaign.search_term || '');
    // }
  };
  // Gate to determine which algorithm runs
  const submitTargetInfo = (targetInfo, submitType) => {
    if (!advTargeting) {
      submitTargetingInfos(targetInfo);
    } else {
      submitExpandedTargetingInformation();
    }
    if (submitType === 'next'){
      history.push('/create/budget');
    } else {
      setAdvTargeting(true)
    }
  };
  // Submit Targeting Search
  const submitTargetingInfos = (targetInfo) => {
    const campaignId = campaigns.current.id;
    const formDataCampaign = new FormData();
    formDataCampaign.append('interest_targeting', targetInfo.interest);
    const formDataLocationSearch = new FormData();
    formDataLocationSearch.append('search_city', cityVal);
    formDataLocationSearch.append('search_state', stateVal);
    formDataLocationSearch.append('search_zip', zipVal);
    formDataLocationSearch.append('locale_type', localeFormat);
    formDataLocationSearch.append('distance', distance);
    formDataLocationSearch.append('current_campaign', campaignId);
    
    
    searchFBLocations(formDataLocationSearch);
    if (distance === 'hyper-local') {
      // Search Google Locations
      searchGoogleLocations(formDataLocationSearch);
    }
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
    formDataCampaign.append('locale_type', localeFormat);
    formDataCampaign.append('distance', distance);
    formDataCampaign.append('search_term', interest);
    // Save Targeting options to Campaign_Info
    updateCampaign(formDataCampaign, campaignId);
    updateTargetInfo(targetInfo);
  };

  // Submit expanded targeting selections
  const submitExpandedTargetingInformation = () => {
    const fbGeoTargetingArray = selectedFacebookRows?.selectedGeoTargeting;
    const fbInterestGroupArray = selectedFacebookRows?.selectedInterestGroupRows;
    const googleGeoTargetingArray = selectedGoogleRows?.selectedGeoTargeting;
    const googleKeywordTargetingArray = selectedGoogleRows?.selectedKeywordGroupRows;
    // if (hasExpandedTargetingStepBeenCompleted === 'STEP_COMPLETED') {
    //   setIsResubmitModalOpen(true);
    // } else {
    try {
      if (selectedFacebookRows?.selectedGeoTargeting.length) {
        let selectedGeoArray = selectedFacebookRows?.selectedGeoTargeting;
        let geotargetArray = [];
        for (let i = 0; i < selectedGeoArray.length; i++) {
          // Search for index value in array of
          let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
          geotargetArray.push(toPush);
        }
        updateFBLocationRequest(geotargetArray[0], fbGeoLocationId);
      }
      if (selectedFacebookRows?.selectedInterestGroupRows.length) {
        let selectedInterestArray = selectedFacebookRows?.selectedGeoTargeting;
        let interestArray = [];
        for (let i = 0; i < selectedInterestArray.length; i++) {
          // Search for index value in array of
          let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));

          interestArray.push(toPush);
        }
        updateFBInterestsRequest(interestArray[0], fbInterestsListId);
      }
      if (selectedGoogleRows?.selectedGeoTargeting.length) {
        let selectedGeoArray = selectedGoogleRows?.selectedGeoTargeting;
        let geoArray = [];
        for (let i = 0; i < selectedGeoArray.length; i++) {
          // Search for index value in array of
          let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));

          geoArray.push(toPush);
        }
        updateGoogleLocationsRequest(geoArray[0], googleKeywordListId);
      }
      if (selectedGoogleRows?.selectedKeywordGroupRows.length) {
        let selectedKeywordArray = selectedGoogleRows?.selectedKeywordGroupRows;
        let keywordArray = [];
        for (let i = 0; i < selectedKeywordArray.length; i++) {
          // Search for index value in array of
          let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
          keywordArray.push(toPush);
        }
        updateGoogleKeywordsRequest(keywordArray[0], googleLocationId);
      }
      setIsTargetSubmitted(true);
      completeStep(4);
    } catch (e) {
      setError({ isError: true, message: e });
    }
  };
  const { displayAllComponents, displayGoogleComponent, displayFacebookComponent } = displayState;
  return (
    <>
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
        googleGeoTargeting={googleGeoTargeting}
        googleKeywords={googleKeywords}
        
      />
      {advTargeting && <ExpandedTargetingPage 
        googleTableState={googleTableState}
        setGoogleTableState={setGoogleTableState}
        setSelectedGoogleRows={setSelectedGoogleRows}
        selectedGoogleRows={selectedGoogleRows}
        googleGeoTargeting={googleGeoTargeting}
        googleKeywords={googleKeywords}
        facebookGeoTargeting={facebookGeoTargeting}
        facebookInterestGroups={facebookInterestGroups}
        fbTableState={fbTableState}
        setFBTableState={setFBTableState}
        setSelectedFacebookRows={setSelectedFacebookRows}
        selectedFacebookRows={selectedFacebookRows}
        error={error}
        displayAllComponents={displayAllComponents}
        displayGoogleComponent={displayGoogleComponent}
        displayFacebookComponent={displayFacebookComponent} 
        currentCampaign={currentCampaign}
        {...props} 
        />}
    </>
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
  facebookInterestGroups: state.fbTargeting.interestList?.fb_interest_plan,
  facebookGeoTargeting: state.fbTargeting.locationList?.fb_location_plan,
  googleGeoTargeting: state.googleTargeting.locationList?.ga_location_plan,
  googleKeywords: state.googleTargeting.keywordList?.ga_keyword_plan,
  hasExpandedTargetingStepBeenCompleted: state.stepTracker.REVIEW_TARGETING_STEP,
  fbGeoLocationId: state.fbTargeting?.locationList?.plan_id,
  fbInterestsListId: state.fbTargeting?.interestList?.plan_id,
  googleKeywordListId: state.googleTargeting?.keywordList?.plan_id,
  googleLocationId: state.googleTargeting?.locationList?.plan_id
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
  updateFBLocationRequest,
  updateFBInterestsRequest,
  updateGoogleKeywordsRequest,
  updateGoogleLocationsRequest,
})(TargetingContainer);
