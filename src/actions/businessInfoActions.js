import axios from 'axios';
import {
  GET_BUSINESS_INFOS,
  SET_BUSINESS_INFO_LOADING,
  DELETE_BUSINESS_INFO,
  SAVE_BUSINESS_INFO,
  UPDATE_BUSINESS_INFO,
} from './types';
import { SERVER_URL } from '../environmentVariables';

// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

// Get Ads From Server
export const getBusinessInfo = () => async (dispatch, getState) => {
  setBusinessInfoLoading();
  axios
    .get(`${SERVER_URL}/api/business-info/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_BUSINESS_INFOS,
        payload: res.data,
      });
    })
    .catch(
      (err) => {
        console.log(err);
      }
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete facebook feed ad from server
export const deleteBusinessInfo = (id) => (dispatch, getState) => {
  setBusinessInfoLoading();
  axios.delete(`${SERVER_URL}/api/business-info/${id}/`, tokenConfig(getState)).then((res) => {
    // dispatch(createMessage({ deleteBusinessInfo: "Ad Deleted" }));
    dispatch({
      type: DELETE_BUSINESS_INFO,
      payload: id,
    });
  });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Update facebook feed ad on server
export const updateBusinessInfo = (businessInfo, id) => (dispatch, getState) => {
  setBusinessInfoLoading();
  axios
    .put(`${SERVER_URL}/api/business-info/${id}/`, businessInfo, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ updateBusinessInfo: "Ad Updated" }));
      dispatch({
        type: UPDATE_BUSINESS_INFO,
        payload: id,
      });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addBusinessInfo = (businessInfo) => (dispatch, getState) => {
  setBusinessInfoLoading();
  axios
    .post(`${SERVER_URL}/api/business-info/`, businessInfo, config)
    .then((res) => {
      // dispatch(createMessage({ addBusinessInfo: "Ad Added" }));
      dispatch({
        type: SAVE_BUSINESS_INFO,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err)
    });
};

// Set Loading state
export const setBusinessInfoLoading = () => ({
  type: SET_BUSINESS_INFO_LOADING,
});
