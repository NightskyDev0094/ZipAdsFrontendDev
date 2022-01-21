import axios from 'axios';
import {
  GET_SUBSCRIPTIONS,
  SET_SUBSCRIPTION_LOADING,
  DELETE_SUBSCRIPTION,
  SAVE_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
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
// export const getSubscription = () => (dispatch, getState) => {
//   setSubscriptionLoading();
//   console.log('Running get Subscriptions');
//   axios
//     .get(`${SERVER_URL}/api/subscription/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_SUBSCRIPTIONS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

// Get Ads From Server
export const getSubscription = () => (dispatch, getState) => {
  setSubscriptionLoading();
  axios
    .get(`${SERVER_URL}/api/subscription/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIPTIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
// Alternate Get Subscription that runs with mapDispatchToProps
export const getSubscriptionAsync = async (dispatch) => {
  await axios
    .get(`${SERVER_URL}/api/subscription/`, config)
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIPTIONS,
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
export const deleteSubscription = (id) => (dispatch, getState) => {
  setSubscriptionLoading();
  axios
    .delete(`${SERVER_URL}/api/subscription/${id}/`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteSubscription: "Ad Deleted" }));
      dispatch({
        type: DELETE_SUBSCRIPTION,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Update facebook feed ad on server
export const updateSubscription = (subscription, id) => async (dispatch, _) => {
  setSubscriptionLoading();
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .put(`${SERVER_URL}/api/subscription/${id}/`, subscription, config)
    .then((res) => {
      // dispatch(createMessage({ updateSubscription: "Ad Updated" }));
      dispatch({
        type: UPDATE_SUBSCRIPTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addSubscription = (Subscription) => async (dispatch, _) => {
  setSubscriptionLoading();
  const token = localStorage.getItem('token');
  // console.log("ADDSubscription RUNNING!!!!")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .post(`${SERVER_URL}/api/subscription/`, subscription, config)
    .then((res) => {
      dispatch({
        type: SAVE_SUBSCRIPTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// // Post Add to API
// export const addSubscription = (Subscription) => (dispatch, _) => {
//   setSubscriptionLoading();
//   const token = localStorage.getItem('token');
//   console.log("ADDSubscription RUNNING!!!!")
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Token ${token}`,
//     },
//   };
//   axios
//     .post(`${SERVER_URL}/api/subscription/`, subscription, config)
//     .then((res) => {
//       dispatch({
//         type: SAVE_SUBSCRIPTION,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

// Set Loading state
export const setSubscriptionLoading = () => ({
  type: SET_SUBSCRIPTION_LOADING,
});
