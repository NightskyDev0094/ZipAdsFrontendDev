import axios from 'axios';
import {
  GET_GOOGLE_MANAGER_ACCOUNTS,
  DELETE_GOOGLE_MANAGER_ACCOUNT,
  SAVE_GOOGLE_MANAGER_ACCOUNT,
  SET_GOOGLE_MANAGER_ACCOUNT_LOADING,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Get ad accounts from server
export const getGoogleManagerAccounts = () => (dispatch, getState) => {
  setGoogleManagerAccountLoading();
  axios
    .get(`${SERVER_URL}/api/google-manager-account/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_GOOGLE_MANAGER_ACCOUNTS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Google ad account from server
export const deleteGoogleManagerAccounts = (id) => (dispatch, getState) => {
  setGoogleManagerAccountLoading();
  axios
    .delete(`${SERVER_URL}/api/google-manager-account/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({
          deleteGoogleManagerAccounts: 'Manager Account Deleted',
        })
      );
      dispatch({
        type: DELETE_GOOGLE_MANAGER_ACCOUNT,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add Account to server
export const addGoogleManagerAccounts = (GoogleManagerAccount) => (dispatch, getState) => {
  setGoogleManagerAccountLoading();
  axios
    .post(`${SERVER_URL}/api/google-manager-account/`, GoogleManagerAccount, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addGoogleManagerAccounts: 'Manager Added' }));
      dispatch({
        type: SAVE_GOOGLE_MANAGER_ACCOUNT,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};
// Set loading state
export const setGoogleManagerAccountLoading = () => ({
  type: SET_GOOGLE_MANAGER_ACCOUNT_LOADING,
});
