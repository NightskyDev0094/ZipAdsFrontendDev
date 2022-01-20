import {
  GET_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTIONS,
  CREATE_SUBSCRIPTIONS,
  GET_CLIENT_ID_FOR_SUBSCRIPTIONS,
  SUBSCRIPTION_ERROR,
  CLEAR_ERRORS,
  CLEAR_SUBSCRIPTIONS_PURCHASE,
  CLEAR_SUBSCRIPTION_ERRORS,
} from '../actions/types';

// Set Subscription state
const initialState = {
  userSubscriptions: [],
  userClientId: null,
  error: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS:
      return {
        ...initialState,
        userSubscriptions: action.payload
      };
    case UPDATE_SUBSCRIPTIONS:
      return {
        ...initialState,
        userSubscriptions: action.payload
      };
    case CREATE_SUBSCRIPTIONS:
      return {
        ...initialState,
        userSubscriptions: [...state.userSubscriptions, action.payload],
        success: true,
      };
    case GET_CLIENT_ID_FOR_SUBSCRIPTIONS:
      return {
        ...initialState,
        userClientId: action.payload,
      };
    case SUBSCRIPTION_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    case CLEAR_SUBSCRIPTION_ERRORS:
      return {
        ...initialState,
        error: null,
      };
    case CLEAR_SUBSCRIPTIONS_PURCHASE:
      return {
        ...initialState,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
