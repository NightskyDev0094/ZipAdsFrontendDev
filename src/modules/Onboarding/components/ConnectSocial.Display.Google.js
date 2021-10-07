import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '1rem 2rem',
    maxWidth: '500px',
    '@media (max-width:1600px)': {
      margin: '0px auto',
      maxWidth: '500px',
    },
    '@media (max-width:500px)': {
      width: '72vw'
    },
  },
  AD: {
    fontFamily: 'Arial',
    fontWeight: 800,
    marginRight: '1rem',
    '@media (max-width:500px)': {
      fontSize: '1.8000000000000003vw'
    }
  },
  mainDescription: {
    fontSize: '18pt',
    color: '#30309e',
    height: 'fit-content'
  },
  url: {
    marginRight: '.5rem',
    whiteSpace: 'wrap',
    '@media (max-width:500px)': {
      fontSize: '3.5999999999999996vw'
    },
  },
  downArrow: {
    fontSize: '10pt',
  },
});

const GoogleSocialDisplay = ({ currentCampaign }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2}>
      <Box display="flex">
        <Typography className={classes.AD}>Ad</Typography>
        <Typography className={classes.url}>{currentCampaign.ad_link}</Typography>
        <Typography className={classes.downArrow}>&#9662;</Typography>
      </Box>
      <Box display="flex">
        <Typography className={classes.mainDescription}>{currentCampaign.headline}</Typography>
        {/* <Typography>{currentCampaign?.ad_description}</Typography> */}
      </Box>
      <Box textAlign="left">
        <Typography variant="body2">
          {currentCampaign.headline2} : {currentCampaign.ad_description}
        </Typography>
      </Box>
    </Paper>
  );
};

GoogleSocialDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    ad_description: PropTypes.string,
    ad_link: PropTypes.string,
    cta: PropTypes.string,
  }),
};

GoogleSocialDisplay.defaultProps = {
  currentCampaign: {
    headline: 'htc',
    headline2: 'Lorem Ipsum',
    ad_description: `This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like`,
    ad_link: '',
    cta: 'Learn More',
  },
};


export default GoogleSocialDisplay;
