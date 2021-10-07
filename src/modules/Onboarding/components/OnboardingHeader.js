import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

const OnboardingHeader = () => (
  <Box display="flex" justifyContent="space-between" marginTop={3}>
    <Typography variant="h3">AutoAd</Typography>
    <Typography variant="h5">Skip</Typography>
  </Box>
);

export default OnboardingHeader;
