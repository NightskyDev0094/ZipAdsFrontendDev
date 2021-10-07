import axios from 'axios';
import {
  GET_GOOGLE_AD_SENSE_DATA_SUCCESS,
  GET_GOOGLE_AD_SENSE_DATA_ERROR,
  GET_GOOGLE_AD_SENSE_DATA_LOADING,
} from './types';

export const setGoogleAdSenseLoading = (dispatch) => {
  dispatch({ type: GET_GOOGLE_AD_SENSE_DATA_LOADING });
};
import { SERVER_URL } from '../environmentVariables';

export const getGoogleAdSenseData = (dispatch, googleAdAccountId) => {
  const token = localStorage.getItem('token');
  const configHeaders = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const postBody = { google_ad_account_id: googleAdAccountId };
  axios
    .post(`${SERVER_URL}/api/google-keyword-stats/`, postBody, configHeaders)
    .then((res) => dispatch({ type: GET_GOOGLE_AD_SENSE_DATA_SUCCESS, payload: res.data }))
    .catch((err) => {
      debugger
      console.error(`Error: ${err}`);
      dispatch({ type: GET_GOOGLE_AD_SENSE_DATA_ERROR, payload: err });
    });
};
