import {
  GET_USER,
  SET_USER_LOADING,
  DELETE_USER,
  SAVE_USER,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  user: [],
  userLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        // current: action.payload[0],
        userLoading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter((user) => user.id !== action.payload),
      };
    case SAVE_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case SET_USER_LOADING:
      return {
        ...state,
        userLoading: true,
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
