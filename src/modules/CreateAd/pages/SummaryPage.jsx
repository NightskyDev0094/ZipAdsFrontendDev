import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import AdPreviewCarousel from '../components/AdPreviewCarousel';

const useStyles = makeStyles({
  PostAdsButton: {
    width: '190px',
    color: '#00468f',
    padding: '14px 0px',
    fontSize: '1.5em',
    borderRadius: '0.25em',
    backgroundColor: '#0be360',
    fontFamily: 'sans-serif',
    border: 'none',

    '&:hover': {
      backgroundColor: 'rgba(11, 227, 96, .7)',
    },
  },
  summaryCarouselContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: 'auto',
  },
  summaryInfo: {
    width: '100vw',
    backgroundColor: '#ededed',
    padding: '50px 40px 0px 40px',
    display: 'grid',
    gridGap: '100px',
    gridTemplateColumns: '1fr 1fr',
    fontSize: '20px',
    color: '#00468f',

    ['@media (max-width:992px)']: {
      gridTemplateColumns: '1fr',
      gridGap: '0px',
    },
  },
  infoContent: {
    ['& > div']: {
      ['& > p']: {
        '&:nth-child(odd)': {
          fontFamily: 'Nunito',
          margin: 0,
        },
        '&:nth-child(even)': {
          fontFamily: 'SilkaMedium',
          paddingBottom: '30px',
        },
      },
    },
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
    squareImgPreviewUrl: currentCampaign?.square_img_upload,
    rectangleImgPreviewUrl: currentCampaign?.rectangle_img_upload,
  };

  console.log('CURRENT CAMPAIGN: ', currentCampaign);
  console.log('FORM INFO: ', formInfo);
  console.log('PREVIEWs: ', previews);

  return (
    <div className={classes.summaryCarouselContainer}>
      <AdPreviewCarousel
        chosenSocialNetworks={socialsToPost}
        formInfo={formInfo}
        previews={previews}
      />
      <div className={classes.summaryInfo}>
        <div className={classes.infoContent}>
          <div>
            <p>Networks:</p>
            <p>
              Instagram Ad, Facebook Ad, Facebook Audience Network Ad, Google Awards, Google Display
              Network Ad
            </p>
          </div>
          <div>
            <p>Campaign Name:</p>
            <p>Maria's Mascara</p>
          </div>
          <div>
            <p>Headline:</p>
            <p>Long Lashes in One Click!</p>
          </div>
          <div>
            <p>Sub-headline:</p>
            <p>Buy One Get One Free</p>
          </div>
          <div>
            <p>Description:</p>
            <p>
              Maria's Mascara will have your lashes looking so long that they'll be doing double
              takes when checking your ID.
            </p>
          </div>
          <div>
            <p>URL:</p>
            <p>www.mariasmascara.com</p>
          </div>
        </div>
        <div className={classes.infoContent}>
          <div>
            <p>Button 1:</p>
            <p>Shop Now</p>
          </div>
          <div>
            <p>Button 2:</p>
            <p>Learn More</p>
          </div>
          <div>
            <p>Targeting Preference:</p>
            <p>Specific Address</p>
          </div>
          <div>
            <p>Address:</p>
            <p>555 Main St, State, ST 12345</p>
          </div>
          <div>
            <p>Radius:</p>
            <p>15 miles</p>
          </div>
          <div>
            <p>Keyword:</p>
            <p>Mascara</p>
          </div>
          <div>
            <p>Total Spend:</p>
            <p>$210</p>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', margin: '3em 0', display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <button className={classes.PostAdsButton} style={{backgroundColor: '#00468f', color: 'white'}}>Edit</button>
        <button onClick={onHandleClick} className={classes.PostAdsButton}>
          Post my ad!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
});

export default connect(mapStateToProps, {})(SummaryPage);
