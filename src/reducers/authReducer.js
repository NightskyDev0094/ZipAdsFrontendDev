import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_TOKEN,
  CLEAR_ERRORS
} from '../actions/types';

// Set User Authentication state
const initialState = {
  token: localStorage.getItem('token'),
  tokenTime: null,
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  user: null,
  errors: {
    isError: false,
    errorMessage: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        tokenTime: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
