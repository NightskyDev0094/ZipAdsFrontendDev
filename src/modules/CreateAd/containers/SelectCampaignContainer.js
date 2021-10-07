import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import SelectCampaignPage from '../pages/SelectCampaignPage';
import { getCampaign, addCampaign } from '../../../actions/campaignActions';
import { updateSocials } from '../../../actions/formInfoActions';

const SelectCampaignContainer = ({ getCampaign, addCampaign, campaigns, updateSocials }) => {
  const [campaignData, setCampaignData] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [defaultData, setDefaultData] = useState({
    campaign_name: '',
    company_logo_file: null,
    company_logo_url: '',
    google_search_ad: 'True',
    google_display_ad: 'True',
    facebook_feed_ad: 'True',
    facebook_display_ad: 'True',
    instagram_ad: 'True',
    ga_keyword_plan: '',
    ga_location_plan: '',
    fb_interest_plan: '',
    fb_location_plan: '',
    geotargeting: '',
    street_address: '',
    city_name: '',
    state_code: '',
    zip_code: '',
    google_account_id: '',
    facebook_account_id: '',
    facebook_page_id: '',
    objective: '',
    google_search_budget: '',
    google_display_budget: '',
    google_cpc: '',
    instagram_budget: '',
    facebook_feed_budget: '',
    facebook_audience_budget: '',
    cta: '',
    cta2: '',
    headline: '',
    headline2: '',
    ad_description: '',
    ad_link: '',
    ad_group_name: '',
    ga_campaign_length: '',
    fb_campaign_length: '',
    file_url: '',
    file_upload: null,
    fb_feed_img: null,
    instagram_img: null,
    fb_audience_img: null,
    ga_display_img: null,
    ga_square_display_img: null,
    img_option: '',
    logo_option: '',
  });

  const sampleTemplateData = [
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
    {
      campaign_name: 'Test Template',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Conversions',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Get Offer',
      headline: 'Test Headline',
      headline2: 'Test SubHeadline',
      ad_description: 'Test Description',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      file_url: '',
      file_upload: null,
      fb_feed_img: null,
      instagram_img: null,
      fb_audience_img: null,
      ga_display_img: null,
      ga_square_display_img: null,
      img_option: 'custom',
      logo_option: 'custom',
    },
  ];

  const getCampaignData = useCallback(async () => await getCampaign());

  useEffect(() => {
    getCampaignData();
    setTemplateData(sampleTemplateData);
  }, []);

  useEffect(() => {
    setCampaignData(campaigns);
  }, [campaigns]);

  const selectDraft = (id) => {
    // Make selected campaign current
  };

  const createNewCampaign = async () => {
    const formData = new FormData();
    formData.append('draft', 'True');

    // Save Targeting options to Campaign_Info
    await addCampaign(formData);
  };

  return (
    <SelectCampaignPage
      campaigns={campaignData}
      templates={templateData}
      createNewCampaign={createNewCampaign}
      selectDraft={selectDraft}
      addCampaign={addCampaign}
      updateSocials={updateSocials}
    />
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns.campaigns,
});

export default connect(mapStateToProps, {
  getCampaign,
  addCampaign,
  updateSocials,
})(SelectCampaignContainer);
