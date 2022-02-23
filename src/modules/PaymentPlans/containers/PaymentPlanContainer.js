import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlanContainer from './PlanContainer';
import PlanForm from '../components/PlanForm';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';
import { createPaymentAmount } from '../../../actions/payment.actions';
import { addSubscription } from '../../../actions/subscriptionActions';

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
  addSubscription,
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
  const [paymentPlan, setPaymentPlan] = React.useState('null');
  const [amount, setAmount] = React.useState();
  const [paymentFields, setPaymentFields] = useState();
  const [edit, setEdit] = useState(false);
  // const [editCard, setEditCard] = useState(false);
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
    if(edit === false){
      // Get Payment and card values
      getSubscription();
    }
  }, [edit]);
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
    formData.append('item', plan);
    formData.append('amount', amount);
    // console.log('paypal_order_id', payment.id);
    // console.log('paypal_status', payment.status);
    // console.log('paypal_intent', payment.intent);
    // console.log('item', paymentItem);
    // console.log('amount', paymentAmount);
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
    setEdit(false);
  };
  const setPayments = () => {
    setPaymentData(payments || '');
  };
  const setSubscription = () => {
    setSubscriptionData(subscription || '');
  };

  const setSelectedPlan = (plan, planAmount) => {
    setPaymentPlan(plan);
    setAmount(planAmount)
  };

  return (
    <div className={classes.paymentPlanPageContainer}>
      {!paymentPlan ? (
        <PlanContainer planCallback={planCallback} />
      ) : (
        <PlanForm 
          setSelectedPlan={setSelectedPlan} 
          amount={amount} 
          paymentError={paymentError} 
          clearPaymentErrors={clearPaymentErrors}
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