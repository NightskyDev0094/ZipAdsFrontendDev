import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Silka',
    position: 'absolute',
    top: '6px',
    left: '10px',
    ['@media (max-width:500px)']: {
      width: '100%',
      top:'-6px',
      left: '40px',
    },
  },
}));

const AdIndex = ({ currentIndex }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography fontFamily="Silka" variant="h4">
        {currentIndex}/6
      </Typography>
    </div>
  );
};

AdIndex.propTypes = {
  currentIndex: PropTypes.number,
};

AdIndex.defaultProps = {
  currentIndex: 1,
};

export default AdIndex;