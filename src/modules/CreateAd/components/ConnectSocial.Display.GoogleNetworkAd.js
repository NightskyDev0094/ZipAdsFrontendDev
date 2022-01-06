import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';

import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';
import useCustomBackgroundImage from '../hooks/useCustomBackgroundImage';

const useStyles = makeStyles({
  TopSection: {
    width: '100%',
    minHeight: '80px',
    padding: '8px 0px',
    display: 'flex',
    alignItems: 'center',
    ['& h1']: { fontSize: '2.5em', lineHeight: '1em', margin: '0px 0px 0px 15px' },
  },
  Avatar: { width: '3em', height: '1.5em' },
  AdImage: { height: '436px', width: '436px' },
  BottomSection: {
    width: '100%',
    height: '124px',
    padding: '8px 0px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    ['& p']: { fontSize: '1.5em', lineHeight: '1.25em', width: '100%' },
    ['& button']: {
      background: '#0373e6',
      borderRadius: '0.25em',
      color: 'white',
      padding: '8px',
      margin: '0px 5px',
      width: '7em',
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
    height: '680px', // (450 *2) - (450 *2 /5)
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div style={{ padding: '4px 6px' }}>
        <section className={classes.TopSection}>
          <Avatar className={classes.Avatar} variant="square" />
          <h1>{currentCampaign.headline}</h1>
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
