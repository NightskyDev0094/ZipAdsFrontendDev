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
}) => {
  const [paymentFields, setPaymentFields] = useState();
  const [edit, setEdit] = useState(false);
  // const [editCard, setEditCard] = useState(false);
  // Payment state
  const [paymentData, setPaymentData] = useState([]);
  const [stripeChargeId, setStripeChargeId] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(null);


  const paymentCallback = useCallback((form) => {
    setPaymentFields(form);
    // console.log(form);
  }, []);
  useEffect(() => {
    // Get Payment and card values
    getPayments();
    // getCards();
  }, []);
  useEffect(() => {
    // Set Payment values
    if (!paymentsLoading) {
      setPayments();
    }
  }, [payments]);
  const submitPaymentInfos = (payment) => {
    // Submit updated values to payments
    let formData = new FormData();
    formData.append('stripe_charge_id', stripeChargeId);
    formData.append('amount', paymentAmount);
    createPaymentAmount(formData);
    // Update form state
    setEdit(false);
  };
  const setPayments = () => {
    setPaymentData(payments || '');
  };

  return (
    <div className="w-100 h-100">
      <PaymentInfo
        stripeChargeId={stripeChargeId}
        paymentAmount={paymentAmount}
        setStripeChargeId={setStripeChargeId}
        setPaymentAmount={setPaymentAmount}
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
});

export default connect(mapStateToProps, {
  getPayments,
  createPaymentAmount
})(PaymentPortal);
