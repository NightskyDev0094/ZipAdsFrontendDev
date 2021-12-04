import React from 'react';
import { connect } from 'react-redux';
import ExpandedTargetingPage from '../pages/ExpandedTargetingPage';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../../../actions/step.actions';
import {
  updateFBInterests as updateFBInterestsRequest,
  updateFBLocations as updateFBLocationRequest,
} from '../../../actions/targeting.fbActions';
import {
  updateGoogleKeywords as updateGoogleKeywordsRequest,
  updateGoogleLocationPlans as updateGoogleLocationsRequest,
} from '../../../actions/targeting.googleActions';

const ExpandedTargetingContainer = (props) => <ExpandedTargetingPage {...props} />;

const mapStateToProps = (state) => ({
  currentCampaign: state.campaigns?.current,
  facebookInterestGroups: state.fbTargeting.interestList?.fb_interest_plan,
  facebookGeoTargeting: state.fbTargeting.locationList?.fb_location_plan,
  googleTargeting: state.googleTargeting.locationList?.ga_location_plan,
  googleKeywords: state.googleTargeting.keywordList?.ga_keyword_plan,
  hasExpandedTargetingStepBeenCompleted: state.stepTracker.REVIEW_TARGETING_STEP,
  fbGeoLocationId: state.fbTargeting?.locationList?.plan_id,
  fbInterestsListId: state.fbTargeting?.interestList?.plan_id,
  googleKeywordListId: state.googleTargeting?.keywordList?.plan_id,
  googleLocationId: state.googleTargeting?.locationList?.plan_id
});

export default connect(mapStateToProps, {
  completeStep,
  updateFBLocationRequest,
  updateFBInterestsRequest,
  updateGoogleKeywordsRequest,
  updateGoogleLocationsRequest,
  completeStep,
})(ExpandedTargetingContainer);
