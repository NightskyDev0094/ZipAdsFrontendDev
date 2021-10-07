import axios from 'axios';
import { GET_ADS, SET_LOADING, DELETE_AD, UPDATE_AD, SAVE_AD, POST_AD } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get ads from server
export const getGoogleSearchAds = () => (dispatch, getState) => {
  setLoading();
  axios
    .get(`http://localhost:8000/api/google-search-ads/`, tokenConfig(getState))
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

// Delete ads on server
export const deleteGoogleSearchAd = (id) => (dispatch, getState) => {
  setLoading();
  axios
    .delete(`http://localhost:8000/api/google-search-ads/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteGoogleSearchAd: 'Ad Deleted' }));
      dispatch({
        type: DELETE_AD,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Update google search ad on server
export const updateGoogleSearchAd = (googleSearchAd, id) => (dispatch, getState) => {
  setLoading();
  axios
    .put(`http://localhost:8000/api/fb-feed-ads/${id}/`, googleSearchAd, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateGoogleSearchAd: 'Ad Updated' }));
      dispatch({
        type: UPDATE_AD,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addGoogleSearchAd = (GoogleSearchAd) => (dispatch, getState) => {
  setLoading();
  axios
    .post(`http://localhost:8000/api/google-search-ads/`, GoogleSearchAd, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addGoogleSearchAd: 'Ad Added' }));
      dispatch({
        type: SAVE_AD,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post to Google
export const postGoogleSearchAd = (GoogleSearchAdId, dispatch) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };

  setLoading();
  axios
    .post(`http://localhost:8000/api/post-google-search-ad/`, GoogleSearchAdId, config)
    .then((res) => {
      dispatch(createMessage({ addGoogleSearchAd: 'Ad Added' }));
      dispatch({
        type: POST_AD,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Set Loading
export const setLoading = () => ({
  type: SET_LOADING,
});
