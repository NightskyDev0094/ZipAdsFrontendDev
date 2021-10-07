import axios from 'axios';
import {
  SET_INTERESTS,
  GET_INTERESTS,
  UPDATE_INTERESTS,
  DELETE_INTEREST,
  SAVE_INTEREST,
  SET_LOCATIONS,
  UPDATE_LOCATION,
  GET_LOCATIONS,
  UPDATE_LOCATIONS,
  DELETE_LOCATION,
  SAVE_LOCATION,
  SET_INTEREST_LOADING,
  SET_LOCATION_LOADING,
  LOCATIONS_ERROR,
  INTERESTS_ERROR,
  GET_ERRORS,
  RESET_FACEBOOK_LOCATION_STATE,
  RESET_FACEBOOK_INTEREST_STATE,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

// update FB Interests
export const updateFBInterests = (data, id) => (dispatch, getState) => {  
  const jsonifyPayload = JSON.stringify(data);
  let formData = new FormData()
  formData.append("interest_plan", jsonifyPayload)
  axios
    .put(`${SERVER_URL}/api/fb-interests/${id}/`, formData, tokenConfig(getState))
    .then((response) => {
      dispatch({ type: UPDATE_INTERESTS, payload: response });
    })
    .catch((err) => {
      dispatch({ type: INTERESTS_ERROR, payload: err.message });
    });
};

export const updateFacebookGeoTargeting = (geoTargetingInfo) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .put(`${SERVER_URL}/api/search-facebook-geotargets/`, geoTargetingInfo, tokenConfig(getState))
    .then((response) => {
      console.log('response', response);
      dispatch({ type: UPDATE_LOCATION, payload: response });
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    });
};

// Get Interests from server
export const searchFBInterests = (searchTerm) => (dispatch, getState) => {
  setInterestLoading();
  axios
    .post(`${SERVER_URL}/api/search-facebook-interests/`, searchTerm, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SET_INTERESTS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Set List of interests
export const setInterestList = (data) => (dispatch) => {
  setInterestLoading();
  try {
    dispatch({
      type: SET_INTERESTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get Groups of Users Based On Interest from server
export const getFBInterests = () => (dispatch, getState) => {
  setInterestLoading();
  axios
    .get(`${SERVER_URL}/api/fb-interests/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_INTERESTS,
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

// Delete Facebook Interests from server
export const deleteFBInterests = (id) => (dispatch, getState) => {
  setInterestLoading();
  axios
    .delete(`${SERVER_URL}/api/fb-interests/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteFBInterests: 'Ad Deleted' }));
      dispatch({
        type: DELETE_INTEREST,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addFBInterests = (FBInterest) => (dispatch, getState) => {
  setInterestLoading();
  axios
    .post(`${SERVER_URL}/api/fb-interests/`, FBInterest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFBInterests: 'Ad Added' }));
      dispatch({
        type: SAVE_INTEREST,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Select Target Locations

// Get locations from server
export const searchFBLocations = (searchTerm) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .post(`${SERVER_URL}/api/search-facebook-geotargets/`, searchTerm, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SET_LOCATIONS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Set List of target locations based on search term
export const setLocationList = (data) => (dispatch) => {
  setLocationLoading();
  try {
    dispatch({
      type: SET_LOCATIONS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get list of Locataions from server
export const getFBLocations = () => (dispatch, getState) => {
  setLocationLoading();
  axios
    .get(`${SERVER_URL}/api/fb-locations/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    });
};

// Update facebook feed ad on server
export const updateFBLocations = (locationPlan, id) => (dispatch, getState) => {
  setLocationLoading();
  
  debugger
  
  axios
    .put(`${SERVER_URL}/api/fb-locations/${id}/`, locationPlan, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: UPDATE_LOCATIONS, payload: id });
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    });
};

// Delete Locations from the server
export const deleteFBLocations = (id) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .delete(`${SERVER_URL}/api/fb-locations/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteFBLocations: 'Ad Deleted' }));
      dispatch({
        type: DELETE_LOCATION,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    });
};

// Post Location data to server
export const addFBLocations = (FBLocations) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .post(`${SERVER_URL}/api/fb-locations/`, FBLocations, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFBLocations: 'Ad Added' }));
      dispatch({
        type: SAVE_LOCATION,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_ERROR, payload: err.message });
    });
};

// Set Loading state for locations and interests
export const setInterestLoading = () => ({
  type: SET_INTEREST_LOADING,
});
export const setLocationLoading = () => ({
  type: SET_LOCATION_LOADING,
});

export const resetFacebookLocationState = (dispatch) => {
  dispatch({ type: RESET_FACEBOOK_LOCATION_STATE });
};

export const resetFacebookInterestState = (dispatch) => {
  dispatch({ type: RESET_FACEBOOK_INTEREST_STATE });
};
