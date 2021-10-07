import { UPDATE_FACEBOOK_ACCOUNT_INFO, UPDATE_GOOGLE_ACCOUNT_INFO } from '../actions/types';

// Set Facebook feed ad state
const defaultValues = {
  facebookAccountInfo: '',
  googleAccountInfo: '',
};

export default (state = defaultValues, action) => {
  switch (action.type) {
    case UPDATE_FACEBOOK_ACCOUNT_INFO:
      return {
        ...state,
        facebookAccountInfo: action.payload,
      };
    case UPDATE_GOOGLE_ACCOUNT_INFO:
      return {
        ...state,
        googleAccountInfo: action.payload,
      };
    default:
      return state;
  }
};
