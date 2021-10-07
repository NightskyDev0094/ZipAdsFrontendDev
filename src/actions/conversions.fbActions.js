import axios from 'axios';
import {
  GET_FB_PIXELS,
  SET_FB_PIXEL_LOADING,
  DELETE_FB_PIXEL,
  SAVE_FB_PIXEL,
  UPDATE_FB_PIXEL,
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Ads From Server
export const getPixels = () => (dispatch, getState) => {
  setPixelLoading();
  axios
    .get(`${SERVER_URL}/api/fb-pixel/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FB_PIXELS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete facebook feed ad from server
export const deletePixel = (id) => (dispatch, getState) => {
  setPixelLoading();
  axios.delete(`${SERVER_URL}/api/fb-pixel/${id}/`, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ deletePixel: "Ad Deleted" }));
    dispatch({
      type: DELETE_FB_PIXEL,
      payload: id,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Update facebook feed ad on server
export const updatePixel = (Pixel, id) => (dispatch, getState) => {
  setPixelLoading();
  axios.put(`${SERVER_URL}/api/fb-pixel/${id}/`, Pixel, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ updatePixel: "Ad Updated" }));
    dispatch({
      type: UPDATE_FB_PIXEL,
      payload: res.data,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addPixel = (Pixel) => (dispatch, getState) => {
  setPixelLoading();
  axios
    .post(`${SERVER_URL}/api/create-facebook-pixel/`, Pixel, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ addPixel: "Ad Added" }));
      dispatch({
        type: SAVE_FB_PIXEL,
        payload: res.data,
      });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Set Loading state
export const setPixelLoading = () => ({
  type: SET_FB_PIXEL_LOADING,
});
