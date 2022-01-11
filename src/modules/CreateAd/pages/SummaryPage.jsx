import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import AdPreviewCarousel from '../components/AdPreviewCarousel';
import { SOCIAL_NETWORK_TITLES } from '../hooks/useCreateCampaignForm';

const SummaryPage = ({ onHandleClick, SUBMIT_STATUS, currentCampaign }) => {
  const [chosenSocialNetworks, setChosenSocialNetworks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    /** Section that appends the adds status of each selected social network and sets it match the ad preview display */
    currentCampaign['facebook_feed_ad'] === 'True' &&
      setChosenSocialNetworks((prev) => [...prev, SOCIAL_NETWORK_TITLES.FacebookAd]);

    currentCampaign['instagram_ad'] === 'True' &&
      setChosenSocialNetworks((prev) => [...prev, SOCIAL_NETWORK_TITLES.InstagramAd]);

    currentCampaign['facebook_display_ad'] === 'True' &&
      setChosenSocialNetworks((prev) => [...prev, SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd]);

    currentCampaign['google_search_ad'] === 'True' &&
      setChosenSocialNetworks((prev) => [...prev, SOCIAL_NETWORK_TITLES.GoogleAwards]);

    currentCampaign['google_display_ad'] === 'True' &&
      setChosenSocialNetworks((prev) => [...prev, SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd]);

    setChosenSocialNetworks((prev) => [...new Set(prev)]); // removes duplicates when rerendering from prev state
  }, []);

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
        chosenSocialNetworks={chosenSocialNetworks}
        formInfo={formInfo}
        previews={previews}
      />
      <h2 style={{ width: '100%', marginBottom: '3em', textAlign: 'center' }}>
        <a
          style={{ color: 'blue', textDecoration: 'underline' }}
          onClick={() => history.push('/create/create-campaign')}
        >
          I want to change something
        </a>
      </h2>
    </>
  );
};

//TODO: check the status of images not diplaying and add the createAd onClick handler
const mapStateToProps = (state) => ({
  currentCampaign: state.campaigns.current,
});

export default connect(mapStateToProps, {})(SummaryPage);
