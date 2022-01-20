import {
  GET_CARDS,
  UPDATE_CARDS,
  CREATE_CARDS,
  GET_CLIENT_ID_FOR_CARDS,
  CARD_ERROR,
  CLEAR_ERRORS,
  CLEAR_CARDS_PURCHASE,
  CLEAR_CARD_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  userCards: [],
  userClientId: null,
  error: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...initialState,
        userCards: action.payload
      };
    case UPDATE_CARDS:
      return {
        ...initialState,
        userCards: action.payload
      };
    case CREATE_CARDS:
      return {
        ...initialState,
        userCards: [...state.userCards, action.payload],
        success: true,
      };
    case GET_CLIENT_ID_FOR_CARDS:
      return {
        ...initialState,
        userClientId: action.payload,
      };
    case CARD_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    case CLEAR_CARD_ERRORS:
      return {
        ...initialState,
        error: null,
      };
    case CLEAR_CARDS_PURCHASE:
      return {
        ...initialState,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
