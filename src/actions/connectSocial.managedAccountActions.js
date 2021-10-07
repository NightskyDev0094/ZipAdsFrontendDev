import axios from 'axios';
import {
  GET_USER_PROFILE_INFORMATION_ERROR,
  GET_USER_PROFILE_INFORMATION_SUCCESS,
  GET_USER_PROFILE_INFORMATION_LOADING,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_ERROR,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_LOADING,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_SUCCESS,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_SUCCESS,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_ERROR,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_LOADING,
  RESET_MANAGED_ACCOUNT_STATE,
} from './types';
import { SERVER_URL } from '../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

//f104d62377a3a41cfb607cb3dac8d74f3c15d1a669b788cc7d90b022ea4ac272


export const createGoogleBusinessAccount = async (dispatch, business_name) => {
  dispatch({ type: CREATE_GOOGLE_BUSINESS_ACCOUNT_LOADING });
  const formData = new FormData();
  formData.append('business_name', business_name);
  await axios
    .post(`${SERVER_URL}/api/managed-ga-accounts/`, formData, config)
    .then((response) => {
      dispatch({
        type: CREATE_GOOGLE_BUSINESS_ACCOUNT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CREATE_GOOGLE_BUSINESS_ACCOUNT_ERROR,
        payload: err.message,
      });
    });
};

export const createFacebookAccount = async (dispatch, business_name) => {
  const formData = new FormData();
  formData.append('business_name', business_name);

  dispatch({ type: CREATE_FACEBOOK_BUSINESS_ACCOUNT_LOADING });
  await axios
    .post(`${SERVER_URL}/api/create-managed-facebook-ads-account/`, formData, config)
    .then((response) => {
      dispatch({
        type: CREATE_FACEBOOK_BUSINESS_ACCOUNT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CREATE_FACEBOOK_BUSINESS_ACCOUNT_ERROR,
        payload: err.message,
      });
    });
};

export const getUserProfileInformation = () => async  (dispatch, _) => {
  dispatch({ type: GET_USER_PROFILE_INFORMATION_LOADING });
  await axios
    .get(`${SERVER_URL}/api/business-info/`, config)
    .then((response) => {
      dispatch({
        type: GET_USER_PROFILE_INFORMATION_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_PROFILE_INFORMATION_ERROR,
        payload: err.message,
      });
    });
};

export const resetManagedAccountState = (dispatch) => {
  dispatch({
    type: RESET_MANAGED_ACCOUNT_STATE,
  });
};
