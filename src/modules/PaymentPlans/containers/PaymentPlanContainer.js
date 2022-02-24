import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlanContainer from './PlanContainer';
import PlanForm from '../components/PlanForm';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';
import { createPaymentAmount } from '../../../actions/payment.actions';
import { addSubscription, updateSubscription, getSubscription,  } from '../../../actions/subscriptionActions';

const useStyles = makeStyles(() => ({
  paymentPlanPageContainer: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const PaymentPlanContainer = ({
  createPaymentAmount,
  addSubscription,
  getSubscription,
  updateSubscription,
  subscription,
  subscriptionLoading
}) => {
  const classes = useStyles();
  // const plan = {
  //   basic: {
  //     bestSeller: false,
  //     title: 'BASIC PLAN',
  //     price: '9.99',
  //     sub: 'Access to Limited Templates Custom Ad Designs for $15 Each',
  //   },
  //   advanced: {
  //     bestSeller: true,
  //     title: 'ADVANCED PLAN',
  //     price: '19.99',
  //     sub: 'Access to 100+ Templates 1 Free Custom Ad Design per Month',
  //   },
  //   preminum: {
  //     bestSeller: false,
  //     title: 'PREMINUM PLAN',
  //     price: '39.99',
  //     sub: 'Access to ALL Templates 2 Free Custom Ad Designs per Month',
  //   },
  // };
  const [planName, setPlanName] = React.useState('');
  const [paymentPlan, setPaymentPlan] = React.useState('');
  const [amount, setAmount] = React.useState();
  const [paymentFields, setPaymentFields] = useState();
  const [checkout, setCheckout] = useState(false);
  // Payment state
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [paypalOrderId, setPaypalOrderId] = useState("");
  const [paypalStatus, setPaypalStatus] = useState("");
  const [paypalIntent, setPaypalIntent] = useState("");
  const [paymentItem, setPaymentItem] = useState("Account Balance Payment");
  const [paymentAmount, setPaymentAmount] = useState(0.00);


  useEffect(() => {
    // getCards();
    getSubscription();
  }, []);
  useEffect(() => {
    if(checkout === false){
      // Get Payment and card values
      getSubscription();
    }
  }, [checkout]);
  useEffect(() => {
    // Set Payment values
    if (subscriptionData?.length >= 1) {
      let activeSubscription = subscriptionData[subscriptionData.length - 1]
      setPaymentItem(activeSubscription.plan);
    }
  }, [subscriptionData]);
  useEffect(() => {
    // Set Payment values
    if (!subscriptionLoading) {
      setSubscription();
    }
  }, [subscription]);
  const submitPaymentInfos = (orderId, payment) => {
    // Submit updated values to payments
    let formData = new FormData();
    formData.append('paypal_order_id', orderId);
    formData.append('paypal_status', payment.status);
    formData.append('paypal_status_code', payment.status_code);
    formData.append('paypal_intent', payment.intent);
    formData.append('item', planName);
    formData.append('amount', amount);
    createPaymentAmount(formData);
    // Update form state
    // setPaypalOrderId(payment.id)
    // setPaypalStatus(payment.status)
    // setPaypalIntent(payment.intent)
    let activeSubscription = subscriptionData[subscriptionData.length - 1]
    let val = activeSubscription.due_amount - paymentAmount
    if(val >= 0){
      let formData = new FormData();
      formData.append('due_amount', val);
      updateSubscription(formData, activeSubscription.id)
    } else if (val < 0){
      let formData = new FormData();
      let prepayVal = val * -1
      formData.append('due_amount', 0.00);
      formData.append('prepay_amount', prepayVal);
      updateSubscription(formData, activeSubscription.id)
    }
    setCheckout(false);
  };
  const setSubscription = () => {
    setSubscriptionData(subscription || '');
  };

  const setSelectedPlan = (plan, planAmount) => {
    let amountVal = parseFloat(plan.price).toFixed(2)
    setPaymentPlan(plan.planId);
    setPlanName(plan.title)
    setPaymentAmount(amountVal);
    setCheckout(true);
  };

  // const planCallback = useCallback((plan) => {
  //   let amountVal = parseFloat(plan.price).toFixed(2)
  //   setPaymentPlan(plan.planId);
  //   setPaymentAmount(amountVal);
  // });

  return (
    <div className={classes.paymentPlanPageContainer}>
      {!checkout ? (
        <PlanContainer planCallback={setSelectedPlan} />
      ) : (
        <PlanForm
          paymentPlan={paymentPlan}
          amount={amount}
          submitPaymentInfos={submitPaymentInfos}
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
  subscription: state.subscriptions.subscriptions,
  subscriptionLoading: state.subscriptions.subscriptionLoading,
});


export default connect(mapStateToProps, {
  getSubscription,
  createPaymentAmount,
  updateSubscription,
})(PaymentPlanContainer);