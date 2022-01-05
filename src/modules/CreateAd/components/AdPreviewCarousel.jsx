import React, { useState, useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward';
import InstagramSocialDisplay from './ConnectSocial.Display.Instagram';
import FacebookSocialDisplay from './ConnectSocial.Display.Facebook';
import FacebookAudienceDisplay from './ConnectSocial.Display.FacebookAudience';
import GoogleAdNetworkDisplay from './ConnectSocial.Display.GoogleNetworkAd';
import GoogleSocialDisplay from './ConnectSocial.Display.Google';
import { SOCIAL_NETWORK_TITLES } from '../hooks/useCampaignForm';

const useStyles = makeStyles({
  CarouselContainer: {
    position: 'relative',
    marginTop: '2em',
  },
  CarouselStepNumber: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontSize: '1rem',
    color: '#394044',
    ['@media (min-width:450px)']: {
      fontSize: '1.5rem',
      top: 0,
    },
  },
  LeftCarouselButton: {
    height: '3em',
    width: '3em',
    borderRadius: '0.25rem',
    border: 'none',
    position: 'absolute',
    top: 50,
    left: 0,
    ['@media (min-width:450px)']: {
      top: '50%',
    },
  },
  RightCarouselButton: {
    height: '3em',
    width: '3em',
    border: 'none',
    borderRadius: '0.25rem',
    position: 'absolute',
    top: 50,
    right: 0,
    ['@media (min-width:450px)']: {
      top: '50%',
    },
  },
  ArrowIcon: {
    stroke: 'inherit',
    strokeWidth: '4',
    fill: 'inherit',
    height: '1.5em',
    width: '1.5em',

    ['@media (min-width:450px)']: {
      height: '1.15em',
      width: '1.15em',
    },
  },

  PreviewTitle: {
    width: '100%',
    textAlign: 'center',
    marginTop: '0.5em',
    fontSize: '2rem',
    ['@media (min-width:450px)']: {
      fontSize: '3rem',
    },
  },
  PreviewContainer: {
    width: '100%',
    minHeight: '20em',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '30px 0px',
    margin: '2em auto',
    backgroundColor: 'inherit',
    overflowX: 'auto',

    ['@media (min-width:450px)']: {
      justifyContent: 'center',
      padding: '50px 0px',
      width: '80%',
      height: '60em',
      margin: '0px auto',
    },
  },
});

/**
 * @param {string[]} chosenSocialNetworks an array of the social networks the client has chosen for ads
 * @access ConnectSocialPage.jsx for the SOCIAL_NETWORK_TITLES allowed as strings in this array
 */
function AdPreviewCarousel({ chosenSocialNetworks, formInfo, previews }) {
  const classes = useStyles();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Reset if the length of chosenSocialNetworks changes, fix index error
  useEffect(() => {
    setCurrentStepIndex(0);
  }, [chosenSocialNetworks]);

  // helper function for removing the word ad from any SOCIAL_NETWORK_TITLE
  const removeAdFromTitle = (title) => {
    const wordToRemove = 'Ad';
    const AdWordStartIndex = title ? title.lastIndexOf(wordToRemove) : -1;
    return AdWordStartIndex === -1 ? title : title.substring(0, AdWordStartIndex);
  };

  const handleArrowClick = (leftClick) => {
    const networksLength = chosenSocialNetworks.length;
    leftClick
      ? setCurrentStepIndex(
          (currentStep) => (currentStep === 0 ? networksLength - 1 : currentStep - 1) // if at beginning; loop to end
        )
      : setCurrentStepIndex(
          (currentStep) => (currentStep === networksLength - 1 ? 0 : currentStep + 1) // if at end; loop to beginning
        );
  };

  return (
    <div className={classes.CarouselContainer}>
      <h4 className={classes.CarouselStepNumber}>{`${currentStepIndex + 1}/${
        chosenSocialNetworks.length
      }`}</h4>
      <button className={classes.LeftCarouselButton} onClick={() => handleArrowClick(true)}>
        <ForwardIcon
          style={{ '-webkit-transform': 'scaleX(-1)', transform: 'scaleX(-1)' }}
          className={classes.ArrowIcon}
        />
      </button>
      <button className={classes.RightCarouselButton} onClick={() => handleArrowClick(false)}>
        <ForwardIcon className={classes.ArrowIcon} />
      </button>
      <h2 className={classes.PreviewTitle}>
        {removeAdFromTitle(chosenSocialNetworks[currentStepIndex])}
      </h2>
      <section className={classes.PreviewContainer}>
        {chosenSocialNetworks[currentStepIndex] === SOCIAL_NETWORK_TITLES.InstagramAd && (
          <InstagramSocialDisplay
            currentCampaign={formInfo}
            previewUrl={previews.squareImgPreviewUrl}
          />
        )}
        {chosenSocialNetworks[currentStepIndex] === SOCIAL_NETWORK_TITLES.FacebookAd && (
          <FacebookSocialDisplay
            currentCampaign={formInfo}
            previewUrl={previews.squareImgPreviewUrl}
          />
        )}
        {chosenSocialNetworks[currentStepIndex] ===
          SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd && (
          <FacebookAudienceDisplay
            currentCampaign={formInfo}
            previewUrl={previews.squareImgPreviewUrl}
          />
        )}
        {chosenSocialNetworks[currentStepIndex] === SOCIAL_NETWORK_TITLES.GoogleAwards && (
          <GoogleSocialDisplay
            currentCampaign={formInfo}
            previewUrl={previews.squareImgPreviewUrl}
          />
        )}
        {chosenSocialNetworks[currentStepIndex] ===
          SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd && (
          <GoogleAdNetworkDisplay
            currentCampaign={formInfo}
            previewUrl={previews.squareImgPreviewUrl}
          />
        )}
      </section>
    </div>
  );
}

export default memo(AdPreviewCarousel);
