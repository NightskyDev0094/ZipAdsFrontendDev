import React from 'react';
import { useHistory } from 'react-router';
import { Menu, MenuItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    marginRight: '15px',
  },
}));

const Avatar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    history.push('/profile');
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <PersonIcon color="secondary" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={goToProfile}>Profile</MenuItem>
      </Menu>
    </div>
  );
};

export default Avatar;
