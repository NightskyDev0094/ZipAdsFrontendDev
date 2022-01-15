import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import PaymentPortalStripeComponent from './PaymentPortal.Stripe.Component';
import SuccessMessage from './PaymentPortal.Success.Component';
import InformationModal from './PaymentPortal.Information.Modal';

const useStyles = makeStyles(() => ({
  root: {
    fontfamily: 'Silka',
    '@media (max-width:1000px)': {
      width: '100%',
    },
  },
  formControl: {},
  inputsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width:1000px)': {
      width: '100%',
    },
    '@media (max-width:700px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '180px',
    },
  },
  inputs: {
    '@media (max-width:700px)': {
      height: '100px',
    },
  },
  inputLabels: {},
  formControl: {},
  exitContainer: {},
  //container holding both title and subTitle
  titleSubContainer: {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: '30px',
    width: '100%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  subTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    width: '80%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width:700px)': {
      width: '100%',
    },
  },
}));

const PaymentPortalForm = ({
  styles,
  arePaymentsSuccessfullyPurchased,
  userPayments,
  getPaymentAmount,
  clearPaymentSuccess,
  amount,
  setAmount,
  ...props
}) => {
  const classes = useStyles();
  const [purchaseButtonDisabled, setPurchaseButtonDisabled] = useState(true);
  const [preExistingAmount, setPreExistingAmount] = useState(0);

  useEffect(() => {
    getPaymentAmount();
  }, []);

  useEffect(() => {
    if (amount === 0 || !amount || parseInt(amount) < 1) {
      setPurchaseButtonDisabled(true);
    } else {
      setPurchaseButtonDisabled(false);
    }
  }, [amount]);

  //get sum of users Payments
  useEffect(() => {
    if (!userPayments || !userPayments?.length) return;
    if (userPayments?.length >= 1) {
      const highestAmount = userPayments?.pop()['amount'];
      setPreExistingAmount(highestAmount);
    }
  }, [userPayments]);

  return (
    <>
      {!arePaymentsSuccessfullyPurchased ? (
        <div styles={{ ...styles.root }} className={classes.root}>
          <div className={classes.titleSubContainer}>
            <Typography className={classes.title}>Purchase Payments</Typography>
            <Typography className={classes.subTitle}>
              Purchase Payments to checkout with, this is the preferred method of checkout.
              <InformationModal
                title={`Payments`}
                text="Payments, used in dollar amounts,
                help you run your ads. Depending on the amount of Payments (USD) you want to spend on a campaign,
                you can run your campaign for a longer or shorter period of time. 
                The result of your spending will be shown in the analytics page and you can upload more at any time. "
                styles={{
                  title: { textAlign: 'center', fontSize: '20px' },
                  container: { marginBottom: '8px' },
                  text: { margin: '0px 20px' },
                }}
              />
            </Typography>
          </div>
          <FormControl fullWidth className={classes.formControl} variant="outlined">
            <div className={classes.inputsContainer}>
              <div className={classes.inputs}>
                <Typography className={classes.inputLabel}>Your Existing Payments:</Typography>
                <OutlinedInput
                  disabled={true}
                  id="outlined-adornment-amount"
                  value={preExistingAmount}
                  className={classes.input}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                />
              </div>
              <div className={classes.inputs}>
                <Typography className={classes.inputLabel}>Payments to purchase:</Typography>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={parseInt(amount) || 0}
                  name="totalBudget"
                  className={classes.input}
                  onChange={(e) => setAmount(e.target.value)}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                />
              </div>
            </div>
          </FormControl>
          <PaymentStripeComponent
            amountToPurchase={amount}
            preExistingAmount={preExistingAmount}
            purchaseButtonDisabled={purchaseButtonDisabled}
            {...props}
          />
        </div>
      ) : (
        <SuccessMessage clearPaymentSuccess={clearPaymentSuccess} />
      )}
    </> 
  );
};

PaymentPortalForm.propTypes = {
  styles: PropTypes.object,
  amount: PropTypes.number,
  setAmount: PropTypes.func,
  submitPaymentAmount: PropTypes.func,
  arePaymentsSuccessfullyPurchased: PropTypes.func,
  userPayments: PropTypes.array,
  setError: PropTypes.func,
  getPaymentAmount: PropTypes.func,
  clearPaymentSuccess: PropTypes.func,
};

PaymentPortalForm.defaultProps = {
  styles: {},
  submitPaymentAmount: () => alert('submitPaymentAmount was not passed'),
  arePaymentsSuccessfullyPurchased: false,
  userPayments: [],
  setError: () => alert('Set error was not passed'),
  getPaymentAmount: () => alert('getPaymentAmount not passed'),
  clearPaymentSuccess: () => alert('clear Payment Succcess was not passed'),
};

export default PaymentPortalForm;
