import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
    color: '#394044',
    fontWeight: 600,
    fontSize: '2rem',

    ['@media (min-width:450px)']: {
      marginTop: '0.25em',
      fontSize: '3rem',
    },
  },
  ArrowButton: {
    height: '3.5em',
    width: '3.5em',
    padding: '0',
    position: 'absolute',
    borderRadius: '0.25rem',
    border: 'none',

    ['@media (min-width:450px)']: {
      height: '5em',
      width: '5em',
      zIndex: 1,
    },
  },
  ArrowIcon: {
    stroke: 'inherit',
    strokeWidth: '4',
    fill: 'inherit',
    height: '1.5em',
    width: '1.5em',

    ['@media (min-width:450px)']: {
      height: '1.15em',
      width: '1.15em',
    },
  },
  BullHorn: { position: 'absolute', bottom: 0 },
});

/**
 *
 * @param {string} pageHeading Major heading text for the page
 * @param {React.Child} children the main content of this page
 */
export default function StepperWrapper({ pageHeading, children }) {
  const classes = useStyles();

  const FAKE_CREATE_AD_STEPS = ['Create Ad', 'Target Audience', 'Choose Budget', 'Post Ad'];

  return (
    <Container maxWidth="xl">
      <Box className={classes.PageVessel}>
        <button style={{ left: 0, top: 10 }} className={classes.ArrowButton}>
          <ArrowBackIcon className={classes.ArrowIcon} />
        </button>
        <button style={{ right: 0, top: 10 }} className={classes.ArrowButton}>
          <ArrowForwardIcon className={classes.ArrowIcon} />
        </button>
        <Typography variant="h2" gutterBottom className={classes.BlueText}>
          {pageHeading}
        </Typography>
        <Stepper>
          {FAKE_CREATE_AD_STEPS.map((step) => (
            <Step completed={false}>
              <StepLabel>{step}</StepLabel>
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
