import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import AdPreviewCarousel from '../components/AdPreviewCarousel';

const useStyles = makeStyles({
  PostAdsButton: {
    backgroundColor: '#0be360',
    color: '#00468f',
    padding: '1em 1.25em',
    borderRadius: '0.25em',
    fontSize: '1.5em',
  },
});

const SummaryPage = ({ onHandleClick, SUBMIT_STATUS, currentCampaign, socialsToPost }) => {
  const history = useHistory();
  const classes = useStyles();

  /** Matches the naming of the items used inside of AdPreviewCarousel and fits into the accepted shape*/
  const formInfo = {
    campaignName: currentCampaign?.campaign_name || '',
    headline: currentCampaign?.headline || '',
    headline2: currentCampaign?.headline2 || '',
    adDescription: currentCampaign?.ad_description || '',
    cta: currentCampaign?.cta || 'Learn More',
    cta2: currentCampaign?.cta2 || 'Get Offer',
    adLink: currentCampaign?.ad_link || 'https://',
    squareImgUrl: currentCampaign?.square_img_url || '',
    rectangleImgUrl: currentCampaign?.rectangle_img_url || '',
    squareImgUpload: currentCampaign?.square_img_upload || '',
    rectangleImgUpload: currentCampaign?.rectangle_img_upload || '',
  };

  /** TODO: Testing may be needed to figure out how campaign form manages custom images */
  const previews = {
    squareImgPreviewUrl: undefined,
    rectangleImgPreviewUrl: undefined,
  };

  return (
    <>
      <AdPreviewCarousel
        chosenSocialNetworks={socialsToPost}
        formInfo={formInfo}
        previews={previews}
      />
      <h2 style={{ width: '100%', marginBottom: '2em', textAlign: 'center' }}>
        <a
          style={{ color: 'blue', textDecoration: 'underline' }}
          onClick={() => history.push('/create/create-campaign')}
        >
          I want to change something
        </a>
      </h2>
      <div
        style={{ width: '100%', marginBottom: '3em', display: 'flex', justifyContent: 'center' }}
      >
        <button onClick={onHandleClick} className={classes.PostAdsButton}>
          Yes, post my ad!
        </button>
      </div>
    </>
  );
};

//TODO: add the onClickHandler for posting the ads
//TODO: check the status of images not diplaying and add the createAd onClick handler
const mapStateToProps = (state) => ({
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
});

export default connect(mapStateToProps, {})(SummaryPage);
