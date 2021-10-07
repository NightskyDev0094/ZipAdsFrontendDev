import {
  GET_CREDITS,
  UPDATE_CREDITS,
  CREATE_CREDITS,
  GET_CLIENT_ID_FOR_CREDITS,
  CREDIT_ERROR,
  CLEAR_ERRORS,
  CLEAR_CREDITS_PURCHASE,
  CLEAR_CREDIT_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  userCredits: [],
  userClientId: null,
  error: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CREDITS:
      return {
        ...initialState,
        userCredits: action.payload
      };
    case UPDATE_CREDITS:
      return {
        ...initialState,
        userCredits: action.payload
      };
    case CREATE_CREDITS:
      return {
        ...initialState,
        userCredits: [...state.userCredits, action.payload],
        success: true,
      };
    case GET_CLIENT_ID_FOR_CREDITS:
      return {
        ...initialState,
        userClientId: action.payload,
      };
    case CREDIT_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    case CLEAR_CREDIT_ERRORS:
      return {
        ...initialState,
        error: null,
      };
    case CLEAR_CREDITS_PURCHASE:
      return {
        ...initialState,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
