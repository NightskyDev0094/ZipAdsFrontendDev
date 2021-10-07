import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default {
  title: 'Elements/Typography',
  component: Headers,
};
export const Para = () => (
  <Box width="350px">
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.{' '}
    </Typography>
  </Box>
);
