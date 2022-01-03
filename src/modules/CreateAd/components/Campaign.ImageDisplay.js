import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
});

const CampaignImageDisplay = ({ previewUrl, ...props }) => {
  const classes = useStyles(props);
  const [backgroundImageProp, setBackgroundImageProp] = useState('');

  useEffect(() => {
    if (previewUrl && previewUrl != '') {
      setBackgroundImageProp(previewUrl);
    } else {
      setBackgroundImageProp(props.form.file_url);
    }
  }, [previewUrl]);

  return (
    <Box data-test="campaign-image-display" className={classes.container}>
      <div className={classes.imageContainer}>
        <img data-test="facebook-image" src={backgroundImageProp} className={classes.image} />
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

export default CampaignImageDisplay;
