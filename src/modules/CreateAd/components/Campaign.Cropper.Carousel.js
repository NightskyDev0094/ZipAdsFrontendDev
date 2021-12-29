import React, { useState, useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PropTypes from 'prop-types';

import CropperWindow from './Campaign.CropperWindow';
import CustomImg from './Campaign.Cropper.CustomImg';

const useStyles = makeStyles({
  header: {
    textAlign: 'left',
    marginBottom: '1rem',
  },
  defaultMessage: {
    textAlign: 'center',
    marginBottom: '100px',
    '@media (max-width:700px)': {
      fontSize: '3.571428571428571vw',
    },
  },
  facebookAdImage: {
    '@media (max-width:1600px)': {
      marginTop: '100px',
      width: '80vw',
    },
  },
  googleAdImage: {
    '@media (max-width:1600px)': {
      marginTop: '100px',
      width: '100%',
    },
  },
  instagramAdImage: {
    '@media (max-width:1600px)': {
      marginTop: '100px',
      width: '100%',
    },
  },
  connectSocialDisplays: {
    width: '100%', //changed from 100%
    marginBottom: '100px',
  },
  socialMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  connectSocialDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    '@media (max-width:1600px)': {
      flexDirection: 'column',
    },
  },
  displayNameContainer: {
    // border: '1px solid black',
    width: '100%',
    textAlign: 'center',
    height: '75px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  indicatorIconStyle: {
    fontSize: '60px',
    '&:first-child': {
      border: '1px solid black',
    },
    ['@media (max-width:1000px)']: {
      transform: 'translateY(-400px)',
    },
  },
  googleInnerIcons: {
    fontSize: '60px',
    ['@media (max-width:1000px)']: {
      // transform: 'translateY(-400px)',
      border: '1px solid black',
    },
  },
  facebookInnerIcons: {
    ['@media (max-width:1000px)']: {
      display: 'none',
    },
  },
});

/**
 *
 * @param {object} currentCampaign - the current campaign in the Ad Creation WorkFlow
 * @param {number} adSlideNumber - the slide number
 * @param {object} styles
 * @returns
 */
const CropperCarousel = ({
  currentCampaign,
  adSlideNumber,
  styles,
  setSquareImgPreviewUrl,
  updateSquareImage,
  squareUpImg,
  rectangleUpImg,
  setSquareUpImg,
  setRectangleUpImg,
  rectangleImgName,
  squareImgName,
  setRectangleImgName,
  setSquareImgName,
  rectangleImgFile,
  setRectangleImgFile,
  rectangleCrop,
  setRectangleCrop,
  rectangleText,
  rectangleImgPreviewUrl,
  setRectangleImgPreviewUrl,
  updateRectangleImage,
  squareImgFile,
  setSquareImgFile,
  squareCrop,
  setSquareCrop,
  squareText,
  squareImgPreviewUrl,
  fbFeedNum,
  fbAudienceNum,
  instagramNum,
  gaSearchNum,
  gaDisplayNum,
  gaSquareDisplayNum,
  setError,
  ...props
}) => {
  const classes = useStyles();
  const navButtonProps = {
    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
    style: {
      backgroundColor: 'transparent',
      color: 'black',
      borderRadius: 0,
      boxShadow: 'none',
      '&:hover': {
        cursor: 'pointer !important',
      },
      ...styles?.navButtonProps,
    },
  };

  return (
    <div style={styles?.connectSocialDisplays} className={classes.connectSocialDisplays}>
      <div
        style={styles?.connectSocialDisplayContainer}
        className={classes.connectSocialDisplayContainer}
      >
        {(adSlideNumber === fbFeedNum || adSlideNumber === instagramNum || adSlideNumber === gaDisplayNum) && (
          <Carousel
            style={{ ...styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            NextIcon={<ArrowRightIcon className={classes.facebookInnerIcons} />}
            PrevIcon={<ArrowLeftIcon className={classes.facebookInnerIcons} />}
            autoPlay={false}
            swipe={true}
            navButtonsAlwaysInvisible={true} //disable inner nav buttons
            IndicatorIcon={<FiberManualRecordIcon fontSize="medium" />}
            indicatorContainerProps={{
              style: {
                height: '30px',
                marginTop: '30px',
                ...styles?.innerContainerProps,
              },
            }}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              ...navButtonProps,
              ...styles.navButtonProps,
            }}
          >
            <CropperWindow
              
              setPreviewUrl={setRectangleImgPreviewUrl}
              previewUrl={rectangleImgPreviewUrl}
              handleUpdateImage={updateRectangleImage}
              upImg={rectangleUpImg}
              setUpImg={setRectangleUpImg}
              
              setImageName={setRectangleImgName}
              imageName={rectangleImgName}
              imageFile={rectangleImgFile}
              setImageFile={setRectangleImgFile}
              crop={rectangleCrop}
              setCrop={setRectangleCrop}
              labelText={rectangleText}
              cropType={'fbFeed_'}
              imgType={'Rectangle Image'}
              setError={setError}
            />
          </Carousel>
        )}
        {(adSlideNumber === fbAudienceNum || adSlideNumber === gaSquareDisplayNum) && (
          <Carousel
            style={{ ...styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysInvisible={true} //disable inner nav buttons
            NextIcon={<ArrowRightIcon className={classes.googleInnerIcons} />}
            PrevIcon={<ArrowLeftIcon className={classes.googleInnerIcons} />}
            IndicatorIcon={<FiberManualRecordIcon fontSize="medium" />}
            autoPlay={false}
            swipe={true}
            indicatorContainerProps={{
              style: {
                height: '30px',
                marginTop: '30px',
              },
              ...styles.indicatorContainerProps,
            }}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              ...navButtonProps,
              ...styles.navButtonProps,
            }}
          >
            <CropperWindow
              setPreviewUrl={setSquareImgPreviewUrl}
              previewUrl={squareImgPreviewUrl}
              handleUpdateImage={updateSquareImage}
              upImg={squareUpImg}
              setUpImg={setSquareUpImg}
              setImageName={setSquareImgName}
              imageName={squareImgName}
              imageFile={squareImgFile}
              setImageFile={setSquareImgFile}
              crop={squareCrop}
              setCrop={setSquareCrop}
              labelText={squareText}
              cropType={'square_'}
              imgType={'Square'}
              setError={setError}
            />
          </Carousel>
        )}
        
        {adSlideNumber === gaSearchNum && (
          <Carousel
            style={{ ...styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysInvisible={true} //disable inner nav buttons
            NextIcon={<ArrowRightIcon className={classes.googleInnerIcons} />}
            PrevIcon={<ArrowLeftIcon className={classes.googleInnerIcons} />}
            IndicatorIcon={<FiberManualRecordIcon fontSize="medium" />}
            autoPlay={false}
            swipe={true}
            indicatorContainerProps={{
              style: {
                height: '30px',
                marginTop: '30px',
              },
              ...styles.indicatorContainerProps,
            }}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              ...navButtonProps,
              ...styles.navButtonProps,
            }}
          >
            <h2>No image needed for Google search Ads.</h2>
          </Carousel>
        )}
      </div>
    </div>
  );
};

CropperCarousel.propTypes = {
  adSlideNumber: PropTypes.number,
  styles: PropTypes.object,
  currentCampaign: PropTypes.object,
};

CropperCarousel.defaultProps = {
  adSlideNumber: 0,
  styles: {},
  currentCampaign: {},
};

export default CropperCarousel;
