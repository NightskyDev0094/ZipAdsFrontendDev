import axios from 'axios';
import {
  SET_FB_AD_ACCOUNTS,
  GET_FB_AD_ACCOUNTS,
  DELETE_FB_AD_ACCOUNT,
  SAVE_FB_AD_ACCOUNT,
  SET_FB_AD_ACCOUNT_LOADING,
  SAVE_FB_TOKEN,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Set ad accounts to list
export const setFbAdAccountList = (data) => (dispatch) => {
  setFbAdAccountLoading();
  try {
    dispatch({
      type: SET_FB_AD_ACCOUNTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get Facebook ad accounts from server
export const getFbAdAccounts = () => (dispatch, getState) => {
  setFbAdAccountLoading();
  axios
    .get(`${SERVER_URL}/api/fb-ad-account/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FB_AD_ACCOUNTS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Facebook Ad accounts from server
export const deleteFbAdAccounts = (id) => (dispatch, getState) => {
  setFbAdAccountLoading();
  axios
    .delete(`${SERVER_URL}/api/fb-ad-account/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteFbAdAccounts: 'Ad Deleted' }));
      dispatch({
        type: DELETE_FB_AD_ACCOUNT,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add Account to API
export const addFbAdAccounts = (FbAdAccount) => (dispatch, getState) => {
  setFbAdAccountLoading();
  axios
    .post(`${SERVER_URL}/api/fb-ad-account/`, FbAdAccount, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFbAdAccounts: 'Ad Added' }));
      dispatch({
        type: SAVE_FB_AD_ACCOUNT,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post fb Token to API
export const addFbToken = (token) => (dispatch, getState) => {
  setFbAdAccountLoading();
  axios
    .post(`${SERVER_URL}/api/fb-token/`, token, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFbToken: 'Ad Added' }));
      dispatch({
        type: SAVE_FB_TOKEN,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Set loading state
export const setFbAdAccountLoading = () => ({
  type: SET_FB_AD_ACCOUNT_LOADING,
});
