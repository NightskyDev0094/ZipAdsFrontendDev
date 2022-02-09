import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaymentList from './PaymentList';
import PaymentForm from './PaymentForm';
import PaymentInfo from './PaymentInfo';
import PaymentHistory from './PaymentHistory';
import { getPaymentAmount, createPaymentAmount } from '../../../actions/payment.actions';
import { getCards, addCard, deleteCard } from '../../../actions/cardActions';
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
  getPaymentAmount,
  createPaymentAmount,
  getCards,
  addCard,
  deleteCard,
  cards,
  cardsLoading,
  payments,
  paymentsLoading,
}) => {
  const [paymentFields, setPaymentFields] = useState();
  const [edit, setEdit] = useState(false);
  const [editCard, setEditCard] = useState(false);
  // Payment state
  const [paymentData, setPaymentData] = useState([]);
  const [stripeChargeId, setStripeChargeId] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(null);
  // card state
  const [cardData, setCardData] = useState([]);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardName, setCardName] = useState('');
  const [cardExpDate, setCardExpDate] = useState('');
  const [cardCVV, setCardCVV] = useState(null);


  const paymentCallback = useCallback((form) => {
    setPaymentFields(form);
    // console.log(form);
  }, []);
  const addCardCallback = useCallback((status) => {
    setEditCard(status);
  }, []);
  useEffect(() => {
    // Get Payment and card values
    getPaymentAmount();
    getCards();
  }, []);
  useEffect(() => {
    // Set Payment values
    if (!paymentsLoading) {
      setPayments();
    }
  }, [payments]);
  useEffect(() => {
    // Set Card values
    if (!cardsLoading) {
      setCards();
    }
  }, [cards]);

  const submitCardInfos = (card) => {
    // Submit updated values to cards
    let formData = new FormData();
    formData.append('number', cardNumber);
    formData.append('name', cardName);
    formData.append('expiration_date', cardExpDate);
    addCard(formData);
    // Update form state
    setEdit(false);
  };
  const submitPaymentInfos = (payment) => {
    // Submit updated values to payments
    let formData = new FormData();
    formData.append('stripe_charge_id', stripeChargeId);
    formData.append('amount', paymentAmount);
    createPaymentAmount(formData);
    // Update form state
    setEdit(false);
  };
  const setCards = () => {
    setCardData(cards || '');
  };
  const setPayments = () => {
    setPaymentData(payments || '');
  };

  return (
    <div className="w-100 h-100">
      {!editCard ? (
        <PaymentList 
          addCardCallback={addCardCallback}
          submitCardInfos={submitCardInfos}
          cardData={cardData}
          cardNumber={cardNumber}
          cardName={cardName}
          cardExpDate={cardExpDate}
          cardCVV={cardCVV}
          setCardNumber={setCardNumber}
          setCardName={setCardName}
          setCardExpDate={setCardExpDate}
          setCardCVV={setCardCVV}
        />
      ) : (
        <PaymentForm 
          paymentCallback={paymentCallback}
          addCardCallback={addCardCallback}
          stripeChargeId={stripeChargeId}
          paymentAmount={paymentAmount}
          setStripeChargeId={setStripeChargeId}
          setPaymentAmount={setPaymentAmount}
        />
      )}
      <PaymentInfo />
      <PaymentHistory
        paymentData={paymentData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.userCards,
  cardsLoading: state.cards.cardsLoading,
  payments: state.payments.userPayments,
  paymentsLoading: state.payments.paymentsLoading,
});

export default connect(mapStateToProps, {
  getPaymentAmount,
  createPaymentAmount,
  getCards,
  addCard,
  deleteCard
})(PaymentPortal);
