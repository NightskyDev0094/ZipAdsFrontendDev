import axios from 'axios';
import { GET_SOCIAL_AUTHS } from './types';
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

// Get user oauth credentials from backend
export const getSocialAuths = () => (dispatch, getState) => {
  setSocialAuthsLoading();
  axios
    .get(`${SERVER_URL}/api/user-social-auth/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SOCIAL_AUTHS,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Set loading state
export const setSocialAuthsLoading = () => ({
  type: SET_SOCIAL_AUTHS_LOADING,
});
