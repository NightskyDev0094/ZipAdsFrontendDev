import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
}));
const RoundedButton = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return <Button className={classes.root} refs={ref} {...props} variant="contained" />;
});

export default RoundedButton;