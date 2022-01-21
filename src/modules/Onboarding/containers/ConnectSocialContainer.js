import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import ConnectSocialPage from '../pages/ConnectSocialPage';
import { updateSocials } from '../../../actions/formInfoActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';
import { getGoogleAdAccounts } from '../../../actions/account.googleAdActions';
import { getBusinessInfo } from '../../../actions/businessInfoActions';

import { addGoogleToken } from '../../../actions/oauth.googleActions';
import { addFacebookToken } from '../../../actions/oauth.facebookActions';

/**
 *
 * @param { socialsToPost: Array<string> } - redux state, an array of social media the user wants to post to
 * @param { updateSocials: Function } - redux action to update socialsToPost state
 * @param { campaigns: CurrentCampaign } - redux state, the current campaign the user is currently on
 */
const ConnectSocialContainer = ({
  socialsToPost,
  updateSocials,
  businessName,
  campaigns,
  getBusinessInfo,
  addGoogleToken,
  addFacebookToken,
}) => {
  useEffect(() => {
    getBusinessInfo();
  }, []);

  const handleFacebookLogin = (formData) => {
    
    addFacebookToken(formData);
  };

  const handleGoogleLogin = (formData) => {
    
    addGoogleToken(formData);
  };
  return (
    <ConnectSocialPage
      businessName={businessName}
      handleFacebookLogin={handleFacebookLogin}
      handleGoogleLogin={handleGoogleLogin}
    />
  );
};

const mapStateToProps = (state) => ({
  businessName: state.basicInfo.businessName,
});

export default connect(mapStateToProps, {
  getGoogleAdAccounts,
  getFbAdAccounts,
  getBusinessInfo,
  addGoogleToken,
  addFacebookToken,
})(ConnectSocialContainer);
