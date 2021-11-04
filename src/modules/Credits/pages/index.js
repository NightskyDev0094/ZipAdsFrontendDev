import React, { useEffect, lazy, Suspense } from 'react';
import { makeStyles, Paper, CircularProgress, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import StepProgress from '../../CreateAd/components/StepProgress';
const CreditPageForm = lazy(() => import('../components/Credits.Page.Form'));

const useStyles = makeStyles(() => ({
  outerPaper: {
    width: '88vw',
    height: '1100px',
    margin: '50px auto',
    '@media (max-width:1000px)': {
      width: '100%'
    },  
  },
  creditPageContainer: {
    width: '800px',
    margin: '50px auto',
    padding: '0px 50px 50px 50px',
    height: 'fit-content',
    minHeight: '600px',
    '@media (max-width:1000px)': {
      width: '90%'
    },  
  },
  nextBackButtonContainer: {
    width: '100%',
    display: 'flex',
    paddingTop: '30px',
    paddingLeft: '60px',
    marginBottom: '60px',
    paddingRight: '60px',
    justifyContent: 'space-between',
  },
  stepperContainer: {
    maxWidth: '935px',
    margin: '0 auto',
    position:"sticky",
    top:0
  }
}));

const FallbackPage = () => (
  <div className="fallbackContainer">
    <CircularProgress color="primary" />
  </div>
);

const CreditPage = ({completeStep, ...props}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div className={classes.stepperContainer}>
        <StepProgress formStep={7} />
      </div>
      <Paper className={classes.outerPaper} elevation={3}>
        <div className={classes.nextBackButtonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/create/objective')}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>{
              completeStep(); 
              history.push('/create/summary');
            }}
          >
            Next
          </Button>
        </div>
        <Paper elevation={3} className={classes.creditPageContainer}>
          <Suspense fallback={FallbackPage}>
            <CreditPageForm {...props} />
          </Suspense>
        </Paper>
      </Paper>
    </>
  );
};

CreditPage.propTypes = {};

CreditPage.defaultProps = {};

export default CreditPage;
