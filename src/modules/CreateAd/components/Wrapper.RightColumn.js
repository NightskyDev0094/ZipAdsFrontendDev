import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import FormContent1 from "./FormContent1";
// import FormContent2Container from "../containers/FormContent2Container";
// import FormContent3 from "./FormContent3";
// import FormContent4 from "./FormContent4";

const useStyles = makeStyles({
  root: {
    width: '400px',
    padding: '2rem',
    // background: "#e2e2e2",
  },
});

const FormWrapper = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.root}>
      {props.children}
    </Paper>
  );
};

export default FormWrapper;
