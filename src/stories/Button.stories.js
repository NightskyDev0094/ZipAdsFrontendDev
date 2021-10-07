import React from 'react';
import { Button } from '@material-ui/core';

export default {
  title: 'elements/Button',
  component: Button,
};
export const contained = () => (
  <Button variant="contained" color="primary">
    Get Started
  </Button>
);
