import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core/';

import FacebookIcon from './FacebookIcon';

const useStyles = makeStyles({
  root: {
    width: '220px',
    display: 'flex',
    alignItems: 'center',
  },
  rightCol: {
    flexGrow: 1,
  },
  text: {
    fontWeight: 800,
    letterSpacing: '.1rem',
  },
});

const FacebookButton = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Button ref={ref} {...props} className={classes.root} color="primary" variant="contained">
      <Box width="3rem" display="flex">
        <FacebookIcon isIconButton />
      </Box>
      <Box className={classes.rightCol}>
        <Typography className={classes.text}>Connect</Typography>
      </Box>
    </Button>
  );
});

export default FacebookButton;
