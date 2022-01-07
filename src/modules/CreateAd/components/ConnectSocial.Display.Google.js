import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';

const useStyles = makeStyles({
  AD: {
    fontFamily: 'Arial',
    fontWeight: 800,
    margin: '0px 0.75em 0px 0px',
    display: 'inline-block',
    fontSize: '1.65em',
  },
  url: {
    marginRight: '0.5rem',
    display: 'inline-block',
    minWidth: '100px',
    fontSize: '1.45em',
  },
  downArrow: {
    fontSize: '1.65em',
    display: 'inline-block',
  },
  Heading: {
    fontSize: '2.35em',
    lineHeight: '1em',
    margin: '10px 0px',
    color: '#0373e6',
  },
  Description: { fontSize: '1.15em', lineHeight: '1.15em' },
});

const GoogleSocialDisplay = ({ currentCampaign }) => {
  const classes = useStyles();

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '350px',
    mobileHeight: '100px',
    width: '725px',
    height: '175px',
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
