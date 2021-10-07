import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default {
  title: 'elements/Typography',
  component: Headers,
};
export const H1 = () => (
  <Box width="350px">
    <Typography variant="h1">Main header</Typography>
    <Typography variant="h2">Secondary Header</Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.{' '}
    </Typography>
  </Box>
);
