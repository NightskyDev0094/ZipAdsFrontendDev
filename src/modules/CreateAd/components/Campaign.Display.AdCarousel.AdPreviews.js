import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import FacebookSocialDisplay from './ConnectSocial.Display.Facebook';
import GoogleSocialDisplay from './ConnectSocial.Display.Google';
import InstagramSocialDisplay from './ConnectSocial.Display.Instagram';
import GoogleAdNetworkDisplay from './ConnectSocial.Display.GoogleNetworkAd';
import FacebookAudienceDisplay from './ConnectSocial.Display.FacebookAudience';
import DefaultAdPreview from './ConnectSocial.Display.DefaultPreview';
import AdDisplayTitle from './Campaign.Display.AdCarousel.AdDisplayTitle';

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
  AdImage: {
    '@media (max-width:1600px)': {
      marginTop: '5px',
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
    marginTop: '4rem',
    marginBottom: '4rem',
    width: '100%',
    height: '650px',
    '@media (max-width:500px)': {
      flexDirection: 'column',
      height: '100%',
    },
  },
  displayNameContainer: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: '4rem',
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
 * @param {number} adSlideNumber - the slide number\
 * @param {string} rectangleImgPreviewUrl - image url for fb feed ad preview
 * @param {string} squareImgPreviewUrl - image url for instagram ad
 * @param {number} fbFeedNum
 * @param {number} fbAudienceNum
 * @param {number} instagramNum
 * @param {number} gaSearchNum
 * @param {number} gaDisplayNum
 * @param {number} gaSquareDisplayNum
 * @param {object} styles
 * @returns
 */
const AdPreviewDisplays = ({
  currentCampaign,
  adSlideNumber,
  rectangleImgPreviewUrl,
  squareImgPreviewUrl,
  styles,
  fbFeedNum,
  fbAudienceNum,
  instagramNum,
  gaSearchNum,
  gaDisplayNum,
  gaSquareDisplayNum,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div
      style={styles?.connectSocialDisplayContainer}
      className={classes.connectSocialDisplayContainer}
    >
      {adSlideNumber === fbFeedNum && (
        <Box data-test="fb-feed-slide" style={{ ...styles.AdImage }} className={classes.AdImage}>
          <AdDisplayTitle classes={classes} name={'Facebook'} />
          <FacebookSocialDisplay
            currentCampaign={currentCampaign}
            previewUrl={rectangleImgPreviewUrl}
            {...props}
          />
        </Box>
      )}
      {adSlideNumber === fbAudienceNum && (
        <Box
          data-test="fb-audience-slide"
          style={{ ...styles.AdImage }}
          className={classes.AdImage}
        >
          <AdDisplayTitle classes={classes} name={'Facebook Audience'} />
          <FacebookAudienceDisplay
            currentCampaign={currentCampaign}
            previewUrl={squareImgPreviewUrl}
            {...props}
          />
        </Box>
      )}
      {adSlideNumber === instagramNum && (
        <Box data-test="instagram-slide" style={{ ...styles.AdImage }} className={classes.AdImage}>
          <AdDisplayTitle classes={classes} name={'Instagram'} />
          <InstagramSocialDisplay
            currentCampaign={currentCampaign}
            previewUrl={squareImgPreviewUrl}
            {...props}
          />
        </Box>
      )}
      {adSlideNumber === gaSearchNum && (
        <Box
          data-test="google-search-slide"
          style={{ ...styles.AdImage }}
          className={classes.AdImage}
        >
          <AdDisplayTitle classes={classes} name={'Google'} />
          <GoogleSocialDisplay currentCampaign={currentCampaign} {...props} />
        </Box>
      )}
      {adSlideNumber === gaDisplayNum && (
        <Box
          data-test="google-display-slide"
          style={{ ...styles.googleAdImage }}
          className={classes.googleAdImage}
        >
          <AdDisplayTitle classes={classes} name={'Google Ad Network'} />
          <GoogleAdNetworkDisplay
            currentCampaign={currentCampaign}
            previewUrl={rectangleImgPreviewUrl}
            {...props}
          />
        </Box>
      )}
      {adSlideNumber === gaSquareDisplayNum && (
        <Box
          data-test="google-square-display-slide"
          style={{ ...styles.AdImage }}
          className={classes.AdImage}
        >
          <AdDisplayTitle classes={classes} name={'Google Ad Network Square Image'} />
          <GoogleAdNetworkDisplay
            currentCampaign={currentCampaign}
            previewUrl={squareImgPreviewUrl}
            {...props}
          />
        </Box>
      )}
      {adSlideNumber !== gaSquareDisplayNum &&
        adSlideNumber !== gaDisplayNum &&
        adSlideNumber !== gaSquareDisplayNum &&
        adSlideNumber !== gaSearchNum &&
        adSlideNumber !== fbAudienceNum &&
        adSlideNumber !== fbFeedNum &&
        adSlideNumber !== instagramNum && <DefaultAdPreview AdDisplayTitle={AdDisplayTitle} />}
    </div>
  );
};

AdPreviewDisplays.propTypes = {
  adSlideNumber: PropTypes.number,
  styles: PropTypes.object,
  currentCampaign: PropTypes.object,
};

AdPreviewDisplays.defaultProps = {
  adSlideNumber: 0,
  styles: {},
  currentCampaign: {},
};

export default AdPreviewDisplays;
