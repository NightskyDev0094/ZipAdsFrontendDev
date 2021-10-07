import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';
import ConversionForm from '../components/ConversionForm';

const useStyles = makeStyles(() => ({
  paper: {
    width: '70%',
    margin: '100px auto',
    height: 'fit-content',
    paddingTop: '50px',
    '@media (max-width:950px)': {
      width: '100%',
      boxShadow: 'none'
    },
  }
}))

export const ConversionFormPage = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      <ConversionForm {...props} />
    </Paper>
  );
};

export default ConversionFormPage;
