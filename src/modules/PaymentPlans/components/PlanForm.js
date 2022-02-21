import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_SUBSCRIPTION_OPTIONS } from '../../../environmentVariables.js';
import clsx from 'clsx';
import '../../../index.css';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  PaymentFormContainer: {
    margin: 'auto',
    width: 'fit-content',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: '25px',
    fontWeight: '600',

    '@media (max-width:718px)': {
      fontSize: '20px',
    },
  },
  infoTitle: {
    color: '#00468f',
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const ERROR_MESSAGE = {
  UNSET: '',
  CLIENT_ID_FAILURE: `
  ClientID could not be created, please 
  reload the page.
`,
  CARD_PROCESSING_FAILURE: `
  Payment could not be processed, please use a
  different card to checkout.
`,
  STRIPE_LOAD_FAILURE: `
  An error has occurred: Stripe has not loaded, please
  refresh page.
`,
  CARD_ELEMENT_INVALID: `
  An error has occured: Card Element has not been loaded yet.
  please refresh page
`,
  CODE_ERROR: `
  An Error has occured, please refresh page
 `,
};

const STRIPE_STATUS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  UNSET: 'UNSET',
  ERROR: 'ERROR',
};

const PAYMENT_RESULT_STATUS = {
  UNSET: 'UNSET',
  SUCCEED: 'SUCCEED',
  ERROR: 'ERROR',
};


const PlanForm = ({ 
  preExistingAmount,
  amountToPurchase,
  createPaymentAmount,
  getClientId,
  stripeCheckoutToken,
  paymentError,
  purchaseButtonDisabled,
  updatePaymentAmount,
  clearPaymentErrors,
 }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  const [stripeStatus, setStripeStatus] = useState(STRIPE_STATUS.UNSET);
  const [errorMessage, setErrorMessage] = useState(ERROR_MESSAGE.UNSET);
  const [paymentResultStatus, setPaymentResultStatus] = useState(PAYMENT_RESULT_STATUS.UNSET);

  const [name, setName] = useState('');

  const formatAmountForSubmisson = () => {
    const formData = new FormData();
    const intToFloat = (num, decPlaces) => num + '.' + Array(decPlaces + 1).join('0');
    try {
      // if(!preExistingAmount){
      formData.append('amount', intToFloat(amountToPurchase, 2));
      formData.append('pending', false);  
      // } else {
      //   const budget = intToFloat((parseInt(amountToPurchase) + parseInt(preExistingAmount)), 2);
      //   formData.append('amount', budget);
      //   formData.append('pending', false);
      // }
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    }
    return formData;
  };

  /**
   * This hook fetchs to payment id, to secure a checkout.
   * then sets the payment reulst status state hook.
   */
  //  useEffect(() => {
  //   try {
  //     if (stripeCheckoutToken) {
  //       const paymentClosure = async () => {
  //         if (!CardElement) {
  //           setErrorMessage(ERROR_MESSAGE.CARD_ELEMENT_INVALID);
  //           setStripeStatus(STRIPE_STATUS.ERROR);
  //           return;
  //         }
  //         if (!stripe) {
  //           setErrorMessage(ERROR_MESSAGE.CARD_ELEMENT_INVALID);
  //           setStripeStatus(STRIPE_STATUS.ERROR);
  //           return;
  //         }
  //         console.log(stripeCheckoutToken.client_secret)
  //         const paymentResult = await stripe?.confirmCardPayment(
  //           stripeCheckoutToken?.client_secret,
  //           {
  //             payment_method: {
  //               card: elements.getElement(CardElement),
  //               billing_details: {
  //                 name: name,
  //               },
  //             },
  //           }
  //         );
  //         if (paymentResult?.paymentIntent?.status === 'succeeded') {
  //           setPaymentResultStatus(PAYMENT_RESULT_STATUS.SUCCEED);
  //         } else {
  //           setPaymentResultStatus(PAYMENT_RESULT_STATUS.ERROR);
  //         }
  //       };
  //       paymentClosure();
  //     }
  //   } catch (e) {
  //     setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
  //   }
  // }, [stripeCheckoutToken, stripeCheckoutToken?.client_secret]);

  /**
   * Checks for a Payment error or failure to process
   * Payment or debit card
   */
  useEffect(() => {
    if (paymentError) {
      setStripeStatus(STRIPE_STATUS.ERROR);
      setErrorMessage(ERROR_MESSAGE.CARD_PROCESSING_FAILURE);
    }
  }, [paymentError]);

  /**
   * Check payment result and if so submit amount
   * and notify users, this hook is watching for the payment result
   * It will then clear errors, and update payment amount or create a new amount
   */
  useEffect(() => {
    try {
      const submitOrUpdateClosure = async () => {
        if (paymentResultStatus === PAYMENT_RESULT_STATUS.SUCCEED) {
          await clearPaymentErrors();
          // if (preExistingAmount > 0) {
          //   const combinedAmount = formatAmountForSubmisson();
          //   //updatePaymentAmount will chagne too
          //   await createPaymentAmount(combinedAmount);
          //   setStripeStatus(STRIPE_STATUS.SUCCESS);
          // } else {
          const amount = formatAmountForSubmisson();
          await createPaymentAmount(amount);
          setStripeStatus(STRIPE_STATUS.SUCCESS);
          // }
        } else if (paymentResultStatus === PAYMENT_RESULT_STATUS.ERROR) {
          setStripeStatus(STRIPE_STATUS.ERROR);
          setErrorMessage(ERROR_MESSAGE.CARD_PROCESSING_FAILURE);
        }
      };
      submitOrUpdateClosure();
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    }
  }, [paymentResultStatus]);

  /**
   * main submission
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentResultStatus(PAYMENT_RESULT_STATUS.UNSET);
    // try {
    //   setStripeStatus(STRIPE_STATUS.LOADING);
    //   if (!stripe || !elements) {
    //     // Stripe.js has not loaded yet. Make sure to disable
    //     // form submission until Stripe.js has loaded.
    //     setStripeStatus(STRIPE_STATUS.ERROR);
    //     setErrorMessage(ERROR_MESSAGE.STRIPE_LOAD_FAILURE);
    //     return;
    //   } else {
    //     await getClientId(amountToPurchase, 0);
    //   }
    // } catch (e) {
    //   setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    // }
  };

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 298px)', padding: '20px', margin: 'auto' }}>
      <div className={clsx(classes.PaymentFormContainer, classes.textStyle)}>
        <p
          className={classes.infoTitle}
        >
          Add a Card to Activate Your Free Trial
        </p>
          <div className="field-set input-type">
            <PayPalScriptProvider options={PAYPAL_SUBSCRIPTION_OPTIONS}>
                <PayPalButtons />
            </PayPalScriptProvider>

          </div>

      </div>
    </div>
  );
};

PlanForm.propTypes = {
  // preExistingAmount: PropTypes.string,
  amountToPurchase: PropTypes.string,
  createPaymentAmount: PropTypes.func,
  getClientId: PropTypes.func,
  stripeCheckoutToken: PropTypes.string,
  paymentError: PropTypes.string,
  // purchaseButtonDisabled: PropTypes.bool,
  updatePaymentAmount: PropTypes.func,
  clearPaymentErrors: PropTypes.func
};

PlanForm.defaultProps = {
  // preExistingAmount: '0',
  amountToPurchase: '',
  createPaymentAmount: () => alert('createPaymentAction not passed'),
  getClientId: () => alert('client id not passed'),
  stripeCheckoutToken: '',
  paymentError: '',
  // purchaseButtonDisabled: true,
  updatePaymentAmount: () => alert('update Payment amount not passed'),
  clearPaymentErrors: () => alert('clear Payment errors')
};

export default PlanForm;
