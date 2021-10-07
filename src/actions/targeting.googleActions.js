import axios from 'axios';
import {
  SET_GOOGLE_KEYWORDS,
  GET_GOOGLE_KEYWORDS,
  DELETE_GOOGLE_KEYWORD,
  SAVE_GOOGLE_KEYWORD,
  UPDATE_GOOGLE_KEYWORD,
  SET_GOOGLE_INTERESTS,
  GET_GOOGLE_INTERESTS,
  DELETE_GOOGLE_INTEREST,
  SAVE_GOOGLE_INTEREST,
  SET_GOOGLE_LOCATIONS,
  GET_GOOGLE_LOCATIONS,
  DELETE_GOOGLE_LOCATION,
  SAVE_GOOGLE_LOCATION,
  SET_GOOGLE_KEYWORD_LOADING,
  SET_GOOGLE_INTEREST_LOADING,
  SET_GOOGLE_LOCATION_LOADING,
  ADD_KEYWORD_TO_PLAN,
  CLEAR_KEYWORD_PLAN,
  DELETE_KEYWORD_FROM_PLAN,
  SAVE_GOOGLE_LOCATION_PLAN,
  GET_GOOGLE_LOCATION_PLAN,
  UPDATE_GOOGLE_LOCATION_PLAN,
  DELETE_GOOGLE_LOCATION_PLAN,
  GET_ERRORS,
  UPDATE_GOOGLE_LOCATION,
  UPDATE_GOOGLE_KEYWORD_ERROR,
  UPDATE_GOOGLE_LOCATIONS_ERROR,
  RESET_GOOGLE_LOCATIONS_STATE,
  RESET_GOOGLE_KEYWORD_STATE,
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

// Get Keyword Ideas and Develop a keyword Plan with the Google Ads API

// // Update Google Keywords
// export const updateGoogleKeywords = (keywords, id) => (getState, dispatch) =>  {
//   setKeywordLoading();
//   const token = localStorage.getItem('token');
//   const configHeaders = {
//       headers: {
//           Authorization: `Token ${token}`
//       }
//   }

//   axios.put(
//     "${SERVER_URL}/api/ga-keywords/",
//     keywords,
//     configHeaders
//   ).then(response => {
//     dispatch({ type: UPDATE_GOOGLE_KEYWORD, payload: response })
//   }).catch(error => {
//     console.log(error);
//     dispatch({type: GET_ERRORS, payload: error});
//   });
// }

// Get Keywords from server
export const getGoogleKeywordPlans = () => (dispatch, getState) => {
  setKeywordLoading();
  axios
    .get(`${SERVER_URL}/api/ga-keywords/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_GOOGLE_KEYWORDS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Get Keywords from server
export const searchGoogleKeywords = (searchTerm) => (dispatch, getState) => {
  setKeywordLoading();
  axios
    .post(`${SERVER_URL}/api/ga-keyword-search/`, searchTerm, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SET_GOOGLE_KEYWORDS,
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

// Update facebook feed ad on server
export const updateGoogleKeywords = (keywordPlan, id) => (dispatch, getState) => {
  let formData = new FormData();
  formData.append('keyword_plan', JSON.stringify(keywordPlan));

  axios
    .put(`${SERVER_URL}/api/ga-keywords/${id}/`, formData, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ updateBusinessInfo: "Ad Updated" }));
      dispatch({
        type: UPDATE_GOOGLE_KEYWORD,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_GOOGLE_KEYWORD_ERROR,
        payload: err.message,
      });
    });
};
// Delete Keywords on server
export const deleteGoogleKeywords = (id) => (dispatch, getState) => {
  setKeywordLoading();
  axios
    .delete(`${SERVER_URL}/api/ga-keywords/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteGoogleKeywords: `Ad Deleted` }));
      dispatch({
        type: DELETE_GOOGLE_KEYWORD,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Save Keyword plan to server
export const saveGoogleKeywordPlan = (KeywordPlan) => (dispatch, getState) => {
  setKeywordLoading();
  axios
    .post(`${SERVER_URL}/api/ga-keywords/`, KeywordPlan, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ saveGoogleKeywords: `Ad Added` }));
      dispatch({
        type: SAVE_GOOGLE_KEYWORD,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};
// Add Keywords to Keyword Plan List in Redux State
export const addKeywordtoPlan = (GoogleKeyword) => (dispatch) => {
  setKeywordLoading();
  try {
    dispatch(createMessage({ addGoogleKeywords: `Ad Added` }));
    dispatch({
      type: ADD_KEYWORD_TO_PLAN,
      payload: GoogleKeyword,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};
// Add Keywords to Keyword Plan List in Redux State
export const clearKeywordPlan = () => (dispatch) => {
  setKeywordLoading();
  try {
    dispatch(createMessage({ clearGoogleKeywordPlan: `Plan Cleared` }));
    dispatch({
      type: CLEAR_KEYWORD_PLAN,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};
// Add Keywords from Keyword Plan List in Redux State
export const deleteKeywordfromPlan = (GoogleKeyword) => (dispatch) => {
  setKeywordLoading();
  try {
    dispatch(createMessage({ deleteGoogleKeywords: `Keyword Removed from Plan.` }));
    dispatch({
      type: DELETE_KEYWORD_FROM_PLAN,
      payload: GoogleKeyword,
    });
  } catch (err) {
    console.log(err);
    // dispatch(returnErrors(err.response.data, err.response.status))
  }
};

// Get Locations from server
export const getGoogleLocationPlans = () => (dispatch, getState) => {
  setLocationLoading();
  axios
    .get(`${SERVER_URL}/api/ga-location-plan/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_GOOGLE_LOCATION_PLAN,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Update facebook feed ad on server
export const updateGoogleLocationPlans = (locationPlan, id) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .put(`${SERVER_URL}/api/ga-location-plan/${id}/`, locationPlan, config)
    .then((res) => {
      // dispatch(createMessage({ updateBusinessInfo: "Ad Updated" }));
      dispatch({
        type: UPDATE_GOOGLE_LOCATION_PLAN,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_GOOGLE_LOCATIONS_ERROR,
        payload: err.messge,
      });
    });
};

// Delete LocationPlans on server
export const deleteGoogleLocationPlans = (id) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .delete(`${SERVER_URL}/api/ga-location-plan/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteGoogleLocationPlan: `Locations Deleted` }));
      dispatch({
        type: DELETE_GOOGLE_LOCATION_PLAN,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Save LocationPlans plan to server
export const saveGoogleLocationPlans = (LocationPlan) => (dispatch, getState) => {
  setKeywordLoading();
  axios
    .post(`${SERVER_URL}/api/ga-location-plan/`, LocationPlan, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ saveGoogleLocationPlan: `Locations Added` }));
      dispatch({
        type: SAVE_GOOGLE_LOCATION_PLAN,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};

// Narrow audiences based on topic of Interest

// // Get interests from server
// export const getGoogleInterests = () => (dispatch, getState) => {
//   setInterestLoading();
//   axios
//     .get("${SERVER_URL}/api/ga-interests/", tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_GOOGLE_INTERESTS,
//         payload: res.data,
//       });
//     })
//     .catch(
//       (err) => console.log(err)
//       // dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// // Get interests from server
// export const searchGoogleInterests = (searchTerm) => (dispatch, getState) => {
//   setInterestLoading();
//   axios
//     .post(
//       "${SERVER_URL}/ga-interests/",
//       searchTerm,
//       tokenConfig(getState)
//     )
//     .then((res) => {
//       dispatch({
//         type: SET_GOOGLE_INTERESTS,
//         payload: res.data,
//       });
//     })
//     .catch(
//       (err) => console.log(err)
//       // dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// // Delete interests on server
// export const deleteGoogleInterests = (id) => (dispatch, getState) => {
//   setInterestLoading();
//   axios
//     .delete(
//       `${SERVER_URL}/api/ga-interests/${id}/`,
//       tokenConfig(getState)
//     )
//     .then((res) => {
//       dispatch(createMessage({ deleteGoogleInterests: "Ad Deleted" }));
//       dispatch({
//         type: DELETE_GOOGLE_INTEREST,
//         payload: id,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err)));
// };

// // Post Add to server
// export const addGoogleInterests = (GoogleInterest) => (dispatch, getState) => {
//   setInterestLoading();
//   axios
//     .post(
//       `${SERVER_URL}/api/ga-interests/`,
//       GoogleInterest,
//       tokenConfig(getState)
//     )
//     .then((res) => {
//       dispatch(createMessage({ addGoogleInterests: "Ad Added" }));
//       dispatch({
//         type: SAVE_GOOGLE_INTEREST,
//         payload: res,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err)));
// };

// // Select Target Locations

// // Get locations from server
// export const getGoogleLocations = (searchTerm) => (dispatch, getState) => {
//   setLocationLoading();
//   axios
//     .get("${SERVER_URL}/api/ga-locations/", tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_GOOGLE_LOCATIONS,
//         payload: res.data,
//       });
//     })
//     .catch(
//       (err) => console.log(err)
//       // dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// Get locations from server
export const searchGoogleLocations = (searchTerm) => (dispatch, getState) => {
  setLocationLoading();
  axios
    .post(`${SERVER_URL}/api/ga-geotargets/`, searchTerm, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SET_GOOGLE_LOCATIONS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// // delete locations from server
// export const deleteGoogleLocations = (id) => (dispatch, getState) => {
//   setLocationLoading();
//   axios
//     .delete(
//       `${SERVER_URL}/api/ga-locations/${id}/`,
//       tokenConfig(getState)
//     )
//     .then((res) => {
//       dispatch(createMessage({ deleteGoogleLocations: "Ad Deleted" }));
//       dispatch({
//         type: DELETE_GOOGLE_LOCATION,
//         payload: id,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err)));
// };
// // Post locations to server
// export const addGoogleLocations = (GoogleLocations) => (dispatch, getState) => {
//   setLocationLoading();
//   axios
//     .post(
//       `${SERVER_URL}/api/ga-locations/`,
//       GoogleLocations,
//       tokenConfig(getState)
//     )
//     .then((res) => {
//       dispatch(createMessage({ addGoogleLocations: "Ad Added" }));
//       dispatch({
//         type: SAVE_GOOGLE_LOCATION,
//         payload: res,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err)));
// };

// // Set loading state
// export const setInterestLoading = () => {
//   return {
//     type: SET_GOOGLE_INTEREST_LOADING,
//   };
// };
export const setKeywordLoading = () => ({
  type: SET_GOOGLE_KEYWORD_LOADING,
});
export const setLocationLoading = () => ({
  type: SET_GOOGLE_LOCATION_LOADING,
});

export const resetGoogleLocationState = (dispatch) => {
  dispatch({ type: RESET_GOOGLE_LOCATIONS_STATE });
};

export const resetGoogleKeywordState = (dispatch) => {
  dispatch({ type: RESET_GOOGLE_KEYWORD_STATE });
};
