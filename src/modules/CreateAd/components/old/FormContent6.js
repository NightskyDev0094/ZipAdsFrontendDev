import React from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { InputMainLabel, InputSmallLabel, Input } from '../../../sharedComponents/components';

const useStyles = makeStyles({});

const FormContent6 = (props) => {
  const classes = useStyles();
  return (
    <div>
      <InputMainLabel>Campaign</InputMainLabel>
      <Typography>
        Campaign Options include your objective, budget, and promotion timeframe.
      </Typography>
      <Typography>You can adjust these under advanced settings.</Typography>
      <Box marginTop={2}>
        <InputMainLabel>Budget</InputMainLabel>
        <Input
          placeholder="10.00"
          className={classes.input}
          name="budget"
          // onChange={handleFormChange}
        />
      </Box>
      <InputSmallLabel>
        What is the amount you want to spend promoting this campaign
      </InputSmallLabel>
      <Box marginTop={2} display="flex" justifyContent="center">
        <Button color="primary">Advanced Settings</Button>
      </Box>
    </div>
  );
};

export default FormContent6;
