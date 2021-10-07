import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default {
  title: 'Elements/Colors',
  component: Headers,
};

export const Colors = () => (
  <Box width="350px">
    <Typography color="primary">Primary</Typography>
    <Typography color="secondary">Secondary</Typography>
  </Box>
);
