import React from 'react';
import { SET_TOKEN } from './types';

const setTokenTime = (dispatch, token) => {
  dispatch({ type: SET_TOKEN, payload: token });
};

export { setTokenTime };
