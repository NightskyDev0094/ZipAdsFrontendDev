import {
  GET_BUSINESS_INFOS,
  SET_BUSINESS_INFO_LOADING,
  DELETE_BUSINESS_INFO,
  SAVE_BUSINESS_INFO,
  UPDATE_BUSINESS_INFO,
  CLEAR_ERRORS
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  businessInfos: [],
  businessInfoLoading: false,
  error: null,
  businessInfoCreationSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSINESS_INFOS:
      return {
        ...state,
        businessInfos: action.payload,
        businessInfoLoading: false,
      };

    case DELETE_BUSINESS_INFO:
      return {
        ...state,
        businessInfos: state.businessInfos.filter(
          (businessInfo) => businessInfo.id !== action.payload
        ),
      };
    case SAVE_BUSINESS_INFO:
      return {
        ...state,
        // businessInfos: [...state.businessInfos, action.payload],
        businessInfoLoading: false,
        businessInfoCreationSuccess: true,
        current: action.payload,
      };
    case SET_BUSINESS_INFO_LOADING:
      return {
        ...state,
        businessInfoLoading: true,
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
