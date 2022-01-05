import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';

const useStyles = makeStyles({
  AD: {
    fontFamily: 'Arial',
    fontWeight: 800,
    marginRight: '0.5rem',
    display: 'inline-block',
    width: 'fit-content',

    '@media (min-width:450px)': {
      fontSize: '2em',
    },
  },
  url: {
    marginRight: '.5rem',
    whiteSpace: 'wrap',
    display: 'inline-block',
    minWidth: '1.75em',

    '@media (min-width:450px)': {
      fontSize: '1.75em',
    },
  },
  downArrow: {
    fontSize: '2em',
    display: 'inline-block',
  },
  Heading: {
    fontSize: '2.5em',
    color: '#30309e',
  },
  Description: { fontSize: '1.25em' },
});

const GoogleSocialDisplay = ({ currentCampaign }) => {
  const classes = useStyles();

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '350px',
    mobileHeight: '115px',
    width: '600px',
    height: '200px',
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div style={{ padding: '5px 10px' }}>
        <div>
          <h3 className={classes.AD}>Ad</h3>
          <h3 data-test="ad-link" className={classes.url}>
            {currentCampaign.adLink}
          </h3>
          <h3 className={classes.downArrow}>&#9662;</h3>
        </div>
        <h2 data-test="headline" className={classes.Heading}>
          {currentCampaign.headline}
        </h2>
        <p data-test="headline2-ad-description" className={classes.Description}>
          {currentCampaign.headline2} : {currentCampaign.adDescription}
        </p>
      </div>
    </AdPreviewDisplayContainer>
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
