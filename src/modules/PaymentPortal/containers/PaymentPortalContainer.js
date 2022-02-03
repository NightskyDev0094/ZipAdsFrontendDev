import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';


import { completeStepByNormalFunction } from '../../../actions/step.actions';
import { getCampaignAsync } from '../../../actions/campaignActions';

import PaymentPortalPage from '../pages/';
import {
  getPaymentAmount,
  updatePaymentAmount,
  createPaymentAmount,
  clearPaymentSuccess,
  getClientId,
  clearPaymentErrors,
} from '../../../actions/payment.actions';
import { STATIC_URL } from '../../../environmentVariables';
const Background1 = STATIC_URL + 'images/background/1.png';

const useStyles = makeStyles(() => ({
  paymentPortalPageContainer: {
    backgroundSize: 'contain !important',
    backgroundImage: `url(${Background1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
}));

const PaymentContainer = (
  { currentCampaign, socialsToPost, getCampaignAsync, completeStep, ...props}
) => {
  const getCampaignData = useCallback(async () => await getCampaignAsync());
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    getCampaignData();
  }, []);

  useEffect(() => {
    let budgets = [];
    if (!currentCampaign) return;
    if (socialsToPost.includes('facebook feed ad')) {
      budgets.push(
        parseFloat(currentCampaign.facebook_feed_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('facebook display ad')) {
      budgets.push(
        parseFloat(currentCampaign.facebook_audience_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('instagram ad')) {
      budgets.push(
        parseFloat(currentCampaign.instagram_budget) * currentCampaign.fb_campaign_length
      );
    }
    if (socialsToPost.includes('google search ad')) {
      budgets.push(
        parseFloat(currentCampaign.google_search_budget) * currentCampaign.ga_campaign_length
      );
    }
    if (socialsToPost.includes('google display ad')) {
      budgets.push(
        parseFloat(currentCampaign.google_display_budget) * currentCampaign.ga_campaign_length
      );
    }
    let budgetVal = budgets.reduce((a, b) => a + b, 0);
    setAmount(budgetVal);
  }, [currentCampaign]);
  const classes = useStyles();
  return (
    <div className={classes.paymentPortalPageContainer}>
      <PaymentPortalPage completeStep={completeStep} amount={amount} setAmount={setAmount} {...props} />
    </div>
  );
};

PaymentContainer.propTypes = {
  campaignInfo: PropTypes.shape({}),
};

PaymentContainer.defaultProps = {
  campaignInfo: {},
};

const mapStateToProps = (state) => ({
  campaignInfo: state.newAdInfo,
  userPayments: state.payments.userPayments,
  stripeCheckoutToken: state.payments.userClientId,
  paymentsError: state.payments.error,
  paymentsSuccess: state.payments.success,
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
});

const mapDispatchToProps = (dispatch) => ({
  createPaymentAmount: (amount) => createPaymentAmount(amount, dispatch),
  getCampaignAsync: () => getCampaignAsync(dispatch),
  updatePaymentAmount: (amount) => updatePaymentAmount(amount, dispatch),
  getPaymentAmount: () => getPaymentAmount(dispatch),
  getClientId: (amount, preExistingAmount) => getClientId(amount, preExistingAmount, dispatch),
  clearPaymentSuccess,
  clearPaymentErrors: () => clearPaymentErrors(dispatch),
  completeStep: () => completeStepByNormalFunction(dispatch, 7),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
