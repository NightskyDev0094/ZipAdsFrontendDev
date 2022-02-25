import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((plan) => ({
  planCard: (plan) => ({
    width: '300px',
    backgroundColor: plan.bestSeller ? 'rgb(0, 70, 143)' : 'rgb(237, 237, 237)',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    borderRadius: '30px',
    textAlign: 'center',
    color: plan.bestSeller ? 'white' : 'black',

    '@media (max-width:1009px)': {
      transform: 'scale(0.9)'
    },
    '@media (max-width:898px)': {
      transform: 'scale(1)'
    },
  }),
  planTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  buttonStyle: (plan) => ({
    width: '171px',
    margin: 'auto',
    color: 'rgb(27, 48, 97)',
    fontWeight: 'bold',
    fontSize: '20px',
    border: plan.bestSeller ? '4px solid rgb(75, 240, 103)' : '4px solid rgb(27, 48, 97)',
    borderRadius: '8px',
    background: plan.bestSeller ? '#4bf067' : 'transparent',

    '&:hover': {
      background: plan.bestSeller ? '#4bf067' : 'transparent',
      border: plan.bestSeller ? '4px solid rgb(75, 240, 103)' : '4px solid rgb(27, 48, 97)',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
}));

const PlanCard = ({ plan, setSelectedPlan }) => {
  const classes = useStyles(plan);

  return (
    <div className={classes.planCard}>
      <p style={{ color: '#ffe185', height: '30px', fontSize: '20px', fontWeight: 'bold' }}>
        {plan.bestSeller ? 'Best Seller' : ''}
      </p>
      <p className={classes.planTitle}>{plan.title}</p>
      <div>
        <p
          style={{
            width: 'fit-content',
            margin: 'auto',
            position: 'relative',
            color: plan.bestSeller ? 'white' : '#1b3061',
            fontWeight: 'bold',
            fontSize: '48px',
            fontFamily: 'sans-serif',
          }}
        >
          ${plan.price}
          <p style={{ position: 'absolute', fontSize: '20px', bottom: '12px', right: '-50px' }}>/mo</p>
        </p>
      </div>
      <p className="font-italic font-weight-bold" style={{ fontSize: '18px' }}>
        7 Day Free Trial
      </p>
      <p style={{ fontSize: '18px', fontFamily: 'sans-serif' }}>{plan.sub}</p>
      <Button className={classes.buttonStyle} onClick={(e) => setSelectedPlan(plan)}>
        Start Free Trial
      </Button>
    </div>
  );
};

export default PlanCard;
