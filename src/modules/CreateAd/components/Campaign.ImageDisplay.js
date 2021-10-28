import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const TEST_IMAGE =
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: (props) => (props.isFacebook ? '0px' : '15px'),
    alignItems: 'center',
    minHeight: '300px',
    '@media (max-width:450px)': {
      width: '95%',
      height: '95%',
    },
  },
  // textContent: {
  //   backgroundColor: 'rgba(70,70,70,.80)',
  //   width: 'fit-content',
  //   padding: '1rem',
  //   marginRight: 'auto',
  //   marginLeft: 'auto',
  //   maxWidth: '100%',
  //   zIndex: 2,
  // },
  // headline: {
  //   fontSize: '18pt',
  //   fontWeight: 800,
  //   color: 'white',
  //   textAlign: 'center',
  //   '@media (max-width:700px)': {
  //     fontSize: '3.428571428571429vw',
  //   },
  // },
  // text: {
  //   fontSize: '14pt',
  //   fontWeight: 800,
  //   color: 'white',
  //   textAlign: 'center',
  //   '@media (max-width:700px)': {
  //     fontSize: '2.7142857142857144vw',
  //   },
  // },
  // buttonContent: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   transform: 'translateY(60px)',
  //   '@media (max-width:700px)': {
  //     marginBottom: '50px',
  //   },
  // },
  // actionButton: {
  //   backgroundColor: '#ff4750',
  //   color: 'white',
  //   textTransform: 'uppercase',
  //   fontSize: '10pt',
  //   fontWeight: 700,
  //   padding: '.5rem 2rem',
  //   '&:hover': {
  //     backgroundColor: '#ff4750',
  //   },
  //   '@media (max-width:700px)': {
  //     width: '23.857142857142858vw',
  //     height: '5.714285714285714vw',
  //     fontSize: '2.2vw',
  //     wordBreak: 'keep-all',
  //     whiteSpace: 'nowrap',
  //   },
  // },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  imageContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    marginBottom: '1em',
    position: 'relative',
    width: '400px',
    height: '300px',
    '@media (max-width:700px)': {
      width: '100%',
      marginTop: '0.25em',
      marginBottom: '0.25em',
    },
  },
  // contentContainer: {
  //   position: 'absolute',
  //   top: '3em',
  //   left: 0,
  //   right: 0,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   '@media (max-width:700px)': {
  //     top: '5em',
  //   },
  // },
});

const CampaignImageDisplay = ({ previewUrl, ...props }) => {
  const classes = useStyles(props);
  const [backgroundImageProp, setBackgroundImageProp] = useState('');

  useEffect(() => {
    if (previewUrl && previewUrl != '') {
      setBackgroundImageProp(previewUrl);
    } else {
      setBackgroundImageProp(DEFAULT_IMAGE);
    }
  }, [previewUrl]);

  return (
    <Box data-test="campaign-image-display" className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          data-test="facebook-image"
          src={backgroundImageProp?.length ? `${backgroundImageProp}` : `${DEFAULT_IMAGE}`}
          className={classes.image}
        />
        {/* Commented used to be the content (text and button) */}
        {/* <div className={classes.contentContainer}>
          <Box className={classes.textContent}>
            <Typography data-test="headline" className={classes.headline}>
              {props.form?.headline}
            </Typography>
            <Typography data-test="headline2" className={classes.text}>
              {props.form?.headline2}
            </Typography>
          </Box>
          <Box className={classes.buttonContent}>
            <Button data-test="button" className={classes.actionButton}>
              {props.form?.cta}
            </Button>
          </Box>
        </div> */}
      </div>
    </Box>
  );
};

CampaignImageDisplay.propTypes = {
  previewUrl: PropTypes.string,
  props: PropTypes.shape({
    form: PropTypes.shape({
      ad_description: PropTypes.string,
      ad_link: PropTypes.string,
      campaign_name: PropTypes.string,
      cta: PropTypes.string,
      cta2: PropTypes.string,
      fb_audience_img: PropTypes.string,
      fb_feed_img: PropTypes.string,
      file_url: PropTypes.string,
      ga_display_img: PropTypes.string,
      ga_square_display_img: PropTypes.string,
      headline: PropTypes.string,
      headline2: PropTypes.string,
      instagram_img: PropTypes.string,
      secondary_image_url: PropTypes.string,
    }),
  }),
};

CampaignImageDisplay.defaultProps = {
  previewUrl: 'www.google.com',
  props: {
    form: {
      ad_description: 'ad_description prop not passed',
      ad_link: 'ad link prop not passed',
      campaign_name: 'campaign_name prop not passed',
      cta: 'cta prop not passed',
      cta2: 'cta2 prop not passed',
      fb_audience_img: 'fb_audience_img prop not passed',
      fb_feed_img: 'fb feed img prop not passed',
      file_url: 'file_url prop not passed',
      ga_display_img: 'ga_display_img prop not passed',
      ga_square_display_img: 'ga_square_display_img',
      headline: 'headline prop not passed',
      headline2: 'headline2 prop not passed',
      instagram_img: 'instagram_img prop not passed',
      secondary_image_url: 'secondary_image_url prop not passed',
    },
  },
};

export default CampaignImageDisplay;
