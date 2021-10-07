import {
  STEP_COMPLETED,
  CREATE_CAMPAIGN_STEP,
  CONNECT_SOCIAL_STEP,
  TARGET_AUDIENCE_STEP,
  REVIEW_TARGETING_STEP,
  BUDGET_STEP,
  OBJECTIVE_STEP,
  PURCHASE_CREDITS_STEP,
  POST_AD_STEP,
} from './types';

/**
 Becuase we are using different ways in which to connect to the store we have to 
 create a method that detemermines and checks for param datatype and catchs 
 those that are wrong. We cannot do method overloading without typescript. 
 */
export const completeStep =  dispatch => stepNumber => {
  if(typeof(stepNumber) === 'function' && typeof(dispatch) === 'number'){
    completeStepByNormalFunction(stepNumber, dispatch);
  } else {
    completeStepByCurrying(dispatch)(stepNumber);
  }
}

export const completeStepByCurryingWithMultipleParams = (stepNumber) => (dispatch, _) => {
  debugger;
  switch (stepNumber) {
    case 1:
      dispatch({ type: CREATE_CAMPAIGN_STEP });
      break;
    case 2:
      dispatch({ type: CONNECT_SOCIAL_STEP });
      break;
    case 3:
      dispatch({ type: TARGET_AUDIENCE_STEP });
      break;
    case 4:
      dispatch({ type: REVIEW_TARGETING_STEP });
      break;
    case 5:
      dispatch({ type: BUDGET_STEP });
      break;
    case 6:
      dispatch({ type: OBJECTIVE_STEP });
      break;
    case 7:
      dispatch({ type: PURCHASE_CREDITS_STEP });
      break;
    case 8:
      dispatch({ type: POST_AD_STEP });
      break;
  }
}


export const completeStepByCurrying = dispatch => stepNumber => {
  switch (stepNumber) {
    case 1:
      dispatch({ type: CREATE_CAMPAIGN_STEP });
      break;
    case 2:
      dispatch({ type: CONNECT_SOCIAL_STEP });
      break;
    case 3:
      dispatch({ type: TARGET_AUDIENCE_STEP });
      break;
    case 4:
      dispatch({ type: REVIEW_TARGETING_STEP });
      break;
    case 5:
      dispatch({ type: BUDGET_STEP });
      break;
    case 6:
      dispatch({ type: OBJECTIVE_STEP });
      break;
    case 7:
      dispatch({ type: PURCHASE_CREDITS_STEP });
      break;
    case 8:
      dispatch({ type: POST_AD_STEP });
      break;
  }
};


export const completeStepByNormalFunction = (dispatch, stepNumber) => {
  switch (stepNumber) {
    case 1:
      dispatch({ type: CREATE_CAMPAIGN_STEP });
      break;
    case 2:
      dispatch({ type: CONNECT_SOCIAL_STEP });
      break;
    case 3:
      dispatch({ type: TARGET_AUDIENCE_STEP });
      break;
    case 4:
      dispatch({ type: REVIEW_TARGETING_STEP });
      break;
    case 5:
      dispatch({ type: BUDGET_STEP });
      break;
    case 6:
      dispatch({ type: OBJECTIVE_STEP });
      break;
    case 7:
      dispatch({ type: PURCHASE_CREDITS_STEP });
      break;
    case 8:
      dispatch({ type: POST_AD_STEP });
      break;
  }
};
