import axios from 'axios';
import {
  GET_ERRORS,
} from './types';
// import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './authActions';
import { SERVER_URL } from '../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
const templateImgUrlBase = 'https://auto-ads-media-storage.s3.us-west-2.amazonaws.com/templates/'
// Alternate Get Campaign that runs with mapDispatchToProps
export const getTemplateImages = (url) => async (dispatch, _) => {
  
  await axios
    .get(`${url}`, config)
    .then((res) => {
      console.log("getTemplateImages RUNNING; res::::", res)
      res.blob()})
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
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
