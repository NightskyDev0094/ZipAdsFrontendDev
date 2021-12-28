import { useState, useEffect } from 'react';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

export const CAMPAIGN_FORM_IMAGE_IDS = {
  default: 'file_url',
  fbImg: 'fb_feed_img',
  instagramImg: 'instagram_img',
  fbAudienceImg: 'fb_audience_img',
  gaImg: 'ga_display_img',
  gaSquareImg: 'ga_square_display_img',
};

export const SOCIAL_NETWORK_TITLES = {
  InstagramAd: 'Instagram Ad',
  FacebookAd: 'Facebook Ad',
  FacebookAudienceNetworkAd: 'Facebook Audience Network Ad',
  GoogleAwards: 'Google Awards',
  GoogleDisplayNetworkAd: 'Google Display Network Ad',
};

/**
 * Custom hook that manages all aspects of the create campaign form.
 * Manages the state of selected networks
 * Manages the state of the various campaign details form inputs and the submit form handler
 * All logic is mashed into a single hook because at the moment all uses of this hook are on a single page
 * @param {*} updateCampaign redux action for updating the campaign
 * @param {*} currentCampaign redux state of the current campaign
 * @param {*} googleToken
 * @param {*} facebookToken
 * @param {*} fbPages
 */
export default function useCampaignForm(
  updateCampaign,
  currentCampaign,
  googleToken,
  facebookToken,
  fbPages,
) {

  /** Selected Networks Management */
  const [selectedNetworks, setSelectedNetworks] = useState(Object.values(SOCIAL_NETWORK_TITLES));

  /** Create Campaign Form Inputs */
  const [campaignName, setCampaignName] = useState(currentCampaign.campaign_name || '');
  const [headline, setHeadline] = useState(currentCampaign.headline || '');
  const [headline2, setHeadline2] = useState(currentCampaign.headline2 || '');
  const [adDescription, setAdDescription] = useState(currentCampaign.ad_description || '');
  const [cta, setCta] = useState(currentCampaign.cta || 'Learn More');
  const [cta2, setCta2] = useState(currentCampaign.cta2 || 'Get Offer');
  const [adLink, setAdLink] = useState(currentCampaign.ad_link || 'https://');
  const [fileUrl, setFileUrl] = useState(currentCampaign.file_url || DEFAULT_IMAGE);
  const [fbFeedImg, setFbFeedImg] = useState(currentCampaign.fb_feed_img || '');
  const [instagramImg, setInstagramImg] = useState(currentCampaign.instagram_img || '');
  const [fbAudienceImg, setFbAudienceImg] = useState(currentCampaign.fb_audience_img || '');
  const [gaDisplayImg, setGaDisplayImg] = useState(currentCampaign.ga_display_img || '');
  const [gaSquareDisplayImg, setGaSquareDisplayImg] = useState(
    currentCampaign.ga_square_display_img || ''
  );

  /** Cropper Management */
  const [fbFeedImgName, setFbFeedImgName] = useState(null);
  const [fbAudienceImgName, setFbAudienceImgName] = useState(null);
  const [instagramImgName, setInstagramImgName] = useState(null);
  const [gaDisplayImgName, setGaDisplayImgName] = useState(null);
  const [gaSquareDisplayImgName, setGaSquareDisplayImgName] = useState(null);
  const [fbFeedImgFile, setFBFeedImgFile] = useState(null);
  const [fbAudienceImgFile, setFBAudienceImgFile] = useState(null);
  const [instagramImgFile, setInstagramImgFile] = useState(null);
  const [gaDisplayImgFile, setGADisplayImgFile] = useState(null);
  const [gaSquareDisplayImgFile, setGASquareDisplayImgFile] = useState(null);
  const [fbFeedUpImg, setFbFeedUpImg] = useState(null);
  const [fbAudienceUpImg, setFbAudienceUpImg] = useState(null);
  const [instagramUpImg, setInstagramUpImg] = useState(null);
  const [gaDisplayUpImg, setGaDisplayUpImg] = useState(null);
  const [gaSquareDisplayUpImg, setGaSquareDisplayUpImg] = useState(null);

  /** Preview Urls */
  const [fbFeedPreviewUrl, setFBFeedPreviewUrl] = useState('');
  const [fbAudiencePreviewUrl, setFBAudiencePreviewUrl] = useState('');
  const [instagramPreviewUrl, setInstagramPreviewUrl] = useState('');
  const [gaDisplayPreviewUrl, setGADisplayPreviewUrl] = useState('');
  const [gaSquareDisplayPreviewUrl, setGASquareDisplayPreviewUrl] = useState('');

  /** Other */
  const [imgOption, setImgOption] = useState(currentCampaign.img_option || 'library');

  useEffect(() => {
    /** Load campaign images */
    if (fbFeedImg) getImageFromUrl(fbFeedImg, CAMPAIGN_FORM_IMAGE_IDS.fbImg);
    if (fbAudienceImg) getImageFromUrl(fbAudienceImg, CAMPAIGN_FORM_IMAGE_IDS.fbAudienceImg);
    if (instagramImg) getImageFromUrl(instagramImg, CAMPAIGN_FORM_IMAGE_IDS.instagramImg);
    if (gaDisplayImg) getImageFromUrl(gaDisplayImg, CAMPAIGN_FORM_IMAGE_IDS.gaDisplayImg);
    if (gaSquareDisplayImg)
      getImageFromUrl(gaSquareDisplayImg, CAMPAIGN_FORM_IMAGE_IDS.gaSquareImg);
  }, []);

  /**Helper function that encapsulates logic for reading and setting the image urls
   * @param url string url for the image
   * @param imageType string from the established set of form ids
   */
  const getImageFromUrl = async (url, imageType) => {
    await fetch(`${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        let n = url.lastIndexOf('/');
        let fileName = url.substring(n + 1);
        const modDate = new Date();
        const newName = fileName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });

        if (imageType === CAMPAIGN_FORM_IMAGE_IDS.fbImg) {
          setFbFeedImg(jpgFile);
          setFbFeedImgName(jpgFile.name);
          setFBFeedImgFile(jpgFile);
          setImgPreview(jpgFile, setFbFeedUpImg, setFBFeedPreviewUrl);
        }
        if (imageType === CAMPAIGN_FORM_IMAGE_IDS.fbAudienceImg) {
          setFbAudienceImg(jpgFile);
          setFbAudienceImgName(jpgFile.name);
          setFBAudienceImgFile(jpgFile);
          setImgPreview(jpgFile, setFbAudienceUpImg, setFBAudiencePreviewUrl);
        }
        if (imageType === CAMPAIGN_FORM_IMAGE_IDS.instagramImg) {
          setInstagramImg(jpgFile);
          setInstagramImgName(jpgFile.name);
          setInstagramImgFile(jpgFile);
          setImgPreview(jpgFile, setInstagramUpImg, setInstagramPreviewUrl);
        }
        if (imageType === CAMPAIGN_FORM_IMAGE_IDS.gaDisplayImg) {
          setGaDisplayImg(jpgFile);
          setGaDisplayImgName(jpgFile.name);
          setGADisplayImgFile(jpgFile);
          setImgPreview(jpgFile, setGaDisplayUpImg, setGADisplayPreviewUrl);
        }
        if (imageType === CAMPAIGN_FORM_IMAGE_IDS.gaSquareImg) {
          setGaSquareDisplayImg(jpgFile);
          setGaSquareDisplayImgName(jpgFile.name);
          setGASquareDisplayImgFile(jpgFile);
          setImgPreview(jpgFile, setGaSquareDisplayUpImg, setGASquareDisplayPreviewUrl);
        }
        return jpgFile;
      });
  };

  /** Helper function for reading uploaded files
   * @param file the file being uploaded
   * @param setUpImg the react state dispatch for the type of file image
   * @param  setPreviewUrl the react dispatch for the type of file preview url
   */
  const setImgPreview = (file, setUpImg, setPreviewUrl) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let previewUrl = reader.result;
      setUpImg(previewUrl);
      setPreviewUrl(previewUrl);
    });
    reader.readAsDataURL(file);
  };

  const submitCampaign = async () => {
    const formData = new FormData();

    /** Section that handles the various form inputs */
    formData.append('campaign_name', campaignName);
    formData.append('headline', headline);
    formData.append('headline2', headline2);
    formData.append('ad_description', adDescription);
    formData.append('cta', cta);
    formData.append('cta2', cta2);
    formData.append('ad_link', adLink);

    /** Section that appends the tokens or access keys to social network accounts */
    formData.append('facebook_account_id', facebookToken);
    formData.append('google_account_id', googleToken);
    formData.append('facebook_page_id', fbPages);

    /** Section of Form that appends the selected status of each available social network */
    selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAd)
      ? formData.append('facebook_feed_ad', 'True')
      : formData.append('facebook_feed_ad', 'False');

    selectedNetworks.includes(SOCIAL_NETWORK_TITLES.InstagramAd)
      ? formData.append('instagram_ad', 'True')
      : formData.append('instagram_ad', 'False');

    selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd)
      ? formData.append('facebook_display_ad', 'True')
      : formData.append('facebook_display_ad', 'False');

    selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleAwards)
      ? formData.append('google_search_ad', 'True')
      : formData.append('google_search_ad', 'False');

    selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd)
      ? formData.append('google_display_ad', 'True')
      : formData.append('google_display_ad', 'False');

    /** Section of the form that manages the addition of custom images to specific networks */
    if (
      (fbImg || instagramImg || fbAudienceImg || gaDisplayImg || gaSquareDisplayImg) &&
      imgOption === 'custom'
    ) {
      selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAd) &&
        formData.append('fb_feed_img', fbFeedImg);

      selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd) &&
        formData.append('fb_audience_img', fbAudienceImg);

      selectedNetworks.includes(SOCIAL_NETWORK_TITLES.InstagramAd) &&
        formData.append('instagram_img', instagramImg);

      if (
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleAwards) ||
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd)
      ) {
        formData.append('ga_display_img', gaDisplayImg);
        formData.append('ga_square_display_img', gaSquareDisplayImg);
      }
    } else {
      // if not custom we use the same for everything
      formData.append('file_url', fileUrl);
    }

    /** Grab the campaign id and update it with the forms data */
    const campaignId = currentCampaign.id;
    await updateCampaign(formData, campaignId);
  };

  return {
    /** state management for the selected networks */
    selectedNetworks,
    setSelectedNetworks,

    /** state management for the campaign form */
    formInfo: {
      campaignName,
      setCampaignName,
      headline,
      setHeadline,
      headline2,
      setHeadline2,
      adDescription,
      setAdDescription,
      cta,
      setCta,
      cta2,
      setCta2,
      adLink,
      setAdLink,
      fileUrl,
      setFileUrl,
      fbFeedImg,
      setFbFeedImg,
      instagramImg,
      setInstagramImg,
      fbAudienceImg,
      setFbAudienceImg,
      gaDisplayImg,
      setGaDisplayImg,
      gaSquareDisplayImg,
      setGaSquareDisplayImg,
    },

    /** state management for the cropper */
    cropper: {
      fbFeedImgName,
      setFbFeedImgName,
      fbAudienceImgName,
      setFbAudienceImgName,
      instagramImgName,
      setInstagramImgName,
      gaDisplayImgName,
      setGaDisplayImgName,
      gaSquareDisplayImgName,
      setGaSquareDisplayImgName,
      fbFeedImgFile,
      setFBFeedImgFile,
      fbAudienceImgFile,
      setFBAudienceImgFile,
      instagramImgFile,
      setInstagramImgFile,
      gaDisplayImgFile,
      setGADisplayImgFile,
      gaSquareDisplayImgFile,
      setGASquareDisplayImgFile,
      fbFeedUpImg,
      setFbFeedUpImg,
      fbAudienceUpImg,
      setFbAudienceUpImg,
      instagramUpImg,
      setInstagramUpImg,
      gaDisplayUpImg,
      setGaDisplayUpImg,
      gaSquareDisplayUpImg,
      setGaSquareDisplayUpImg,
    },

    /** state management for the image preview urls */
    previews: {
      fbFeedPreviewUrl,
      setFBFeedPreviewUrl,
      fbAudiencePreviewUrl,
      setFBAudiencePreviewUrl,
      instagramPreviewUrl,
      setInstagramPreviewUrl,
      gaDisplayPreviewUrl,
      setGADisplayPreviewUrl,
      gaSquareDisplayPreviewUrl,
      setGASquareDisplayPreviewUrl,
    },

    imgOption,
    setImgOption,

    submitCampaign,
  };
}
