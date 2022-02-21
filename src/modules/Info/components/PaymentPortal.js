import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaymentInfo from './PaymentInfo';
import PaymentHistory from './PaymentHistory';
import { getPayments, createPaymentAmount } from '../../../actions/payment.actions';
import { getSubscription, updateSubscription, addSubscription } from '../../../actions/subscriptionActions';

const useStyles = makeStyles(() => ({
  PaymentPortalContainer: {
    margin: 'auto',
    width: 'fit-content',
  },
  textStyle: {
    fontSize: '25px',
    fontWeight: '600',

    '@media (max-width:718px)': {
      fontSize: '20px',
    },
  },
  info: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '80px',
    margin: '50px 0',

    '@media (max-width:965px)': {
      gridTemplateColumns: '1fr',
      gridGap: '50px',
    },
  },
}));

const PaymentPortal = ({
  getPayments,
  createPaymentAmount,
  payments,
  paymentsLoading,
  subscription,
  subscriptionLoading,
  getSubscription,
  updateSubscription
}) => {
  const [paymentFields, setPaymentFields] = useState();
  const [edit, setEdit] = useState(false);
  // const [editCard, setEditCard] = useState(false);
  // Payment state
  const [paymentData, setPaymentData] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [paypalOrderId, setPaypalOrderId] = useState("");
  const [paypalStatus, setPaypalStatus] = useState("");
  const [paypalIntent, setPaypalIntent] = useState("");
  const [paymentItem, setPaymentItem] = useState("Account Balance Payment");
  const [paymentAmount, setPaymentAmount] = useState(0.00);


  const paymentCallback = useCallback((form) => {
    setPaymentFields(form);
    // console.log(form);
  }, []);
  useEffect(() => {
    // Get Payment and card values
    getPayments();
    // getCards();
    getSubscription();
  }, []);
  useEffect(() => {
    if(edit === false){
      // Get Payment and card values
      getPayments();
    }
  }, [edit]);
  useEffect(() => {
    // Set Payment values
    if (!paymentsLoading) {
      setPayments();
    }
  }, [payments]);
  useEffect(() => {
    // Set Payment values
    if (subscriptionData.length >= 1) {
      let activeSubscription = subscriptionData[subscriptionData.length - 1]
      setPaymentAmount(activeSubscription.due_amount);
      setPaymentItem(activeSubscription.plan);
    }
  }, [subscriptionData]);
  useEffect(() => {
    // Set Payment values
    if (!subscriptionLoading) {
      setSubscription();
    }
  }, [subscription]);
  const submitPaymentInfos = (payment) => {
    // Submit updated values to payments
    let formData = new FormData();
    formData.append('paypal_order_id', payment.id);
    formData.append('paypal_status', payment.status);
    formData.append('paypal_intent', payment.intent);
    formData.append('item', paymentItem);
    formData.append('amount', paymentAmount);
    console.log('paypal_order_id', payment.id);
    console.log('paypal_status', payment.status);
    console.log('paypal_intent', payment.intent);
    console.log('item', paymentItem);
    console.log('amount', paymentAmount);
    createPaymentAmount(formData);
    // Update form state
    setPaypalOrderId(payment.id)
    setPaypalStatus(payment.status)
    setPaypalIntent(payment.intent)
    setEdit(false);
  };
  const setPayments = () => {
    setPaymentData(payments || '');
  };
  const setSubscription = () => {
    setSubscriptionData(subscription || '');
  };

  return (
    <div className="w-100 h-100">
      <PaymentInfo
        paypalOrderId={paypalOrderId}
        paymentAmount={paymentAmount}
        setPaypalOrderId={setPaypalOrderId}
        setPaymentAmount={setPaymentAmount}
        submitPaymentInfos={submitPaymentInfos}
        paypalStatus={paypalStatus}
        paypalIntent={paypalIntent}
      />
      <PaymentHistory
        paymentData={paymentData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  payments: state.payments.userPayments,
  paymentsLoading: state.payments.paymentsLoading,
  subscription: state.subscriptions.userSubscription,
  subscriptionLoading: state.subscriptions.subscriptionLoading,
});

export default connect(mapStateToProps, {
  getPayments,
  createPaymentAmount,
  getSubscription,
  updateSubscription
})(PaymentPortal);
