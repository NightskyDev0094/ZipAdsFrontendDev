import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import StepProgress from '../components/StepProgress';
import ExpandedFacebookTargetingComponent from '../components/ExpandedTargeting.Display.Facebook';
import ExpandedGoogleTargetingComponent from '../components/ExpandedTargeting.Display.Google';
import { ExpandedTargetingPageMenu } from '../components/ExpandedTargeting.SharedComponents.PageMenu';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import ReSubmitFormModal from '../components/ReSubmit.Form.Modal';
import { completeStep } from '../../../actions/step.actions';
import { connectGoogleOAuth } from '../../../actions/authActions';
import { STATIC_URL } from '../../../environmentVariables';

const backgroundImage = STATIC_URL + 'images/background/5.png';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
  container: {
    width: 1500,
    margin: '50px auto',
    height: '100%',
    position: 'relative',
    '@media (max-width:1600px)': {
      width: '80%',
    },
  },
  checkBox: {
    // fontSize: '20px'
  },
  nextButton: {
    position: 'absolute',
    right: '20px',
    top: '8px',
    width: '125px',
    fontSize: '20px',
    lineHeight: '10px',
    fontWeight: 800,
    '@media (max-width:1050px)': {
      position: 'static',
    },
  },
  backButton: {
    position: 'absolute',
    right: '180px',
    top: '8px',
    width: '125px',
    fontSize: '20px',
    lineHeight: '10px',
    fontWeight: 800,
    '@media (max-width:1050px)': {
      position: 'static',
    },
  },
  buttonContainer: {
    '@media (max-width:1050px)': {
      display: 'flex',
      justifyContent: 'space-evenly',
      position: 'static',
      width: '100%',
      margin: '20px 0px',
    },
  },
  progressBarTypography: {
    textAlign: 'end',
    fontSize: '24px',
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
    position: 'sticky',
    top: 0,
  },
  tableContainerButtons: {
    '@media (max-width:1050px)': {
      display: 'flex',
      height: 'fit-content',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  tableToolBar: {
    '@media (max-width:1050px)': {
      height: '90px !important',
      marginTop: '0px !important',
      display: 'flex',
    },
  },
  pageTitle: {
    textAlign: 'center',
  },
  pageSubTitle: {
    textAlign: 'center',
  },
}));

const ExpandedTargetingPage = ({
  hasExpandedTargetingStepBeenCompleted,
  completeStep,
  currentCampaign,
  // Google Store state and actions
  googleGeoTargeting,
  googleKeywords,
  googleLocationId,
  googleKeywordListId,
  updateGoogleKeywordsRequest,
  updateGoogleLocationsRequest,
  // Facebook Store state and actions
  facebookInterestGroups,
  facebookGeoTargeting,
  fbInterestsListId,
  fbGeoLocationId,
  updateFBInterestsRequest,
  updateFBLocationRequest,
  error,
  displayAllComponents,
  displayGoogleComponent,
  googleTableState,
  setGoogleTableState,
  setSelectedGoogleRows,
  selectedGoogleRows,
  displayFacebookComponent,
  fbTableState,
  setFBTableState,
  setSelectedFacebookRows,
  selectedFacebookRows
}) => {
  const classes = useStyles();
  // const history = useHistory();
  // const [isTargetSubmitted, setIsTargetSubmitted] = useState(false);
  // // const [fbInterestStr, setFbInterestStr] = useState('');
  // // const [fbGeotargetStr, setFbGeotargetStr] = useState('');
  // const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  // const [error, setError] = useState({
  //   message: 'An Error has occured',
  //   isError: false,
  // });
  // const [displayState, setDisplayState] = useState({
  //   displayGoogleComponent: false,
  //   displayFacebookComponent: false,
  //   displayAllComponents: true,
  // });

  // const [fbTableState, setFBTableState] = useState({
  //   geoTargetingArray: [],
  //   interestGroupArray: [],
  // });

  // const [googleTableState, setGoogleTableState] = useState({
  //   geoTargetingArray: [],
  //   keywordArray: [],
  // });

  // const [selectedFacebookRows, setSelectedFacebookRows] = useState({
  //   selectedInterestGroupRows: [],
  //   selectedGeoTargeting: [],
  // });

  // const [selectedGoogleRows, setSelectedGoogleRows] = useState({
  //   selectedKeywordGroupRows: [],
  //   selectedGeoTargeting: [],
  // });

  // const handleToggle = (event) => {
  //   setDisplayState({
  //     ...displayState,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  // const submitInformationForReSubmitModal = async () => {
  //   const fbGeoTargetingArray = selectedFacebookRows?.selectedGeoTargeting;
  //   const fbInterestGroupArray = selectedFacebookRows?.selectedInterestGroupRows;
  //   const googleGeoTargetingArray = selectedGoogleRows?.selectedGeoTargeting;
  //   const googleKeywordTargetingArray = selectedGoogleRows?.selectedKeywordGroupRows;
  //   try {
  //     if (selectedFacebookRows?.selectedGeoTargeting.length) {
  //       let selectedGeoArray = selectedFacebookRows?.selectedGeoTargeting;
  //       let geotargetArray = [];
  //       for (let i = 0; i < selectedGeoArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         geotargetArray.push(toPush);
  //       }
  //       await updateFBLocationRequest(geotargetArray, fbGeoLocationId);
  //     }
  //     if (selectedFacebookRows?.selectedInterestGroupRows.length) {
  //       let selectedInterestArray = selectedFacebookRows?.selectedGeoTargeting;
  //       let interestArray = [];
  //       for (let i = 0; i < selectedInterestArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         interestArray.push(toPush);
  //       }
  //       await updateFBInterestsRequest(interestArray, fbInterestsListId);
  //     }
  //     if (selectedGoogleRows?.selectedGeoTargeting.length) {
  //       let selectedGeoArray = selectedGoogleRows?.selectedGeoTargeting;
  //       let geoArray = [];
  //       for (let i = 0; i < selectedGeoArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         geoArray.push(toPush);
  //       }
  //       await updateGoogleLocationsRequest(geoArray, googleKeywordListId);
  //     }
  //     if (selectedGoogleRows?.selectedKeywordGroupRows.length) {
  //       let selectedKeywordArray = selectedGoogleRows?.selectedKeywordGroupRows;
  //       let keywordArray = [];
  //       for (let i = 0; i < selectedKeywordArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         keywordArray.push(toPush);
  //       }
  //       await updateGoogleKeywordsRequest(keywordArray, googleLocationId);
  //     }
  //     setIsTargetSubmitted(true);
  //     completeStep(4);
  //     if (
  //       !fbGeoTargetingArray.length && // user does not select any items to save
  //       !fbInterestGroupArray.length &&
  //       !googleKeywordTargetingArray.length &&
  //       !googleGeoTargetingArray.length
  //     ) {
  //       history.push('/create/budget');
  //     }
  //   } catch (e) {
  //     setError({ isError: true, message: e });
  //   }
  // };

  // const submitInformation = async () => {
  //   const fbGeoTargetingArray = selectedFacebookRows?.selectedGeoTargeting;
  //   const fbInterestGroupArray = selectedFacebookRows?.selectedInterestGroupRows;
  //   const googleGeoTargetingArray = selectedGoogleRows?.selectedGeoTargeting;
  //   const googleKeywordTargetingArray = selectedGoogleRows?.selectedKeywordGroupRows;
  //   // if (hasExpandedTargetingStepBeenCompleted === 'STEP_COMPLETED') {
  //   //   setIsResubmitModalOpen(true);
  //   // } else {
  //   try {
  //     if (selectedFacebookRows?.selectedGeoTargeting.length) {
  //       let selectedGeoArray = selectedFacebookRows?.selectedGeoTargeting;
  //       let geotargetArray = [];
  //       for (let i = 0; i < selectedGeoArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         geotargetArray.push(toPush);
  //       }
  //       await updateFBLocationRequest(geotargetArray[0], fbGeoLocationId);
  //     }
  //     if (selectedFacebookRows?.selectedInterestGroupRows.length) {
  //       let selectedInterestArray = selectedFacebookRows?.selectedGeoTargeting;
  //       let interestArray = [];
  //       for (let i = 0; i < selectedInterestArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);

  //         interestArray.push(toPush);
  //       }
  //       await updateFBInterestsRequest(interestArray[0], fbInterestsListId);
  //     }
  //     if (selectedGoogleRows?.selectedGeoTargeting.length) {
  //       let selectedGeoArray = selectedGoogleRows?.selectedGeoTargeting;
  //       let geoArray = [];
  //       for (let i = 0; i < selectedGeoArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));

  //         // console.log('topush::::', toPush);
  //         geoArray.push(toPush);
  //       }
  //       await updateGoogleLocationsRequest(geoArray[0], googleKeywordListId);
  //     }
  //     if (selectedGoogleRows?.selectedKeywordGroupRows.length) {
  //       let selectedKeywordArray = selectedGoogleRows?.selectedKeywordGroupRows;
  //       let keywordArray = [];
  //       for (let i = 0; i < selectedKeywordArray.length; i++) {
  //         // Search for index value in array of
  //         let toPush = facebookGeoTargeting.find(({ name }) => (name = fbGeoTargetingArray[i]));
  //         // console.log('topush::::', toPush);
  //         keywordArray.push(toPush);
  //       }
  //       await updateGoogleKeywordsRequest(keywordArray[0], googleLocationId);
  //     }
  //     setIsTargetSubmitted(true);
  //     completeStep(4);
  //     history.push('/create/budget');
  //   } catch (e) {
  //     setError({ isError: true, message: e });
  //   }
  //   // }
  // };

  // const { displayAllComponents, displayGoogleComponent, displayFacebookComponent } = displayState;

  return (
    <>
      <ErrorHandler>
        <div className={classes.page}>
          {error.isError && <ErrorFallBackPage error={error} />}
          {/* {hasExpandedTargetingStepBeenCompleted === 'STEP_COMPLETED' && (
            <ReSubmitFormModal
              isResubmitModalOpen={isResubmitModalOpen}
              setIsResubmitModalOpen={setIsResubmitModalOpen}
              handleSubmitAction={submitInformationForReSubmitModal}
              nextRoute={'/create/budget'}
              formData={{}}
            />
          )} */}
          {!error.isError && (
            <>
              <Box
                // marginTop="5rem"
                width="100%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                flexDirection="column"
              >
                <Typography className={classes.pageTitle} variant="h2">
                  Refine Your Targeting
                </Typography>
                <Typography className={classes.pageSubTitle}>
                  Remove any unwanted keywords and locations.
                </Typography>
              </Box>
              <Paper className={classes.container}>

                {(displayAllComponents || displayGoogleComponent) && (
                  <ExpandedGoogleTargetingComponent
                    googleGeoTargeting={googleGeoTargeting}
                    googleKeywords={googleKeywords}
                    tableState={googleTableState}
                    setTableState={setGoogleTableState}
                    setSelectedGoogleRows={setSelectedGoogleRows}
                    selectedGoogleRows={selectedGoogleRows}
                    currentCampaign={currentCampaign}
                  />
                )}
                {(displayAllComponents || displayFacebookComponent) && (
                  <ExpandedFacebookTargetingComponent
                    facebookGeoTargeting={facebookGeoTargeting}
                    facebookInterestGroups={facebookInterestGroups}
                    tableState={fbTableState}
                    setTableState={setFBTableState}
                    setSelectedFacebookRows={setSelectedFacebookRows}
                    selectedFacebookRows={selectedFacebookRows}
                  />
                )}
              </Paper>
            </>
          )}
        </div>
      </ErrorHandler>
    </>
  );
};

export default ExpandedTargetingPage;
