import {
  SET_GOOGLE_AD_ACCOUNTS,
  GET_GOOGLE_AD_ACCOUNTS,
  DELETE_GOOGLE_AD_ACCOUNT,
  SAVE_GOOGLE_AD_ACCOUNT,
  SAVE_GOOGLE_TOKEN,
  GET_ERRORS,
} from "../actions/types";

// set Google ad account state
const initialState = {
  googleAdAccounts: null,
  googleAdAccountList: null,
  googleToken: null,
  current: null,
  googleAdAccountLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_AD_ACCOUNTS:
      return {
        ...state,
        googleAdAccounts: action.payload,
        googleAdAccountLoading: false,
      };

    case SET_GOOGLE_AD_ACCOUNTS:
      return {
        ...state,
        googleAdAccountList: action.payload,
        googleAdAccountLoading: false,
      };

    case DELETE_GOOGLE_AD_ACCOUNT:
      return {
        ...state,
        googleAdAccounts: state.googleAdAccounts.filter(
          (interest) => interest.id !== action.payload
        ),
      };
    case SAVE_GOOGLE_AD_ACCOUNT:
      return {
        ...state,
        googleAdAccounts: [[...state.googleAdAccounts], action.payload],
      };
    case SAVE_GOOGLE_TOKEN:
      return {
        ...state,
        googleToken: [[...state.googleAdAccounts], action.payload],
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
