import {
  GET_CARDS,
  UPDATE_CARDS,
  CREATE_CARDS,
  DELETE_CARDS,
  SET_CARDS_LOADING,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  userCards: [],
  cardsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...initialState,
        userCards: action.payload,
        cardsLoading: false,
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
    case SET_CARDS_LOADING:
      return {
        ...state,
        cardsLoading: true,
      };
    default:
      return state;
  }
};
