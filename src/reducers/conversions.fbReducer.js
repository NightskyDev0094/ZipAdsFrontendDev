import {
  GET_FB_PIXELS,
  SET_FB_PIXEL_LOADING,
  DELETE_FB_PIXEL,
  SAVE_FB_PIXEL,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook feed ad state
const initialState = {
  pixels: [],
  pixelLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FB_PIXELS:
      return {
        ...state,
        pixels: action.payload,
        pixelLoading: false,
      };

    case DELETE_FB_PIXEL:
      return {
        ...state,
        pixels: state.pixels.filter((pixel) => pixel.id !== action.payload),
      };
    case SAVE_FB_PIXEL:
      return {
        ...state,
        pixels: [...state.pixels],
      };
    case SET_FB_PIXEL_LOADING:
      return {
        ...state,
        pixelLoading: true,
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
