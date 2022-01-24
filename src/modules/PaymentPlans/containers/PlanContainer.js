import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';

import PlanCard from '../components/PlanCard';

const useStyles = makeStyles(() => ({
  planContainer: {
    display: 'flex',
    maxWidth: '1200px',
    gap: '125px',
  },
}));

const PlanContainer = ({planCallback}) => {
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
    }
  }
  return (
      <div style={{ flex: 1, padding: '20px', margin: 'auto' }}>
        <p
          className="text-center font-weight-bold"
          style={{ color: '#00468f', fontSize: '30px' }}
        >
          Choose a Payment Plan
        </p>
        <div className={classes.planContainer}>
          <PlanCard plan={plan.basic} planCallback={planCallback} />
          <PlanCard plan={plan.advanced} planCallback={planCallback} />
          <PlanCard plan={plan.preminum} planCallback={planCallback} />
        </div>
      </div>
  );
};

export default PlanContainer;