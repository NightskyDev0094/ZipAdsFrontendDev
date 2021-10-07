import React from 'react';
import { Box, Typography } from '@material-ui/core';

const OnboardingText = ({ header, content }) => (
  <Box display="flex" marginBottom={5} justifyContent="center">
    <Box display="flex" flexDirection="column" maxWidth="250px">
      <Typography variant="h4">{header}</Typography>
      <Typography>{content}</Typography>
    </Box>
  </Box>
);

export default OnboardingText;
