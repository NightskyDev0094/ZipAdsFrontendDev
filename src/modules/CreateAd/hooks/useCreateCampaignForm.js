import { useState, useEffect } from 'react';
// import Library_1 from '../../../BlueTecUIKit/images/gallery/library_1.png';
import Library_1 from '../../../BlueTecUIKit/images/gallery/library_1.png';

export const SOCIAL_NETWORK_TITLES = {
  FacebookAd: 'Facebook Ad',
  InstagramAd: 'Instagram Ad',
  FacebookAudienceNetworkAd: 'Facebook Audience Ad',
  GoogleAwards: 'Google Ad',
  GoogleDisplayNetworkAd: 'Google Ad Network',
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
 * @param {*} markCurrent is suppose to make the formInfo the currentCampaign
 * @param {*} updateSocials newAdInfo reducer that updates the socials to Post
 */
export default function useCampaignForm(
  updateCampaign,
  currentCampaign,
  googleToken,
  facebookToken,
  fbPages,
  makeCurrent,
  updateSocials
) {
  /** Selected Networks Management */
  const [selectedNetworks, setSelectedNetworks] = useState(Object.values(SOCIAL_NETWORK_TITLES));
  console.log('CREATE CAMPAIGN FORM NETWORKS: ', selectedNetworks);

  /** Create Campaign Form Inputs */
  //** Taken From Create Campaign Page */
  const [campaignName, setCampaignName] = useState(currentCampaign?.campaign_name || '');
  const [headline, setHeadline] = useState(currentCampaign?.headline || '');
  const [headline2, setHeadline2] = useState(currentCampaign?.headline2 || '');
  const [adDescription, setAdDescription] = useState(currentCampaign?.ad_description || '');
  const [cta, setCta] = useState(currentCampaign?.cta || 'Learn More');
  const [cta2, setCta2] = useState(currentCampaign?.cta2 || 'Get Offer');
  const [adLink, setAdLink] = useState(currentCampaign?.ad_link || 'https://');
  const [squareImgUrl, setSquareImgUrl] = useState(currentCampaign?.square_img_url || '');
  const [rectangleImgUrl, setRectangleImgUrl] = useState(currentCampaign?.rectangle_img_url || '');
  const [squareImgUpload, setSquareImgUpload] = useState(currentCampaign?.square_img_upload || '');
  const [rectangleImgUpload, setRectangleImgUpload] = useState(
    currentCampaign?.rectangle_img_upload || ''
  );

  /** Cropper Management */
  const [rectangleImgName, setRectangleImgName] = useState(null);
  const [squareImgName, setSquareImgName] = useState(null);

  const [rectangleImgFile, setRectangleImgFile] = useState(null);
  const [squareImgFile, setSquareImgFile] = useState(null);
  const [rectangleUpImg, setRectangleUpImg] = useState();
  const [squareUpImg, setSquareUpImg] = useState();

  /** Preview Urls */
  const [squareImgPreviewUrl, setSquareImgPreviewUrl] = useState('');
  const [rectangleImgPreviewUrl, setRectangleImgPreviewUrl] = useState('');

  /** Other */
  const [imgOption, setImgOption] = useState(currentCampaign?.img_option || 'library');

  useEffect(() => {
    console.log('Use effect running');
    /** Load campaign images */
    // if (!rectangleImgUrl) getImageFromUrl(rectangleImgUrl, 'rectangle_img_url');
    // if (!squareImgUrl) getImageFromUrl(squareImgUrl, 'square_img_url');
    // if (!rectangleImgUpload) getImageFromUrl(rectangleImgUpload, 'rectangle_img_upload');
    // if (!squareImgUpload) getImageFromUrl(squareImgUpload, 'square_img_upload');
    if (currentCampaign?.rectangle_img_url !== null && currentCampaign?.rectangle_img_url !== '') {
      console.log("THIS")
      getImageFromUrl(currentCampaign?.rectangle_img_url, 'rectangle_img_url');
    }
    if (currentCampaign?.square_img_url !== null && currentCampaign?.square_img_url !== '') {
      console.log("THIS IS ")
      getImageFromUrl(currentCampaign?.square_img_url, 'square_img_url');
    }
    if (
      currentCampaign?.rectangle_img_upload !== null &&
      currentCampaign?.rectangle_img_upload !== ''
    ) {
      console.log("THIS IS A")
      getImageFromUrl(currentCampaign?.rectangle_img_upload, 'rectangle_img_upload');
    }
    if (currentCampaign?.square_img_upload !== null && currentCampaign?.square_img_upload !== '') {
      console.log("this is a ")
      getImageFromUrl(currentCampaign?.square_img_upload, 'square_img_upload');
    }
  }, []);

  /**Helper function that encapsulates logic for reading and setting the image urls
   * @param url string url for the image
   * @param imageType string from the established set of form ids
   */
  const getImageFromUrl = async (url, imageType) => {
    console.log('URL::::', url);

    await fetch(`${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        // console.log('Image function test', blob);
        let n = url?.lastIndexOf('/');
        let fileName = url?.substring(n + 1);
        const modDate = new Date();
        const newName = fileName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });

        if (imageType === 'rectangle_img_upload' || imageType === 'rectangle_img_url') {
          imageType === 'rectangle_img_upload'
            ? setRectangleImgUpload(jpgFile)
            : setRectangleImgUrl(jpgFile);
          setRectangleImgName(jpgFile?.name);
          setRectangleImgFile(jpgFile);
          setImgPreview(jpgFile, setRectangleUpImg, setRectangleImgPreviewUrl);
        }
        if (imageType === 'square_img_upload' || imageType === 'square_img_url') {
          imageType === 'square_img_upload'
            ? setSquareImgUpload(jpgFile)
            : setSquareImgUrl(jpgFile);
          setSquareImgName(jpgFile?.name);
          setSquareImgFile(jpgFile);
          setImgPreview(jpgFile, setSquareUpImg, setSquareImgPreviewUrl);
        }
        console.log(currentCampaign);
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
      let previewUrl = reader?.result;
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
    formData.append('img_option', imgOption);

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
    if ((squareImgUpload || rectangleImgUpload)) {
      if (
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAd) ||
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd)
      ) {
        formData.append('rectangle_img_upload', rectangleImgUpload);
      }
      if (
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd) ||
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.InstagramAd) ||
        selectedNetworks.includes(SOCIAL_NETWORK_TITLES.GoogleAwards)
      ) {
        formData.append('square_img_upload', squareImgUpload);
      }
    }

    /** Grab the campaign id and update it with the forms data */
    const campaignId = currentCampaign?.id;
    console.log('CREATE CAMPAIGN FORM SQUARE IMG Upload: ', formData.get('square_img_upload'));
    console.log(
      'CREATE CAMPAIGN FORM Rectangle IMG Upload: ',
      formData.get('rectangle_img_upload')
    );
    await updateCampaign(formData, campaignId);
    await makeCurrent(formData);
    await updateSocials(selectedNetworks);
    console.log('Campaign should have been updated: ', currentCampaign.id);
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
      squareImgUrl,
      setSquareImgUrl,
      rectangleImgUrl,
      setRectangleImgUrl,
      squareImgUpload,
      setSquareImgUpload,
      rectangleImgUpload,
      setRectangleImgUpload,
    },

    /** state management for the cropper */
    cropper: {
      rectangleImgName,
      setRectangleImgName,
      squareImgName,
      setSquareImgName,
      rectangleImgFile,
      setRectangleImgFile,
      squareImgFile,
      setSquareImgFile,
      rectangleUpImg,
      setRectangleUpImg,
      squareUpImg,
      setSquareUpImg,
    },

    /** state management for the image preview urls */
    previews: {
      squareImgPreviewUrl,
      setSquareImgPreviewUrl,
      rectangleImgPreviewUrl,
      setRectangleImgPreviewUrl,
    },

    imgOption,
    setImgOption,

    submitCampaign,
  };
}
