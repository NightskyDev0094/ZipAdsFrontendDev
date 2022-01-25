import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';
import useCustomBackgroundImage from '../hooks/useCustomBackgroundImage';

const useStyles = makeStyles({
  AdImage: {
    width: '350px',
    height: '350px',

    ['@media(min-width:450px)']: {
      width: '350px',
      height: '350px',
    },
  },
  AdContext: {
    height: '230px',
    marginTop: '0.25em',
    padding: '0px 4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  Headline: { padding: '10px', fontSize: '1.9em', color: '#4e4e4e', margin: 0 },
  Description: { fontSize: '1.2em', lineHeight: '1.26em', color: 'black', fontWeight: '600' },
  Button: {
    backgroundColor: '#3c5997',
    height: '2em',
    color: '#3c5997',
    borderRadius: '0.25em',
    fontSize: '11px',
    padding: '1.4em 1.5em',
    color: 'white',

    '&:hover': {
      backgroundColor: '#3c5997',
    },
  },
});

const FacebookAudienceDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();
  const { backgroundImageProp } = useCustomBackgroundImage(
    currentCampaign.squareImgUrl,
    previewUrl
  );

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '350px',
    mobileHeight: '600px', // (340 *2) - (340 *2 /3)
    width: '350px',
    height: '600px', // (450 *2) - (450 *2 /3)
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <img src={backgroundImageProp} className={classes.AdImage} />
      <section className={classes.AdContext}>
        <h2 className={classes.Headline}>{currentCampaign.headline}</h2>
        <p className={classes.Description}>{currentCampaign.adDescription}</p>
        <Button className={classes.Button} startIcon={<GetAppIcon />}>
          Shop Now
        </Button>
      </section>
    </AdPreviewDisplayContainer>
  );
};

FacebookAudienceDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    adDescription: PropTypes.string,
    fileUrl: PropTypes.string,
    cta: PropTypes.string,
  }),
};

export default FacebookAudienceDisplay;
