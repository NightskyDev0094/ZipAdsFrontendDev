import axios from 'axios';
import { SAVE_GOOGLE_TOKEN } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Post Google Token to API
export const addGoogleToken = (authCode) => (dispatch, getState) => {
  axios
    .post(`${SERVER_URL}/api/google-auth-connect/`, authCode, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addGoogleToken: 'Google Account Connected.' }));
      dispatch({
        type: SAVE_GOOGLE_TOKEN,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err));
    });
};
