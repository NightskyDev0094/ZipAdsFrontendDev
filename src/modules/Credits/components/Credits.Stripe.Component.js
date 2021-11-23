import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Silka',
    flexDirection: 'column',
  },
  button: {
    marginTop: '30px',
  },
  form: {
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    fontFamily: 'Silka',
  },
  label: {
    width: '50%',
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Silka',
    '@media (max-width:700px)': {
      display: 'flex !important',
      flexDirection: 'column !important',
      alignItems: 'flex-start !important'
    }
  },
  title: {
    borderBottom: '1px solid black',
    fontFamily: 'Silka',
    marginBottom: '30px'
  },
  root: {
    margin: '50px 50px 0px 50px',
  },
  submitButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
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

const CreditStripeComponent = ({
  preExistingAmount,
  amountToPurchase,
  createCreditAmount,
  getClientId,
  stripeCheckoutToken,
  creditError,
  purchaseButtonDisabled,
  updateCreditAmount,
  clearCreditErrors,
}) => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();

  const [stripeStatus, setStripeStatus] = useState(STRIPE_STATUS.UNSET);
  const [errorMessage, setErrorMessage] = useState(ERROR_MESSAGE.UNSET);
  const [paymentResultStatus, setPaymentResultStatus] = useState(PAYMENT_RESULT_STATUS.UNSET);

  const [name, setName] = useState('');

  const combinePreExistingAmountToAmount = () => {
    const [preExistinAmountParsed, amountParsed] = [
      parseFloat(preExistingAmount),
      parseFloat(amountToPurchase),
    ];
    return preExistinAmountParsed + amountParsed;
  };

  const formatAmountForSubmisson = () => {
    const formData = new FormData();
    const intToFloat = (num, decPlaces) => num + '.' + Array(decPlaces + 1).join('0');
    try {
      if(!preExistingAmount){
        formData.append('amount', intToFloat(amountToPurchase, 2));
        formData.append('pending', false);  
      } else {
        const budget = intToFloat((parseInt(amountToPurchase) + parseInt(preExistingAmount)), 2);
        formData.append('amount', budget);
        formData.append('pending', false);
      }
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    }
    return formData;
  };

  /**
   * This hook fetchs to payment id, to secure a checkout.
   * then sets the payment reulst status state hook.
   */
  useEffect(() => {
    try {
      if (stripeCheckoutToken) {
        const paymentClosure = async () => {
          if (!CardElement) {
            setErrorMessage(ERROR_MESSAGE.CARD_ELEMENT_INVALID);
            setStripeStatus(STRIPE_STATUS.ERROR);
            return;
          }
          if (!stripe) {
            setErrorMessage(ERROR_MESSAGE.CARD_ELEMENT_INVALID);
            setStripeStatus(STRIPE_STATUS.ERROR);
            return;
          }
          console.log(stripeCheckoutToken.client_secret)
          const paymentResult = await stripe?.confirmCardPayment(
            stripeCheckoutToken?.client_secret,
            {
              payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                  name: name,
                },
              },
            }
          );
          if (paymentResult?.paymentIntent?.status === 'succeeded') {
            setPaymentResultStatus(PAYMENT_RESULT_STATUS.SUCCEED);
          } else {
            setPaymentResultStatus(PAYMENT_RESULT_STATUS.ERROR);
          }
        };
        paymentClosure();
      }
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    }
  }, [stripeCheckoutToken, stripeCheckoutToken?.client_secret]);

  /**
   * Checks for a credit error or failure to process
   * credit or debit card
   */
  useEffect(() => {
    if (creditError) {
      setStripeStatus(STRIPE_STATUS.ERROR);
      setErrorMessage(ERROR_MESSAGE.CARD_PROCESSING_FAILURE);
    }
  }, [creditError]);

  /**
   * Check payment result and if so submit amount
   * and notify users, this hook is watching for the payment result
   * It will then clear errors, and update credit amount or create a new amount
   */
  useEffect(() => {
    try {
      const submitOrUpdateClosure = async () => {
        if (paymentResultStatus === PAYMENT_RESULT_STATUS.SUCCEED) {
          await clearCreditErrors();
          if (preExistingAmount > 0) {
            const combinedAmount = formatAmountForSubmisson();
            //updateCreditAmount will chagne too
            await createCreditAmount(combinedAmount);
            setStripeStatus(STRIPE_STATUS.SUCCESS);
          } else {
            const amount = formatAmountForSubmisson();
            await createCreditAmount(amount);
            setStripeStatus(STRIPE_STATUS.SUCCESS);
          }
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
    try {
      setStripeStatus(STRIPE_STATUS.LOADING);
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        setStripeStatus(STRIPE_STATUS.ERROR);
        setErrorMessage(ERROR_MESSAGE.STRIPE_LOAD_FAILURE);
        return;
      } else {
        await getClientId(amountToPurchase, preExistingAmount);
      }
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE.CODE_ERROR);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6" component="h6">
        Checkout
      </Typography>
      <div className={classes.container}>
        <div className={classes.cartStatusContainer}>
          {stripeStatus === STRIPE_STATUS.SUCCESS && (
            <Alert severity="success">
              You Successfully Purchased Credits!, Feel free to go to the next page.
            </Alert>
          )}
          {stripeStatus === STRIPE_STATUS.LOADING && (
            <Alert severity="info">Processing Card...</Alert>
          )}
          {stripeStatus === STRIPE_STATUS.ERROR && (
            <Alert severity="error">An Error has occured: {errorMessage}</Alert>
          )}
        </div>
        <form className={classes.form} onSubmit={handleSubmit} action="" method="post">
          <label className={classes.label}>
            Name on Card
            <input
              id="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <CardElement />
          <div className={classes.submitButton}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              disabled={!stripe || purchaseButtonDisabled}
            >
              Purchase credits and continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

CreditStripeComponent.propTypes = {
  preExistingAmount: PropTypes.string,
  amountToPurchase: PropTypes.string,
  createCreditAmount: PropTypes.func,
  getClientId: PropTypes.func,
  stripeCheckoutToken: PropTypes.string,
  creditError: PropTypes.string,
  purchaseButtonDisabled: PropTypes.bool,
  updateCreditAmount: PropTypes.func,
  clearCreditErrors: PropTypes.func
};

CreditStripeComponent.defaultProps = {
  preExistingAmount: '0',
  amountToPurchase: '',
  createCreditAmount: () => alert('createCreditAction not passed'),
  getClientId: () => alert('client id not passed'),
  stripeCheckoutToken: '',
  creditError: '',
  purchaseButtonDisabled: true,
  updateCreditAmount: () => alert('update credit amount not passed'),
  clearCreditErrors: () => alert('clear credit errors')
};

export default CreditStripeComponent;
