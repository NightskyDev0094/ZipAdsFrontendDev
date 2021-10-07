import axios from 'axios';
import {
  SET_GOOGLE_AD_ACCOUNTS,
  GET_GOOGLE_AD_ACCOUNTS,
  DELETE_GOOGLE_AD_ACCOUNT,
  SAVE_GOOGLE_AD_ACCOUNT,
  SET_GOOGLE_AD_ACCOUNT_LOADING,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Set ad accounts to list
export const setGaAdAccountList = (data) => (dispatch) => {
  setGaAdAccountLoading();
  try {
    dispatch({
      type: SET_GOOGLE_AD_ACCOUNTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get Facebook ad accounts from server
export const getGaAdAccounts = () => (dispatch, getState) => {
  setGaAdAccountLoading();
  axios
    .get(`${SERVER_URL}/api/google-ad-accounts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_GOOGLE_AD_ACCOUNTS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Facebook Ad accounts from server
export const deleteGaAdAccounts = (id) => (dispatch, getState) => {
  setGaAdAccountLoading();
  axios
    .delete(`${SERVER_URL}/api/fb-ad-account/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteGaAdAccounts: 'Ad Deleted' }));
      dispatch({
        type: DELETE_GOOGLE_AD_ACCOUNT,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add Account to API
export const addGaAdAccounts = (FbAdAccount) => (dispatch, getState) => {
  setGaAdAccountLoading();
  axios
    .post(`${SERVER_URL}/api/fb-ad-account/`, FbAdAccount, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addGaAdAccounts: 'Ad Added' }));
      dispatch({
        type: SAVE_GOOGLE_AD_ACCOUNT,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Set loading state
export const setGaAdAccountLoading = () => ({
  type: SET_GOOGLE_AD_ACCOUNT_LOADING,
});
