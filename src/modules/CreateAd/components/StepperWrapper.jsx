import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Arrow from '@material-ui/icons/Forward';
import Stepper from '@material-ui/core/Stepper';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  PageVessel: {
    PageVessel: {
      width: '100%',
      minHeight: '94em',
      position: 'relative',
      marginTop: '10em',

      ['@media (min-width:400px)']: {
        marginTop: '0em',
      },
    },
  },
  BlueText: {
    color: '#394044',
    'font-weight': 600,
    fontSize: '2rem',
    width: '100%',
    textAlign: 'center',

    ['@media (min-width:450px)']: {
      fontSize: '3rem',
    },
  },
  ArrowButton: { padding: '1em' },
  LeftArrow: {
    position: 'absolute',
    left: 0,
    top: 10,
    height: '1.5em',
    width: '1.5em',
    WebkitFilter: "invert(100%)",
    filter: "invert(100%)",
  },
  RightArrow: { position: 'absolute', right: 0, top: 10, height: '1.5em', width: '1.5em' },
  BullHorn: { position: 'absolute', bottom: 0 },
});

/**
 *
 * @param {string} pageHeading Major heading text for the page
 * @param {React.Child} children the main content of this page
 */
export default function StepperWrapper({ pageHeading, children }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box className={classes.PageVessel}>
        <button className={classes.ArrowButton}>
          <Arrow className={classes.LeftArrow} />
        </button>
        <button className={classes.ArrowButton}>
          <Arrow className={classes.RightArrow} />
        </button>
        <Typography variant="h2" gutterBottom className={classes.BlueText}>
          {pageHeading}
        </Typography>
        <Stepper>
          {/* TODO: Complete the stepper */}
        </Stepper>
        {children}
        <Box className={classes.BullHorn}>
          <div>Here goes the Bullhorn</div>
        </Box>
      </Box>
    </Container>
  );
}
