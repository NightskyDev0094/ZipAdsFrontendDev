import React from 'react';
import {Paper, Typography, makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PropTypes from 'prop-types';

/****************************************************************
 * This component shows when a user successfully creates a
 * Facebook, Google, or Instagram account
 * @param {string} message: your success message
 * @param {string} subText: your success secondary message
 * @returns <Component />
 */

 const successCardStyles = makeStyles(() => ({
    successCard: {
      width: '600px',
      height: '600px',
      maxWidth: '600px',
      maxHeight: '600px',
      padding: '25px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid rgba(232, 232, 232, 1.3)',
    },
    message: {},
    subText: {},
    successCardIcon: {
      width: '300px',
      height: '300px',
    },
  }));

export const SuccessCard = ({ message, styles, subText }) => {
    const classes = successCardStyles();
    return (
      <Paper elevation={3} className={classes.successCard} styles={{ ...styles.successCard }}>
        <Typography
          styles={{ ...styles?.message }}
          className={classes.message}
          component="h4"
          variant="h4"
        >
          {message}
        </Typography>
        <Typography
          styles={{ ...styles?.subText }}
          className={classes.subText}
          component="h5"
          variant="h5"
        >
          {subText}
        </Typography>
        <CheckCircleOutlineIcon
          className={classes.successCardIcon}
          color="primary"
          fontSize="large"
        />
      </Paper>
    );
  };
  
  SuccessCard.defaultProps = {
    message: 'Your Success Messsage Here',
    styles: {},
    classes: {},
  };
  
  SuccessCard.propTypes = {
    message: PropTypes.string,
    styles: PropTypes.object,
    classes: PropTypes.object,
  };

  export default SuccessCard;