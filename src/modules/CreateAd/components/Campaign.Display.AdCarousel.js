import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';

import AdIndex from './Campaign.Display.AdCarousel.AdIndex';
import AdPreviewDisplays from './Campaign.Display.AdCarousel.AdPreviews';

const AdCarouselStyles = makeStyles(() => ({
  container: {
    backgroundSize: 'cover',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 40px 0 40px',
    marginBottom: '150px',
    height: 'fit-content',
    position: 'relative',
    ['@media (max-width:1550px)']: {
      width: '80%',
      height: 'fit-content',
      maxHeight: '1200px',
    },
    ['@media (max-width:1000px)']: {
      width: '100vw',
    },
    ['@media (max-width:500px)']: {
      boxShadow: 'none',
      marginBottom: 0,
      marginTop: '0 !important',
    },
  },
  leftPanel: {
    height: '100%',
<<<<<<< HEAD
    position: 'absolute',
    top: '100px',
    left: '30px',
    zIndex: 2,
  },
  rightPanel: {
    height: '100%',
    position: 'absolute',
    top: '100px',
    right: '30px',
=======
    position: 'relative',
    top: '25%',
    // left: '10px',
    ['@media (max-width:1000px)']: {
      position: 'absolute',
      top: '50px',
      left: '30px',
    },
  },
  rightPanel: {
    height: '100%',
    position: 'relative',
    top: '25%',
    // right: '10px',
    ['@media (max-width:1000px)']: {
      position: 'absolute',
      top: '50px',
      right: '30px',
    },
>>>>>>> master
  },
  rightCarouselButton: {},
  leftCarouselButton: {},
  previewsContainer: {
    backgroundSize: 'cover',
    width: '100%',
  },
  outerIcons: {
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: '600',
    borderRadius: '4px',
    textAlign: 'center',
    width: '90px',
    padding: '2px 0px',
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    '&:hover': {
      cursor: 'pointer',
    },
    // ['@media (max-width:500px)']: {
    //   border: 'none',
    // },
  },
}));

const AdCarousel = ({ styles, adSlideNumber, changeAdSlide, reverseAdSlide, ...props }) => {
  const classes = AdCarouselStyles();

  return (
<<<<<<< HEAD
    <Paper style={{ ...styles?.container }} elevation={3} className={classes.container}>
      <div style={{ ...styles?.leftPanel }} className={classes.leftPanel}>
        <div style={{ ...styles?.leftCarouselButton }} className={classes.leftCarouselButton}>
          <p className={classes.outerIcons} onClick={() => reverseAdSlide()}>
            Previous
          </p>
        </div>
      </div>
      <div style={{ ...styles?.previewsContainer }} className={classes.previewsContainer}>
        <AdIndex currentIndex={adSlideNumber} />
        <AdPreviewDisplays styles={styles} {...props} adSlideNumber={adSlideNumber} />
      </div>
      <div style={{ ...styles?.rightPanel }} className={classes.rightPanel}>
        <div style={{ ...styles?.rightCarouselButton }} className={classes.rightCarouselButton}>
          <p className={classes.outerIcons} onClick={() => changeAdSlide()}>
            Next
          </p>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          backgroundSize: 'cover',
          bottom: '0',
          padding: '30px 70px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        User accounts and social interactions are sample data only. Ad performance will vary.
      </div>
    </Paper>
=======
    <>
      <Paper style={{ ...styles?.container }} elevation={3} className={classes.container}>
        <AdIndex currentIndex={adSlideNumber} />
        <div style={{ ...styles?.leftPanel }} className={classes.leftPanel}>
          {/* <div style={{ ...styles?.leftCarouselButton }} className={classes.leftCarouselButton}> */}
          <ArrowBackIosIcon
            style={{ ...styles?.outerIcons }}
            className={classes.outerIcons}
            onClick={() => reverseAdSlide()}
          />
          {/* </div> */}
        </div>
        
        <div style={{ ...styles?.previewsContainer }} className={classes.previewsContainer}>
          <AdPreviewDisplays styles={styles} {...props} adSlideNumber={adSlideNumber} />
        </div>
        <div style={{ ...styles?.rightPanel }} className={classes.rightPanel}>
          {/* <div style={{ ...styles?.rightCarouselButton }} className={classes.rightCarouselButton}> */}
          <ArrowForwardIosIcon
            style={{ ...styles?.outerIcons }}
            className={classes.outerIcons}
            onClick={() => changeAdSlide()}
          />
          {/* </div> */}
        </div>
      </Paper>
    </>
>>>>>>> master
  );
};

AdCarousel.propTypes = {
  classes: PropTypes.object,
  changeAdSlide: PropTypes.func,
  reverseAdSlide: PropTypes.func,
};

AdCarousel.defaultProps = {
  classes: {},
  changeAdSlide: () => alert('changeAdSlide function has not been passed'),
  reverseAdSlide: () => alert('reverseAdSlide function has not been passed'),
};

export default AdCarousel;
