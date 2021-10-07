import axios from 'axios';
import { SAVE_FB_TOKEN } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get Groups of Users Based On Interest

// Post fb Token to API
export const addFacebookToken = (token) => (dispatch, getState) => {
  axios
    .post(`${SERVER_URL}/api/save-facebook-token/`, token, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addFbToken: 'Ad Added' }));
      dispatch({
        type: SAVE_FB_TOKEN,
        payload: res,
      });
    })
    .catch((err) => dispatch(returnErrors(err)));
};
// // Post fb Token to API
// export const addFacebookToken = (authCode) => (dispatch, getState) => {
//   axios
//     .post(`${SERVER_URL}/api/social/facebook/`, authCode, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ addFbToken: "Facebook Account Connected." }));
//       dispatch({
//         type: SAVE_FB_TOKEN,
//         payload: res,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err)));
// };
