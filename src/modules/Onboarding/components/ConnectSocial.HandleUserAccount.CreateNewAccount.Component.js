import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import HandleUserAccountPopUp from './ConnectSocial.HandleUserAccount.PopUp.Component';

/****************************************************************
 * This is CreateNewAccountComponent 
   @param {{}} classes:
   @param {{}} inputProps: input Props for TextField
   @param {string} defaultValue: "placeholder" value for TextField
   @param {function} createAccount: action creator for    
 * @returns <Component />
 */

const CreateNewAccountComponent = ({
  classes,
  inputProps,
  defaultValue,
  setComponentState,
  createAccount,
  componentState,
}) => {
  const [newAccountName, setNewAccountName] = useState('');
  return (
    <div className={classes.createBusinessNameContainer}>
      {/* <h4 className={classes.selectAccountTitle}>_________OR_________</h4> */}
      <h4
        style={{ textDecoration: 'underline' }}
        className={classes.selectAccountTitle}
      >
        Create a New Account
      </h4>
      {/* <p className={classes.selectAccountSubTitle}>
          You will be creating a new Facebook business account, which will be linked to the ads
          you are deploying. If your creating a facebook, google, or instagram ad, this name
          will be linked to those ads and can be previewed on your dashbaord
        </p> */}
      <HandleUserAccountPopUp
        text={`You will be creating a new Facebook business account, which will be linked to the ads
          you are deploying. If your creating a Facebook, Google, or Instagram ad, this name
          will be linked to those ads and can be previewed on your dashboard.`}
      />
      <div className={classes.createBusinessNameContent}>
        <TextField
          variant="outlined"
          name="facebook"
          value={newAccountName} //temp
          defaultValue={defaultValue}
          InputProps={inputProps}
          onChange={(e) => setNewAccountName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setComponentState({
              ...componentState,
              loading: true,
              error: false,
              success: false,
            });
            createAccount(newAccountName);
          }}
          className={classes.createAccountButton}
        >
          Create account
        </Button>
      </div>
    </div>
  );
};

CreateNewAccountComponent.propTypes = {
  classes: PropTypes.object,
  inputProps: PropTypes.object,
  defaultValue: PropTypes.string,
  setComponentState: PropTypes.func,
  createAccount: PropTypes.func,
  componentState: PropTypes.func,
};

CreateNewAccountComponent.defaultProps = {
  classes: {},
  inputProps: {},
  defaultValue: '',
  setComponentState: () => {},
  createAccount: () => {},
  componentState: {},
};

export default CreateNewAccountComponent;
