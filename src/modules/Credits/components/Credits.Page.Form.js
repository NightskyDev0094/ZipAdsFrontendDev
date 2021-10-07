import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CreditStripeComponent from './Credits.Stripe.Component';
import SuccessMessage from './Credits.Success.Component';
import InformationModal from './Credits.Information.Modal';

const useStyles = makeStyles(() => ({
  root: {
    fontfamily: 'Silka',
    '@media (max-width:1000px)': {
      width: '100%'
    },  
  },
  formControl: {},
  inputsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width:1000px)': {
      width: '100%'
    },
    '@media (max-width:700px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '180px'
    },    
  },
  inputs: {
    '@media (max-width:700px)': {
      height: '100px'
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
    whiteSpace: 'nowrap'
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
      width: '100%'
    },
  },
}));

const CreditForm = ({
  styles,
  submitCreditAmount,
  areCreditsSuccessfullyPurchased,
  userCredits,
  setError,
  getCreditAmount,
  clearCreditSuccess,
  campaignInfo,
  amount,
  setAmount,
  ...props
}) => {
  const classes = useStyles();
  // const [amount, setAmount] = useState(0);
  const [purchaseButtonDisabled, setPurchaseButtonDisabled] = useState(true);
  const [preExistingAmount, setPreExistingAmount] = useState(0);

  useEffect(() => {
    getCreditAmount();

    //calculate total budget
  }, []);

  useEffect(() => {
    if (amount === 0 || !amount || parseInt(amount) < 1) {
      setPurchaseButtonDisabled(true);
    } else {
      setPurchaseButtonDisabled(false);
    }
  }, [amount]);

  //get sum of users credits
  useEffect(() => {
    if (!userCredits || !userCredits?.length) return;
    if (userCredits?.length >= 1) {
      const highestAmount = userCredits?.pop()['amount'];
      setPreExistingAmount(highestAmount);
    }
  }, [userCredits]);

  return (
    <>
      {!areCreditsSuccessfullyPurchased ? (
        <div styles={{ ...styles.root }} className={classes.root}>
          <div className={classes.titleSubContainer}>
            <Typography className={classes.title}>Purchase Credits</Typography>
            <Typography className={classes.subTitle}>
              Purchase Credits to checkout with, this is the prefered method of checkout.
              <InformationModal
                title={`Credits`}
                text={`
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged
                `}
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
                <Typography className={classes.inputLabel}>Your Existing Credits:</Typography>
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
                <Typography className={classes.inputLabel}>
                  Credits to purchase: 
                </Typography>
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
          <CreditStripeComponent
            amountToPurchase={amount}
            preExistingAmount={preExistingAmount}
            purchaseButtonDisabled={purchaseButtonDisabled}
            {...props}
          />
        </div>
      ) : (
        <SuccessMessage clearCreditSuccess={clearCreditSuccess} />
      )}
    </>
  );
};

CreditForm.propTypes = {
  styles: PropTypes.object,
  submitCreditAmount: PropTypes.func,
  areCreditsSuccessfullyPurchased: PropTypes.func,
  userCredits: PropTypes.array,
  setError: PropTypes.func,
  getCreditAmount: PropTypes.func,
  clearCreditSuccess: PropTypes.func,
};

CreditForm.defaultProps = {
  styles: {},
  submitCreditAmount: () => alert('submitCreditAmount was not passed'),
  areCreditsSuccessfullyPurchased: false,
  userCredits: [],
  setError: () => alert('Set error was not passed'),
  getCreditAmount: () => alert('getCreditAmount not passed'),
  clearCreditSuccess: () => alert('clear Credit Succcess was not passed'),
};

export default CreditForm;
