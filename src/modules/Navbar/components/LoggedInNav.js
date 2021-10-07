import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';
import NavButtonLink from './NavButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: '60px',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const LoggedOutNav = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" justifyContent="space-between">
      <Box>
        <NavButtonLink text="LOGO" />
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar />
        <NavButtonLink text="Logout" link="/login" />
      </Box>
    </Box>
  );
};

export default LoggedOutNav;
