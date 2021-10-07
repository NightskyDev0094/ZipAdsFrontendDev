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

// Get ad accounts from server
export const getGoogleAdAccounts = () => (dispatch, getState) => {
  setGoogleAdAccountLoading();
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

// Get ad accounts from Google Api
export const setGoogleAdAccountList = () => (dispatch, getState) => {
  setGoogleAdAccountLoading();
  axios
    .get(`${SERVER_URL}/api/ga-accounts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SET_GOOGLE_AD_ACCOUNTS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Google ad account from server
export const deleteGoogleAdAccounts = (id) => (dispatch, getState) => {
  setGoogleAdAccountLoading();
  axios
    .delete(`${SERVER_URL}/api/google-ad-accounts/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteGoogleAdAccounts: 'Ad Deleted' }));
      dispatch({
        type: DELETE_GOOGLE_AD_ACCOUNT,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add Account to server
export const addGoogleAdAccounts = (GoogleAdAccount) => (dispatch, getState) => {
  setGoogleAdAccountLoading();
  axios
    .post(`${SERVER_URL}/api/google-ad-accounts/`, GoogleAdAccount, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addGoogleAdAccounts: 'Ad Added' }));
      dispatch({
        type: SAVE_GOOGLE_AD_ACCOUNT,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Set loading state
export const setGoogleAdAccountLoading = () => ({
  type: SET_GOOGLE_AD_ACCOUNT_LOADING,
});
