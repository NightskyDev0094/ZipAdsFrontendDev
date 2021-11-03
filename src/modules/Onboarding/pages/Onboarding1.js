import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BasicInfoForm from '../components/BasicInfoForm';
import OnboardingPageWrapper from '../components/OnboardingPageWrapper';
import { addAddresses } from '../../../actions/userInfoActions';
import { addBusinessInfo } from '../../../actions/businessInfoActions';
import StepProgress from '../components/StepProgress';

const useStyles = makeStyles((theme) => ({
  submitButtonContainer: {
    padding: '0px 6%',
  },
  progressBarContainer: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '25px',
    position: 'sticky',
    top: 0,
  },
}));

const Onboarding1 = ({ addAddresses, addBusinessInfo }) => {
  const [personalName, setPersonalName] = React.useState('');
  const [businessName, setBusinessName] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const [businessUrl, setBusinessUrl] = React.useState('https://');
  const [streetAddress, setStreetAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [stateCode, setStateCode] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [apartment, setApartment] = React.useState('');

  const classes = useStyles();
  const nextClick = () => {
    const businessInfoFormData = new FormData();
    if (businessName) {
      businessInfoFormData.append('business_name', businessName);
    }
    if (industry) {
      businessInfoFormData.append('industry', industry);
    }
    if (businessUrl) {
      businessInfoFormData.append('business_url', businessUrl);
    }
    if (apartment) {
      businessInfoFormData.append('apartment', apartment);
    }
    if (streetAddress) {
      businessInfoFormData.append('street', streetAddress);
    }
    if (city) {
      businessInfoFormData.append('city', city);
    }
    if (stateCode) {
      businessInfoFormData.append('state', stateCode);
    }
    if (zipCode) {
      businessInfoFormData.append('zip', zipCode);
    }

    addBusinessInfo(businessInfoFormData);
  };
  return (
    <OnboardingPageWrapper
      // header="Basic Info"
      // content="basic info information para"
      handleNextClick={nextClick}
      classes={classes}
    >
      <div className={classes.progressBarContainer}>
        <StepProgress formStep={0} />
      </div>
      <BasicInfoForm
        personalName={personalName}
        businessName={businessName}
        industry={industry}
        businessUrl={businessUrl}
        apartment={apartment}
        streetAddress={streetAddress}
        city={city}
        stateCode={stateCode}
        zipCode={zipCode}
        setPersonalName={setPersonalName}
        setBusinessName={setBusinessName}
        setIndustry={setIndustry}
        setBusinessUrl={setBusinessUrl}
        setStreetAddress={setStreetAddress}
        setCity={setCity}
        setStateCode={setStateCode}
        setZipCode={setZipCode}
        setApartment={setApartment}
        displaySelectIndustrySection={false}
      />
    </OnboardingPageWrapper>
  );
};

export default connect(null, {
  addAddresses,
  addBusinessInfo,
})(Onboarding1);
