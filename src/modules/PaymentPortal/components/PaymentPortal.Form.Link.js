import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'end',
    height: '50px',
    position: 'relative',
    paddingTop: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const MakePaymentModalLink = styles => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <h5
        onClick={() => {
          history.push('/payments');
        }}
        className={classes.link}
      >
        For more options click here
      </h5>
    </div>
  );
};

MakePaymentModalLink.propTypes = {
  styles: PropTypes.object,
};

MakePaymentModalLink.defaultProps = {
  styles: {},
};

export default MakePaymentModalLink;
