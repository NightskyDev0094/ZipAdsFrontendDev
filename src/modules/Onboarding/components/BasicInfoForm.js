import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Dropdown } from 'semantic-ui-react';
import { Box, Typography, Select, MenuItem } from '@material-ui/core';
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
    '@media (max-width:750px)': {
      margin: 0,
    },
  },
  inputContainer: {
    width: '100%',
    padding: '0 15px',
  },
  label: {
    marginLeft: '20px',
    opacity: 0.5,
    marginTop: '15px',
  },
}));

const BasicInfoForm = ({
  handleUpdateInfo,
  handleErrors,
  businessName,
  industry,
  businessUrl,
  streetAddress,
  city,
  stateCode,
  zipCode,
  setBusinessName,
  setIndustry,
  setBusinessUrl,
  setStreetAddress,
  setCity,
  setStateCode,
  setZipCode,
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
            <Input
              className={classes.input}
              placeholder="Industry"
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
            <Select
              placeholder="Industry"
              name="industry"
              value={industry}
              className={classes.input}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {/* <MenuItem value="Blank">Blank</MenuItem>
              <MenuItem value="Apply Now">Apply Now</MenuItem>
              <MenuItem value="Book Now">Book Now</MenuItem>
              <MenuItem value="Contact Us">Contact Us</MenuItem>
              <MenuItem value="Donate Now">Donate Now</MenuItem>
              <MenuItem value="Download">Download</MenuItem>
              <MenuItem value="Get Offer">Get Offer</MenuItem>
              <MenuItem value="Get Quote">Get Quote</MenuItem>
              <MenuItem value="Get Showtimes">Get Showtimes</MenuItem>
              <MenuItem value="Learn More">Learn More</MenuItem>
              <MenuItem value="Listen Now">Listen Now</MenuItem>
              <MenuItem value="Play Game">Play Game</MenuItem>
              <MenuItem value="Request Time">Request Time</MenuItem>
              <MenuItem value="See Menu">See Menu</MenuItem>
              <MenuItem value="Shop Now">Shop Now</MenuItem>
              <MenuItem value="Sign Up">Sign U</MenuItem>
              <MenuItem value="Subscribe">Subscribe</MenuItem>
              <MenuItem value="Watch More">Watch More</MenuItem> */}
              <MenuItem value="industry1">industry1</MenuItem>
              <MenuItem value="industry2">industry2</MenuItem>
              <MenuItem value="industry3">industry3</MenuItem>
              <MenuItem value="industry4">industry4</MenuItem>
              <MenuItem value="industry5">industry5</MenuItem>
              <MenuItem value="industry6">industry6</MenuItem>
              <MenuItem value="industry7">industry7</MenuItem>
              <MenuItem value="industry8">industry8</MenuItem>
              <MenuItem value="industry9">industry9</MenuItem>
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
