import axios from 'axios';
import {
  GET_USER,
  SET_USER_LOADING,
  DELETE_USER,
  SAVE_USER,
  UPDATE_USER,
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
// export const getUser = () => (dispatch, getState) => {
//   setUserLoading();
//   console.log('Running get Users');
//   axios
//     .get(`${SERVER_URL}/api/auth/user/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_USER,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

// Get Ads From Server
export const getUser = () => (dispatch, getState) => {
  setUserLoading();
  axios
    .get(`${SERVER_URL}/api/auth/user`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
// Alternate Get User that runs with mapDispatchToProps
export const getUserAsync = async (dispatch) => {
  await axios
    .get(`${SERVER_URL}/api/auth/user`, config)
    .then((res) => {
      dispatch({
        type: GET_USER,
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
export const deleteUser = (id) => (dispatch, getState) => {
  setUserLoading();
  axios
    .delete(`${SERVER_URL}/api/auth/user/${id}`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteUser: "Ad Deleted" }));
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Update facebook feed ad on server
export const updateUser = (user, id) => async (dispatch, _) => {
  setUserLoading();
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .put(`${SERVER_URL}/api/auth/user/${id}/`, user, config)
    .then((res) => {
      // dispatch(createMessage({ updateUser: "Ad Updated" }));
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addUser = (user) => async (dispatch, _) => {
  setUserLoading();
  const token = localStorage.getItem('token');
  // console.log("ADDUser RUNNING!!!!")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .post(`${SERVER_URL}/api/auth/user`, user, config)
    .then((res) => {
      dispatch({
        type: SAVE_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Set Loading state
export const setUserLoading = () => ({
  type: SET_USER_LOADING,
});
