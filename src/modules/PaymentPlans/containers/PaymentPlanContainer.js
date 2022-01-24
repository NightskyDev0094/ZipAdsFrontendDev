import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';

import PlanContainer from './PlanContainer';
import PlanForm from './PlanForm';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const useStyles = makeStyles(() => ({
  paymentPlanPageContainer: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const PaymentPlanContainer = ({}) => {
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
  const [paymenPlan, setPaymenPlan] = React.useState(null);
  const [paymentFields, setPaymentFields] = React.useState();

  const planCallback = React.useCallback((plan) => {
    setPaymenPlan(plan);
  });
  const paymentCallback = React.useCallback((form) => {
    setPaymentFields(form);
    console.log(form);
  }, []);

  return (
    <div className={classes.paymentPlanPageContainer}>
      {!paymenPlan ? (
        <PlanContainer planCallback={planCallback} />
      ) : (
        <PlanForm paymentCallback={paymentCallback} />
      )}
      <BlueTecLandingFooter />
    </div>
  );
};

export default PaymentPlanContainer;
