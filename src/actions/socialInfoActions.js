import { UPDATE_FACEBOOK_ACCOUNT_INFO, UPDATE_GOOGLE_ACCOUNT_INFO } from './types';

export const updateFacebookAccountInfo = (payload) => ({
  type: UPDATE_FACEBOOK_ACCOUNT_INFO,
  payload,
});
export const updateGoogleAccountInfo = (payload) => ({
  type: UPDATE_GOOGLE_ACCOUNT_INFO,
  payload,
});
