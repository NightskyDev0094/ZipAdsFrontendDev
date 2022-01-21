import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import CreateCampaign from '../pages/CampaignPage';
import CreateCampaign from '../pages/newPages/CampaignPage';
import { updateCampaign } from '../../../actions/campaignActions';
import { updateSocials } from '../../../actions/formInfoActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { completeStep } from '../../../actions/step.actions';
import { SOCIAL_NETWORK_TITLES } from '../hooks/useCreateCampaignForm';
import { useHistory } from 'react-router';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

/**
 * @param { campaigns: CampaignInfo }  - redux state that contains information about the users campaigns, including the current one
 * @param { currentCampaign: CampaignInfo }  - Current campaign that is being edited.
 * @param { businessInfo: CampaignInfo }  - Action that retrieves business info from the backend for autofill.
 * @param { socialsToPost: CampaignInfo }  - redux state that contains a list of selected ad networks.
 * @param { completeStep: Function }  - Action that changes the steper state to complete.
 * @param { updateCampaign: Function } - a redux action that edits the current campaign
 * @param { updateSocials: Function } - a redux action Updates currently selected ad networks.
 */
const CreateCampaignContainer = ({
  completeStep,
  hasCreateCampaignStepBeenCompleted,
  updateCampaign,
  currentCampaign,
  postCampaigns,
  campaigns,
  getBusinessInfo,
  getGoogleAdAccounts,
  getFbAdAccounts,
  businessInfo,
  businessInfoLoading,
  socialsToPost,
  updateSocials,
  ...props
}) => {
  const history = useHistory();
  const [formInfo, setFormInfo] = useState({
    campaign_name: currentCampaign.campaign_name || '',
    headline: currentCampaign.headline || '',
    headline2: currentCampaign.headline2 || '',
    ad_description: currentCampaign.ad_description || '',
    cta: currentCampaign.cta || 'Learn More',
    cta2: currentCampaign.cta2 || 'Get Offer',
    ad_link: currentCampaign.ad_link || 'https://',
    file_url: currentCampaign.file_url || DEFAULT_IMAGE,
    square_img_url: currentCampaign.square_img_url || '',
    rectangle_img_url: currentCampaign.rectangle_img_url || '',
    square_img_upload: currentCampaign.square_img_upload || '',
    rectangle_img_upload: currentCampaign.rectangle_img_upload || '',
  });
  const [urlVal, setUrlVal] = useState(currentCampaign.ad_link || 'https://');
  const [imgOption, setImgOption] = useState(currentCampaign.img_option || 'library');
  const [fbFeedNum, setFbFeedNum] = useState(0);
  const [fbAudienceNum, setFbAudienceNum] = useState(0);
  const [instagramNum, setInstagramNum] = useState(0);
  const [gaSearchNum, setGaSearchNum] = useState(0);
  const [gaDisplayNum, setGaDisplayNum] = useState(0);
  const [gaSquareDisplayNum, setGaSquareDisplayNum] = useState(0);
  const [adSlideLength, setAdSlideLength] = useState(socialsToPost.length);
  // Cropper state
  const [rectangleImgName, setRectangleImgName] = useState(null);
  const [squareImgName, setSquareImgName] = useState(null);
  const [rectangleImgFile, setRectangleImgFile] = useState(null);
  const [squareImgFile, setSquareImgFile] = useState(null);
  const [rectangleUpImg, setRectangleUpImg] = useState();
  const [squareUpImg, setSquareUpImg] = useState();
  // preview urls
  const [squareImgPreviewUrl, setSquareImgPreviewUrl] = useState('');
  const [rectangleImgPreviewUrl, setRectangleImgPreviewUrl] = useState('');
  // Load business info for autofill
  useEffect(() => {
    getFbAdAccounts();
    getGoogleAdAccounts();
    // getBusinessInfo();
    let val = 0;
    if (socialsToPost.includes(SOCIAL_NETWORK_TITLES.FacebookAd)) {
      val++;
      setFbFeedNum(val);
    }
    if (socialsToPost.includes(SOCIAL_NETWORK_TITLES.FacebookAudienceNetworkAd)) {
      val++;
      setFbAudienceNum(val);
    }
    if (socialsToPost.includes(SOCIAL_NETWORK_TITLES.InstagramAd)) {
      val++;
      setInstagramNum(val);
    }
    if (socialsToPost.includes(SOCIAL_NETWORK_TITLES.GoogleAwards)) {
      val++;
      setGaSearchNum(val);
    }
    if (socialsToPost.includes(SOCIAL_NETWORK_TITLES.GoogleDisplayNetworkAd)) {
      val++;
      setGaDisplayNum(val);
      val++;
      setGaSquareDisplayNum(val);
    }
    setAdSlideLength(val);
    // Load campaign images
    if (formInfo.rectangle_img_url !== null && formInfo.rectangle_img_url !== '') {
      getImageFromUrl(formInfo.rectangle_img_url, 'rectangle_img_url');
    }
    if (formInfo.square_img_url !== null && formInfo.square_img_url !== '') {
      getImageFromUrl(formInfo.square_img_url, 'square_img_url');
    }
    if (formInfo.rectangle_img_upload !== null && formInfo.rectangle_img_upload !== '') {
      getImageFromUrl(formInfo.rectangle_img_upload, 'rectangle_img_upload');
    }
    if (formInfo.square_img_upload !== null && formInfo.square_img_upload !== '') {
      getImageFromUrl(formInfo.square_img_upload, 'square_img_upload');
    }
  }, []);
  // Takes in the url of an image and loads the image into state
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
        // console.log('File Creation test', jpgFile);
        if (imageType === 'rectangle_img_upload' || imageType === 'rectangle_img_url') {
          setFormInfo({ ...formInfo, [imageType]: jpgFile });
          setRectangleImgName(jpgFile.name);
          setRectangleImgFile(jpgFile);
          setImgPreview(jpgFile, setRectangleUpImg, setRectangleImgPreviewUrl);
        }
        if (imageType === 'square_img_upload' || imageType === 'square_img_url') {
          setFormInfo({ ...formInfo, [imageType]: jpgFile });
          setSquareImgName(jpgFile.name);
          setSquareImgFile(jpgFile);
          setImgPreview(jpgFile, setSquareUpImg, setSquareImgPreviewUrl);
        }
        return jpgFile;
      });
  };
  // Set preview url for images.
  const setImgPreview = async (file, setUpImg, setPreviewUrl) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let previewUrl = reader.result;
      setUpImg(previewUrl);
      setPreviewUrl(previewUrl);
    });
    reader.readAsDataURL(file);
  };
  // Updates campaign with new info from form
  const submitCampaign = async () => {
    const formData = new FormData();
    formData.append('campaign_name', formInfo.campaign_name);
    formData.append('headline', formInfo.headline);
    formData.append('headline2', formInfo.headline2);
    formData.append('ad_description', formInfo.ad_description);
    formData.append('cta', formInfo.cta);
    formData.append('cta2', formInfo.cta2);
    formData.append('ad_link', formInfo.ad_link);
    formData.append('img_option', imgOption);
    // formData.append('square_img_url', formInfo.square_img_url);
    // formData.append('rectangle_img_url', formInfo.rectangle_img_url);
    // console.log()
    if (
      (formInfo.square_img_upload || formInfo.rectangle_img_upload != '') &&
      imgOption == 'custom'
    ) {
      if (
        socialsToPost.includes('facebook feed ad') ||
        socialsToPost.includes('google display ad')
      ) {
        formData.append('rectangle_img_upload', formInfo.rectangle_img_upload);
      }
      if (
        socialsToPost.includes('facebook display ad') ||
        socialsToPost.includes('instagram ad') ||
        socialsToPost.includes('google display ad')
      ) {
        formData.append('square_img_upload', formInfo.square_img_upload);
      }
      console.log(
        'Custom img upload running!',
        formInfo.square_img_upload,
        formInfo.rectangle_img_upload
      );
    }
    // Get campaign Id from state
    const campaignId = currentCampaign?.id;
    await updateCampaign(formData, campaignId);
    history.push('/create/targeting');
  };

  return (
    <CreateCampaign
      formInfo={formInfo}
      setFormInfo={setFormInfo}
      currentCampaign={campaigns.current || currentCampaign}
      handleSubmitCampaign={submitCampaign}
      hasCreateCampaignStepBeenCompleted={hasCreateCampaignStepBeenCompleted}
      // currentCampaign={campaigns.current}
      urlVal={urlVal}
      imgOption={imgOption}
      setImgOption={setImgOption}
      completeStep={completeStep}
      socialsToPost={socialsToPost}
      fbFeedNum={fbFeedNum}
      fbAudienceNum={fbAudienceNum}
      instagramNum={instagramNum}
      gaSearchNum={gaSearchNum}
      gaDisplayNum={gaDisplayNum}
      gaSquareDisplayNum={gaSquareDisplayNum}
      adSlideLength={adSlideLength}
      rectangleUpImg={rectangleUpImg}
      squareUpImg={squareUpImg}
      setRectangleUpImg={setRectangleUpImg}
      setSquareUpImg={setSquareUpImg}
      rectangleImgName={rectangleImgName}
      squareImgName={squareImgName}
      setRectangleImgName={setRectangleImgName}
      setSquareImgName={setSquareImgName}
      rectangleImgFile={rectangleImgFile}
      setRectangleImgFile={setRectangleImgFile}
      squareImgFile={squareImgFile}
      setSquareImgFile={setSquareImgFile}
      squareImgPreviewUrl={squareImgPreviewUrl}
      rectangleImgPreviewUrl={rectangleImgPreviewUrl}
      setSquareImgPreviewUrl={setSquareImgPreviewUrl}
      setRectangleImgPreviewUrl={setRectangleImgPreviewUrl}
      updateSocials={updateSocials}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  currentCampaign: state.campaigns?.current,
  businessInfo: state.businessInfo.businessInfos,
  businessInfoLoading: state.businessInfo.businessInfoLoading,
  creditAmount: state.credits.userCredits,
  hasCreateCampaignStepBeenCompleted: state.stepTracker.CREATE_CAMPAIGN_STEP,
  socialsToPost: state.newAdInfo.socialsToPost,
});

export default connect(mapStateToProps, {
  updateCampaign,
  getFbAdAccounts,
  getGoogleAdAccounts,
  getBusinessInfo,
  completeStep,
  updateSocials,
})(CreateCampaignContainer);
