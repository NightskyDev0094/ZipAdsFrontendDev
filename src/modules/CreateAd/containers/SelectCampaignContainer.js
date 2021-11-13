import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import SelectCampaignPage from '../pages/SelectCampaignPage';
import { getCampaign, addCampaign, updateCampaign } from '../../../actions/campaignActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { updateSocials } from '../../../actions/formInfoActions';

import { sampleTemplateData } from '../components/SelectCampaign.TemplateData';

const SelectCampaignContainer = ({ getCampaign, addCampaign, campaigns, currentCampaign, updateSocials, getBusinessInfo, businessInfo, businessInfoLoading,}) => {
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
  const [selected, setSelected] = useState({
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

  const [streetVal, setStreetVal] = useState(businessInfo.street_address || '');
  const [cityVal, setCityVal] = useState(businessInfo.city_name || '');
  const [stateVal, setStateVal] = useState(businessInfo.state_code || '');
  const [zipVal, setZipVal] = useState(businessInfo.zip_code || '');
  const [industryVal, setIndustryVal] = useState(businessInfo.industry || '');
  const [urlVal, setUrlVal] = useState(businessInfo.business_url || '');
  const [campaignType, setCampaignType] = useState(businessInfo.business_url || '');
  const [imgLoading, setImgLoading] = useState(true);
  const [templateLoading, setTemplateLoading] = useState(true);
  const [draftLoading, setDraftLoading] = useState(true);
  const history = useHistory();

  


  const getCampaignData = useCallback(async () => await getCampaign());

  useEffect(() => {
    getCampaignData();
    setTemplateData(sampleTemplateData);
    getBusinessInfo();
  }, []);

  useEffect(() => {
    setCampaignData(campaigns);
  }, [campaigns]);

  useEffect(() => {
    // Set Address values
    setLocaleVals();
  }, [businessInfo]);
  

  // const selectDraft = (id) => {
  //   // Make selected campaign current
  // };

  const setSocialsToPost = (selected) => {
    let socialsArray = [];
    if (selected.facebook_feed_ad === 'True') {
      socialsArray.push('facebook feed ad');
    }
    if (selected.facebook_display_ad === 'True') {
      socialsArray.push('facebook display ad');
    }
    if (selected.instagram_ad === 'True') {
      socialsArray.push('instagram ad');
    }
    if (selected.google_search_ad === 'True') {
      socialsArray.push('google search ad');
    }
    if (selected.google_display_ad === 'True') {
      socialsArray.push('google display ad');
    }
    // console.log('updateSocials Running', socialsArray);
    updateSocials(socialsArray);
  };
  const submitSelectedData = async (selected, currentId, campaignType) => {
    let formData = new FormData();
    if (campaignType === 'Template') {
      // let selected = search(data);
      
      console.log("submitTemplateData", selected, selected.campaign_name)
      formData.append('campaign_name', selected.campaign_name);
      formData.append('campaign_type', 'template');
      formData.append('google_search_ad', selected.google_search_ad);
      formData.append('google_display_ad', selected.google_display_ad);
      formData.append('facebook_feed_ad', selected.facebook_feed_ad);
      formData.append('facebook_display_ad', selected.facebook_display_ad);
      formData.append('instagram_ad', selected.instagram_ad);
      // formData.append('ga_keyword_plan', selected.ga_keyword_plan);
      // formData.append('ga_location_plan', selected.ga_location_plan);
      // formData.append('fb_interest_plan', selected.fb_interest_plan);
      // formData.append('fb_location_plan', selected.fb_location_plan);
      formData.append('geotargeting', selected.geotargeting);
      formData.append('locale_type', selected.locale_type);
      formData.append('search_term', selected.search_term);
      formData.append('budget_type', "automatic");
      formData.append('street_address', streetVal);
      formData.append('city_name', cityVal);
      formData.append('state_code', stateVal);
      formData.append('zip_code', zipVal);
      // formData.append('google_account_id', selected.google_account_id);
      // formData.append('facebook_account_id', selected.facebook_account_id);
      formData.append('objective', selected.objective);
      formData.append('google_search_budget', selected.google_search_budget);
      formData.append('google_cpc', selected.google_cpc);
      formData.append('google_display_budget', selected.google_display_budget);
      formData.append('facebook_feed_budget', selected.facebook_feed_budget);
      formData.append('facebook_audience_budget', selected.facebook_audience_budget);
      formData.append('instagram_budget', selected.instagram_budget);
      formData.append('headline', selected.headline);
      formData.append('headline2', selected.headline2);
      formData.append('ad_description', selected.ad_description);
      formData.append('cta', selected.cta);
      formData.append('cta2', selected.cta2);
      // formData.append('ad_link', selected.ad_link);
      formData.append('ga_campaign_length', selected.ga_campaign_length);
      formData.append('fb_campaign_length', selected.fb_campaign_length);
      formData.append('img_option', selected.img_option);
      await updateCampaign(formData, currentId);
      setSocialsToPost(selected);
      setTemplateLoading(false);
    } else if (campaignType === 'Draft') {
      formData.append('campaign_name', selected.campaign_name);
      formData.append('campaign_type', 'draft');
      formData.append('google_search_ad', selected.google_search_ad);
      formData.append('google_display_ad', selected.google_display_ad);
      formData.append('facebook_feed_ad', selected.facebook_feed_ad);
      formData.append('facebook_display_ad', selected.facebook_display_ad);
      formData.append('instagram_ad', selected.instagram_ad);
      formData.append('ga_keyword_plan', selected.ga_keyword_plan);
      formData.append('ga_location_plan', selected.ga_location_plan);
      formData.append('fb_interest_plan', selected.fb_interest_plan);
      formData.append('fb_location_plan', selected.fb_location_plan);
      formData.append('geotargeting', selected.geotargeting);
      formData.append('locale_type', selected.locale_type);
      formData.append('search_term', selected.search_term);
      formData.append('budget_type', selected.budget_type);
      formData.append('street_address', selected.street_address);
      formData.append('city_name', selected.city_name);
      formData.append('state_code', selected.state_code);
      formData.append('zip_code', selected.zip_code);
      formData.append('google_account_id', selected.google_account_id);
      formData.append('facebook_account_id', selected.facebook_account_id);
      formData.append('objective', selected.objective);
      formData.append('google_search_budget', selected.google_search_budget);
      formData.append('google_cpc', selected.google_cpc);
      formData.append('google_display_budget', selected.google_display_budget);
      formData.append('facebook_feed_budget', selected.facebook_feed_budget);
      formData.append('facebook_audience_budget', selected.facebook_audience_budget);
      formData.append('instagram_budget', selected.instagram_budget);
      formData.append('headline', selected.headline);
      formData.append('headline2', selected.headline2);
      formData.append('ad_description', selected.ad_description);
      formData.append('cta', selected.cta);
      formData.append('cta2', selected.cta2);
      formData.append('ad_link', selected.ad_link);
      formData.append('ga_campaign_length', selected.ga_campaign_length);
      formData.append('fb_campaign_length', selected.fb_campaign_length);
      formData.append('img_option', selected.img_option);

      // console.log('ADDING CAMPAIGN', formData);
      await updateCampaign(formData, currentId);
      setSocialsToPost(selected);
      setDraftLoading(false);
    } else if (campaignType === 'New') {
      await createNewCampaign();
      history.push('create/connect-social');
    }
    
  };

  const createNewCampaign = async () => {
    const formData = new FormData();
    formData.append('campaign_name', 'New Campaign');
    await addCampaign(formData);
  };



  const setLocaleVals = () => {
    // if (currentCampaign.campaign_type === 'New') {
    if (!businessInfoLoading && typeof businessInfo !== 'undefined') {
      if (businessInfo.length !== 0) {
        if (typeof businessInfo[0].street !== 'undefined') {
          setStreetVal(businessInfo[0].street || '');
        }
        if (typeof businessInfo[0].city !== 'undefined') {
          setCityVal(businessInfo[0].city || '');
        }
        if (typeof businessInfo[0].state !== 'undefined') {
          setStateVal(businessInfo[0].state || '');
        }
        if (typeof businessInfo[0].zip !== 'undefined') {
          setZipVal(businessInfo[0].zip || '');
        }
        if (typeof businessInfo[0].industry !== 'undefined') {
          setIndustryVal(businessInfo[0].industry || '');
        }
        if (typeof businessInfo[0].business_url !== 'undefined') {
          setUrlVal(businessInfo[0].business_url || '');
        }
      }
    }
    // }
  };

  return (
    <SelectCampaignPage
      campaigns={campaignData}
      templates={templateData}
      createNewCampaign={createNewCampaign}
      // selectDraft={selectDraft}
      submitSelectedData={submitSelectedData}
      addCampaign={addCampaign}
      updateSocials={updateSocials}
      streetVal={streetVal}
      cityVal={cityVal}
      stateVal={stateVal}
      zipVal={zipVal}
      industry={industryVal}
      urlVal={urlVal}
      setSelected={setSelected}
      setImgLoading={setImgLoading}
      imgLoading={imgLoading}
      setCampaignType={setCampaignType}
      campaignType={campaignType}
      templateLoading={templateLoading}
      draftLoading={draftLoading}
    />
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns.campaigns,
  currentCampaign: state.campaigns?.current,
  businessInfo: state.businessInfo.businessInfos,
  businessInfoLoading: state.businessInfo.businessInfoLoading,
});

export default connect(mapStateToProps, {
  getCampaign,
  addCampaign,
  updateSocials,
  getBusinessInfo,
})(SelectCampaignContainer);
