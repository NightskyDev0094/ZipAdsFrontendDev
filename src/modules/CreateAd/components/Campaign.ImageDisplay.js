import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
  // console.log('IMAGE DISPLAY PROPS: ', props.form);

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
