import React, { useEffect, useState } from 'react';
import { makeStyles, Paper, Typography, Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import GetAppIcon from '@material-ui/icons/GetApp';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '400px',
    maxWidth: '400px',
    // minHeight: '500px',
    height: 'fit-content',
    margin: '0 auto',
    ['@media (max-width:500px)']: {
      width: '80vw',
      height: '130vw',
      minHeight: 0,
    },
  },
  image: {
    maxWidth: '400px',
    maxHeight: '300px',
    zIndex: 0,
    position: 'relative',
    width: '100%',
    ['@media (max-width:500px)']: {
      maxWidth: '80vw',
    },
  },
  title: {
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
    ['@media (max-width:500px)']: {
      padding: '2vw 0',
    },
  },
  rating: {
    width: '100%',
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    padding: '0px 15px',
    fontWeight: 600,
    textAlign: 'center',
    minHeight: '125px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    wordWrap: 'break-word',
    maxWidth: '398px',
    ['@media (max-width:500px)']: {
      fontSize: '3.5999999999999996vw',
      padding: '0 3vw',
      minHeight: '25vw',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  descriptionContainer: {
    maxWidth: '398px',
    ['@media (max-width:500px)']: {
      maxWidth: '80vw',
    },
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '25px 0',
    ['@media (max-width:500px)']: {
      padding: '5vw 0',
      transform: 'translateY(-2vw)',
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#3b5998',
    color: 'white',
    ['@media (max-width:500px)']: {
      width: '29.4vw',
      height: '8vw',
      fontSize: '2.8000000000000003vw',
      whiteSpace: 'nowrap',
    },
    '&:hover': {
      backgroundColor: '#3b5998',
      color: 'white',
    },
  },
  buttonIcon: {
    ['@media (max-width:500px)']: {
      fontSize: '4vw',
    },
  },
}));

/**
 * This component is for FaceBookAudience Ad Display
 * @param {object} currentCampaign //
 * @param {string} headline // main title
 * @param {string} headline2 // sub title
 * @param {string} ad_description // main title
 * @param {string} file_url // main title
 * @param {string} cta // ??
 * @returns
 */

const FacebookAudienceDisplay = ({ currentCampaign, styles, previewUrl, ...props }) => {
  const [backgroundImageProp, setBackgroundImageProp] = useState('');

  useEffect(() => {
    if (previewUrl && previewUrl != '') {
      setBackgroundImageProp(previewUrl);
    } else {
      setBackgroundImageProp(DEFAULT_IMAGE);
    }
  }, [previewUrl]);

  const classes = useStyles();

  return (
    <Paper
      data-test="facebook-audience"
      elevation={3}
      style={styles?.paper}
      className={classes.paper}
    >
      <div style={styles?.imgContainer} className={classes.imgContainer}>
        <img
          data-test="image"
          style={styles?.image}
          className={classes.image}
          src={backgroundImageProp || DEFAULT_IMAGE}
          alt="Your Ad Image"
        />
      </div>
      <div style={styles?.body} className={classes.body}>
        <h2 data-test="headline" style={styles?.title} className={classes.title}>
          {currentCampaign.headline}
        </h2>
      </div>
      <div style={styles?.descriptionContainer} className={classes.descriptionContainer}>
        <p data-test="description" style={styles?.description} className={classes.description}>
          {currentCampaign.ad_description}
        </p>
      </div>
      <div style={styles?.buttonContainer} className={classes.buttonContainer}>
        <Button
          className={classes.button}
          style={styles?.button}
          color="primary"
          variant="outlined"
        >
          <GetAppIcon data-test="button" className={classes.buttonIcon} /> {currentCampaign.cta}
        </Button>
      </div>
    </Paper>
  );
};

FacebookAudienceDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    ad_description: PropTypes.string,
    file_url: PropTypes.string,
    cta: PropTypes.string,
  }),
  styles: PropTypes.object,
};

FacebookAudienceDisplay.defaultProps = {
  currentCampaign: {
    headline: 'Walgreens',
    headline2: 'Lorem ipsum dolor sit amet consectetur',
    ad_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias vero
    tempora cupiditate nulla, ducimus ipsam repudiandae asperiores. Iste aspernatur vitae
    suscipit doloremque, cupiditate dignissimos adipisci. Officiis, aperiam? A, ipsum.
  `,
    file_url: DEFAULT_IMAGE,
    cta: 'Button text prop not passed',
  },
  styles: {},
};

export default FacebookAudienceDisplay;
