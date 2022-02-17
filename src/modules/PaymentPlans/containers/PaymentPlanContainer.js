import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlanContainer from './PlanContainer';
import PlanForm from '../components/PlanForm';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';
import {
  getPaymentAmount,
  updatePaymentAmount,
  createPaymentAmount,
  clearPaymentSuccess,
  getClientId,
  clearPaymentErrors,
} from '../../../actions/payment.actions';

const useStyles = makeStyles(() => ({
  paymentPlanPageContainer: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const PaymentPlanContainer = ({
  amountToPurchase,
  createPaymentAmount,
  getClientId,
  stripeCheckoutToken,
  paymentError,
  // purchaseButtonDisabled,
  updatePaymentAmount,
  clearPaymentErrors,
}) => {
  const classes = useStyles();
  const plan = {
    basic: {
      bestSeller: false,
      title: 'BASIC PLAN',
      price: '9.99',
      sub: 'Access to Limited Templates Custom Ad Designs for $15 Each',
    },
    advanced: {
      bestSeller: true,
      title: 'ADVANCED PLAN',
      price: '19.99',
      sub: 'Access to 100+ Templates 1 Free Custom Ad Design per Month',
    },
    preminum: {
      bestSeller: false,
      title: 'PREMINUM PLAN',
      price: '39.99',
      sub: 'Access to ALL Templates 2 Free Custom Ad Designs per Month',
    },
  };
  const [paymentPlan, setPaymentPlan] = React.useState(null);
  const [paymentFields, setPaymentFields] = React.useState();
  const [amount, setAmount] = React.useState();

  const planCallback = React.useCallback((plan) => {
    setPaymentPlan(plan);
  });
  const paymentCallback = React.useCallback((form) => {
    setPaymentFields(form);
    console.log(form);
  }, []);

  return (
    <div className={classes.paymentPlanPageContainer}>
      {!paymentPlan ? (
        <PlanContainer planCallback={planCallback} />
      ) : (
        <PlanForm 
          paymentCallback={paymentCallback} 
          amount={amount} 
          paymentError={paymentError} 
          clearPaymentErrors={clearPaymentErrors} 
          createPaymentAmount={createPaymentAmount} 
        />
      )}
      <BlueTecLandingFooter />
    </div>
  );
};

PaymentPlanContainer.propTypes = {
  campaignInfo: PropTypes.shape({}),
};

PaymentPlanContainer.defaultProps = {
  campaignInfo: {},
};

const mapStateToProps = (state) => ({
  campaignInfo: state.newAdInfo,
  userPayments: state.payments.userPayments,
  paymentsError: state.payments.error,
  paymentsSuccess: state.payments.success,
  currentCampaign: state.campaigns.current,
  socialsToPost: state.newAdInfo.socialsToPost,
});

const mapDispatchToProps = (dispatch) => ({
  createPaymentAmount: (amount) => createPaymentAmount(amount, dispatch),
  updatePaymentAmount: (amount) => updatePaymentAmount(amount, dispatch),
  getPaymentAmount: () => getPaymentAmount(dispatch),
  getClientId: (amount, preExistingAmount) => getClientId(amount, preExistingAmount, dispatch),
  clearPaymentSuccess,
  clearPaymentErrors: () => clearPaymentErrors(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPlanContainer);