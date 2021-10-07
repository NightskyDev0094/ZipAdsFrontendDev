import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default {
  title: 'Elements/Typography',
  component: Headers,
};
export const H1 = () => (
  <Box width="350px">
    <Typography variant="h1">Main header</Typography>
  </Box>
);
