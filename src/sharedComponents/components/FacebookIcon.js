import React from 'react';
import { Facebook as FBIcon } from '@material-ui/icons/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: '24pt',
    color: '#4267B2',
  },
  buttonIcon: {
    fontSize: '24pt',
    color: '#fff',
  },
});

const FacebookIcon = ({ isIconButton }) => {
  const classes = useStyles();
  return <FBIcon className={isIconButton ? classes.buttonIcon : classes.icon} />;
};

export default FacebookIcon;
