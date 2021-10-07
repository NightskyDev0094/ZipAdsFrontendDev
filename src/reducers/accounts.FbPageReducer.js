import {
  GET_FB_PAGES,
  SAVE_FB_PAGE,
  DELETE_FB_PAGE,
  SET_FB_PAGES,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook Ad account State
const initialState = {
  pages: null,
  pageList: null,
  current: null,
  fbPageLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FB_PAGES:
      return {
        ...state,
        pages: action.payload,
        fbPageLoading: false,
      };

    case SET_FB_PAGES:
      return {
        ...state,
        pageList: action.payload,
        fbPageLoading: false,
      };

    case DELETE_FB_PAGE:
      return {
        ...state,
        pages: state.pages.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_FB_PAGE:
      return {
        ...state,
        pages: [[...state.pages], action.payload],
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
