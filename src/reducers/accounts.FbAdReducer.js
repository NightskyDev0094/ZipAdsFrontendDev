import {
  GET_FB_AD_ACCOUNTS,
  SAVE_FB_AD_ACCOUNT,
  DELETE_FB_AD_ACCOUNT,
  SET_FB_AD_ACCOUNTS,
  SAVE_FB_TOKEN,
  GET_ERRORS,
  CLEAR_ERRORS
} from '../actions/types';

//
// Set Facebook Ad account State
const initialState = {
  adAccounts: [],
  adAccountList: null,
  fbToken: null,
  current: null,
  fbAdAccountLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FB_AD_ACCOUNTS:
      return {
        ...state,
        adAccounts: action.payload,
        fbAdAccountLoading: false,
      };

    case SET_FB_AD_ACCOUNTS:
      return {
        ...state,
        adAccountList: action.payload,
        fbAdAccountLoading: false,
      };

    case DELETE_FB_AD_ACCOUNT:
      return {
        ...state,
        adAccounts: state.adAccounts.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_FB_AD_ACCOUNT:
      return {
        ...state,
        adAccounts: [[...state.adAccounts], action.payload],
      };
    case SAVE_FB_TOKEN:
      return {
        ...state,
        fbToken: [[...state.adAccounts], action.payload],
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
        error: null
      }  
    default:
      return state;
  }
};
