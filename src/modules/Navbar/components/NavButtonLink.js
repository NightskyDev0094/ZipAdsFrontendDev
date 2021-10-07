import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../../../actions/authActions';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
}));

const NavButtonLink = ({ text, link, logout }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleNav = () => {
    if (text === 'Logout') {
      logout();
    }
    history.push(link);
  };

  return (
    <Box className={classes.root} onClick={handleNav}>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default connect(null, { logout })(NavButtonLink);
