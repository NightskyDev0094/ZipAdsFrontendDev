/**
 * Dispatches the GET_ERRORS actions
 * along with the message and status of the error
 *
 * @param { string } msg - a message corresponding to the error
 * @param { string } status - a status corresponding to the error
 */
export const returnErrors = (msg, status) => ({
  type: 'GET_ERRORS',
  payload: { msg, status },
});
