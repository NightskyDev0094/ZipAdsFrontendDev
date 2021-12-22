import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ReSubmitFormModal from '../../components/ReSubmit.Form.Modal';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../../components/ErrorBoundary.Component';
import StepperWrapper from '../../components/StepperWrapper';
import AdPreviewCarousel from '../../components/AdPreviewCarousel';

export default function CampaignPage({
  formInfo,
  setFormInfo,
  currentCampaign,
  handleSubmitCampaign,
  hasCreateCampaignStepBeenCompleted,
  urlVal,
  imgOption,
  setImgOption,
  completeStep,
  socialsToPost,
  fbFeedNum,
  fbAudienceNum,
  instagramNum,
  gaSearchNum,
  gaDisplayNum,
  gaSquareDisplayNum,
  adSlideLength,
  fbFeedUpImg,
  fbAudienceUpImg,
  instagramUpImg,
  gaDisplayUpImg,
  gaSquareDisplayUpImg,
  setFbFeedUpImg,
  setFbAudienceUpImg,
  setInstagramUpImg,
  setGaDisplayUpImg,
  setGaSquareDisplayUpImg,
  fbFeedImageName,
  fbAudienceImageName,
  instagramImageName,
  gaDisplayImageName,
  gaSquareDisplayImageName,
  setFbFeedImageName,
  setFbAudienceImageName,
  setInstagramImageName,
  setGaDisplayImageName,
  setGaSquareDisplayImageName,
  fbFeedImageFile,
  setFBFeedImageFile,
  fbAudienceImageFile,
  setFBAudienceImageFile,
  instagramImageFile,
  setInstagramImageFile,
  gaDisplayImageFile,
  setGADisplayImageFile,
  gaSquareDisplayImageFile,
  setGASquareDisplayImageFile,
  fbFeedPreviewUrl,
  fbAudiencePreviewUrl,
  instagramPreviewUrl,
  gaDisplayPreviewUrl,
  gaSquareDisplayPreviewUrl,
  setFBFeedPreviewUrl,
  setFBAudiencePreviewUrl,
  setInstagramPreviewUrl,
  setGADisplayPreviewUrl,
  setGASquareDisplayPreviewUrl,
  updateSocials,
}) {
  const [campaignError, setCampaignError] = useState(null);
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);

  return (
    <>
      {campaignError && <ErrorFallBackPage error={campaignError} />}
      {hasCreateCampaignStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={handleSubmitCampaign}
          nextRoute={'/create/targeting'}
          formInfo={formInfo}
        />
      )}
      <ErrorHandler>
        <StepperWrapper>
          <Box>
            <AdPreviewCarousel chosenSocialNetworks={socialsToPost} />
          </Box>
        </StepperWrapper>
      </ErrorHandler>
    </>
  );
}
