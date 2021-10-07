import { UPDATE_SOCIALS, UPDATE_TARGETS, UPDATE_BUDGET, CLEAR_ERRORS } from '../actions/types';

// Set Facebook feed ad state
const defaultValues = {
  socialsToPost: [],
  targetingInfo: {},
  budgetInfo: {},
};

export default (state = defaultValues, action) => {
  switch (action.type) {
    case UPDATE_SOCIALS:
      return {
        ...state,
        socialsToPost: action.payload,
      };
    case UPDATE_TARGETS: {
      return {
        ...state,
        targetingInfo: action.payload,
      };
    }
    case UPDATE_BUDGET: {
      return {
        ...state,
        budgetInfo: action.payload,
      };
    }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
};
