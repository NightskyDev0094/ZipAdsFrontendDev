import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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
  subscription,
  subscriptionLoading
}) => {
  const classes = useStyles();
  const history = useHistory();
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
  const submitPaymentInfos = (orderId, subscriptionId, payment) => {
    // Submit updated values to payments
    let formData = new FormData();
    formData.append('paypal_order_id', orderId);
    formData.append('paypal_status', payment.status);
    formData.append('item', planName);
    formData.append('paypal_plan_id', paymentPlan);
    formData.append('amount', paymentAmount);
    createPaymentAmount(formData);
    // Update form state
    // setPaypalOrderId(payment.id)
    // setPaypalStatus(payment.status)
    // setPaypalIntent(payment.intent)
    let formDataSubscription = new FormData();
    formDataSubscription.append('paypal_subscription_id', subscriptionId);
    formDataSubscription.append('plan', planName);
    formDataSubscription.append('paypal_plan_id', paymentPlan);
    formDataSubscription.append('active', payment.status);
    addSubscription(formDataSubscription)

    history.push('/onboarding/2');
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
        <PlanContainer setSelectedPlan={setSelectedPlan} />
      ) : (
        <PlanForm
          paymentPlan={paymentPlan}
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
  addSubscription,
  createPaymentAmount,
})(PaymentPlanContainer);