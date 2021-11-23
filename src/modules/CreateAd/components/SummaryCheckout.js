import React, { lazy, Suspense } from 'react';
import { CircularProgress, Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../styles/CheckoutStyles.css';

import { InputMainLabel } from '../../../sharedComponents/components';

const SummaryCheckout = ({ currentCampaign, getClientId, ...props }) => {
  const history = useHistory();
  return (
    <div style={{ marginTop: '50px' }}>
      <Box marginTop={3} display="flex">
        <InputMainLabel>Ready to Run Ads?</InputMainLabel>
      </Box>
      <Box marginTop={4} width="100%" display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={() => history.push('/create/budget')}>
          Back
        </Button>
      </Box>
    </div>
  );
};

export default SummaryCheckout;
