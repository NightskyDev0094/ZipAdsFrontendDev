import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CreateCampaign from '../pages/CampaignPage';
import { updateCampaign } from '../../../actions/campaignActions';
import { updateSocials } from '../../../actions/formInfoActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { completeStep } from '../../../actions/step.actions';
import { useHistory } from 'react-router';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

/**
 * @param { campaigns: CampaignInfo }  - redux state that contains information about the users campaigns, including the current one
 * @param { postCampaigns: Function } - a redux action that creates new campaigns
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
    fb_feed_img: currentCampaign.fb_feed_img || '',
    instagram_img: currentCampaign.instagram_img || '',
    fb_audience_img: currentCampaign.fb_audience_img || '',
    ga_display_img: currentCampaign.ga_display_img || '',
    ga_square_display_img: currentCampaign.ga_square_display_img || '',
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
  const [fbFeedImageName, setFbFeedImageName] = useState(null);
  const [fbAudienceImageName, setFbAudienceImageName] = useState(null);
  const [instagramImageName, setInstagramImageName] = useState(null);
  const [gaDisplayImageName, setGaDisplayImageName] = useState(null);
  const [gaSquareDisplayImageName, setGaSquareDisplayImageName] = useState(null);
  const [fbFeedImageFile, setFBFeedImageFile] = useState(null);
  const [fbAudienceImageFile, setFBAudienceImageFile] = useState(null);
  const [instagramImageFile, setInstagramImageFile] = useState(null);
  const [gaDisplayImageFile, setGADisplayImageFile] = useState(null);
  const [gaSquareDisplayImageFile, setGASquareDisplayImageFile] = useState(null);
  const [fbFeedUpImg, setFbFeedUpImg] = useState();
  const [fbAudienceUpImg, setFbAudienceUpImg] = useState();
  const [instagramUpImg, setInstagramUpImg] = useState();
  const [gaDisplayUpImg, setGaDisplayUpImg] = useState();
  const [gaSquareDisplayUpImg, setGaSquareDisplayUpImg] = useState();
  // preview urls
  const [fbFeedPreviewUrl, setFBFeedPreviewUrl] = useState('');
  const [fbAudiencePreviewUrl, setFBAudiencePreviewUrl] = useState('');
  const [instagramPreviewUrl, setInstagramPreviewUrl] = useState('');
  const [gaDisplayPreviewUrl, setGADisplayPreviewUrl] = useState('');
  const [gaSquareDisplayPreviewUrl, setGASquareDisplayPreviewUrl] = useState('');

  useEffect(() => {
    getFbAdAccounts();
    getGoogleAdAccounts();
    getBusinessInfo();
    let val = 0;
    if (socialsToPost.includes('facebook feed ad')) {
      val++;
      setFbFeedNum(val);
    }
    if (socialsToPost.includes('facebook display ad')) {
      val++;
      setFbAudienceNum(val);
    }
    if (socialsToPost.includes('instagram ad')) {
      val++;
      setInstagramNum(val);
    }
    if (socialsToPost.includes('google search ad')) {
      val++;
      setGaSearchNum(val);
    }
    if (socialsToPost.includes('google display ad')) {
      val++;
      setGaDisplayNum(val);
      val++;
      setGaSquareDisplayNum(val);
    }
    setAdSlideLength(val);
    // Load campaign images
    if (formInfo.fb_feed_img !== null && formInfo.fb_feed_img !== '') {
      getImageFromUrl(formInfo.fb_feed_img, 'fb_feed_img');
    }
    if (formInfo.fb_audience_img !== null && formInfo.fb_audience_img !== '') {
      getImageFromUrl(formInfo.fb_audience_img, 'fb_audience_img');
    }
    if (formInfo.instagram_img !== null && formInfo.instagram_img !== '') {
      getImageFromUrl(formInfo.instagram_img, 'instagram_img');
    }
    if (formInfo.ga_display_img !== null && formInfo.ga_display_img !== '') {
      getImageFromUrl(formInfo.ga_display_img, 'ga_display_img');
    }
    if (formInfo.ga_square_display_img !== null && formInfo.ga_square_display_img !== '') {
      getImageFromUrl(formInfo.ga_square_display_img, 'ga_square_display_img');
    }
  }, []);

  useEffect(() => {
    setLocaleVals();
  }, [businessInfo]);

  const setLocaleVals = () => {
    if (!businessInfoLoading && typeof businessInfo !== 'undefined') {
      if (businessInfo.length !== 0) {
        if (typeof businessInfo[0].business_url !== 'undefined') {
          setUrlVal(businessInfo[0].business_url || '');
          setFormInfo({
            ...formInfo,
            ad_link: businessInfo[0].business_url || 'https://',
            campaign_name: businessInfo[0].business_name || '',
          });
        }
      }
    }
  };

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
        if (imageType === 'fb_feed_img') {
          setFormInfo({ ...formInfo, fb_feed_img: jpgFile });
          setFbFeedImageName(jpgFile.name);
          setFBFeedImageFile(jpgFile);
          setImgPreview(jpgFile, setFbFeedUpImg, setFBFeedPreviewUrl);
        }
        if (imageType === 'instagram_img') {
          setFormInfo({ ...formInfo, instagram_img: jpgFile });
          setFbAudienceImageName(jpgFile.name);
          setFBAudienceImageFile(jpgFile);
          setImgPreview(jpgFile, setFbAudienceUpImg, setFBAudiencePreviewUrl);
        }
        if (imageType === 'fb_audience_img') {
          setFormInfo({ ...formInfo, fb_audience_img: jpgFile });
          setInstagramImageName(jpgFile.name);
          setInstagramImageFile(jpgFile);
          setImgPreview(jpgFile, setInstagramUpImg, setInstagramPreviewUrl);
        }
        if (imageType === 'ga_display_img') {
          setFormInfo({ ...formInfo, ga_display_img: jpgFile });
          setGaDisplayImageName(jpgFile.name);
          setGADisplayImageFile(jpgFile);
          setImgPreview(jpgFile, setGaDisplayUpImg, setGADisplayPreviewUrl);
        }
        if (imageType === 'ga_square_display_img') {
          setFormInfo({ ...formInfo, ga_square_display_img: jpgFile });
          setGaSquareDisplayImageName(jpgFile.name);
          setGASquareDisplayImageFile(jpgFile);
          setImgPreview(jpgFile, setGaSquareDisplayUpImg, setGASquareDisplayPreviewUrl);
        }
        return jpgFile;
      });
  };

  const setImgPreview = async (file, setUpImg, setPreviewUrl) => {
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
    formData.append('campaign_name', formInfo.campaign_name);
    formData.append('headline', formInfo.headline);
    formData.append('headline2', formInfo.headline2);
    formData.append('ad_description', formInfo.ad_description);
    formData.append('cta', formInfo.cta);
    formData.append('cta2', formInfo.cta2);
    formData.append('ad_link', formInfo.ad_link);
    formData.append('img_option', imgOption);
    if (
      (formInfo.fb_feed_img ||
        formInfo.instagram_img ||
        formInfo.fb_audience_img ||
        formInfo.ga_display_img ||
        formInfo.ga_square_display_img != '') &&
      imgOption == 'custom'
    ) {
      if (socialsToPost.includes('facebook feed ad')) {
        formData.append('fb_feed_img', formInfo.fb_feed_img);
      }
      if (socialsToPost.includes('facebook display ad')) {
        formData.append('fb_audience_img', formInfo.fb_audience_img);
      }
      if (socialsToPost.includes('instagram ad')) {
        formData.append('instagram_img', formInfo.instagram_img);
      }
      if (socialsToPost.includes('google display ad')) {
        formData.append('ga_display_img', formInfo.ga_display_img);
        formData.append('ga_square_display_img', formInfo.ga_square_display_img);
      }
    } else {
      // it's a default image link
      formData.append('file_url', formInfo.file_url);
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
      fbFeedUpImg={fbFeedUpImg}
      fbAudienceUpImg={fbAudienceUpImg}
      instagramUpImg={instagramUpImg}
      gaDisplayUpImg={gaDisplayUpImg}
      gaSquareDisplayUpImg={gaSquareDisplayUpImg}
      setFbFeedUpImg={setFbFeedUpImg}
      setFbAudienceUpImg={setFbAudienceUpImg}
      setInstagramUpImg={setInstagramUpImg}
      setGaDisplayUpImg={setGaDisplayUpImg}
      setGaSquareDisplayUpImg={setGaSquareDisplayUpImg}
      fbFeedImageName={fbFeedImageName}
      fbAudienceImageName={fbAudienceImageName}
      instagramImageName={instagramImageName}
      gaDisplayImageName={gaDisplayImageName}
      gaSquareDisplayImageName={gaSquareDisplayImageName}
      setFbFeedImageName={setFbFeedImageName}
      setFbAudienceImageName={setFbAudienceImageName}
      setInstagramImageName={setInstagramImageName}
      setGaDisplayImageName={setGaDisplayImageName}
      setGaSquareDisplayImageName={setGaSquareDisplayImageName}
      fbFeedImageFile={fbFeedImageFile}
      setFBFeedImageFile={setFBFeedImageFile}
      fbAudienceImageFile={fbAudienceImageFile}
      setFBAudienceImageFile={setFBAudienceImageFile}
      instagramImageFile={instagramImageFile}
      setInstagramImageFile={setInstagramImageFile}
      gaDisplayImageFile={gaDisplayImageFile}
      setGADisplayImageFile={setGADisplayImageFile}
      gaSquareDisplayImageFile={gaSquareDisplayImageFile}
      setGASquareDisplayImageFile={setGASquareDisplayImageFile}
      fbFeedPreviewUrl={fbFeedPreviewUrl}
      fbAudiencePreviewUrl={fbAudiencePreviewUrl}
      instagramPreviewUrl={instagramPreviewUrl}
      gaDisplayPreviewUrl={gaDisplayPreviewUrl}
      gaSquareDisplayPreviewUrl={gaSquareDisplayPreviewUrl}
      setFBFeedPreviewUrl={setFBFeedPreviewUrl}
      setFBAudiencePreviewUrl={setFBAudiencePreviewUrl}
      setInstagramPreviewUrl={setInstagramPreviewUrl}
      setGADisplayPreviewUrl={setGADisplayPreviewUrl}
      setGASquareDisplayPreviewUrl={setGASquareDisplayPreviewUrl}
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
