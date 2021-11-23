import axios from 'axios';
import { SERVER_URL } from '../environmentVariables';
import {
  GET_CREDITS,
  UPDATE_CREDITS,
  CREATE_CREDITS,
  GET_CLIENT_ID_FOR_CREDITS,
  CREDIT_ERROR,
  CLEAR_CREDITS_PURCHASE,
  CLEAR_CREDIT_ERRORS,
} from './types';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

/**
 * GET:
 *  This action is used to get the client ID.
 *  This needs to happen in order for a user to
 *  confirm card payment.
 */
export const getClientId = async (amount, preExistingAmount, dispatch) => {
  const formData = new FormData();
  if (!preExistingAmount) {
    // stripe interperetes amount in cents. so if under 50 will throw error
    formData.append('payment_amount', parseFloat(`${amount}00`));
  } else {
    const formatPreExistingAmount = parseFloat(preExistingAmount);
    const formatAmount = parseFloat(amount);
    // stripe interperetes amount in cents. so if under 50 will throw error
    formData.append('payment_amount', parseFloat(`${formatPreExistingAmount + formatAmount}00`));
  }
  await axios
    .post(`${SERVER_URL}/api/client-token/`, formData, config)
    .then((response) => {
      console.log('success getting ID', response);
      dispatch({
        type: GET_CLIENT_ID_FOR_CREDITS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log('GET CLIENT ID ERROR: ', e.message);
      dispatch({
        type: CREDIT_ERROR,
        payload: e.message,
      });
    });
};

/*
    GET credit amount from server
*/
export const getCreditAmount = async (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/credits/`, config)
    .then((res) => {
      dispatch({
        type: GET_CREDITS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('GET CREDIT AMOUNT ERROR: ', err.message);
      dispatch({ type: CREDIT_ERROR, payload: err.message });
    });
};

/*
    UPDATE credit amount from server
*/
export const updateCreditAmount = () => async (dispatch, getState) => {
  axios
    .put(`${SERVER_URL}/api/credits/`, config)
    .then((res) => {
      dispatch({ type: UPDATE_CREDITS, payload: res.data });
    })
    .catch(
      (err) => {
        dispatch({ type: CREDIT_ERROR, payload: err.message });
      }
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

/*
    CREATE credit amount for User
*/
export const createCreditAmount = (amount, dispatch) => {
  axios
    .post(`${SERVER_URL}/api/credits/`, amount, config)
    .then((res) => {
      dispatch({ type: CREATE_CREDITS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CREDIT_ERROR, payload: err.message });
    });
};

export const clearCreditSuccess = (dispatch) =>
  dispatch({
    type: CLEAR_CREDITS_PURCHASE,
  });

export const clearCreditErrors = (dispatch) => {
  dispatch({ type: CLEAR_CREDIT_ERRORS });
};
