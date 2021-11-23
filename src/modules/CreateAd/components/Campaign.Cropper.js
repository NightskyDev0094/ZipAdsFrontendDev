import React, { useState, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Cropper
import 'react-image-crop/dist/ReactCrop.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { OuterCarouselWrapper as CropperCarousel } from './Campaign.Cropper.OuterCarousel';

const useStyles = makeStyles((theme) => ({
  cropperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1em',
    ['@media (max-width:500px)']: {
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
  },
  cropperForm: {
    textAlign: 'center !important',
    display: 'flex',
    flexDirection: 'column',
  },
}));

// Initialize Arrow Function component with hooks, and destructure state.
const Cropper = ({
  handleUpdateImage,
  setPreviewUrl,
  // previewUrl,
  setError,
  fbAudienceImg,
  setFBAudienceImg,
  instagramImg,
  setInstagramImg,
  gaDisplayImg,
  setGADisplayImg,
  fbFeedImg,
  setFBFeedImg,
  setFBFeedPreviewUrl,
  fbFeedPreviewUrl,
  setFBAudiencePreviewUrl,
  fbAudiencePreviewUrl,
  setInstagramPreviewUrl,
  instagramPreviewUrl,
  setGADisplayPreviewUrl,
  setGASquareDisplayPreviewUrl,
  gaDisplayPreviewUrl,
  gaSquareDisplayPreviewUrl,
  updateFBFeedImage,
  updateInstagramImage,
  updateFBAudienceImage,
  updateGADisplayImage,
  updateGASquareDisplayImage,
  adSlideNumber,
  changeAdSlide,
  reverseAdSlide,
  fbFeedUpImg,
  fbAudienceUpImg,
  instagramUpImg,
  gaDisplayUpImg,
  gaSquareDisplayUpImg,
  setFbFeedUpImg,
  setFbAudienceUpImg,
  setInstagramUpImg,
  setGaDisplayUpImg,
  setGaSquareDisplayUpImg,
  fbFeedImageName,
  fbAudienceImageName,
  instagramImageName,
  gaDisplayImageName,
  gaSquareDisplayImageName,
  setFbFeedImageName,
  setFbAudienceImageName,
  setInstagramImageName,
  setGaDisplayImageName,
  setGaSquareDisplayImageName,
  fbFeedImageFile,
  setFBFeedImageFile,
  fbAudienceImageFile,
  setFBAudienceImageFile,
  instagramImageFile,
  setInstagramImageFile,
  gaDisplayImageFile,
  setGADisplayImageFile,
  gaSquareDisplayImageFile,
  setGASquareDisplayImageFile,
  ...props
}) => {
  // Initialize State Variables
  // const [imageName, setImageName] = useState(null);

  const classes = useStyles();
  // Cropper

  const imgRef = useRef(null);
  const [fbFeedCrop, setFBFeedCrop] = useState({ unit: '%', width: 30, aspect: 1.91 / 1 });
  const [fbAudienceCrop, setFBAudienceCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });
  const [instagramCrop, setInstagramCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });
  const [gaSquareDisplayCrop, setGASquareDisplayCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 1 / 1,
  });
  const [gaDisplayCrop, setGADisplayCrop] = useState({ unit: '%', width: 30, aspect: 1.91 / 1 });

  const [fbFeedText, setFBFeedText] = useState('Facebook Feeds');
  const [fbAudienceText, setFBAudienceText] = useState('Facebook Audience Network');
  const [instagramText, setInstagramText] = useState('Instagram Feeds');
  const [gaDisplayText, setGADisplayText] = useState('Google Display Network');
  const [gaSquareDisplayText, setGASquareDisplayText] = useState(
    'Google Display Network Square Image'
  );

  const onSelectFile = (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        setFbFeedImageName(e.target.files[0].name);
        setFbAudienceImageName(e.target.files[0].name);
        setInstagramImageName(e.target.files[0].name);
        setGaDisplayImageName(e.target.files[0].name);
        setGaSquareDisplayImageName(e.target.files[0].name);
        setFBFeedImageFile(e.target.files[0]);
        setFBAudienceImageFile(e.target.files[0]);
        setInstagramImageFile(e.target.files[0]);
        setGADisplayImageFile(e.target.files[0]);
        setGASquareDisplayImageFile(e.target.files[0]);
        setPreviewUrls(e.target.files[0]);
      }
    } catch (e) {
      setError({ isError: true, message: e });
    }
  };

  const setPreviewUrls = async (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let previewUrl = reader.result;
      setFbFeedUpImg(previewUrl);
      setFbAudienceUpImg(previewUrl);
      setInstagramUpImg(previewUrl);
      setGaDisplayUpImg(previewUrl);
      setGaSquareDisplayUpImg(previewUrl);
      setFBFeedPreviewUrl(previewUrl);
      setFBAudiencePreviewUrl(previewUrl);
      setInstagramPreviewUrl(previewUrl);
      setGADisplayPreviewUrl(previewUrl);
      setGASquareDisplayPreviewUrl(previewUrl);

      let img = new Image();

      img.src = previewUrl;
      img.onload = (event) => {
        let loadedImage = event.currentTarget;
        let w = loadedImage.width;
        let h = loadedImage.height;

        console.log('WIDTH: ', w);
        console.log('HEIGHT: ', h);
        console.log('Facebook Feed ASPECT: ', fbFeedCrop.aspect);

        if (w / fbFeedCrop.aspect < h) {
          setFBFeedCrop({
            unit: '%',
            y: (((h - w / fbFeedCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 1.91 / 1,
          });
        } else {
          setFBFeedCrop({
            unit: '%',
            x: (((w - h * fbFeedCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 1.91 / 1,
          });
        }

        if (w / fbAudienceCrop.aspect < h) {
          setFBAudienceCrop({
            unit: '%',
            y: (((h - w / fbAudienceCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 9 / 16,
          });
        } else {
          setFBAudienceCrop({
            unit: '%',
            x: (((w - h * fbAudienceCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 9 / 16,
          });
        }

        if (w / instagramCrop.aspect < h) {
          setInstagramCrop({
            unit: '%',
            y: (((h - w / instagramCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 1 / 1,
          });
        } else {
          setInstagramCrop({
            unit: '%',
            x: (((w - h * instagramCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 1 / 1,
          });
        }

        if (w / gaSquareDisplayCrop.aspect < h) {
          setGASquareDisplayCrop({
            unit: '%',
            y: (((h - w / gaSquareDisplayCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 1 / 1,
          });
        } else {
          setGASquareDisplayCrop({
            unit: '%',
            x: (((w - h * gaSquareDisplayCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 1 / 1,
          });
        }

        if (w / gaDisplayCrop.aspect < h) {
          setGADisplayCrop({
            unit: '%',
            y: (((h - w / gaDisplayCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 1.91 / 1,
          });
        } else {
          setGADisplayCrop({
            unit: '%',
            x: (((w - h * gaDisplayCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 1.91 / 1,
          });
        }
      };
    });

    reader.readAsDataURL(file);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('select');
    // eslint-disable-next-line
    var instances = M.FormSelect.init(elems);
  });
  return (
    <>
      <div className={classes.cropperContainer}>
        <div className="input-field">
          <div className={classes.cropperForm}>
            <label htmlFor="id_file">Upload Your Image</label>
            <input id="id_file" type="file" accept="image/*" onChange={onSelectFile} />
          </div>
        </div>
      </div>
      {fbFeedImageName !== null && (
        <CropperCarousel
          setFBFeedPreviewUrl={setFBFeedPreviewUrl}
          updateFBFeedImage={updateFBFeedImage}
          fbFeedUpImg={fbFeedUpImg}
          fbAudienceUpImg={fbAudienceUpImg}
          instagramUpImg={instagramUpImg}
          gaDisplayUpImg={gaDisplayUpImg}
          gaSquareDisplayUpImg={gaSquareDisplayUpImg}
          setFbFeedUpImg={setFbFeedUpImg}
          setFbAudienceUpImg={setFbAudienceUpImg}
          setInstagramUpImg={setInstagramUpImg}
          setGaDisplayUpImg={setGaDisplayUpImg}
          setGaSquareDisplayUpImg={setGaSquareDisplayUpImg}
          fbFeedImageName={fbFeedImageName}
          fbAudienceImageName={fbAudienceImageName}
          instagramImageName={instagramImageName}
          gaDisplayImageName={gaDisplayImageName}
          gaSquareDisplayImageName={gaSquareDisplayImageName}
          setFbFeedImageName={setFbFeedImageName}
          setFbAudienceImageName={setFbAudienceImageName}
          setInstagramImageName={setInstagramImageName}
          setGaDisplayImageName={setGaDisplayImageName}
          setGaSquareDisplayImageName={setGaSquareDisplayImageName}
          fbFeedImageFile={fbFeedImageFile}
          setFBFeedImageFile={setFBFeedImageFile}
          fbFeedCrop={fbFeedCrop}
          setFBFeedCrop={setFBFeedCrop}
          fbFeedText={fbFeedText}
          setFBAudiencePreviewUrl={setFBAudiencePreviewUrl}
          updateFBAudienceImage={updateFBAudienceImage}
          fbAudienceImageFile={fbAudienceImageFile}
          setFBAudienceImageFile={setFBAudienceImageFile}
          fbAudienceCrop={fbAudienceCrop}
          setFBAudienceCrop={setFBAudienceCrop}
          fbAudienceText={fbAudienceText}
          setInstagramPreviewUrl={setInstagramPreviewUrl}
          updateInstagramImage={updateInstagramImage}
          instagramImageFile={instagramImageFile}
          setInstagramImageFile={setInstagramImageFile}
          instagramCrop={instagramCrop}
          setInstagramCrop={setInstagramCrop}
          instagramText={instagramText}
          setGADisplayPreviewUrl={setGADisplayPreviewUrl}
          setGASquareDisplayPreviewUrl={setGASquareDisplayPreviewUrl}
          updateGADisplayImage={updateGADisplayImage}
          gaDisplayImageFile={gaDisplayImageFile}
          setGADisplayImageFile={setGADisplayImageFile}
          gaDisplayCrop={gaDisplayCrop}
          setGADisplayCrop={setGADisplayCrop}
          gaDisplayText={gaDisplayText}
          updateGASquareDisplayImage={updateGASquareDisplayImage}
          gaSquareDisplayImageFile={gaSquareDisplayImageFile}
          setGASquareDisplayImageFile={setGASquareDisplayImageFile}
          gaSquareDisplayCrop={gaSquareDisplayCrop}
          setGASquareDisplayCrop={setGASquareDisplayCrop}
          gaSquareDisplayText={gaSquareDisplayText}
          fbFeedPreviewUrl={fbFeedPreviewUrl}
          fbAudiencePreviewUrl={fbAudiencePreviewUrl}
          instagramPreviewUrl={instagramPreviewUrl}
          gaDisplayPreviewUrl={gaDisplayPreviewUrl}
          gaSquareDisplayPreviewUrl={gaSquareDisplayPreviewUrl}
          adSlideNumber={adSlideNumber}
          changeAdSlide={changeAdSlide}
          reverseAdSlide={reverseAdSlide}
          setError={setError}
          {...props}
        />
      )}
    </>
  );
};

export default Cropper;
