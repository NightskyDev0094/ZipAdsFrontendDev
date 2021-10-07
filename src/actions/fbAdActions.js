import axios from 'axios';
import {
  GET_ADS,
  SET_LOADING,
  DELETE_AD,
  SAVE_AD,
  POST_AD,
  UPDATE_AD,
  UPDATE_SOCIALS,
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Ads From Server
export const getFBFeedAds = () => (dispatch, getState) => {
  setLoading();
  axios
    .get(`${SERVER_URL}/api/fb-feed-ads/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ADS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete facebook feed ad from server
export const deleteFBFeedAd = (id) => (dispatch, getState) => {
  setLoading();
  axios.delete(`${SERVER_URL}/api/fb-feed-ads/${id}/`, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ deleteFBFeedAd: "Ad Deleted" }));
    dispatch({
      type: DELETE_AD,
      payload: id,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Update facebook feed ad on server
export const updateFBFeedAd = (fbFeedAd, id) => (dispatch, getState) => {
  setLoading();
  axios.put(`${SERVER_URL}/api/fb-feed-ads/${id}/`, fbFeedAd, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ updateFBFeedAd: "Ad Updated" }));
    dispatch({
      type: UPDATE_AD,
      payload: id,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addFBFeedAd = (fbFeedAd) => (dispatch, getState) => {
  setLoading();
  axios.post(`${SERVER_URL}/api/fb-feed-ads/`, fbFeedAd, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ addFBFeedAd: "Ad Added" }));
    dispatch({
      type: SAVE_AD,
      payload: res,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post to Facebook
export const postFBFeedAd = (ad_id, dispatch) => {
 const token = localStorage.getItem('token');
 const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
};
  setLoading();
  axios.post(`${SERVER_URL}/api/post-facebook-ad/`, ad_id, config).then((res) => {
    // dispatch(createMessage({ addFBFeedAd: "Ad Added" }));
    dispatch({
      type: POST_AD,
      payload: res,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Set Loading state
export const setLoading = () => ({
  type: SET_LOADING,
});
