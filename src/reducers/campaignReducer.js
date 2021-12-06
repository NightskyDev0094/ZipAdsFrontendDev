import {
  GET_CAMPAIGNS,
  SET_CAMPAIGN_LOADING,
  DELETE_CAMPAIGN,
  SAVE_CAMPAIGN,
  GET_ERRORS,
  MAKE_CURRENT,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  current: {},
  campaigns: [],
  campaignLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
        current: action.payload[action.payload.length - 1],
        // current: action.payload[0],
        campaignLoading: false,
      };

    case DELETE_CAMPAIGN:
      return {
        ...state,
        campaigns: state.campaigns.filter((campaign) => campaign.id !== action.payload),
      };
    case SAVE_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
        current: action.payload,
      };
    case SET_CAMPAIGN_LOADING:
      return {
        ...state,
        campaignLoading: true,
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case MAKE_CURRENT:
      return {
        ...state,
        current: action.payload,
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
