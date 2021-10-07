import React from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { InputMainLabel } from '../../../sharedComponents/components';

const useStyles = makeStyles({
  root: {
    width: '400px',
    padding: '2rem',
    // background: "#e2e2e2",
  },
});

const FormContent3 = (props) => {
  const classes = useStyles();
  return (
    <div>
      <InputMainLabel>Audience</InputMainLabel>
      <Typography>
        Our AI will help determine who to show based on your industry, business size, locality and
        several other factors.
      </Typography>
      <Typography>You can adjust these under advanced settings.</Typography>
      <Box marginTop={2} display="flex" justifyContent="center">
        <Button color="primary">Advanced Settings</Button>
      </Box>
    </div>
  );
};

export default FormContent3;
