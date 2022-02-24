import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';

import PlanCard from '../components/PlanCard';

const useStyles = makeStyles(() => ({
  planContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1100px',
    padding: '20px',
    justifyContent: 'space-between',
    margin: 'auto',

    '@media (max-width:898px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px'
    },
  },
  infoTitle: {
    color: '#00468f',
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const PlanContainer = ({ planCallback }) => {
  const classes = useStyles();
  const plan = {
    basic: {
      bestSeller: false,
      title: 'BASIC PLAN',
      price: '9.99',
      sub: 'Access to Limited Templates Custom Ad Designs for $15 Each',
      planId: 'P-1PU62009HG904811CMILOQAQ',
    },
    advanced: {
      bestSeller: true,
      title: 'ADVANCED PLAN',
      price: '19.99',
      sub: 'Access to 100+ Templates 1 Free Custom Ad Design per Month',
      planId: 'P-1PU62009HG904811CMILOQAQ'
    },
    preminum: {
      bestSeller: false,
      title: 'PREMINUM PLAN',
      price: '39.99',
      sub: 'Access to ALL Templates 2 Free Custom Ad Designs per Month',
      planId: 'P-1PU62009HG904811CMILOQAQ'
    },
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px', margin: 'auto', width: '100%' }}>
      <p className={classes.infoTitle}>Choose a Payment Plan</p>
      <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
        <div className={classes.planContainer}>
          <PlanCard plan={plan.basic} planCallback={planCallback} />
          <PlanCard plan={plan.advanced} planCallback={planCallback} />
          <PlanCard plan={plan.preminum} planCallback={planCallback} />
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
