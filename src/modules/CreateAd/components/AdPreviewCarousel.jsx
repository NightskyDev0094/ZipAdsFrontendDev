import React, { useState, useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward';
import InstagramSocialDisplay from './ConnectSocial.Display.Instagram';
import FacebookSocialDisplay from './ConnectSocial.Display.Facebook';
import FacebookAudienceDisplay from './ConnectSocial.Display.FacebookAudience';
import GoogleAdNetworkDisplay from './ConnectSocial.Display.GoogleNetworkAd';
import GoogleSocialDisplay from './ConnectSocial.Display.Google';
import CreateCampaignButton from './CreateCampaignButton';
import { SOCIAL_NETWORK_TITLES } from '../hooks/useCreateCampaignForm';

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
    borderRadius: '0.25rem',
    backgroundColor: 'inherit',
    border: 'none',
    position: 'absolute',
    top: 50,
    left: 0,
    padding: '1.25em',

    // ['&:hover']: { backgroundColor: 'rgb(202, 202, 202)' },

    ['@media (min-width:450px)']: {
      top: '50%',
      padding: '1.5em',
    },
  },
  RightCarouselButton: {
    border: 'none',
    backgroundColor: 'inherit',
    borderRadius: '0.25rem',
    position: 'absolute',
    top: 50,
    right: 0,
    padding: '1.25em',

    // ['&:hover']: { backgroundColor: 'rgb(202, 202, 202)' },

    ['@media (min-width:450px)']: {
      padding: '1.5em',
      top: '50%',
    },
  },
  ArrowIcon: {
    stroke: 'inherit',
    strokeWidth: '4',
    fill: '#00468f',
    height: '1.5em',
    width: '1.5em',

    ['@media (min-width:450px)']: {
      height: '2em',
      width: '2em',
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
    minHeight: '20em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 0px',
    margin: '3em auto 2em auto',
    backgroundColor: 'inherit',

    ['& img']: {
      cursor: 'default',
    },

    ['@media (min-width:450px)']: {
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
      <div className={classes.LeftCarouselButton} onClick={() => handleArrowClick(true)}>
        <CreateCampaignButton>Back</CreateCampaignButton>
      </div>
      <div className={classes.RightCarouselButton} onClick={() => handleArrowClick(false)}>
        <CreateCampaignButton>Next</CreateCampaignButton>
      </div>
      {/* <button className={classes.LeftCarouselButton} onClick={() => handleArrowClick(true)}>
        <ForwardIcon
          style={{ '-webkit-transform': 'scaleX(-1)', transform: 'scaleX(-1)' }}
          className={classes.ArrowIcon}
        />
      </button> */}
      {/* <button className={classes.RightCarouselButton} onClick={() => handleArrowClick(false)}>
        <ForwardIcon className={classes.ArrowIcon} />
      </button> */}
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
