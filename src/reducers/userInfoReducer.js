import {
  SET_ADDRESSES,
  GET_ADDRESSES,
  DELETE_ADDRESS,
  SAVE_ADDRESS,
  SET_ADDRESS_LOADING,
  CLEAR_ADDRESSES,
  GET_ERRORS,
  CLEAR_ERRORS
} from '../actions/types';

// Set Facebook targeting state
const initialState = {
  addresses: null,
  addressList: null,
  current: null,
  addressLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
      };

    case SET_ADDRESSES:
      return {
        ...state,
        addressList: action.payload,
        loading: false,
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter((address) => address.id !== action.payload),
      };
    case SAVE_ADDRESS:
      return {
        ...state,
        addresses: [[...state.addresses], action.payload],
      };
    case CLEAR_ADDRESSES:
      return {
        ...state,
        addresses: [],
      };

    case SET_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: true,
      };
    case GET_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }  
    default:
      return state;
  }
};
