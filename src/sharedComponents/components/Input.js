import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';

const FormContent1 = React.forwardRef((props, ref) => {
  return (
    <TextField
      error={props.error}
      InputProps={props.inputProps ?? {}}
      ref={ref}
      variant="outlined"
      multiline={props.multiline ?? false}
      fullWidth={!props.small}
      {...props}
    />
  );
});

export default FormContent1;
