import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import CreateCampaignButton from './CreateCampaignButton';
import clsx from 'clsx';
import { STATIC_URL } from '../../../environmentVariables'

const next = STATIC_URL + 'images/next.png';
const back = STATIC_URL + 'images/back.png';

const useStyles = makeStyles({
  PageVessel: {
    width: '100%',
    minHeight: '75vh',
    position: 'relative',
    marginTop: '5em',

    ['@media (min-width:400px)']: {
      marginTop: '0em',
    },
  },
  BlueText: {
    width: '100%',
    marginTop: '0.7rem',
    textAlign: 'center',
    color: '#00468f',
    fontWeight: 600,
    fontSize: '32px',

    ['@media (max-width:992px)']: {
      marginTop: '4rem',
    },

    ['@media (max-width:576px)']: {
      fontSize: '24px',
    },
  },

  stepLabel: {
    display: 'flex',
    justifyContent: 'center',
    color: '#00468f',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '50px',
    // minHeight: '62px',
    margin: 'auto',
    paddingBottom: '16px',
  },
  stepper: {
    ['@media (max-width:576px)']: {
      padding: '0px',
    },
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 88,

    ['@media (max-width:576px)']: {
      top: 82,
    },
  },
  active: {
    '& $line': {
      backgroundColor: '#017cff',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#017cff',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#a6a6a6',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#a6a6a6',
    zIndex: 1,
    color: '#fff',
    width: 55,
    height: 55,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    cursor: 'pointer',

    ['@media (max-width:576px)']: {
      width: 45,
      height: 45,
      fontSize: '2rem'
    },
  },
  active: {
    backgroundColor: '#017cff',
    width: 65,
    height: 65,
    marginTop: '-5px',
    fontSize: '3rem',

    ['@media (max-width:576px)']: {
      width: 55,
      height: 55,
      fontSize: '2.5rem',
    },
  },
  completed: {
    backgroundColor: '#017cff',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {String(props.icon)}
    </div>
  );
}

/**
 *
 * @param {function} formSubmitHandler optional submit function for any form on the current page, runs when clicking either nav arrow
 * @param {string} pageHeading title text that display on top of container
 * @param {React Node} children any react elements
 * @returns
 */
export default function StepperWrapper({ formSubmitHandler, pageHeading, children }) {
  const classes = useStyles();
  const history = useHistory();

  const StepperRoutes = [
    '/create/campaign',
    '/create/targeting',
    '/create/budget',
    '/create/summary',
  ];

  const activeStep = StepperRoutes.indexOf(history.location.pathname) ?? 0;

  const CREATE_AD_STEPS = ['Create Ad', 'Target Audience', 'Choose Budget', 'Post Ad'];

  const handleBackArrowClick = async () => {
    formSubmitHandler !== undefined && (await formSubmitHandler());
    activeStep > 0 && history.push(StepperRoutes[activeStep - 1]);
  };

  const handleForwardArrowClick = async () => {
    formSubmitHandler !== undefined && (await formSubmitHandler());
    activeStep < StepperRoutes.length - 1 && history.push(StepperRoutes[activeStep + 1]);
  };
  const handleStep = (step) => {
    let path;

    switch (step) {
      case 0:
        path = '/create/campaign';
        break;
      case 1:
        path = '/create/targeting';
        break;
      case 2:
        path = '/create/budget';
        break;
      case 3:
        path = '/create/summary';
        break;
    }
    history.push(path);
  };

  return (
    <Container maxWidth="xl" className="p-0">
      <Box className={classes.PageVessel}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 10,
          }}
        >
          {activeStep > 0 && <CreateCampaignButton>Back</CreateCampaignButton>}
        </div>
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 10,
          }}
        >
          {activeStep < 3 && <CreateCampaignButton>Next</CreateCampaignButton>}
        </div>
        <Typography variant="h2" gutterBottom className={classes.BlueText}>
          {pageHeading}
        </Typography>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          className={classes.stepper}
        >
          {CREATE_AD_STEPS.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} onClick={() => handleStep(index)}>
                <p className={classes.stepLabel}>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {children}
      </Box>
    </Container>
  );
}
