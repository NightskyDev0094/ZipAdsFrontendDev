import {
  GET_PAYMENTS,
  UPDATE_PAYMENTS,
  CREATE_PAYMENTS,
  GET_CLIENT_ID_FOR_PAYMENTS,
  PAYMENT_ERROR,
  CLEAR_ERRORS,
  CLEAR_PAYMENTS_PURCHASE,
  CLEAR_PAYMENT_ERRORS,
  SET_PAYMENTS_LOADING
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  userPayments: [],
  userClientId: null,
  error: null,
  success: null,
  cardsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENTS:
      return {
        ...initialState,
        userPayments: action.payload,
        cardsLoading: false,
      };
    case UPDATE_PAYMENTS:
      return {
        ...initialState,
        userPayments: action.payload
      };
    case CREATE_PAYMENTS:
      return {
        ...initialState,
        userPayments: [...state.userPayments, action.payload],
        success: true,
      };
    case GET_CLIENT_ID_FOR_PAYMENTS:
      return {
        ...initialState,
        userClientId: action.payload,
      };
    case PAYMENT_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    case CLEAR_PAYMENT_ERRORS:
      return {
        ...initialState,
        error: null,
      };
    case CLEAR_PAYMENTS_PURCHASE:
      return {
        ...initialState,
        error: null,
        success: null
      };
    case SET_PAYMENTS_LOADING:
        return {
          ...state,
          paymentsLoading: true,
        };
    default:
      return state;
  }
};
