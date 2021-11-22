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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  leftPanel: {
    height: '100%',
    position: 'relative',
    top: '25%',
    left: '10px',
    width: '49%',
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
  },
  panelContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
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
            <p className={classes.outerIcons} onClick={() => reverseAdSlide()}>
              Previous
            </p>
          </div>
        </div>
        <div style={{ ...styles?.rightPanel }} className={classes.rightPanel}>
          <div style={{ ...styles?.rightCarouselButton }} className={classes.rightCarouselButton}>
            <p className={classes.outerIcons} onClick={() => reverseAdSlide()}>
              Next
            </p>
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
