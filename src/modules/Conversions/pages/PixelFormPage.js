import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import PixelForm from '../components/PixelForm';

const useStyles = makeStyles(() => ({
  paper: {
    width: '60%',
    margin: '100px auto',
    height: '88vh',
    paddingTop: '50px',
  },
}));

export const PixelFormPage = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      <PixelForm {...props} />
    </Paper>
  );
};

export default PixelFormPage;
