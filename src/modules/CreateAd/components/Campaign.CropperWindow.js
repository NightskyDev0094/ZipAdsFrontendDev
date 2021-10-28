import React, { useState, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// Cropper
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import M from 'materialize-css/dist/js/materialize.min.js';
import AdInfoChip from './Campaign.Cropper.AdInfo.Chip';
import CustomImg from './Campaign.Cropper.CustomImg';

const useStyles = makeStyles((theme) => ({
  //should break at 750
  cropperContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

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
  cropperDescription: {
    fontSize: '23px',
    textDecoration: 'underline',
    padding: '10px 10px',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 1000px)': {
      fontSize: '16px',
    },
  },
}));

const adChipInfoStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
};
// Initialize Arrow Function component with hooks, and destructure state.
const CropperWindow = ({
  handleUpdateImage,
  setPreviewUrl,
  previewUrl,
  setError,
  heightVal,
  widthVal,
  imgData,
  setImgData,
  labelText,
  upImg,
  setUpImg,
  cropType,
  crop,
  setCrop,
  imgType,
  setImageName,
  imageName,
  imageFile,
  setImageFile,
}) => {
  // Initialize State Variables
  const classes = useStyles();
  const cropper = useRef();

  // Cropper
  const imgRef = useRef(null);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async (crop) => {
    try {
      if (imgRef.current && crop.width && crop.height) {
        createCropPreview(imgRef.current, crop, 'newFile.jpeg');
      }
    } catch (e) {
      setError({ isError: true, message: e });
    }
  };
  // Create Preview of Crop
  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // var jpgFile = canvas.toDataURL("image/jpg");
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          // reject(new Error('Canvas is empty'));
          setError({ isError: true, message: 'Image not selected, please select image' });
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        setPreviewUrl(window.URL.createObjectURL(blob));
        const modDate = new Date();
        const newName = cropType + imageName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });
        setImageFile(jpgFile);
        handleUpdateImage(jpgFile);
        // console.log('BLOB::::', jpgFile)
      }, 'image/jpg');
    });
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
      <div className={classes.cropperContainer}>
        <div className="input-field">
          <label className={classes.cropperDescription} htmlFor="id_file">
            Crop your Image for {labelText}
          </label>
          <AdInfoChip adName={labelText} styles={adChipInfoStyle} />
        </div>
        <div>
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={makeClientCrop}
            className={classes.cropperContainer}
            ref={cropper}
          />
          {/* {previewUrl && <img alt="Crop preview" src={previewUrl} />} */}
        </div>
        {/* End Cropper */}
        <CustomImg
          imgType={imgType}
          setImageFile={setImageFile}
          setPreviewUrl={setPreviewUrl}
          setError={setError}
          setImageName={setImageName}
          setImageFile={setImageFile}
          setUpImg={setUpImg}
        />
      </div>
    </>
  );
};

export default CropperWindow;
