import axios from 'axios';
import {
  SET_FB_PAGES,
  GET_FB_PAGES,
  DELETE_FB_PAGE,
  SAVE_FB_PAGE,
  SET_FB_PAGE_LOADING,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Set ad accounts to list
export const setFbPageList = (data) => (dispatch) => {
  setFbPageLoading();
  try {
    dispatch({
      type: SET_FB_PAGES,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get Facebook ad accounts from server
export const getFbPages = () => (dispatch, getState) => {
  setFbPageLoading();
  axios
    .get(`${SERVER_URL}/api/fb-page-id/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FB_PAGES,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Facebook Ad accounts from server
export const deleteFbPages = (id) => (dispatch, getState) => {
  setFbPageLoading();
  axios
    .delete(`${SERVER_URL}/api/fb-page-id/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteFbPages: 'Ad Deleted' }));
      dispatch({
        type: DELETE_FB_PAGE,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add Account to API
export const addFbPages = (FbPage) => (dispatch, getState) => {
  setFbPageLoading();
  axios
    .post(`${SERVER_URL}/api/fb-page-id/`, FbPage, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFbPages: 'Ad Added' }));
      dispatch({
        type: SAVE_FB_PAGE,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Set loading state
export const setFbPageLoading = () => ({
  type: SET_FB_PAGE_LOADING,
});
