import { ManagedAccountComponent } from '../modules/CreateAd/components/ConnectSocial.ManagedAccount';
import {
  GET_USER_PROFILE_INFORMATION_ERROR,
  GET_USER_PROFILE_INFORMATION_SUCCESS,
  GET_USER_PROFILE_INFORMATION_LOADING,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_ERROR,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_LOADING,
  CREATE_FACEBOOK_BUSINESS_ACCOUNT_SUCCESS,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_SUCCESS,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_ERROR,
  CREATE_GOOGLE_BUSINESS_ACCOUNT_LOADING,
  RESET_MANAGED_ACCOUNT_STATE,
  CLEAR_ERRORS,
} from '../actions/types';

const initialState = {
  userAccount: {
    userAccountInformation: [],
    getUserAccountInformationSuccessful: false,
    getUserAccountInformationLoading: false,
    error: {
      isError: false,
      errorMessage: '',
    },
  },
  googleBusinessAccount: {
    googleBusinessAccountInformation: [],
    createGoogleAccountLoading: false,
    isGoogleBusinessAccountCreationSuccessful: false,
    error: {
      isError: false,
      errorMessage: '',
    },
  },
  facebookBusinessAccount: {
    facebookBusinessAccountInformation: [],
    createFacebookAccountInformationLoading: false,
    isFacebookBusinessAccountCreationSuccessful: false,
    error: {
      isError: false,
      errorMessage: '',
    },
  },
};

const managedBusinessAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_INFORMATION_LOADING:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          getUserAccountInformationLoading: true,
        },
      };
    case GET_USER_PROFILE_INFORMATION_SUCCESS:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          userAccountInformation: [...action.payload],
          error: {
            isError: false,
            errorMessage: '',
          },
          getUserAccountInformationSuccessful: true,
          getUserAccountInformationLoading: false,
        },
      };
    case GET_USER_PROFILE_INFORMATION_ERROR:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          getUserAccountInformationSuccessful: false,
          getUserAccountInformationLoading: false,
          error: {
            isError: true,
            errorMesage: action.payload,
          },
        },
      };
    case CREATE_FACEBOOK_BUSINESS_ACCOUNT_LOADING:
      return {
        ...state,
        facebookBusinessAccount: {
          ...state.facebookBusinessAccount,
          createFacebookAccountInformationLoading: true,
        },
      };
    case CREATE_FACEBOOK_BUSINESS_ACCOUNT_SUCCESS:
      return {
        ...state,
        facebookBusinessAccount: {
          ...state.facebookBusinessAccount,
          facebookBusinessAccountInformation: [...action.payload],
          createFacebookAccountInformationLoading: false,
          isFacebookBusinessAccountCreationSuccessful: true,
          error: {
            isError: false,
            errorMessage: '',
          },
        },
      };
    case CREATE_FACEBOOK_BUSINESS_ACCOUNT_ERROR:
      return {
        ...state,
        facebookBusinessAccount: {
          ...state.facebookBusinessAccount,
          facebookBusinessAccountInformation: [],
          createFacebookAccountInformationLoading: false,
          isFacebookBusinessAccountCreationSuccessful: false,
          error: {
            isError: true,
            errorMessage: action.payload,
          },
        },
      };
    case CREATE_GOOGLE_BUSINESS_ACCOUNT_SUCCESS:
      return {
        ...state,
        googleBusinessAccount: {
          ...state.googleBusinessAccount,
          googleBusinessAccountInformation: [...action.payload],
          createGoogleAccountLoading: false,
          isGoogleBusinessAccountCreationSuccessful: true,
          error: {
            isError: false,
            errorMessage: '',
          },
        },
      };
    case CREATE_GOOGLE_BUSINESS_ACCOUNT_LOADING:
      return {
        ...state,
        googleBusinessAccount: {
          ...state.googleBusinessAccount,
          createGoogleAccountLoading: true,
        },
      };
    case CREATE_GOOGLE_BUSINESS_ACCOUNT_ERROR:
      return {
        ...state,
        googleBusinessAccount: {
          ...state.googleBusinessAccount,
          createGoogleAccountLoading: false,
          isGoogleBusinessAccountCreationSuccessful: false,
          error: {
            isError: true,
            errorMessage: action.payload,
          },
        },
      };
    case RESET_MANAGED_ACCOUNT_STATE:
      return {
        userAccount: {
          userAccountInformation: [],
          getUserAccountInformationSuccessful: false,
          getUserAccountInformationLoading: false,
          error: {
            isError: false,
            errorMessage: '',
          },
        },
        googleBusinessAccount: {
          googleBusinessAccountInformation: [],
          createGoogleAccountLoading: false,
          isGoogleBusinessAccountCreationSuccessful: false,
          error: {
            isError: false,
            errorMessage: '',
          },
        },
        facebookBusinessAccount: {
          facebookBusinessAccountInformation: [],
          createFacebookAccountInformationLoading: false,
          isFacebookBusinessAccountCreationSuccessful: false,
          error: {
            isError: false,
            errorMessage: '',
          },
        },
      };
    case CLEAR_ERRORS:
      return {
        userAccount: {
          error: {
            isError: false,
            errorMessage: '',
          },
        },
        googleBusinessAccount: {
          error: {
            isError: false,
            errorMessage: '',
          },
        },
        facebookBusinessAccount: {
          error: {
            isError: false,
            errorMessage: '',
          },
        },
      };
    default:
      return state;
  }
};

export default managedBusinessAccountsReducer;
