import React, { useState, Fragment } from 'react';
import {
  Box,
  Grid,
  Button,
  LinearProgress,
  Paper,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import StepProgress from '../components/StepProgress';
import backgroundImage from '../../../BlueTecUIKit/images/background/3.png';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  pageHeader: {
    textAlign: 'center',
    marginTop: '50px',
  },
  paper: {
    width: '88vw',
    height: '1300px',
    marginBottom: '200px',
    margin: '0 auto',
    '@media (max-width:1400px)': {
      height: '1900px',
    },
    '@media (max-width:500px)': {
      marginBottom: '300px',
      height: '2400px',
    },
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media (max-width:1400px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  },
  nextButtonContainer: {
    marginBottom: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '60px',
    paddingTop: '30px',
    paddingLeft: '60px',
  },
  progressBarTypography: {
    textAlign: 'end',
    fontSize: '24px',
  },
  objectiveContainer: {
    padding: '2rem 4rem',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0rem 2rem',
    '@media (max-width:600px)': {
      height: '900px',
      padding: '2rem',
      margin: 0,
    },
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
  },
  createBudgetContainer: {
    padding: '2rem',
    margin: '0rem 2rem',
    '@media (max-width:1400px)': {
      marginBottom: '100px',
      minHeight: '525px',
      margin: 0,
    },
  },
  dailyGoogleAdsBudgetInput: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dailyFacebookAdsBudgetInput: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  googleAdsCPCContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  googleAdsCampaignLengthContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  facebookAdsCampaignLength: {
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  selectGoogleAdAccounts: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectFacebookAdAccounts: {
    display: 'flex',
    flexDirection: 'column',
  },
  noGoogleAccountPlaceHolder: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  noFacebookAccountPlaceHolder: {
    textAlign: 'center',
    marginBottom: '30px',
  },
}));

const ObjectivePage = ({
  handleSubmitObjective,
  completeStep,
  hasObjectiveStepBeenCompleted,
  socialsToPost,
  objective,
  setObjective,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });
  //

  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);

  const nextClick = () => {
    // if (hasObjectiveStepBeenCompleted === 'STEP_COMPLETED') {
    //   setIsResubmitModalOpen(true);
    // } else {
      try {
        handleSubmitObjective({ objective });
        completeStep(6);
        history.push('/create/summary');
      } catch (e) {
        setError({ isError: true, message: e });
      }
    // }
  };

  return (
    <ErrorHandler>
      {error.isError && <ErrorFallBackPage error={error} />}
      {hasObjectiveStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={handleSubmitObjective}
          nextRoute={'/create/credits'}
          formData={{ objective }}
        />
      )}
      {!error.isError && (
        <Box className={classes.page}>
          <div className={classes.pageHeader}>
            <Typography variant="h2">Create an Ad</Typography>
            <div className={classes.progressBarContainer}>
              <StepProgress formStep={5} />
            </div>
          </div>
          <Paper elevation={2} className={classes.paper}>
            <div className={classes.nextButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/create/budget')}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={nextClick}>
                Next
              </Button>
            </div>
            <div className={classes.pageBody}>
              <Paper elevation={2} className={classes.objectiveContainer}>
                <InputMainLabel>Create a Budget and Select your Objective</InputMainLabel>
                <Typography>Select your advertising objective.</Typography>
                {/* TODO: add timeline */}
                <Box>
                  <InputMainLabel>Objective</InputMainLabel>
                  <RadioGroup
                    aria-label="distance"
                    name="distance"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                  >
                    <FormControlLabel
                      value="Conversions"
                      control={<Radio />}
                      label="Generate sales or signups"
                    />
                    <FormControlLabel
                      value="Brand Awareness"
                      control={<Radio />}
                      label="Make people aware of my business"
                    />
                    <FormControlLabel
                      value="Store Traffic"
                      control={<Radio />}
                      label="Business’s physical location"
                    />
                    <FormControlLabel
                      value="Traffic"
                      control={<Radio />}
                      label="Generate web traffic"
                    />
                  </RadioGroup>
                </Box>
              </Paper>
            </div>
          </Paper>
        </Box>
      )}
    </ErrorHandler>
  );
};

export default ObjectivePage;
