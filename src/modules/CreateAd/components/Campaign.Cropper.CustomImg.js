import React, { useState, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// Cropper
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import M from 'materialize-css/dist/js/materialize.min.js';
import AdInfoChip from './Campaign.Cropper.AdInfo.Chip';

const useStyles = makeStyles((theme) => ({
  //should break at 750
  cropperContainer: {
    '@media (max-width:500px)': {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: 'white',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
  },
}));

const adChipInfoStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  margin: '15px 15px',
};
// Initialize Arrow Function component with hooks, and destructure state.
const CustomImg = ({ imgType, setImageFile, setPreviewUrl, setUpImg, setImageName, setError }) => {
  // Initialize State Variables

  const onSelectFile = (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        setImageName(e.target.files[0].name);
        setImageFile(e.target.files[0]);
        setPreviewUrls(e.target.files[0]);
      }
    } catch (e) {
      // setError({ isError: true, message: e });
      console.log('ERROR::::', e);
    }
  };

  const setPreviewUrls = async (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let previewUrl = reader.result;
      setUpImg(previewUrl);
      setPreviewUrl(previewUrl);
    });

    reader.readAsDataURL(file);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('select');
    // eslint-disable-next-line
    var instances = M.FormSelect.init(elems);
  });
  return (
    // Materialize theme
    <>
      {/* <!-- Showcase --> */}
      {/* // Cropper  */}
      <div className="input-field">
        <label htmlFor="id_file">Select a Different Image for your {imgType} Ad</label>
        <br />
        {/* {{form.file}} */}
      </div>
      <div>
        <input id="id_file" type="file" accept="image/*" onChange={onSelectFile} />
      </div>
    </>
  );
};

export default CustomImg;
