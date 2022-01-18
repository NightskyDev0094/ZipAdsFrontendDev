import axios from 'axios';
import { SERVER_URL } from '../environmentVariables';
import {
  GET_PAYMENTS,
  UPDATE_PAYMENTS,
  CREATE_PAYMENTS,
  GET_CLIENT_ID_FOR_PAYMENTS,
  PAYMENT_ERROR,
  CLEAR_PAYMENTS_PURCHASE,
  CLEAR_PAYMENT_ERRORS,
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
        type: GET_CLIENT_ID_FOR_PAYMENTS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log('GET CLIENT ID ERROR: ', e.message);
      dispatch({
        type: PAYMENT_ERROR,
        payload: e.message,
      });
    });
};

/*
    GET Payment amount from server
*/
export const getPaymentAmount = async (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/payments/`, config)
    .then((res) => {
      dispatch({
        type: GET_PAYMENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('GET PAYMENT AMOUNT ERROR: ', err.message);
      dispatch({ type: PAYMENT_ERROR, payload: err.message });
    });
};

/*
    UPDATE Payment amount from server
*/
export const updatePaymentAmount = () => async (dispatch, getState) => {
  axios
    .put(`${SERVER_URL}/api/payments/`, config)
    .then((res) => {
      dispatch({ type: UPDATE_PAYMENTS, payload: res.data });
    })
    .catch(
      (err) => {
        dispatch({ type: PAYMENT_ERROR, payload: err.message });
      }
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

/*
    CREATE Payment amount for User
*/
export const createPaymentAmount = (amount, dispatch) => {
  axios
    .post(`${SERVER_URL}/api/payments/`, amount, config)
    .then((res) => {
      dispatch({ type: CREATE_PAYMENTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: PAYMENT_ERROR, payload: err.message });
    });
};

export const clearPaymentSuccess = (dispatch) =>
  dispatch({
    type: CLEAR_PAYMENTS_PURCHASE,
  });

export const clearPaymentErrors = (dispatch) => {
  dispatch({ type: CLEAR_PAYMENT_ERRORS });
};
