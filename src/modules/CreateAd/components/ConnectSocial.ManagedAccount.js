import React, { useState, useEffect, useReducer, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Alert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { object } from 'prop-types';
import { tokenConfig } from '../../../actions/authActions';
import { apiStates, LoadingSpinner } from './HelperComponents';
import { getUserAccountInformation } from './ConnectSocial.ManagedAccountServices';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const ManagedAccountStatusComponent = ({ facebookState, googleState, infoState }) => {
  if (infoState.isLoading) {
    return <Alert severity="info">{infoState.isLoadingMessage}</Alert>;
  }
  if (infoState.error) {
    return <Alert severity="error">{infoState.errorMessage}</Alert>;
  }
  if (infoState.success) {
    return <Alert severity="success">{infoState.successMessage}</Alert>;
  }
  if (googleState.isLoading) {
    return <Alert severity="info">{googleState.isLoadingMessage}</Alert>;
  }
  if (googleState.error) {
    return <Alert severity="error">{googleState.errorMessage}</Alert>;
  }
  if (googleState.success) {
    return <Alert severity="success">{googleState.successMessage}</Alert>;
  }
  if (facebookState.isLoading) {
    return <Alert severity="info">{facebookState.isLoadingMessage}</Alert>;
  }
  if (facebookState.error) {
    return <Alert severity="error">{facebookState.errorMessage}</Alert>;
  }
  if (facebookState.success) {
    return <Alert severity="success">{facebookState.successMessage}</Alert>;
  }
  return <div />;
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ManagedAccountComponent = ({ token, ...props }) => {
  const history = useHistory();
  const [modalStyle] = useState(getModalStyle);
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
      // display: 'flex',
      // alignItems: 'center',
      // ['@media (max-width:700px)']: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'column',
      // }
    },
  }));

  const classes = useStyles();

  const createGoogleBusinessAccount = async (googleFormData, config) => {
    const createAccount = await axios
      .post('http://localhost:8000/api/managed-ga-accounts/', googleFormData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // dispatchManagedAccountState({
    //     type: actionStates.IS_MANAGED_BUSINESSES_CREATED,
    // });
  };

  const createFacebookBusinessAccount = async (facebookFormData, config) => {
    const createAccount = await axios
      .post(
        'http://localhost:8000/api/create-managed-facebook-ads-account/',
        facebookFormData,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const isFacebookChecked = true;
    const isGoogleChecked = true;
    const googleFormData = new FormData();
    const facebookFormData = new FormData();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    };

    // if(isFacebookChecked || isGoogleChecked){

    //     const getUserProfileInfo = async () => {
    //         return await axios.get("http://localhost:8000/api/business-info/", config);
    //     }

    //     getUserProfileInfo().then(response => {
    //         if (response.status !== 200){
    //             console.log(response);
    //             return;
    //         } else {
    //             facebookFormData["business_name"] = response.data[0]["business_name"];
    //             googleFormData["business_name"] = response.data[0]["business_name"];
    //             // if(isFacebookChecked) createFacebookBusinessAccount(facebookFormData, config);
    //             // if(isGoogleChecked) createGoogleBusinessAccount(googleFormData, config);
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }
  }, []);

  return <div className={classes.container} />;
};

export { ManagedAccountComponent, ManagedAccountStatusComponent };
