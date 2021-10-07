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

const FormContent4 = (props) => {
  const classes = useStyles();
  return <div>GOOGLE AD</div>;
};

export default FormContent4;
