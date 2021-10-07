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
 * @param {number} adSlideNumber - the slide number\
 * @param {string} fbFeedPreviewUrl - image url for fb feed ad preview
 * @param {string} instagramPreviewUrl - image url for instagram ad
 * @param {string} gaDisplayPreviewUrl - image url for google ad
 * @param {string} gaSquareDisplayPreviewUrl -  image url for google Square ad
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
  fbFeedPreviewUrl,
  fbAudiencePreviewUrl,
  instagramPreviewUrl,
  gaDisplayPreviewUrl,
  gaSquareDisplayPreviewUrl,
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
    <div style={styles?.connectSocialDisplays} className={classes.connectSocialDisplays}>
      <div
        style={styles?.connectSocialDisplayContainer}
        className={classes.connectSocialDisplayContainer}
      >
        {adSlideNumber === fbFeedNum && (
          <Box data-test="fb-feed-slide" style={{ ...styles.facebookAdImage }} className={classes.facebookAdImage}>
            <AdDisplayTitle classes={classes} name={'Facebook'} />
            <FacebookSocialDisplay
              currentCampaign={currentCampaign}
              previewUrl={fbFeedPreviewUrl}
              {...props}
            />
          </Box>
        )}
        {adSlideNumber === fbAudienceNum && (
          <Box data-test="fb-audience-slide" style={{ ...styles.facebookAdImage }} className={classes.facebookAdImage}>
            <AdDisplayTitle classes={classes} name={'Facebook Audience'} />
            <FacebookAudienceDisplay
              currentCampaign={currentCampaign}
              previewUrl={fbAudiencePreviewUrl}
              {...props}
            />
          </Box>
        )}
        {adSlideNumber === instagramNum && (
          <Box data-test="instagram-slide" style={{ ...styles.instagramAdImage }} className={classes.instagramAdImage}>
            <AdDisplayTitle classes={classes} name={'Instagram'} />
            <InstagramSocialDisplay
              currentCampaign={currentCampaign}
              previewUrl={instagramPreviewUrl}
              {...props}
            />
          </Box>
        )}
        {adSlideNumber === gaSearchNum && (
          <Box data-test="google-search-slide" style={{ ...styles.googleAdImage }} className={classes.googleAdImage}>
            <AdDisplayTitle classes={classes} name={'Google'} />
            <GoogleSocialDisplay currentCampaign={currentCampaign} {...props} />
          </Box>
        )}
        {adSlideNumber === gaDisplayNum && (
          <Box data-test="google-display-slide" style={{ ...styles.googleAdImage }} className={classes.googleAdImage}>
            <AdDisplayTitle classes={classes} name={'Google Ad Network'} />
            <GoogleAdNetworkDisplay
              currentCampaign={currentCampaign}
              previewUrl={gaDisplayPreviewUrl}
              {...props}
            />
          </Box>
        )}
        {adSlideNumber === gaSquareDisplayNum && (
          <Box data-test="google-square-display-slide" style={{ ...styles.googleAdImage }} className={classes.googleAdImage}>
            <AdDisplayTitle classes={classes} name={'Google Ad Network Square Image'} />
            <GoogleAdNetworkDisplay
              currentCampaign={currentCampaign}
              previewUrl={gaSquareDisplayPreviewUrl}
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
