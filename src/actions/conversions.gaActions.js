import axios from 'axios';
import {
  GET_GA_CONVERSIONS,
  SET_GA_CONVERSION_LOADING,
  DELETE_GA_CONVERSION,
  SAVE_GA_CONVERSION,
  UPDATE_GA_CONVERSION,
  CLEAR_ERRORS,
  GET_ERRORS
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Ads From Server
export const getConversions = () => (dispatch, getState) => {
  setConversionLoading();
  axios
    .get(`${SERVER_URL}/api/ga-conversion/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_GA_CONVERSIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Delete facebook feed ad from server
export const deleteConversion = (id) => (dispatch, getState) => {
  setConversionLoading();
  axios
    .delete(`${SERVER_URL}/api/ga-conversion/${id}/`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteConversion: "Ad Deleted" }));
      dispatch({
        type: DELETE_GA_CONVERSION,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Update facebook feed ad on server
export const updateConversion = (Conversion, id) => (dispatch, getState) => {
  setConversionLoading();
  axios
    .put(`${SERVER_URL}/api/ga-conversion/${id}/`, Conversion, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ updateConversion: "Ad Updated" }));
      dispatch({
        type: UPDATE_GA_CONVERSION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Post Add to API
export const addConversion = (Conversion) => (dispatch, getState) => {
  setConversionLoading();
  axios
    .post(`${SERVER_URL}/api/ga-add-conversion/`, Conversion, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ addConversion: "Ad Added" }));
      dispatch({
        type: SAVE_GA_CONVERSION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Set Loading state
export const setConversionLoading = () => ({
  type: SET_GA_CONVERSION_LOADING,
});

export const clearConversionErrors = () => (dispatch, _) => {
  dispatch({ type: CLEAR_ERRORS });
};
