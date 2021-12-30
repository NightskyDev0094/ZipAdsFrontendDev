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
  setError,
  squareImg,
  setSquareImg,
  rectangleImg,
  setRectangleImg,
  setRectangleImgPreviewUrl,
  rectangleImgPreviewUrl,
  setSquareImgPreviewUrl,
  squareImgPreviewUrl,
  updateSquareImage,
  updateRectangleImage,
  adSlideNumber,
  changeAdSlide,
  reverseAdSlide,
  squareUpImg,
  rectangleUpImg,
  setSquareUpImg,
  setRectangleUpImg,
  squareImageName,
  rectangleImageName,
  setSquareImageName,
  setRectangleImageName,
  squareImageFile,
  setSquareImageFile,
  rectangleImageFile,
  setRectangleImageFile,
  ...props
}) => {
  // Initialize State Variables
  // const [imageName, setImageName] = useState(null);

  const classes = useStyles();
  // Cropper

  const imgRef = useRef(null);
  const [squareCrop, setSquareCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });
  const [rectangleCrop, setRectangleCrop] = useState({ unit: '%', width: 30, aspect: 1.91 / 1 });

  const [squareText, setSquareText] = useState('Square Image');
  const [rectangleText, setRectangleText] = useState('Rectangle Image');

  const onSelectFile = (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        setSquareImageName(e.target.files[0].name);
        setRectangleImageName(e.target.files[0].name);
        setSquareImageFile(e.target.files[0]);
        setRectangleImageFile(e.target.files[0]);
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
      setSquareUpImg(previewUrl);
      setRectangleUpImg(previewUrl);
      setSquareImgPreviewUrl(previewUrl);
      setRectangleImgPreviewUrl(previewUrl);

      let img = new Image();

      img.src = previewUrl;
      img.onload = (event) => {
        let loadedImage = event.currentTarget;
        let w = loadedImage.width;
        let h = loadedImage.height;

        // console.log(w, h);
        // console.log(squareCrop.aspect);

        if (w / squareCrop.aspect < h) {
          setSquareCrop({
            unit: '%',
            y: (((h - w / squareCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 1.91 / 1,
          });
        } else {
          setSquareCrop({
            unit: '%',
            x: (((w - h * squareCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 1.91 / 1,
          });
        }

        if (w / rectangleCrop.aspect < h) {
          setRectangleCrop({
            unit: '%',
            y: (((h - w / rectangleCrop.aspect) / 2) * 100) / h,
            width: 100,
            aspect: 9 / 16,
          });
        } else {
          setRectangleCrop({
            unit: '%',
            x: (((w - h * rectangleCrop.aspect) / 2) * 100) / w,
            height: 100,
            aspect: 9 / 16,
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
      {squareImageName !== null && (
        <CropperCarousel
          setSquareImgPreviewUrl={setSquareImgPreviewUrl}
          updateSquareImage={updateSquareImage}
          squareUpImg={squareUpImg}
          rectangleUpImg={rectangleUpImg}
          setSquareUpImg={setSquareUpImg}
          setRectangleUpImg={setRectangleUpImg}
          squareImageName={squareImageName}
          rectangleImageName={rectangleImageName}
          setSquareImageName={setSquareImageName}
          setRectangleImageName={setRectangleImageName}
          squareImageFile={squareImageFile}
          setSquareImageFile={setSquareImageFile}
          squareCrop={squareCrop}
          setSquareCrop={setSquareCrop}
          squareText={squareText}
          setRectangleImgPreviewUrl={setRectangleImgPreviewUrl}
          updateRectangleImage={updateRectangleImage}
          rectangleImageFile={rectangleImageFile}
          setRectangleImageFile={setRectangleImageFile}
          rectangleCrop={rectangleCrop}
          setRectangleCrop={setRectangleCrop}
          rectangleText={rectangleText}
          squareImgPreviewUrl={squareImgPreviewUrl}
          rectangleImgPreviewUrl={rectangleImgPreviewUrl}
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
