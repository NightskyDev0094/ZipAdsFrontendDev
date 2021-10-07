import React, { useState } from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { classnames } from 'classnames';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';

const STORE =
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80';

const useStyles = makeStyles((theme) => ({
  img: {
    display: 'flex',
    height: '50px',
    width: '70px',
    backgroundImage: (props) => `url(${props.file})`,
    backgroundSize: 'cover',
    backgroundColor: 'red',
    borderRadius: '10px',
    marginRight: '1rem',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
  imgBorder: {
    border: `3px solid ${theme.palette.secondary.main}`,
    filter: 'brightness(120%)',
  },
}));

const FormContent1 = (props) => {
  // const clicked = true;
  const classes = useStyles(props);

  return (
    <Box
      className={props.clicked ? `${classes.imgBorder} ${classes.img}` : `${classes.img}`}
      {...props}
    />
  );
};

export default FormContent1;
