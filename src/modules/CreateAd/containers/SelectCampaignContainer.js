import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import SelectCampaignPage from '../pages/SelectCampaignPage';
import { getCampaign, addCampaign, updateCampaign } from '../../../actions/campaignActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { updateSocials } from '../../../actions/formInfoActions';
import BEAUTY_SQUARE_IMAGE from '../../../img/TemplateImages/Beauty_1x1.jpg';
import CONSUMER_PRODUCT_SQUARE_IMAGE from '../../../img/TemplateImages/Consumer_Products_and_Services_1x1.jpg';
import FINANCE_SQUARE_IMAGE from '../../../img/TemplateImages/Finance_1x1.jpg';
import FITNESS_SQUARE_IMAGE from '../../../img/TemplateImages/Fitness_1x1.jpg';
import HEALTH_SQUARE_IMAGE from '../../../img/TemplateImages/Health_1x1.jpg';
import PERSONAL_FINANCE_SQUARE_IMAGE from '../../../img/TemplateImages/Personal_Finance_1x1.jpg';
import PET_SQUARE_IMAGE from '../../../img/TemplateImages/Pet_1x1.jpg';
import REAL_ESTATE_SQUARE_IMAGE from '../../../img/TemplateImages/Real_Estate_1x1.jpg';
import RESTAURANT_SQUARE_IMAGE from '../../../img/TemplateImages/Restaurant_1x1.jpg';
import TRAVEL_AND_LODGING_SQUARE_IMAGE from '../../../img/TemplateImages/Travel_and_Lodging_1x1.jpg';
import BEAUTY_RECTANGLE_IMAGE from '../../../img/TemplateImages/Beauty_1.91x1.png';
import CONSUMER_PRODUCT_RECTANGLE_IMAGE from '../../../img/TemplateImages/Consumer_Products_and_Services_1.91x1.png';
import FINANCE_RECTANGLE_IMAGE from '../../../img/TemplateImages/Finance_1.91x1.png';
import FITNESS_RECTANGLE_IMAGE from '../../../img/TemplateImages/Fitness_1.91x1.png';
import HEALTH_RECTANGLE_IMAGE from '../../../img/TemplateImages/Health_1.91x1.png';
import PERSONAL_FINANCE_RECTANGLE_IMAGE from '../../../img/TemplateImages/Personal_Finance_1.91x1.png';
import PET_RECTANGLE_IMAGE from '../../../img/TemplateImages/Pet_1.91x1.png';
import REAL_ESTATE_RECTANGLE_IMAGE from '../../../img/TemplateImages/Real_Estate_1.91x1.png';
import RESTAURANT_RECTANGLE_IMAGE from '../../../img/TemplateImages/Restaurant_1.91x1.png';
import TRAVEL_AND_LODGING_RECTANGLE_IMAGE from '../../../img/TemplateImages/Travel_and_Lodging_1.91x1.png';

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

  const sampleTemplateData = [
    {
      id: 0,
      campaign_name: 'Mascara Sale',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Generate sales or signups',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Shop Now',
      cta2: 'Learn More',
      headline: 'Long Lashes in One Click!',
      headline2: 'Buy One Get One Free',
      ad_description:
        "Maria’s Mascara will have your lashes looking so long that they'll be doing double takes when checking your ID.",
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: BEAUTY_RECTANGLE_IMAGE,
      instagram_img: BEAUTY_SQUARE_IMAGE,
      fb_audience_img: BEAUTY_RECTANGLE_IMAGE,
      ga_display_img: BEAUTY_RECTANGLE_IMAGE,
      ga_square_display_img: BEAUTY_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Beauty',
    },
    {
      id: 1,
      campaign_name: 'Men’s Sunglasses',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Increase customers visiting at my business’s physical location',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Contact Us',
      headline: 'Come SEE Why We Rock',
      headline2: 'A Pair for Every Mood',
      ad_description:
        'At Miller’s Sunglasses, our quality lenses will have everyone staring at you through their own shades.',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: CONSUMER_PRODUCT_RECTANGLE_IMAGE,
      instagram_img: CONSUMER_PRODUCT_SQUARE_IMAGE,
      fb_audience_img: CONSUMER_PRODUCT_RECTANGLE_IMAGE,
      ga_display_img: CONSUMER_PRODUCT_RECTANGLE_IMAGE,
      ga_square_display_img: CONSUMER_PRODUCT_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Consumer Product',
    },
    {
      id: 2,
      campaign_name: 'Bank Opening',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Increase customers visiting at my business’s physical location',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Contact Us',
      headline: 'Trusted by Millions',
      headline2: 'Since 1931',
      ad_description:
        'John Smith Bank is opening a new location on Broadway! Come by and let us serve you.',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: FINANCE_RECTANGLE_IMAGE,
      instagram_img: FINANCE_SQUARE_IMAGE,
      fb_audience_img: FINANCE_RECTANGLE_IMAGE,
      ga_display_img: FINANCE_RECTANGLE_IMAGE,
      ga_square_display_img: FINANCE_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Finance',
    },
    {
      id: 3,
      campaign_name: 'Gym Campaign',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Generate sales or signups',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Sign Up',
      cta2: 'Contact Us',
      headline: 'Gain Courage Lose Weight',
      headline2: 'With Over 100 Gym Plans',
      ad_description:
        "Jim's Gym has helped thousands of people meet their physical goals. Come by today and get your first month FREE.",
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: FITNESS_RECTANGLE_IMAGE,
      instagram_img: FITNESS_SQUARE_IMAGE,
      fb_audience_img: FITNESS_RECTANGLE_IMAGE,
      ga_display_img: FITNESS_RECTANGLE_IMAGE,
      ga_square_display_img: FITNESS_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Fitness',
    },
    {
      id: 4,
      campaign_name: 'Health Blog Subscription',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Generate web traffic',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Subscribe',
      cta2: 'Learn More',
      headline: "Life's a Box of Berries",
      headline2: 'Healthy if You Choose So',
      ad_description:
        'Health Today Magazine has everything you need to know about health, fitness, and nutrition. Subscribe for FREE today!',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: HEALTH_RECTANGLE_IMAGE,
      instagram_img: HEALTH_SQUARE_IMAGE,
      fb_audience_img: HEALTH_RECTANGLE_IMAGE,
      ga_display_img: HEALTH_RECTANGLE_IMAGE,
      ga_square_display_img: HEALTH_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Health',
    },
    {
      id: 5,
      campaign_name: 'Finance App Launch',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Generate sales or signups',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Learn More',
      cta2: 'Sign Up',
      headline: 'Grab Your $ by the Reigns',
      headline2: 'And Make it Rain!',
      ad_description:
        "SaveMore App is officially launching! We're offering a $5 sign-up credit and a $50 referral bonus!",
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: PERSONAL_FINANCE_RECTANGLE_IMAGE,
      instagram_img: PERSONAL_FINANCE_SQUARE_IMAGE,
      fb_audience_img: PERSONAL_FINANCE_RECTANGLE_IMAGE,
      ga_display_img: PERSONAL_FINANCE_RECTANGLE_IMAGE,
      ga_square_display_img: PERSONAL_FINANCE_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Personal Finance',
    },
    {
      id: 6,
      campaign_name: 'Dog Treats',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Make people aware of my business',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Get Offer',
      cta2: 'Shop Now',
      headline: 'Your Dog Would Click This',
      headline2: "So Why Won't You?",
      ad_description:
        'Good Boy Co. is offering a 24-hour SUPER SALE on all treats throughout our website!',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: PET_RECTANGLE_IMAGE,
      instagram_img: PET_SQUARE_IMAGE,
      fb_audience_img: PET_RECTANGLE_IMAGE,
      ga_display_img: PET_RECTANGLE_IMAGE,
      ga_square_display_img: PET_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Pets',
    },
    {
      id: 7,
      campaign_name: 'Real Estate Agent',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Make people aware of my business',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Book Now',
      cta2: 'Learn More',
      headline: 'Dream Home to Real Home',
      headline2: 'Sandra Will Help!',
      ad_description:
        'Sandra Williams has helped hundreds of people turn their dream home into a reality. Avoid the nightmare of doing it yourself!',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: REAL_ESTATE_RECTANGLE_IMAGE,
      instagram_img: REAL_ESTATE_SQUARE_IMAGE,
      fb_audience_img: REAL_ESTATE_RECTANGLE_IMAGE,
      ga_display_img: REAL_ESTATE_RECTANGLE_IMAGE,
      ga_square_display_img: REAL_ESTATE_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Real Estate',
    },
    {
      id: 8,
      campaign_name: 'Slice of Heaven Restaurant',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Increase customers visiting at my business’s physical location',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Get Offer',
      cta2: 'See Menu',
      headline: 'Wondering Where to Eat?',
      headline2: 'Come to Slice of Heaven!',
      ad_description:
        "Check out Slice of Heaven's mouth watering menu and get 15% OFF your first visit! Located in Jamestown.",
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: RESTAURANT_RECTANGLE_IMAGE,
      instagram_img: RESTAURANT_SQUARE_IMAGE,
      fb_audience_img: RESTAURANT_RECTANGLE_IMAGE,
      ga_display_img: RESTAURANT_RECTANGLE_IMAGE,
      ga_square_display_img: RESTAURANT_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Restaraunt',
    },
    {
      id: 9,
      campaign_name: 'Romero Hotel',
      google_search_ad: 'True',
      google_display_ad: 'True',
      facebook_feed_ad: 'True',
      facebook_display_ad: 'True',
      instagram_ad: 'True',
      objective: 'Generate web traffic',
      google_search_budget: '5.00',
      google_display_budget: '5.00',
      google_cpc: '1.00',
      instagram_budget: '5.00',
      facebook_feed_budget: '5.00',
      facebook_audience_budget: '5.00',
      cta: 'Get Offer',
      cta2: 'Contact Us',
      headline: 'This is One Click Away',
      headline2: 'Get 25% off Your Booking',
      ad_description:
        'Romero Hotel is home to the most breathtaking view in Block Island! Visit our website to book the vacation that you deserve.',
      ga_campaign_length: '7',
      fb_campaign_length: '7',
      fb_feed_img: TRAVEL_AND_LODGING_RECTANGLE_IMAGE,
      instagram_img: TRAVEL_AND_LODGING_SQUARE_IMAGE,
      fb_audience_img: TRAVEL_AND_LODGING_RECTANGLE_IMAGE,
      ga_display_img: TRAVEL_AND_LODGING_RECTANGLE_IMAGE,
      ga_square_display_img: TRAVEL_AND_LODGING_SQUARE_IMAGE,
      img_option: 'custom',
      logo_option: 'custom',
      industry: 'Travel and Lodging',
    },
  ];


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
  useEffect(() => {
    // Set Address values
    submitSelectedData(setSelected, currentCampaign.id, campaignType);
  }, [currentCampaign]);

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
    } else if (campaignType === 'New') {
      await createNewCampaign();;
    }
    history.push('create/connect-social');
  };

  const createNewCampaign = async () => {
    const formData = new FormData();
    formData.append('campaign_name', 'New Campaign');
    await updateCampaign(formData, currentId);
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
      selectDraft={selectDraft}
      addCampaign={addCampaign}
      updateSocials={updateSocials}
      streetVal={streetVal}
      cityVal={cityVal}
      stateVal={stateVal}
      zipVal={zipVal}
      industry={industry}
      urlVal={urlVal}
      setSelected={setSelected}
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
