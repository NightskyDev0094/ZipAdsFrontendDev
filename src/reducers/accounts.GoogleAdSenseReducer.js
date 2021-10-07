import {
  GET_GOOGLE_AD_SENSE_DATA_SUCCESS,
  GET_GOOGLE_AD_SENSE_DATA_ERROR,
  GET_GOOGLE_AD_SENSE_DATA_LOADING,
  CLEAR_ERRORS
} from '../actions/types';

// set Google ad account state
const initialState = {
  googleAdSenseData: null,
  googleAdSenseError: null,
  isGoogleAdSenseLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_AD_SENSE_DATA_SUCCESS:
      return { ...state, googleAdSenseData: action.payload };
    case GET_GOOGLE_AD_SENSE_DATA_LOADING:
      return { ...state, isGoogleAdSenseLoading: true };
    case GET_GOOGLE_AD_SENSE_DATA_ERROR:
      return {
        ...state,
        isGoogleAdSenseLoading: false,
        googleAdSenseError: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        googleAdSenseError: null,
      };
    default:
      return initialState;
  }
};
