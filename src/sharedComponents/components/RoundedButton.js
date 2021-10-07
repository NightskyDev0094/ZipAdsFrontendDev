import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '50px',
  },
});
const RoundedButton = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} refs={ref} {...props} variant="contained" color="primary" />
  );
});

export default RoundedButton;
