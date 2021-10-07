import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reduxReset from 'redux-reset';

import rootReducer from './reducers/index.js';



const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // "Merge Process"
  /* blacklist: []
  parts of the reducer you do not want persisted
  remove from the combineReducers,
  whitelist: [] I onyl want these to 
  persist 
  See more at https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
  */
};

const pReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];


const store = createStore(
  pReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store, reduxReset());

export { store, persistor };
