import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getClientId,
  getCreditAmount,
  updateCreditAmount,
  createCreditAmount,
  clearCreditSuccess,
  clearCreditErrors,
} from '../../../actions/credit.actions';

import {
  GET_CREDITS,
  UPDATE_CREDITS,
  CREATE_CREDITS,
  GET_CLIENT_ID_FOR_CREDITS,
  CREDIT_ERROR,
  CLEAR_CREDITS_PURCHASE,
  CLEAR_CREDIT_ERRORS,
} from '../../../actions/types';

import {storeFactory} from '../shared_logic/testing_utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('CREDITS TESTS::::::::', () => {
  const initialState = {
    userCredits: [],
    userClientId: null,
    error: null,
    success: null
  };
  
  const store = mockStore(initialState);

  test('Create Credit Amount:::::', () => {
    return store.dispatch(createCreditAmount('30.00')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })

  })
});




