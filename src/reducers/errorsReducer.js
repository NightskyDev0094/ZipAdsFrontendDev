import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

// Set error messages to state
const initialState = {
  msg: {},
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
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
