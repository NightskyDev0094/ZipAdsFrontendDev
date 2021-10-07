import {
  GET_GOOGLE_MANAGER_ACCOUNTS,
  DELETE_GOOGLE_MANAGER_ACCOUNT,
  SAVE_GOOGLE_MANAGER_ACCOUNT,
  GET_ERRORS,
  CLEAR_ERRORS
} from '../actions/types';

// set Google ad account state
const initialState = {
  googleManagerAccounts: null,
  googleManagerAccountLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_MANAGER_ACCOUNTS:
      return {
        ...state,
        googleManagerAccounts: action.payload,
        googleManagerAccountLoading: false,
      };

    case DELETE_GOOGLE_MANAGER_ACCOUNT:
      return {
        ...state,
        googleManagerAccounts: state.googleManagerAccounts.filter(
          (interest) => interest.id !== action.payload
        ),
      };
    case SAVE_GOOGLE_MANAGER_ACCOUNT:
      return {
        ...state,
        googleManagerAccounts: [[...state.googleManagerAccounts], action.payload],
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
