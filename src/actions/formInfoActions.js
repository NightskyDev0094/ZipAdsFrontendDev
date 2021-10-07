import { UPDATE_SOCIALS, UPDATE_TARGETS, UPDATE_BUDGET } from './types';

// export const updateSocials = (payload) => ({
//   type: UPDATE_SOCIALS,
//   payload,
// });
export const updateSocials = (payload) => (dispatch, _) =>
  dispatch({
    type: UPDATE_SOCIALS,
    payload,
  });

export const updateTargetInfo = (payload) => ({
  type: UPDATE_TARGETS,
  payload,
});

export const updateBudgetInfo = (payload) => ({
  type: UPDATE_BUDGET,
  payload,
});
