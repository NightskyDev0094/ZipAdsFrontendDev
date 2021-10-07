import {
  GET_GA_CONVERSIONS,
  SET_GA_CONVERSION_LOADING,
  DELETE_GA_CONVERSION,
  SAVE_GA_CONVERSION,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  conversions: [],
  conversionLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GA_CONVERSIONS:
      return {
        ...state,
        conversions: action.payload,
        conversionLoading: false,
      };

    case DELETE_GA_CONVERSION:
      return {
        ...state,
        conversions: state.conversions.filter((conversion) => conversion.id !== action.payload),
      };
    case SAVE_GA_CONVERSION:
      return {
        ...state,
        conversions: [...state.conversions],
      };
    case SET_GA_CONVERSION_LOADING:
      return {
        ...state,
        conversionLoading: true,
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: { 
          ...action.payload,
          isError: true 
        },
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
