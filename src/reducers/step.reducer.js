import {
  STEP_COMPLETED,
  CREATE_CAMPAIGN_STEP,
  SELECT_CAMPAIGN_STEP,
  CONNECT_SOCIAL_STEP,
  TARGET_AUDIENCE_STEP,
  REVIEW_TARGETING_STEP,
  BUDGET_STEP,
  OBJECTIVE_STEP,
  PURCHASE_CREDITS_STEP,
  POST_AD_STEP,
  STEP_UNSET,
} from '../actions/types';

const intitialState = {
  SELECT_CAMPAIGN_STEP: STEP_UNSET,
  CREATE_CAMPAIGN_STEP: STEP_UNSET,
  CONNECT_SOCIAL_STEP: STEP_UNSET,
  TARGET_AUDIENCE_STEP: STEP_UNSET,
  OBJECTIVE_STEP: STEP_UNSET,
  REVIEW_TARGETING_STEP: STEP_UNSET,
  PURCHASE_CREDITS_STEP: STEP_UNSET,
  POST_AD_STEP: STEP_UNSET,
  BUDGET_STEP: STEP_UNSET,
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case SELECT_CAMPAIGN_STEP:
      return {
        ...intitialState,
        SELECT_CAMPAIGN_STEP: STEP_COMPLETED,
      };
    case CONNECT_SOCIAL_STEP:
      return {
        ...intitialState,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
      };
    case CREATE_CAMPAIGN_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
      };
    case TARGET_AUDIENCE_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
        TARGET_AUDIENCE_STEP: STEP_COMPLETED,
      };
    case REVIEW_TARGETING_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
        TARGET_AUDIENCE_STEP: STEP_COMPLETED,
        REVIEW_TARGETING_STEP: STEP_COMPLETED,
      };
    case BUDGET_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
        TARGET_AUDIENCE_STEP: STEP_COMPLETED,
        REVIEW_TARGETING_STEP: STEP_COMPLETED,
        BUDGET_STEP: STEP_COMPLETED,
      };
    case OBJECTIVE_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
        TARGET_AUDIENCE_STEP: STEP_COMPLETED,
        REVIEW_TARGETING_STEP: STEP_COMPLETED,
        BUDGET_STEP: STEP_COMPLETED,
        OBJECTIVE_STEP: STEP_COMPLETED,
      };
    case PURCHASE_CREDITS_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_COMPLETED,
        CONNECT_SOCIAL_STEP: STEP_COMPLETED,
        TARGET_AUDIENCE_STEP: STEP_COMPLETED,
        REVIEW_TARGETING_STEP: STEP_COMPLETED,
        BUDGET_STEP: STEP_COMPLETED,
        OBJECTIVE_STEP: STEP_COMPLETED,
        PURCHASE_CREDITS_STEP: STEP_COMPLETED,
      };
    case POST_AD_STEP:
      return {
        ...intitialState,
        CREATE_CAMPAIGN_STEP: STEP_UNSET,
        CONNECT_SOCIAL_STEP: STEP_UNSET,
        TARGET_AUDIENCE_STEP: STEP_UNSET,
        REVIEW_TARGETING_STEP: STEP_UNSET,
        BUDGET_STEP: STEP_UNSET,
        OBJECTIVE_STEP: STEP_UNSET,
        PURCHASE_CREDITS_STEP: STEP_UNSET,
        POST_AD_STEP: STEP_UNSET,
      };
    default:
      return state;
  }
};
