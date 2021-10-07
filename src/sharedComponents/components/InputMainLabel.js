import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 800,
    marginBottom: '.5rem',
    textAlign: 'center !important',
    '@media (max-width:500px)': {
      textAlign: 'center !important',
    },
  },
});

const FormContent1 = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Typography ref={ref} className={classes.root} {...props}>
      {props.children}
    </Typography>
  );
});

export default FormContent1;
