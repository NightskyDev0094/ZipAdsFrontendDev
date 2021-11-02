import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BasicInfoForm from '../components/BasicInfoForm';
import AccountWrapper from '../components/AccountPageWrapper';
import { addAddresses } from '../../../actions/userInfoActions';
import { addBusinessInfo } from '../../../actions/businessInfoActions';

const useStyles = makeStyles((theme) => ({
  submitButtonContainer: {
    padding: '0px 6%',
  },
}));

const EditAccountInfo = ({ addAddresses, addBusinessInfo }) => {
  const [personalName, setPersonalName] = React.useState('');
  const [businessName, setBusinessName] = React.useState('');
  const [businessUrl, setBusinessUrl] = React.useState('https://');
  const [industry, setIndustry] = React.useState('');
  const [streetAddress, setStreetAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [stateCode, setStateCode] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [apartment, setApartment] = React.useState('');

  const classes = useStyles();
  const saveClick = () => {
    const businessInfoFormData = new FormData();
    if (businessName) {
      businessInfoFormData.append('business_name', businessName);
    }
    if (businessUrl) {
      businessInfoFormData.append('business_url', businessUrl);
    }
    if (apartment) {
      businessInfoFormData.append('apartment', apartment);
    }
    if (industry) {
      businessInfoFormData.append('industry', industry);
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

    console.log("BUSINESS INFO FORM: ", businessInfoFormData.entries())
    addBusinessInfo(businessInfoFormData);
  };
  return (
    <AccountWrapper
      // header="Basic Info"
      // content="basic info information para"
      handleSaveClick={saveClick}
      classes={classes}
    >
      <BasicInfoForm
        personalName={personalName}
        businessName={businessName}
        businessUrl={businessUrl}
        apartment={apartment}
        streetAddress={streetAddress}
        city={city}
        stateCode={stateCode}
        zipCode={zipCode}
        setPersonalName={setPersonalName}
        setBusinessName={setBusinessName}
        setBusinessUrl={setBusinessUrl}
        setStreetAddress={setStreetAddress}
        setCity={setCity}
        setStateCode={setStateCode}
        setZipCode={setZipCode}
        setApartment={setApartment}
        setIndustry={setIndustry}
        industry={industry}
      />
    </AccountWrapper>
  );
};

export default connect(null, {
  addAddresses,
  addBusinessInfo,
})(EditAccountInfo);
