import {
  SET_GOOGLE_KEYWORDS,
  GET_GOOGLE_KEYWORDS,
  DELETE_GOOGLE_KEYWORD,
  SAVE_GOOGLE_KEYWORD,
  CLEAR_GOOGLE_KEYWORDS,
  SET_GOOGLE_INTERESTS,
  GET_GOOGLE_INTERESTS,
  DELETE_GOOGLE_INTEREST,
  SAVE_GOOGLE_INTEREST,
  CLEAR_GOOGLE_INTERESTS,
  SET_GOOGLE_LOCATIONS,
  GET_GOOGLE_LOCATIONS,
  DELETE_GOOGLE_LOCATION,
  SAVE_GOOGLE_LOCATION,
  CLEAR_GOOGLE_LOCATIONS,
  SET_GOOGLE_KEYWORD_LOADING,
  SET_GOOGLE_INTEREST_LOADING,
  SET_GOOGLE_LOCATION_LOADING,
  GET_ERRORS,
  ADD_KEYWORD_TO_PLAN,
  CLEAR_KEYWORD_PLAN,
  DELETE_KEYWORD_FROM_PLAN,
  SAVE_GOOGLE_LOCATION_PLAN,
  GET_GOOGLE_LOCATION_PLAN,
  DELETE_GOOGLE_LOCATION_PLAN,
  UPDATE_GOOGLE_LOCATIONS_ERROR,
  UPDATE_GOOGLE_KEYWORD_ERROR,
  UPDATE_GOOGLE_LOCATION,
  UPDATE_GOOGLE_KEYWORD,
  RESET_GOOGLE_KEYWORD_STATE,
  RESET_GOOGLE_LOCATIONS_STATE,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Google targeting state
const initialState = {
  interests: null,
  interestList: null,
  keywords: null,
  keywordList: [],
  updateKeywordsListSuccess: false,
  keywordPlan: [],
  locations: null,
  locationList: [],
  updateLocationsSuccess: false,
  current: null,
  keywordLoading: false,
  interestLoading: false,
  locationLoading: false,
  googleLocationsUpdateError: {
    isError: false,
    errorMessage: '',
  },
  googleKeywordsUpdateError: {
    isError: false,
    errorMessage: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
        loading: false,
      };

    case SET_GOOGLE_KEYWORDS:
      return {
        ...state,
        keywordList: action.payload,
        loading: false,
      };

    case DELETE_GOOGLE_KEYWORD:
      return {
        ...state,
        keywords: state.keywords.filter((keyword) => keyword.id !== action.payload),
      };
    case SAVE_GOOGLE_KEYWORD:
      return {
        ...state,
        keywords: [...state.keywords, action.payload],
      };
    case CLEAR_GOOGLE_KEYWORDS:
      return {
        ...state,
        keywords: [],
      };
    case CLEAR_KEYWORD_PLAN:
      return {
        ...state,
        keywordPlan: [],
      };
    case ADD_KEYWORD_TO_PLAN:
      return {
        ...state,
        keywordPlan: [...state.keywordPlan, action.payload],
      };

    case DELETE_KEYWORD_FROM_PLAN:
      return {
        ...state,
        keywordPlan: state.keywordPlan.filter((keyword) => keyword.id !== action.payload),
      };
    case SAVE_GOOGLE_LOCATION_PLAN:
      return {
        ...state,
        locations: action.payload,
      };
    case GET_GOOGLE_LOCATION_PLAN:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case DELETE_GOOGLE_LOCATION_PLAN:
      return {
        ...state,
        locations: [],
      };
    case GET_GOOGLE_INTERESTS:
      return {
        ...state,
        interests: action.payload,
        loading: false,
      };

    case SET_GOOGLE_INTERESTS:
      return {
        ...state,
        interestList: action.payload,
        loading: false,
      };

    case DELETE_GOOGLE_INTEREST:
      return {
        ...state,
        interests: state.interests.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_GOOGLE_INTEREST:
      return {
        ...state,
        interests: [[...state.interests], action.payload],
      };
    case CLEAR_GOOGLE_INTERESTS:
      return {
        ...state,
        interests: [],
      };
    case GET_GOOGLE_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };

    case SET_GOOGLE_LOCATIONS:
      return {
        ...state,
        locationList: action.payload,
        loading: false,
      };

    case DELETE_GOOGLE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_GOOGLE_LOCATION:
      return {
        ...state,
        locations: [[...state.locations], action.payload],
      };
    case CLEAR_GOOGLE_LOCATIONS:
      return {
        ...state,
        locations: [],
      };
    case SET_GOOGLE_KEYWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_GOOGLE_INTEREST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_GOOGLE_LOCATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_GOOGLE_LOCATION:
      return {
        ...state,
        locationLoading: false,
        updateGoogleLocationsSuccess: true,
        googleLocationsUpdateError: {
          isError: false,
          errorMessage: '',
        },
      };
    case UPDATE_GOOGLE_KEYWORD:
      return {
        ...state,
        keywordLoading: false,
        updateKeywordsListSuccess: true,
        googleKeywordsUpdateError: {
          isError: false,
          errorMessage: '',
        },
      };
    case UPDATE_GOOGLE_LOCATIONS_ERROR:
      return {
        ...state,
        locationLoading: false,
        googleLocationsUpdateError: {
          isError: true,
          errorMessage: action.payload,
        },
      };
    case UPDATE_GOOGLE_KEYWORD_ERROR:
      return {
        ...state,
        keywordLoading: false,
        googleKeywordsUpdateError: {
          isError: true,
          errorMessage: action.payload,
        },
      };
    case RESET_GOOGLE_KEYWORD_STATE:
      return {
        ...state,
        updateKeywordsListSuccess: false,
        keywordLoading: false,
        googleKeywordsUpdateError: {
          isError: false,
          errorMessage: '',
        },
      };
    case RESET_GOOGLE_LOCATIONS_STATE:
      return {
        updateLocationsSuccess: false,
        locationLoading: false,
        googleLocationsUpdateError: {
          isError: false,
          errorMessage: '',
        },
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        googleLocationsUpdateError: {
          isError: false,
          errorMessage: '',
        },
        googleKeywordsUpdateError: {
          isError: false,
          errorMessage: '',
        },
      };
    default:
      return state;
  }
};
