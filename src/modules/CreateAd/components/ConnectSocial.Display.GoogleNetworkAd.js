import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';

import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';
import useCustomBackgroundImage from '../hooks/useCustomBackgroundImage';

const useStyles = makeStyles({
  TopSection: {
    width: '100%',
    minHeight: '80px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    ['& h1']: { fontSize: '2.5em', lineHeight: '1em', margin: '0px 0px 0px 15px' },
    ['& div']: {
      width: 'fit-content',
      fontSize: '24px',
      fontWeight: '600',
      padding: '0px 20px',
    },
  },
  Avatar: { width: '5em', height: '2.5em' },
  AdImage: { height: '430px', width: '430px' },
  BottomSection: {
    width: '100%',
    height: '124px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '14px 14px 0 14px',
    ['& p']: {
      color: 'black',
      fontSize: '1.2em',
      fontWeight: '600',
      lineHeight: '1.26em',
      margin: 0,
    },
    ['& button']: {
      background: '#0373e6',
      borderRadius: '0.25em',
      fontSize: '16px',
      color: 'white',
      padding: '6px',
      margin: '0px 5px',
      width: '7em',
      border: 0,
    },
  },
});

const GoogleAdNetworkDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();
  const { backgroundImageProp } = useCustomBackgroundImage(
    currentCampaign.squareImgUrl,
    previewUrl
  );

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '340px',
    mobileHeight: '444px', // (340 *2) - (340 *2 /5)
    width: '450px',
    height: '670px', // (450 *2) - (450 *2 /5)
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div style={{ padding: '10px' }}>
        <section className={classes.TopSection}>
          <Avatar className={classes.Avatar} variant="square" />
          <div>{currentCampaign.headline}</div>
        </section>
        <img className={classes.AdImage} src={backgroundImageProp} />
        <section className={classes.BottomSection}>
          <p>{currentCampaign.adDescription}</p>
          <button>{currentCampaign.cta}</button>
        </section>
      </div>
    </AdPreviewDisplayContainer>
  );
};

GoogleAdNetworkDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    ad_description: PropTypes.string,
    file_url: PropTypes.string,
    cta: PropTypes.string,
    secondary_image_url: PropTypes.string,
  }),
  styles: PropTypes.object,
};

export default GoogleAdNetworkDisplay;
