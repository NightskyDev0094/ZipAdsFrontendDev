import {
  GET_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  SET_SUBSCRIPTION_LOADING,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Subscription state
const initialState = {
  subscriptions: [],
  subscriptionLoading: false,
  error: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.payload
      };
    case UPDATE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: action.payload
      };
    case CREATE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
        success: true,
      };
    case DELETE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: state.subscriptions.filter((subscription) => subscription.id !== action.payload),
      };
    case SET_SUBSCRIPTION_LOADING:
      return {
        ...state,
        subscriptionLoading: true,
      };
    default:
      return state;
  }
};
