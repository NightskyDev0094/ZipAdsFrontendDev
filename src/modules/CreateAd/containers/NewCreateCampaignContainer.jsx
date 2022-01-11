import React from 'react';

import { connect } from 'react-redux';
import { updateCampaign, getCampaign } from '../../../actions/campaignActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { completeStep } from '../../../actions/step.actions';
import { updateSocials } from '../../../actions/formInfoActions';
import { getUserProfileInformation } from '../../../actions/connectSocial.managedAccountActions';
import { getFbPages } from '../../../actions/account.fbPageActions';

import useCreateCampaignForm from '../hooks/useCreateCampaignForm';
import useCheckNetwork from '../hooks/useCheckNetwork';

import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import StepperWrapper from '../components/StepperWrapper';
import ConnectSocialPage from '../pages/newPages/ConnectSocialPage';
import CampaignPage from '../pages/newPages/CampaignPage';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

function CreateCampaignContainer({
  campaigns,
  currentCampaign,
  socialsToPost,
  updateCampaign,
  businessInfo,
  fbAccounts,
  gaAccounts,
  getGoogleAdAccounts,
  getFbAdAccounts,
  fbPages,
  googleToken,
  facebookToken,
  businessInfoLoading,
  creditAmount,
  hasCreateCampaignStepBeenCompleted,
}) {
  const { networkError, setNetworkError } = useCheckNetwork(
    googleToken,
    facebookToken,
    getGoogleAdAccounts,
    getFbAdAccounts
  );
  const {
    selectedNetworks,
    setSelectedNetworks,
    formInfo,
    cropper,
    previews,
    imgOption,
    setImgOption,
    submitCampaign,
  } = useCreateCampaignForm(
    updateCampaign,
    currentCampaign,
    googleToken,
    facebookToken,
    fbPages,
    socialsToPost
  );

  return (
    <>
      {networkError && <ErrorFallBackPage error={networkError} />}
      <ErrorHandler>
        <StepperWrapper
          pageHeading={'Choose Which Networks to Run Ads On'}
          formSubmitHandler={submitCampaign}
        >
          <ConnectSocialPage
            selectedNetworks={selectedNetworks}
            setSelectedNetworks={setSelectedNetworks}
          />
          <CampaignPage
            formInfo={formInfo}
            selectedNetworks={selectedNetworks}
            previews={previews}
          />
        </StepperWrapper>
      </ErrorHandler>
      <BlueTecLandingFooter />
    </>
  );
}

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
  businessInfo: state.businessInfo.businessInfos,
  fbAccounts: state.fbAdAccount.adAccounts,
  gaAccounts: state.googleAdAccount.adAccounts,
  fbPages: state.fbPages.pages,
  googleToken: state.googleAdAccount.gaToken,
  facebookToken: state.fbAdAccount.fbToken,
  businessInfoLoading: state.businessInfo.businessInfoLoading,
  creditAmount: state.credits.userCredits,
  hasCreateCampaignStepBeenCompleted: state.stepTracker.CREATE_CAMPAIGN_STEP,
});

export default connect(mapStateToProps, {
  updateCampaign,
  getFbAdAccounts,
  getGoogleAdAccounts,
  getUserProfileInformation,
  getBusinessInfo,
  completeStep,
  updateSocials,
  getFbPages,
  getCampaign,
})(CreateCampaignContainer);
