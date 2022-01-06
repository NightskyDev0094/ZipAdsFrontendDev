import axios from 'axios';
import {
  GET_CAMPAIGNS,
  SET_CAMPAIGN_LOADING,
  DELETE_CAMPAIGN,
  SAVE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  MAKE_CURRENT,
  GET_ERRORS,
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};
const templateImgUrlBase = 'https://auto-ads-media-storage.s3.us-west-2.amazonaws.com/templates/'
// Alternate Get Campaign that runs with mapDispatchToProps
export const getTemplateImages = async (url) => {
  
  await axios
    .get(`${url}`, config)
    .then((res) => res.blob())
    .then((blob) => {
      let n = url.lastIndexOf('/');
      let fileName = url.substring(n + 1);
      const modDate = new Date();
      const newName = fileName;
      const jpgFile = new File([blob], newName, {
        type: 'image/jpg',
        lastModified: modDate,
      });
      return jpgFile;
      })
};
