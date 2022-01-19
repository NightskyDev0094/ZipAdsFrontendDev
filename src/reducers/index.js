import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';

import accounts_FbAdReducer from './accounts.FbAdReducer';
import accounts_FbPageReducer from './accounts.FbPageReducer';
import accounts_GoogleAdReducer from './accounts.GoogleAdReducer';
import accounts_GoogleManagerReducer from './accounts.GoogleManagerReducer';
import ads_FbFeedReducer from './ads.FbFeedReducer';
import ads_googleSearchReducer from './ads.googleSearchReducer';
import targeting_FbReducer from './targeting.fbReducer';
import targeting_GoogleReducer from './targeting.GoogleReducer';
import userInfoReducer from './userInfoReducer';
import basicInfoReducer from './basicInfoReducer';
import socialInfoReducer from './socialInfoReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import messagesReducer from './messagesReducer';
import campaignReducer from './campaignReducer';
import conversions_gaReducer from './conversions.GAReducer';
import conversions_fbReducer from './conversions.fbReducer';
import createFormReducer from './ads.createFormReducer';
import businessInfoReducer from './businessInfoReducer';
import googelAdSenseReducer from './accounts.GoogleAdSenseReducer';
import managedBusinessAccountsReducer from './socialConnect.ManagedAccountReducer';
import creditsReducer from './creditsReducer';
import paymentsReducer from './paymentsReducer';
import stepReducer from './step.reducer';

const appReducer = combineReducers({
  fbAdAccount: accounts_FbAdReducer,
  managedBusinessAccounts: managedBusinessAccountsReducer,
  fbPages: accounts_FbPageReducer,
  googleAdAccount: accounts_GoogleAdReducer,
  googleManagerAccount: accounts_GoogleManagerReducer,
  fbFeedAd: ads_FbFeedReducer,
  googleSearchAd: ads_googleSearchReducer,
  fbTargeting: targeting_FbReducer,
  googleTargeting: targeting_GoogleReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  auth: authReducer,
  campaigns: campaignReducer,
  gaConversions: conversions_gaReducer,
  fbPixels: conversions_fbReducer,
  newAdInfo: createFormReducer,
  userInfo: userInfoReducer,
  basicInfo: basicInfoReducer,
  socialInfo: socialInfoReducer,
  businessInfo: businessInfoReducer,
  googelAdSenseData: googelAdSenseReducer,
  credits: creditsReducer,
  payments: paymentsReducer,
  stepTracker: stepReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
      // for all keys defined in your persistConfig(s)
      storage.removeItem('persist:root')
      // storage.removeItem('persist:otherKey')
      return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
