import rootReducer from '../../../reducers/';
import {createStore} from 'redux';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}