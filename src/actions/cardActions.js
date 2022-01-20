import axios from 'axios';
import {
  GET_CARDS,
  SET_CARD_LOADING,
  DELETE_CARD,
  SAVE_CARD,
  UPDATE_CARD,
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
// export const getCard = () => (dispatch, getState) => {
//   setCardLoading();
//   console.log('Running get Cards');
//   axios
//     .get(`${SERVER_URL}/api/card/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: GET_CARDS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

// Get Ads From Server
export const getCard = () => (dispatch, getState) => {
  setCardLoading();
  axios
    .get(`${SERVER_URL}/api/card/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
// Alternate Get Card that runs with mapDispatchToProps
export const getCardAsync = async (dispatch) => {
  await axios
    .get(`${SERVER_URL}/api/card/`, config)
    .then((res) => {
      dispatch({
        type: GET_CARDS,
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
export const deleteCard = (id) => (dispatch, getState) => {
  setCardLoading();
  axios
    .delete(`${SERVER_URL}/api/card/${id}/`, tokenConfig(getState))
    .then((res) => {
      // dispatch(createMessage({ deleteCard: "Ad Deleted" }));
      dispatch({
        type: DELETE_CARD,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Update facebook feed ad on server
export const updateCard = (card, id) => async (dispatch, _) => {
  setCardLoading();
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .put(`${SERVER_URL}/api/card/${id}/`, card, config)
    .then((res) => {
      // dispatch(createMessage({ updateCard: "Ad Updated" }));
      dispatch({
        type: UPDATE_CARD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
  // .catch((err) => dispatch(returnErrors(err)));
};

// Post Add to API
export const addCard = (Card) => async (dispatch, _) => {
  setCardLoading();
  const token = localStorage.getItem('token');
  // console.log("ADDCard RUNNING!!!!")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  await axios
    .post(`${SERVER_URL}/api/card/`, card, config)
    .then((res) => {
      dispatch({
        type: SAVE_CARD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// // Post Add to API
// export const addCard = (Card) => (dispatch, _) => {
//   setCardLoading();
//   const token = localStorage.getItem('token');
//   console.log("ADDCard RUNNING!!!!")
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Token ${token}`,
//     },
//   };
//   axios
//     .post(`${SERVER_URL}/api/card/`, card, config)
//     .then((res) => {
//       dispatch({
//         type: SAVE_CARD,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };

export const makeCurrent = (payload) => ({
  type: MAKE_CURRENT,
  payload,
});

// Set Loading state
export const setCardLoading = () => ({
  type: SET_CARD_LOADING,
});
