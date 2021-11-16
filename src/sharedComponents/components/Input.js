import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
});

const FormContent1 = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const inputProps = props.hasOwnProperty('inputProps') ? props?.inputProps : {};
  return <TextField error={props.error} InputProps={inputProps} ref={ref} variant="outlined" fullWidth={!props.small} {...props} />;
});

export default FormContent1;
