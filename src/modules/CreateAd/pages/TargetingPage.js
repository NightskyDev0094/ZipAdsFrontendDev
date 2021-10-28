import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  FormControlLabel,
  LinearProgress,
  RadioGroup,
  Radio,
  Input,
  Chip,
  Button,
  Paper,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputMainLabel } from '../../../sharedComponents/components';
import StepProgress from '../components/StepProgress';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';

import backgroundImage from '../../../BlueTecUIKit/images/background/2.png';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
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
    height: '1100px',
    marginBottom: '200px',
    margin: '0 auto',
    '@media (max-width:700px)': {
      height: '1400px',
      marginBottom: '300px',
    },
  },
  pageBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
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
  formContainer: {
    padding: '2rem',
    height: '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '@media (max-width:700px)': {
      height: '1300px',
    },
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
  },
  targetDistanceOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetLocationInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  toolTipContainer: {
    padding: '10px 0',
  },
  tooltip: {
    fontSize: '15px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '10px 0',
  },
}));

const TargetingPage = ({
  handleSubmitTargetInfo,
  hasTargetStepBeenCompleted,
  completeStep,
  businessInfo,
  streetVal,
  cityVal,
  stateVal,
  zipVal,
  setStreetVal,
  setCityVal,
  setStateVal,
  setZipVal,
  distance,
  setDistance,
  interest,
  setInterest,
  localeFormat,
  setLocaleFormat,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);

  const [error, setError] = useState({
    message: 'An Error has occured',
    isError: false,
  });

  const nextClick = () => {
    // if (hasTargetStepBeenCompleted === 'STEP_COMPLETED') {
    //   setIsResubmitModalOpen(true);
    // } else {
      try {
        handleSubmitTargetInfo({ distance, interest });
        completeStep(3);
        history.push('/create/expanded-targeting');
      } catch (e) {
        setError({ isError: true, message: e });
      }
    // }
  };

  return (
    <>
      {error.isError && <ErrorFallBackPage error={error} />}
      {hasTargetStepBeenCompleted === 'STEP_COMPLETED' && (
        <ReSubmitFormModal
          isResubmitModalOpen={isResubmitModalOpen}
          setIsResubmitModalOpen={setIsResubmitModalOpen}
          handleSubmitAction={handleSubmitTargetInfo}
          nextRoute={'/create/expanded-targeting'}
          formData={{ distance, interest }}
        />
      )}
      {!error.isError && (
        <Box className={classes.pageContainer}>
          <div className={classes.pageHeader}>
            <Typography variant="h2">Targeting</Typography>
            <div className={classes.progressBarContainer}>
              <StepProgress formStep={2} />
            </div>
          </div>
          <Paper className={classes.paper} elevation={2}>
            <div className={classes.nextButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/create/create-campaign')}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={nextClick}>
                Next
              </Button>
            </div>
            <div className={classes.pageBody}>
              <Paper elevation={2} className={classes.formContainer}>
                <InputMainLabel>Find Your Target Audience</InputMainLabel>
                <Box>
                  <Typography>
                    Find people interested in your business by selecting a location and entering a
                    target interest.
                  </Typography>
                </Box>
                <Box marginTop="2rem">
                  <InputMainLabel>
                    Select the distance from your target location that your ads will be distrubuted
                    to.
                  </InputMainLabel>
                  <RadioGroup
                    aria-label="distance"
                    name="distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className={classes.targetDistanceOptionsContainer}
                  >
                    <FormControlLabel value="hyper-local" control={<Radio />} label="Hyper Local" />
                    <FormControlLabel value="local" control={<Radio />} label="Local (5 miles)" />
                    <FormControlLabel
                      value="drive"
                      control={<Radio />}
                      label="A Drive Away (15 miles)"
                    />
                    <FormControlLabel value="nationwide" control={<Radio />} label="Nationwide" />
                  </RadioGroup>
                </Box>
                {distance === 'hyper-local' && (
                  <>
                    <Box marginTop="2rem">
                      <InputMainLabel>
                        Select how you would like to target your location.
                      </InputMainLabel>
                      <Box className={classes.targetLocationInputContainer}>
                        <RadioGroup
                          aria-label="localeFormat"
                          name="localeFormat"
                          value={localeFormat}
                          onChange={(e) => setLocaleFormat(e.target.value)}
                        >
                          <FormControlLabel value="zip" control={<Radio />} label="Zip Code" />
                          <FormControlLabel
                            value="city"
                            control={<Radio />}
                            label="City and State"
                          />
                        </RadioGroup>
                      </Box>
                    </Box>
                  </>
                )}
                {distance === 'hyper-local' && localeFormat === 'zip' && (
                  <Box marginTop="2rem">
                    <InputMainLabel>Enter your target location's zip code</InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={zipVal}
                        onChange={(e) => setZipVal(e.target.value)}
                        placeholder="Zip Code"
                      />
                    </Box>
                  </Box>
                )}
                {distance === 'hyper-local' && localeFormat === 'city' && (
                  <Box marginTop="2rem">
                    <InputMainLabel>
                      Enter your target location by city and state code.
                    </InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={cityVal}
                        onChange={(e) => setCityVal(e.target.value)}
                        placeholder="City"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={stateVal}
                        onChange={(e) => setStateVal(e.target.value)}
                        placeholder="State"
                      />
                    </Box>
                  </Box>
                )}
                {distance === 'drive' && (
                  <Box marginTop="2rem">
                    <InputMainLabel>Enter your target location</InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={streetVal}
                        onChange={(e) => setStreetVal(e.target.value)}
                        placeholder="Street Address"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={cityVal}
                        onChange={(e) => setCityVal(e.target.value)}
                        placeholder="City"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={stateVal}
                        onChange={(e) => setStateVal(e.target.value)}
                        placeholder="State"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={zipVal}
                        onChange={(e) => setZipVal(e.target.value)}
                        placeholder="Zip Code"
                      />
                    </Box>
                  </Box>
                )}
                {distance === 'local' && (
                  <Box marginTop="2rem">
                    <InputMainLabel>Enter your target location</InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={streetVal}
                        onChange={(e) => setStreetVal(e.target.value)}
                        placeholder="Street Address"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={cityVal}
                        onChange={(e) => setCityVal(e.target.value)}
                        placeholder="City"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={stateVal}
                        onChange={(e) => setStateVal(e.target.value)}
                        placeholder="State"
                      />
                    </Box>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        value={zipVal}
                        onChange={(e) => setZipVal(e.target.value)}
                        placeholder="Zip Code"
                      />
                    </Box>
                  </Box>
                )}
                <Tooltip
                  title={
                    <div className={classes.toolTipContainer}>
                      <p className={classes.tooltip}>
                        Select a common interest that your target audience might have and we will
                        find the most relevant user groups to show your ads to
                      </p>
                    </div>
                  }
                >
                  <Box marginTop="2rem">
                    <InputMainLabel>
                      Enter a keyword that your target customer will be interested in
                    </InputMainLabel>
                    <Box
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '30px',
                      }}
                    >
                      <Input
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        placeholder="add interests"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Paper>
            </div>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default TargetingPage;
