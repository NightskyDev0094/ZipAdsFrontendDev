import {
  SET_GOOGLE_AD_ACCOUNTS,
  GET_GOOGLE_AD_ACCOUNTS,
  DELETE_GOOGLE_AD_ACCOUNT,
  SAVE_GOOGLE_AD_ACCOUNT,
  SAVE_GOOGLE_TOKEN,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../actions/types';

// set Google ad account state
const initialState = {
  adAccounts: [],
  adAccountList: null,
  current: null,
  gaAdAccountLoading: false,
  gaToken: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_AD_ACCOUNTS:
      return {
        ...state,
        adAccounts: action.payload,
        gaAdAccountLoading: false,
      };

    case SET_GOOGLE_AD_ACCOUNTS:
      return {
        ...state,
        adAccountList: action.payload,
        gaAdAccountLoading: false,
      };

    case DELETE_GOOGLE_AD_ACCOUNT:
      return {
        ...state,
        adAccounts: state.adAccounts.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_GOOGLE_AD_ACCOUNT:
      return {
        ...state,
        adAccounts: [[...state.adAccounts], action.payload],
      };
    case SAVE_GOOGLE_TOKEN:
      return {
        ...state,
        gaToken: [[...state.adAccounts], action.payload],
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
