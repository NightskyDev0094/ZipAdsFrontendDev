import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: '10px',
  },
});

const InputSmallLabel = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        ref={ref}
        className={props.className}
        color="textSecondary"
        variant="caption"
        {...props}
      >
        {props.children}
      </Typography>
    </Box>
  );
});

export default InputSmallLabel;
