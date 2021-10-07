import {
  UPDATE_BASIC_INFO_NAME,
  UPDATE_BASIC_INFO_BUSINESS,
  UPDATE_BASIC_INFO_WEBSITE,
  UPDATE_BASIC_INFO_STREET,
  UPDATE_BASIC_INFO_APARTMENT,
  UPDATE_BASIC_INFO_CITY,
  UPDATE_BASIC_INFO_STATE,
  UPDATE_BASIC_INFO_ZIP,
} from './types';

export const updateBasicInfoName = (payload) => ({
  type: UPDATE_BASIC_INFO_NAME,
  payload,
});
export const updateBasicInfoBusiness = (payload) => ({
  type: UPDATE_BASIC_INFO_BUSINESS,
  payload,
});
export const updateBasicInfoWebsite = (payload) => ({
  type: UPDATE_BASIC_INFO_WEBSITE,
  payload,
});
export const updateBasicInfoStreet = (payload) => ({
  type: UPDATE_BASIC_INFO_STREET,
  payload,
});
export const updateBasicInfoApartment = (payload) => ({
  type: UPDATE_BASIC_INFO_APARTMENT,
  payload,
});
export const updateBasicInfoCity = (payload) => ({
  type: UPDATE_BASIC_INFO_CITY,
  payload,
});
export const updateBasicInfoState = (payload) => ({
  type: UPDATE_BASIC_INFO_STATE,
  payload,
});
export const updateBasicInfoZip = (payload) => ({
  type: UPDATE_BASIC_INFO_ZIP,
  payload,
});
