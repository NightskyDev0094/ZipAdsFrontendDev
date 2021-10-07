import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';

import FacebookSocialDisplay from './ConnectSocial.Display.Facebook';
import GoogleSocialDisplay from './ConnectSocial.Display.Google';
import InstagramSocialDisplay from './ConnectSocial.Display.Instagram';
import GoogleAdNetworkDisplay from './ConnectSocial.Display.GoogleNetworkAd';
import FacebookAudienceDisplay from './ConnectSocial.Display.FacebookAudience';

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
    width: '50%', //changed from 100%
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
    width: '80%',
    '@media (max-width:1600px)': {
      flexDirection: 'column',
    },
  },
});

const SocialDisplays = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.connectSocialDisplays}>
      <div className={classes.connectSocialDisplayContainer}>
        {props?.adSlideNumber === 0 && (
          <Carousel
            style={{ ...props?.styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysVisible={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            autoPlay={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: 0,
                boxShadow: 'none',
                '&:hover': {
                  cursor: 'pointer !important',
                },
              },
            }}
          >
            <Box className={classes.facebookAdImage}>
              <FacebookSocialDisplay {...props} />
            </Box>
          </Carousel>
        )}
        {props?.adSlideNumber === 1 && (
          <Carousel
            style={{ ...props?.styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysVisible={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            autoPlay={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: 0,
                boxShadow: 'none',
                '&:hover': {
                  cursor: 'pointer !important',
                },
              },
            }}
          >
            <Box className={classes.facebookAdImage}>
              <FacebookAudienceDisplay {...props} />
            </Box>
          </Carousel>
        )}
        {props?.adSlideNumber === 2 && (
          <Carousel
            style={{ ...props?.styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysVisible={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            autoPlay={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: 0,
                boxShadow: 'none',
                '&:hover': {
                  cursor: 'pointer !important',
                },
              },
            }}
          >
            <Box className={classes.facebookAdImage}>
              <InstagramSocialDisplay {...props} />
            </Box>
          </Carousel>
        )}

        {props?.adSlideNumber === 3 && (
          <Carousel
            style={{ ...props?.styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysVisible={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            autoPlay={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: 0,
                boxShadow: 'none',
                '&:hover': {
                  cursor: 'pointer !important',
                },
              },
            }}
          >
            <Box className={classes.googleAdImage}>
              <GoogleSocialDisplay {...props} />
            </Box>
          </Carousel>
        )}
        {props?.adSlideNumber === 4 && (
          <Carousel
            style={{ ...props?.styles?.socialMenuContainer }}
            className={classes.socialMenuContainer}
            navButtonsAlwaysVisible={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            autoPlay={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: 0,
                boxShadow: 'none',
                '&:hover': {
                  cursor: 'pointer !important',
                },
              },
            }}
          >
            <Box className={classes.googleAdImage}>
              <GoogleAdNetworkDisplay {...props} />
            </Box>
          </Carousel>
        )}
      </div>
    </div>
  );
};

SocialDisplays.propTypes = {}

SocialDisplays.defaultProps = {}

export default SocialDisplays;
