import { GET_ADS, DELETE_AD, SAVE_AD, CLEAR_ADS, SET_LOADING, GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

// Set Google search ad state
const initialState = {
  ads: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADS:
      return {
        ...state,
        ads: action.payload,
        loading: false,
      };

    case DELETE_AD:
      return {
        ...state,
        ads: state.ads.filter((ad) => ad.id !== action.payload),
      };
    case SAVE_AD:
      return {
        ...state,
        ads: [[...state.ads], action.payload],
      };
    case CLEAR_ADS:
      return {
        ...state,
        ads: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
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
