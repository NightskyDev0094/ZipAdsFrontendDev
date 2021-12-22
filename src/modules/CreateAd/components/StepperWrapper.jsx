import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';

import next from '../../../BlueTecUIKit/images/next.png';
import back from '../../../BlueTecUIKit/images/back.png';

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
    marginTop: '3.25em',
    textAlign: 'center',
    color: '#00468f',
    fontWeight: 600,
    fontSize: '2rem',

    ['@media (min-width:450px)']: {
      marginTop: '0.25em',
      fontSize: '3rem',
    },
  },
  ArrowButton: {
    height: '3rem',
    width: '3rem',
    padding: '0',
    position: 'absolute',
    borderRadius: '0.25rem',
    outline: 'none !important',
    padding: '5px',
    // ['@media (min-width:450px)']: {
    //   height: '2.5em',
    //   width: '2.5em',
    zIndex: 1,
    // },
  },
  // ArrowIcon: {
  //   stroke: 'inherit',
  //   strokeWidth: '4',
  //   fill: 'inherit',
  //   height: '1.5em',
  //   width: '1.5em',

  //   ['@media (min-width:450px)']: {
  //     height: '1.15em',
  //     width: '1.15em',
  //   },
  // },
  BullHorn: { position: 'absolute', bottom: 0 },
  stepLabel: {
    color: '#00468f',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '50px',
    // minHeight: '62px',
    margin: 'auto',
    paddingBottom: '16px',
  },
});

/**
 *
 * @param {string} pageHeading Major heading text for the page
 * @param {React.Child} children the main content of this page
 */

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 88,
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
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
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
  },
  active: {
    backgroundColor: '#017cff',
    width: 65,
    height: 65,
    marginTop: '-5px',
    fontSize: '3rem',
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

export default function StepperWrapper({ pageHeading, children }) {
  const classes = useStyles();
  const history = useHistory();

  const FAKE_CREATE_AD_STEPS = ['Create Ad', 'Target Audience', 'Choose Budget', 'Post Ad'];
  const headings = [
    'Choose Which Networks to Run Ads On',
    'Choose Your Target Audience',
    'Choose Your Budget',
    "Let's Get Your Ad Online!",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step) => {
    let path;

    switch (step) {
      case 0:
        path = '/create/create-campaign';
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

  useEffect(() => {
    setActiveStep(headings.indexOf(pageHeading));
  }, [pageHeading]);

  return (
    <Container maxWidth="lg">
      <Box className={classes.PageVessel}>
        <IconButton
          onClick={() => handleStep(activeStep - 1 < 0 ? activeStep : activeStep - 1)}
          style={{ left: 0, top: 10 }}
          className={classes.ArrowButton}
        >
          {/* <ArrowBackIcon className={classes.ArrowIcon} /> */}
          <img src={back} className="w-100 h-100" />
        </IconButton>
        <IconButton
          onClick={() => handleStep(activeStep + 1 > 3 ? activeStep : activeStep + 1)}
          style={{ right: 0, top: 10 }}
          className={classes.ArrowButton}
        >
          {/* <ArrowForwardIcon className={classes.ArrowIcon} /> */}
          <img src={next} className="w-100 h-100" />
        </IconButton>
        <Typography variant="h2" gutterBottom className={classes.BlueText}>
          {pageHeading}
        </Typography>
        {/* <Stepper alternativeLabel>
          {FAKE_CREATE_AD_STEPS.map((step) => (
            <Step completed={false}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper> */}
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {FAKE_CREATE_AD_STEPS.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} onClick={() => handleStep(index)}>
                <p className={classes.stepLabel}>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {children}
        <Box className={classes.BullHorn}>
          <div>Here goes the Bullhorn</div>
        </Box>
      </Box>
    </Container>
  );
}

// TODO: complete the step
