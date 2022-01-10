import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Input,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputMainLabel } from '../../../sharedComponents/components';
import StepProgress from '../components/StepProgress';
import StyledRadio from '../components/StyledRadio';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import StepperWrapper from '../components/StepperWrapper';
import Shoutbox from '../components/Shoutbox';
import alert from '../../../BlueTecUIKit/images/targeting.png';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  paper: {
    width: '88vw',
    // height: '1100px',
    // marginBottom: '200px',
    position: 'relative',
    margin: '0 auto',
    '@media (max-width:700px)': {
      // height: '1400px',
      // marginBottom: '300px',
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
    // justifyContent: 'space-evenly',
    '@media (max-width:700px)': {
      height: '1300px',
    },
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
    position: 'sticky',
    top: 0,
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
  InputItem: {
    width: '100%',
    height: '3rem',
    fontSize: '1.25rem !important',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    borderRadius: '0.25rem',
    'margin-bottom': '1em',
    maxWidth: '250px',

    ['@media (min-width: 450px)']: { height: '3.5rem', fontSize: '1.7rem' },
  },
  textStyle: {
    fontSize: '1.25rem',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
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
    try {
      handleSubmitTargetInfo({ distance, interest }, 'stay');
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
          <div className={classes.paper} elevation={2}>
            <StepperWrapper pageHeading={'Choose Your Target Audience'}>
              <div>
                <div elevation={2}>
                  <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                    How close to your business would you like ads to be shown?
                  </InputMainLabel>
                  <Box>
                    <div>
                      <RadioGroup
                        aria-label="distance"
                        name="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        style={{ width: 'fit-content', minWidth: '250px' }}
                        className="m-auto"
                      >
                        <FormControlLabel
                          value="hyper-local"
                          control={<StyledRadio />}
                          label={<Typography className={classes.textStyle}>Hyper Local</Typography>}
                        />
                        <FormControlLabel
                          value="local"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>Local (5 miles)</Typography>
                          }
                        />
                        <FormControlLabel
                          value="drive"
                          control={<StyledRadio />}
                          label={
                            <Typography className={classes.textStyle}>
                              A Drive Away (15 miles)
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="nationwide"
                          control={<StyledRadio />}
                          label={<Typography className={classes.textStyle}>Nationwide</Typography>}
                        />
                      </RadioGroup>
                    </div>
                  </Box>

                  {distance === 'hyper-local' && localeFormat === 'zip' && (
                    <Box marginTop="2rem">
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        Enter your target location's zip code{' '}
                      </InputMainLabel>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          placeholder="Zip Code"
                          value={zipVal}
                          onChange={(e) => setZipVal(e.target.value)}
                        />
                      </Box>
                    </Box>
                  )}
                  {distance === 'hyper-local' && localeFormat === 'city' && (
                    <Box marginTop="2rem">
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        Enter your target location by city and state code.{' '}
                      </InputMainLabel>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={cityVal}
                          onChange={(e) => setCityVal(e.target.value)}
                          placeholder="City"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={stateVal}
                          onChange={(e) => setStateVal(e.target.value)}
                          placeholder="State"
                        />
                      </Box>
                    </Box>
                  )}
                  {distance === 'drive' && (
                    <Box marginTop="2rem">
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        Enter your target location's address:
                      </InputMainLabel>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={streetVal}
                          onChange={(e) => setStreetVal(e.target.value)}
                          placeholder="Street Address"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={cityVal}
                          onChange={(e) => setCityVal(e.target.value)}
                          placeholder="City"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={stateVal}
                          onChange={(e) => setStateVal(e.target.value)}
                          placeholder="State"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={zipVal}
                          onChange={(e) => setZipVal(e.target.value)}
                          placeholder="Zip Code"
                        />
                      </Box>
                    </Box>
                  )}
                  {distance === 'local' && (
                    <Box marginTop="2rem">
                      <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                        Enter your target location's address:
                      </InputMainLabel>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={streetVal}
                          onChange={(e) => setStreetVal(e.target.value)}
                          placeholder="Street Address"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={cityVal}
                          onChange={(e) => setCityVal(e.target.value)}
                          placeholder="City"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={stateVal}
                          onChange={(e) => setStateVal(e.target.value)}
                          placeholder="State"
                        />
                      </Box>
                      <Box className={classes.targetLocationInputContainer}>
                        <Input
                          disableUnderline
                          className={classes.InputItem}
                          value={zipVal}
                          onChange={(e) => setZipVal(e.target.value)}
                          placeholder="Zip Code"
                        />
                      </Box>
                    </Box>
                  )}

                  <Box marginTop="2rem">
                    <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                      Enter a keyword that your customers would be interested in:
                    </InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Input
                        disableUnderline
                        className={classes.InputItem}
                        placeholder="example: Mascara"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                      />
                    </Box>
                  </Box>
                  {/* Switch button to activate advanced targeting */}
                  {/* <Box marginTop="2rem">
                    <InputMainLabel className={classes.textStyle} style={{ fontWeight: 'bold' }}>
                      Refine your targeting selections by clicking the search button below:
                    </InputMainLabel>
                    <Box className={classes.targetLocationInputContainer}>
                      <Button variant="contained" color="primary" onClick={nextClick}>
                        Search
                      </Button>
                    </Box>
                  </Box> */}
                </div>
              </div>
            </StepperWrapper>
            <Shoutbox>Find people interested in your business by selecting a location and target interest.</Shoutbox>
          </div>
        </Box>
      )}
      <BlueTecLandingFooter />
    </>
  );
};

export default TargetingPage;
