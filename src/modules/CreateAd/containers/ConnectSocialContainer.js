import React, { useEffect, useState, useCallback } from 'react';

import { connect } from 'react-redux';

import ConnectSocialPage from '../pages/ConnectSocialPage';
import { getCampaign, updateCampaign, makeCurrent } from '../../../actions/campaignActions';
import { updateSocials } from '../../../actions/formInfoActions';
import { getFbPages } from '../../../actions/account.fbPageActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../../../actions/step.actions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getUserProfileInformation } from '../../../actions/connectSocial.managedAccountActions';

/**
 *
 * @param { socialsToPost: Array<string> } - redux state, an array of social media the user wants to post to
 * @param { updateSocials: Function } - redux action to update socialsToPost state
 * @param { campaigns: CurrentCampaign } - redux state, the current campaign the user is currently on
 */
const ConnectSocialContainer = ({
  hasConnectSocialStepBeenCompleted,
  getUserProfileInformation,
  completeStep,
  socialsToPost,
  updateSocials,
  businessName,
  campaigns,
  addresses,
  currentCampaign,
  getGoogleAdAccounts,
  getFbAdAccounts,
  getFbPages,
  getBusinessInfo,
  getCampaign,
  updateCampaign,
  fbAccounts,
  gaAccounts,
  fbPages,
}) => {
  const [selected, setSelected] = React.useState(socialsToPost || []);
  const [fbAccount, setFBAccount] = useState('');
  const [gaAccount, setGAAccount] = useState('');
  const [fbPage, setFBPage] = useState('');
  const [fbAccountData, setFBAccountData] = useState([]);
  const [gaAccountData, setGAAccountData] = useState([]);
  const [fbPageData, setFBPageData] = useState([]);
  const getGAAccountData = useCallback(async () => await getGoogleAdAccounts());
  const getFBAccountData = useCallback(async () => await getFbAdAccounts());
  const getFBPageData = useCallback(async () => await getFbPages());
  const handleUpdateGaAdAccount = (account) => setGAAccount(account);
  const handleUpdateFbAdAccount = (account) => setFBAccount(account);
  const handleUpdateFbPage = (account) => setFBPage(account);

  useEffect(() => {
    getGAAccountData();
    getFBAccountData();
    getFBPageData();
  }, []);

  useEffect(() => {
    setFBAccountData(fbAccounts);
  }, [fbAccounts]);

  useEffect(() => {
    setGAAccountData(gaAccounts);
  }, [gaAccounts]);

  useEffect(() => {
    setFBPageData(fbPages);
  }, [fbPages]);

  useEffect(() => {
    getBusinessInfo();
    getCampaign();
  }, []);

  const submitSocials = async () => {
    const formData = new FormData();
    formData.append('facebook_account_id', fbAccount);
    formData.append('google_account_id', gaAccount);
    formData.append('facebook_page_id', fbPage);
    if (selected.includes('facebook feed ad')) {
      formData.append('facebook_feed_ad', 'True');
    } else {
      formData.append('facebook_feed_ad', 'False');
    }
    if (selected.includes('instagram ad')) {
      formData.append('instagram_ad', 'True');
    } else {
      formData.append('instagram_ad', 'False');
    }
    if (selected.includes('facebook display ad')) {
      formData.append('facebook_display_ad', 'True');
    } else {
      formData.append('facebook_display_ad', 'False');
    }
    if (selected.includes('google search ad')) {
      formData.append('google_search_ad', 'True');
    } else {
      formData.append('google_search_ad', 'False');
    }
    if (selected.includes('google display ad')) {
      formData.append('google_display_ad', 'True');
    } else {
      formData.append('google_display_ad', 'False');
    }
    updateSocials(selected);
    const campaignId = currentCampaign?.id;
    // Save Targeting options to Campaign_Info
    await updateCampaign(formData, campaignId);
  };

  return (
    <ConnectSocialPage
      socialsToPost={socialsToPost}
      completeStep={completeStep}
      // handleUpdateSocial={(socials) => {
      //   // console.log('RUNNING::::', socials);
      //   updateSocials(socials);
      // }}
      handleUpdateSocial={updateSocials}
      handleSubmitSocials={submitSocials}
      hasConnectSocialStepBeenCompleted={hasConnectSocialStepBeenCompleted}
      currentCampaign={currentCampaign}
      businessName={businessName}
      addresses={addresses}
      fbAccountData={fbAccountData}
      gaAccountData={gaAccountData}
      fbPageData={fbPageData}
      fbAccount={fbAccount}
      gaAccount={gaAccount}
      fbPage={fbPage}
      getGaAdAccounts={getGoogleAdAccounts}
      getFbAdAccounts={getFbAdAccounts}
      handleUpdateGaAdAccount={handleUpdateGaAdAccount}
      handleUpdateFbAdAccount={handleUpdateFbAdAccount}
      handleUpdateFbPage={handleUpdateFbPage}
      getUserProfileInformation={getUserProfileInformation}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns.campaigns,
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
  businessName: state.basicInfo.businessName,
  addresses: state.businessInfo.businessInfos,
  fbAccounts: state.fbAdAccount.adAccounts,
  gaAccounts: state.googleAdAccount.adAccounts,
  fbPages: state.fbPages.pages,
  hasConnectSocialStepBeenCompleted: state.stepTracker.CONNECT_SOCIAL_STEP,
  googleToken: state.googleAdAccount?.gaToken,
  facebook: state.fbAdAccount.fbToken,
  businessInformation: state.businessInfo.businessInfos,
  fbAdAccounts: state.fbAdAccount?.adAccounts,
  googleAdAccounts: state.googleAdAccount?.adAccounts,
  isManagedAccountCreated: state.businessInfo.businessInfoCreationSuccess,
  basicInformation: state.basicInfo,
  // User Profile Status
  getUserProfileSuccess:
    state.managedBusinessAccounts.userAccount.getUserAccountInformationSuccessful,
  getUserProfileInformationLoading:
    state.managedBusinessAccounts.userAccount.getUserAccountInformationLoading,
  userAccountInformation: state.managedBusinessAccounts.userAccount.userAccountInformation,
  getUserAccountInformationError: state.managedBusinessAccounts.userAccount.error,
  // Google Account Status
  createGoogleAccountError: state.managedBusinessAccounts.googleBusinessAccount.error,
  createGoogleBusinessAccountLoading:
    state.managedBusinessAccounts.googleBusinessAccount.createGoogleAccountLoading,
  createGoogleAccountSuccessful:
    state.managedBusinessAccounts.googleBusinessAccount.isGoogleBusinessAccountCreationSuccessful,
  // Facebook Account Status
  createFacebookAccountError: state.managedBusinessAccounts.facebookBusinessAccount.error,
  createFacebookAccountLoading:
    state.managedBusinessAccounts.facebookBusinessAccount.createFacebookAccountInformationLoading,
  createFacebookAccountSuccess:
    state.managedBusinessAccounts.facebookBusinessAccount.createFacebookAccountSuccess,
});

export default connect(mapStateToProps, {
  updateCampaign,
  getFbAdAccounts,
  getGoogleAdAccounts,
  getUserProfileInformation,
  completeStep,
  updateCampaign,
  updateSocials,
  getBusinessInfo,
  completeStep,
  getFbPages,
  getCampaign,
})(ConnectSocialContainer);
