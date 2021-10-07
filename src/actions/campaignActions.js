import axios from 'axios';
import {
  GET_CAMPAIGNS,
  SET_CAMPAIGN_LOADING,
  DELETE_CAMPAIGN,
  SAVE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  MAKE_CURRENT,
  GET_ERRORS,
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

// Get Ads From Server
// export const getCampaign = () => (dispatch, getState) => {
//   setCampaignLoading();
//   console.log('Running get campaigns');
//   axios
//     .get(`${SERVER_URL}/api/campaign/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_CAMPAIGNS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

// Get Ads From Server
export const getCampaign = () => (dispatch, getState) => {
  setCampaignLoading();
  axios
    .get(`${SERVER_URL}/api/campaign/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CAMPAIGNS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
// Alternate Get Campaign that runs with mapDispatchToProps
export const getCampaignAsync = async (dispatch) => {
  await axios
    .get(`${SERVER_URL}/api/campaign/`, config)
    .then((res) => {
      dispatch({
        type: GET_CAMPAIGNS,
        // if there is length then return only the object
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_ERRORS, payload: err.message });
    });
};

// Delete facebook feed ad from server
export const deleteCampaign = (id) => (dispatch, getState) => {
  setCampaignLoading();
  axios
    .delete(`${SERVER_URL}/api/campaign/${id}/`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteCampaign: "Ad Deleted" }));
      dispatch({
        type: DELETE_CAMPAIGN,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Update facebook feed ad on server
export const updateCampaign = (campaign, id) => (dispatch, getState) => {
  setCampaignLoading();
  axios
    .put(`${SERVER_URL}/api/campaign/${id}/`, campaign, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ updateCampaign: "Ad Updated" }));
      dispatch({
        type: UPDATE_CAMPAIGN,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addCampaign = (campaign) => (dispatch, _) => {
  setCampaignLoading();
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };

  axios
    .post(`${SERVER_URL}/api/campaign/`, campaign, config)
    .then((res) => {
      dispatch({
        type: SAVE_CAMPAIGN,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

export const makeCurrent = (payload) => ({
  type: MAKE_CURRENT,
  payload,
});

// Set Loading state
export const setCampaignLoading = () => ({
  type: SET_CAMPAIGN_LOADING,
});
