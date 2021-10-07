import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import NavButtonLink from './NavButtonLink';

import BlueTecAppBar from '../../../BlueTecUIKit/BlueTecAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const LoggedOutNav = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;

  return <BlueTecAppBar />;
};

export default LoggedOutNav;
