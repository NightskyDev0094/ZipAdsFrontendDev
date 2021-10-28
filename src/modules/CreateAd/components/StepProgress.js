import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import { useWindowSize } from '../shared_logic/custom_hooks';
import { connect } from 'react-redux';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneAll from '@material-ui/icons/DoneAll';

const stepperBreakSize = 1000;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '75px',
  },
  button: {
    marginRight: theme.spacing(1),
    boxShadow: 'none',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    '@media (max-width:1000px)': {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '700px',
      paddingTop: '20px',
    },
  },
  step: {
    '@media (max-width:1000px)': {
      width: '100%',
      '.MuiStepConnector-lineVertical': {
        display: 'none',
      },
    },
  },
}));

const stepStyle = {
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
};

const checkMarkStyle = {
  color: 'green',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'center',
};

const getSteps = (stepTracker) => [
  {
    label: (
      <Link style={stepStyle} to="/select-campaign">
        Select Campaign
      </Link>
    ),
    isStepComplete:
      stepTracker?.CREATE_CAMPAIGN_STEP === 'CREATE_CAMPAIGN_STEP' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/connect-social">
        Select Networks
      </Link>
    ),
    isStepComplete:
      stepTracker?.CONNECT_SOCIAL_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create">
        Create Campaign
      </Link>
    ),
    isStepComplete:
      stepTracker?.CREATE_CAMPAIGN_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/targeting">
        Target Audience
      </Link>
    ),
    isStepComplete:
      stepTracker?.TARGET_AUDIENCE_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/expanded-targeting">
        Review Targeting
      </Link>
    ),
    isStepComplete:
      stepTracker?.REVIEW_TARGETING_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/budget">
        Set Budget
      </Link>
    ),
    isStepComplete:
      stepTracker?.BUDGET_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/objective">
        Set Objective
      </Link>
    ),
    isStepComplete:
      stepTracker?.OBJECTIVE_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/credits">
        Purchase Credits
      </Link>
    ),
    isStepComplete:
      stepTracker?.PURCHASE_CREDITS_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
  {
    label: (
      <Link style={stepStyle} to="/create/summary">
        Post Ad
      </Link>
    ),
    isStepComplete:
      stepTracker?.POST_AD_STEP === 'STEP_COMPLETED' ? (
        <div style={checkMarkStyle}>
          <DoneAllIcon />
        </div>
      ) : (
        <div />
      ),
  },
];

const StepProgress = ({ formStep, stepTracker }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(formStep);
  const steps = getSteps(stepTracker);
  const windowSize = useWindowSize();

  return (
    <div className={classes.root}>
      <Stepper
        orientation={windowSize.width < stepperBreakSize ? 'vertical' : 'horizontal'}
        alternativeLabel
        className={classes.stepper}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((step) => (
          <Step className={classes.step} key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            {step.isStepComplete}
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stepTracker: state.stepTracker,
});

export default connect(mapStateToProps)(StepProgress);
