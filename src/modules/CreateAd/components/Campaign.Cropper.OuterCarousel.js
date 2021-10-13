import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';

import CropperCarousel from './Campaign.Cropper.Carousel';

const OuterCarouselStyles = makeStyles(() => ({
  container: {
    width: '100%',
    // minWidth: '600px',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  leftPanel: {
    height: '100%',
    position: 'relative',
    top: '25%',
    left: '10px',
    width: '49%'
  },
  rightPanel: {
    height: '100%',
    position: 'relative',
    top: '25%',
    right: '10px',
    width: '49%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightCarouselButton: {},
  leftCarouselButton: {},
  previewsContainer: {
    backgroundSize: 'cover',
    width: '100%',
  },
  outerIcons: {
    fontSize: '40px',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '8px',
    height: '50px',
    width: '50px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  panelContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export const OuterCarouselWrapper = ({
  styles,
  adSlideNumber,
  changeAdSlide,
  reverseAdSlide,
  ...props
}) => {
  const classes = OuterCarouselStyles();
  return (
    <Paper style={{ ...styles?.container }} elevation={3} className={classes.container}>
      <div styles={{ ...styles?.panelContainer }} className={classes.panelContainer}>
        <div style={{ ...styles?.leftPanel }} className={classes.leftPanel}>
          <div style={{ ...styles?.leftCarouselButton }} className={classes.leftCarouselButton}>
            <ArrowBackIosIcon
              style={{ ...styles?.outerIcons }}
              className={classes.outerIcons}
              onClick={() => reverseAdSlide()}
            />
          </div>
        </div>
        <div style={{ ...styles?.rightPanel }} className={classes.rightPanel}>
          <div style={{ ...styles?.rightCarouselButton }} className={classes.rightCarouselButton}>
            <ArrowForwardIosIcon
              style={{ ...styles?.outerIcons }}
              className={classes.outerIcons}
              onClick={() => changeAdSlide()}
            />
          </div>
        </div>
      </div>
      <div style={{ ...styles?.previewsContainer }} className={classes.previewsContainer}>
        <CropperCarousel styles={styles} {...props} adSlideNumber={adSlideNumber} />
      </div>
    </Paper>
  );
};

OuterCarouselWrapper.propTypes = {
  classes: PropTypes.object,
};

OuterCarouselWrapper.defualtProps = {
  classes: {},
};
