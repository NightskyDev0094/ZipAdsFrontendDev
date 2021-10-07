import { CardActions } from '@material-ui/core';
import {
  SET_INTERESTS,
  GET_INTERESTS,
  DELETE_INTEREST,
  SAVE_INTEREST,
  CLEAR_INTERESTS,
  SET_LOCATIONS,
  GET_LOCATIONS,
  DELETE_LOCATION,
  SAVE_LOCATION,
  CLEAR_LOCATIONS,
  SET_INTEREST_LOADING,
  SET_LOCATION_LOADING,
  LOCATIONS_ERROR,
  INTERESTS_ERROR,
  GET_ERRORS,
  UPDATE_LOCATIONS,
  UPDATE_INTERESTS,
  CLEAR_ERRORS,
} from '../actions/types';

// Set Facebook targeting state
const initialState = {
  interests: null,
  interestList: [],
  interestLoading: false,
  interestListUpdateSuccess: false,
  locations: null,
  locationList: [],
  locationLoading: false,
  locationsListUpdateSuccess: false,
  current: null,
  interestListError: {
    isError: false,
    errorMessage: '',
  },
  locationsListError: {
    isError: false,
    errorMessage: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERESTS:
      return {
        ...state,
        interests: action.payload,
        loading: false,
      };

    case SET_INTERESTS:
      return {
        ...state,
        interestList: action.payload,
        loading: false,
      };

    case DELETE_INTEREST:
      return {
        ...state,
        interests: state.interests.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_INTEREST:
      return {
        ...state,
        interests: [[...state.interests], action.payload],
      };
    case CLEAR_INTERESTS:
      return {
        ...state,
        interests: [],
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };

    case SET_LOCATIONS:
      return {
        ...state,
        locationList: action.payload,
        loading: false,
      };

    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter((interest) => interest.id !== action.payload),
      };
    case SAVE_LOCATION:
      return {
        ...state,
        locations: [[...state.locations], action.payload],
      };
    case CLEAR_LOCATIONS:
      return {
        ...state,
        locations: [],
      };
    case SET_INTEREST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LOCATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_LOCATIONS:
      return {
        ...state,
        locationLoading: false,
        locationListUpdateSuccess: true,
        // we want to add the new list so the dashboard has that info is there
        locationsList: [action.payload.data],
      };
    case UPDATE_INTERESTS:
      return {
        ...state,
        interestLoading: false,
        interestListUpdateSuccess: true,
        // we want to add the new list so the dashboard has that info is there
        interestList: [action.payload.data],
      };
    case INTERESTS_ERROR:
      return {
        ...state,
        locationsListError: {
          isError: true,
          errorMessage: action.payload,
        },
      };
    case LOCATIONS_ERROR:
      return {
        ...state,
        locationsListError: {
          isError: true,
          errorMessage: action.payload,
        },
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        interestListError: {
          isError: false,
          errorMessage: '',
        },
        locationsListError: {
          isError: false,
          errorMessage: '',
        },
      };
    default:
      return state;
  }
};
