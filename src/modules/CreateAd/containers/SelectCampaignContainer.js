import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import SelectCampaignPage from '../pages/SelectCampaignPage';
import { getCampaign, addCampaign, updateCampaign } from '../../../actions/campaignActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { updateSocials } from '../../../actions/formInfoActions';

import { sampleTemplateData } from '../components/SelectCampaign.TemplateData';

const SelectCampaignContainer = ({ getCampaign, addCampaign, campaigns, currentCampaign, updateSocials, getBusinessInfo, businessInfo, businessInfoLoading, updateCampaign}) => {
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
  const [dataLoading, setDataLoading] = useState(true);
  const history = useHistory();

  


  const getCampaignData = useCallback(async () => await getCampaign());

  useEffect(() => {
    getCampaignData();
    setTemplateData(sampleTemplateData);
    getBusinessInfo();
  }, []);
  const [recommendedTemplate, setRecommendedTemplate] = useState(null);
  const industries = [
    'BEAUTY',
    'CONSUMER PRODUCTS AND SERVICES',
    'FINANCE',
    'FITNESS',
    'HEALTH',
    'PERSONAL FINANCE',
    'PET',
    'REAL ESTATE',
    'RESTAURANT',
    'TRAVEL AND LODGING',
  ];
  
  useEffect(() => {
    // Set Address values
    if (businessInfo.length) {
      console.log("Running business info update", businessInfo[businessInfo.length - 1])
      setLocaleVals();
      
      // }
    }
  }, [businessInfo]);
  useEffect(() => {
    // Set Address values
    if (businessInfo[businessInfo.length - 1].industry) {
      console.log("Set recommended template running", businessInfo[businessInfo.length - 1].industry)
      setRecommendedTemplate(templateData[industries.indexOf(businessInfo[businessInfo.length - 1].industry)]);
    }
  }, [businessInfo]);

  useEffect(() => {
    setCampaignData(campaigns);
  }, [campaigns]);

  useEffect(() => {
    // Go to next page when images are finished loading
    if (imgLoading === false){
      history.push('create/connect-social');
    }
  }, [imgLoading]);
  useEffect(() => {
    // Set Address values
    if (dataLoading === false){
      // console.log("currentCampaign", currentCampaign.id)
      fetchImagesFromUrlThenUpdateCampaign(selected, currentCampaign.id);
    }
  }, [dataLoading]);
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
  const submitSelectedData = async (id, data, campaignType) => {
    
    let formData = new FormData();
    if (campaignType === 'Template') {
      // let selected = search(data);
      let selectedCampaign = data[id];
      setSelected(selectedCampaign)
      // console.log("submitTemplateData", selectedCampaign, selectedCampaign.campaign_name)
      formData.append('campaign_name', selectedCampaign.campaign_name);
      formData.append('campaign_type', 'template');
      formData.append('google_search_ad', selectedCampaign.google_search_ad);
      formData.append('google_display_ad', selectedCampaign.google_display_ad);
      formData.append('facebook_feed_ad', selectedCampaign.facebook_feed_ad);
      formData.append('facebook_display_ad', selectedCampaign.facebook_display_ad);
      formData.append('instagram_ad', selectedCampaign.instagram_ad);
      // formData.append('ga_keyword_plan', selectedCampaign.ga_keyword_plan);
      // formData.append('ga_location_plan', selectedCampaign.ga_location_plan);
      // formData.append('fb_interest_plan', selectedCampaign.fb_interest_plan);
      // formData.append('fb_location_plan', selectedCampaign.fb_location_plan);
      formData.append('locale_type', "zip");
      formData.append('budget_type', "automatic");
      formData.append('street_address', streetVal);
      formData.append('city_name', cityVal);
      formData.append('state_code', stateVal);
      formData.append('zip_code', zipVal);
      formData.append('ad_link', urlVal);
      // formData.append('google_account_id', selectedCampaign.google_account_id);
      // formData.append('facebook_account_id', selectedCampaign.facebook_account_id);
      formData.append('objective', selectedCampaign.objective);
      formData.append('google_search_budget', selectedCampaign.google_search_budget);
      formData.append('google_cpc', selectedCampaign.google_cpc);
      formData.append('google_display_budget', selectedCampaign.google_display_budget);
      formData.append('facebook_feed_budget', selectedCampaign.facebook_feed_budget);
      formData.append('facebook_audience_budget', selectedCampaign.facebook_audience_budget);
      formData.append('instagram_budget', selectedCampaign.instagram_budget);
      formData.append('headline', selectedCampaign.headline);
      formData.append('headline2', selectedCampaign.headline2);
      formData.append('ad_description', selectedCampaign.ad_description);
      formData.append('cta', selectedCampaign.cta);
      formData.append('cta2', selectedCampaign.cta2);
      // formData.append('ad_link', selectedCampaign.ad_link);
      formData.append('ga_campaign_length', selectedCampaign.ga_campaign_length);
      formData.append('fb_campaign_length', selectedCampaign.fb_campaign_length);
      formData.append('img_option', selectedCampaign.img_option);
      await addCampaign(formData);
      setSocialsToPost(selectedCampaign);
      setDataLoading(false);
    } else if (campaignType === 'Draft') {
      const search = () => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i];
          }
        }
      };
      let selectedCampaign = search(data);
      setSelected(selectedCampaign)
      formData.append('campaign_name', selectedCampaign.campaign_name);
      formData.append('campaign_type', 'draft');
      formData.append('google_search_ad', selectedCampaign.google_search_ad);
      formData.append('google_display_ad', selectedCampaign.google_display_ad);
      formData.append('facebook_feed_ad', selectedCampaign.facebook_feed_ad);
      formData.append('facebook_display_ad', selectedCampaign.facebook_display_ad);
      formData.append('instagram_ad', selectedCampaign.instagram_ad);
      formData.append('ga_keyword_plan', selectedCampaign.ga_keyword_plan);
      formData.append('ga_location_plan', selectedCampaign.ga_location_plan);
      formData.append('fb_interest_plan', selectedCampaign.fb_interest_plan);
      formData.append('fb_location_plan', selectedCampaign.fb_location_plan);
      formData.append('locale_type', "zip");
      formData.append('budget_type', selectedCampaign.budget_type);
      formData.append('street_address', selectedCampaign.street_address);
      formData.append('city_name', selectedCampaign.city_name);
      formData.append('state_code', selectedCampaign.state_code);
      formData.append('zip_code', selectedCampaign.zip_code);
      formData.append('ad_link', selectedCampaign.ad_link);
      formData.append('google_account_id', selectedCampaign.google_account_id);
      formData.append('facebook_account_id', selectedCampaign.facebook_account_id);
      formData.append('objective', selectedCampaign.objective);
      formData.append('google_search_budget', selectedCampaign.google_search_budget);
      formData.append('google_cpc', selectedCampaign.google_cpc);
      formData.append('google_display_budget', selectedCampaign.google_display_budget);
      formData.append('facebook_feed_budget', selectedCampaign.facebook_feed_budget);
      formData.append('facebook_audience_budget', selectedCampaign.facebook_audience_budget);
      formData.append('instagram_budget', selectedCampaign.instagram_budget);
      formData.append('headline', selectedCampaign.headline);
      formData.append('headline2', selectedCampaign.headline2);
      formData.append('ad_description', selectedCampaign.ad_description);
      formData.append('cta', selectedCampaign.cta);
      formData.append('cta2', selectedCampaign.cta2);
      formData.append('ad_link', selectedCampaign.ad_link);
      formData.append('ga_campaign_length', selectedCampaign.ga_campaign_length);
      formData.append('fb_campaign_length', selectedCampaign.fb_campaign_length);
      formData.append('img_option', selectedCampaign.img_option);

      // console.log('ADDING CAMPAIGN', formData);
      await addCampaign(formData);
      setSocialsToPost(selectedCampaign);
      setDataLoading(false);
    } else if (campaignType === 'New') {
      await createNewCampaign();
      history.push('create/connect-social');
    }
    
  };

  const createNewCampaign = async () => {
    const formData = new FormData();
    formData.append('campaign_name', 'New Campaign');
    formData.append('campaign_type', 'new');
    formData.append('street_address', streetVal);
    formData.append('city_name', cityVal);
    formData.append('state_code', stateVal);
    formData.append('zip_code', zipVal);
    formData.append('ad_link', urlVal);
    formData.append('locale_type', "zip");
    await addCampaign(formData);
  };
  const getImageFromUrl = async (url, imageType, formData) => {
    await fetch(`${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        // console.log('Image function test', blob);
        let n = url.lastIndexOf('/');
        let fileName = url.substring(n + 1);
        const modDate = new Date();
        const newName = fileName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });
        // console.log('File Creation test', jpgFile);
        formData.append(imageType, jpgFile);
        return jpgFile;
      });
  };

  const fetchImagesFromUrlThenUpdateCampaign = async (selected, id) => {
    
    // console.log('Selected::::', selected.ga_display_img, selected);
    const formData = new FormData();
    // load image files from urls
    if (selected.fb_feed_img !== null && selected.fb_feed_img !== '') {
      await getImageFromUrl(selected.fb_feed_img, 'fb_feed_img', formData);
    }
    if (selected.fb_audience_img !== null && selected.fb_audience_img !== '') {
      await getImageFromUrl(selected.fb_audience_img, 'fb_audience_img', formData);
    }
    if (selected.instagram_img !== null && selected.instagram_img !== '') {
      await getImageFromUrl(selected.instagram_img, 'instagram_img', formData);
    }
    if (selected.ga_display_img !== null && selected.ga_display_img !== '') {
      await getImageFromUrl(selected.ga_display_img, 'ga_display_img', formData);
      // console.log('Image post test!!!!');
    }

    if (selected.ga_square_display_img !== null && selected.ga_square_display_img !== '') {
      await getImageFromUrl(selected.ga_square_display_img, 'ga_square_display_img', formData);
    }
    updateCampaign(formData, id);
    // console.log('Submit Data test');
    setImgLoading(false);
    // await submitTemplateData(selected, formData, campaignType);
    // history.push('/connect-social');
  };


  const setLocaleVals = () => {
    // if (currentCampaign.campaign_type === 'New') {
    if (!businessInfoLoading && typeof businessInfo !== 'undefined') {
      if (businessInfo.length !== 0) {
        if (typeof businessInfo[businessInfo.length - 1].street !== 'undefined') {
          setStreetVal(businessInfo[businessInfo.length - 1].street || '');
          
        }
        if (typeof businessInfo[businessInfo.length - 1].city !== 'undefined') {
          setCityVal(businessInfo[businessInfo.length - 1].city || '');
        }
        if (typeof businessInfo[businessInfo.length - 1].state !== 'undefined') {
          setStateVal(businessInfo[businessInfo.length - 1].state || '');
        }
        if (typeof businessInfo[businessInfo.length - 1].zip !== 'undefined') {
          setZipVal(businessInfo[businessInfo.length - 1].zip || '');
        }
        if (typeof businessInfo[businessInfo.length - 1].industry !== 'undefined') {
          setIndustryVal(businessInfo[businessInfo.length - 1].industry || '');
          
        }
        if (typeof businessInfo[businessInfo.length - 1].business_url !== 'undefined') {
          setUrlVal(businessInfo[businessInfo.length - 1].business_url || '');
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
      submitSelectedData={submitSelectedData}
      addCampaign={addCampaign}
      updateSocials={updateSocials}
      streetVal={streetVal}
      cityVal={cityVal}
      stateVal={stateVal}
      zipVal={zipVal}
      industry={industryVal}
      urlVal={urlVal}
      selected={selected}
      setSelected={setSelected}
      setCampaignType={setCampaignType}
      campaignType={campaignType}
      updateCampaign={updateCampaign}
      currentCampaign={currentCampaign}
      setImgLoading={setImgLoading}
      recommendedTemplate={recommendedTemplate}
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
  updateCampaign,
  updateSocials,
  getBusinessInfo,
})(SelectCampaignContainer);
