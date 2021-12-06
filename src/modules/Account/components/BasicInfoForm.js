import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Dropdown } from 'semantic-ui-react';
import { MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  paper: {
    width: '88vw',
    margin: '0 auto 200px auto',
  },
  form: {
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    maxWidth: '600px',
    margin: '0 auto',
    justifyContent: 'space-evenly',
  },
  formWrapper: {
    paddingTop: '40px',
    height: '800px',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
    whiteSpace: 'pre-wrap',
  },
  input: {
    margin: '0px 15px',
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    padding: '0 10% 0 0',
  },
  label: {
    marginLeft: '20px',
    opacity: 0.5,
    marginTop: '15px',
  },
  select: {
    padding: '2px 1rem',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '0.28rem',
    margin: '0px 15px',
    width: '100%',
  },
}));

const BasicInfoForm = ({
  handleUpdateInfo,
  handleErrors,
  businessName,
  businessUrl,
  streetAddress,
  city,
  stateCode,
  zipCode,
  setBusinessName,
  setBusinessUrl,
  setStreetAddress,
  setCity,
  setStateCode,
  setZipCode,
  setIndustry,
  industry,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Paper className={classes.formWrapper} elevation={2}>
        <h4 className={classes.title}>Enter Some Basic Info about Your Business</h4>
        <div className={classes.form}>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="Business Name"
              name="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <span className={classes.label}>The name of your business</span>
          </div>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="Website URL"
              name="businessUrl"
              value={businessUrl}
              onChange={(e) => setBusinessUrl(e.target.value)}
            />
            <span className={classes.label}>Your website url</span>
          </div>
          <div className={classes.inputContainer}>
            <Select
              className={classes.select}
              placeholder="Industry"
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <MenuItem value="BEAUTY">BEAUTY</MenuItem>
              <MenuItem value="CONSUMER PRODUCTS AND SERVICES">
                CONSUMER PRODUCTS AND SERVICES
              </MenuItem>
              <MenuItem value="FINANCE">FINANCE</MenuItem>
              <MenuItem value="FITNESS">FITNESS</MenuItem>
              <MenuItem value="HEALTH">HEALTH</MenuItem>
              <MenuItem value="PERSONAL">PERSONAL</MenuItem>
              <MenuItem value="PET">PET</MenuItem>
              <MenuItem value="REAL ESTATE">REAL ESTATE</MenuItem>
              <MenuItem value="RESTAURANT">RESTAURANT</MenuItem>
              <MenuItem value="TRAVEL AND LODGING">TRAVEL AND LODGING</MenuItem>
            </Select>
            <span className={classes.label}>Your business industry</span>
          </div>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="Street Address"
              name="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <span className={classes.label}>Your businesses street address</span>
          </div>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="City"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className={classes.label}>City where your business resides</span>
          </div>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="State"
              name="stateCode"
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
            />
            <span className={classes.label}>State where your business resides</span>
          </div>
          <div className={classes.inputContainer}>
            <Input
              className={classes.input}
              placeholder="Zip Code"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <span className={classes.label}>Zip Code where your business resides</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default BasicInfoForm;
