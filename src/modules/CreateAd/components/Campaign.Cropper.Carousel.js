import React, { useState, useEffect, useLayoutEffect } from 'react';
// import { Box, Typography, Paper } from '@material-ui/core';
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
  setFBFeedPreviewUrl,
  updateFBFeedImage,
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
  fbFeedCrop,
  setFBFeedCrop,
  fbFeedText,
  setFBAudiencePreviewUrl,
  updateFBAudienceImage,
  fbAudienceImageFile,
  setFBAudienceImageFile,
  fbAudienceCrop,
  setFBAudienceCrop,
  fbAudienceText,
  setInstagramPreviewUrl,
  updateInstagramImage,
  instagramImageFile,
  setInstagramImageFile,
  instagramCrop,
  setInstagramCrop,
  instagramText,
  setGADisplayPreviewUrl,
  updateGADisplayImage,
  gaDisplayImageFile,
  setGADisplayImageFile,
  gaDisplayCrop,
  setGADisplayCrop,
  gaDisplayText,
  setGASquareDisplayPreviewUrl,
  updateGASquareDisplayImage,
  gaSquareDisplayImageFile,
  setGASquareDisplayImageFile,
  gaSquareDisplayCrop,
  setGASquareDisplayCrop,
  gaSquareDisplayText,
  fbFeedPreviewUrl,
  fbAudiencePreviewUrl,
  instagramPreviewUrl,
  gaDisplayPreviewUrl,
  gaSquareDisplayPreviewUrl,
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
        {adSlideNumber === fbFeedNum && (
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
              setPreviewUrl={setFBFeedPreviewUrl}
              previewUrl={fbFeedPreviewUrl}
              handleUpdateImage={updateFBFeedImage}
              upImg={fbFeedUpImg}
              setUpImg={setFbFeedUpImg}
              setImageName={setFbFeedImageName}
              imageName={fbFeedImageName}
              imageFile={fbFeedImageFile}
              setImageFile={setFBFeedImageFile}
              crop={fbFeedCrop}
              setCrop={setFBFeedCrop}
              labelText={fbFeedText}
              cropType={'fbFeed_'}
              imgType={'Facebook Feed'}
              setError={setError}
            />
          </Carousel>
        )}
        {adSlideNumber === fbAudienceNum && (
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
              setPreviewUrl={setFBAudiencePreviewUrl}
              previewUrl={fbAudiencePreviewUrl}
              handleUpdateImage={updateFBAudienceImage}
              upImg={fbAudienceUpImg}
              setUpImg={setFbAudienceUpImg}
              setImageName={setFbAudienceImageName}
              imageName={fbAudienceImageName}
              imageFile={fbAudienceImageFile}
              setImageFile={setFBAudienceImageFile}
              crop={fbAudienceCrop}
              setCrop={setFBAudienceCrop}
              labelText={fbAudienceText}
              cropType={'fbAudience_'}
              imgType={'Facebook Audience'}
              setError={setError}
            />
          </Carousel>
        )}
        {adSlideNumber === instagramNum && (
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
              setPreviewUrl={setInstagramPreviewUrl}
              previewUrl={instagramPreviewUrl}
              handleUpdateImage={updateInstagramImage}
              upImg={instagramUpImg}
              setUpImg={setInstagramUpImg}
              setImageName={setInstagramImageName}
              imageName={instagramImageName}
              imageFile={instagramImageFile}
              setImageFile={setInstagramImageFile}
              crop={instagramCrop}
              setCrop={setInstagramCrop}
              labelText={instagramText}
              cropType={'instagram_'}
              imgType={'Instagram'}
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
        {adSlideNumber === gaDisplayNum && (
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
              setPreviewUrl={setGADisplayPreviewUrl}
              previewUrl={gaDisplayPreviewUrl}
              handleUpdateImage={updateGADisplayImage}
              upImg={gaDisplayUpImg}
              setUpImg={setGaDisplayUpImg}
              setImageName={setGaDisplayImageName}
              imageName={gaDisplayImageName}
              imageFile={gaDisplayImageFile}
              setImageFile={setGADisplayImageFile}
              crop={gaDisplayCrop}
              setCrop={setGADisplayCrop}
              labelText={gaDisplayText}
              cropType={'gaDisplay_'}
              imgType={'Google Display'}
              setError={setError}
            />
          </Carousel>
        )}
        {adSlideNumber === gaSquareDisplayNum && (
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
              setPreviewUrl={setGASquareDisplayPreviewUrl}
              previewUrl={gaSquareDisplayPreviewUrl}
              handleUpdateImage={updateGASquareDisplayImage}
              upImg={gaSquareDisplayUpImg}
              setUpImg={setGaSquareDisplayUpImg}
              setImageName={setGaSquareDisplayImageName}
              imageName={gaSquareDisplayImageName}
              imageFile={gaSquareDisplayImageFile}
              setImageFile={setGASquareDisplayImageFile}
              crop={gaSquareDisplayCrop}
              setCrop={setGASquareDisplayCrop}
              labelText={gaSquareDisplayText}
              cropType={'gaSquareDisplay_'}
              imgType={'Google Square Display'}
              setError={setError}
            />
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
