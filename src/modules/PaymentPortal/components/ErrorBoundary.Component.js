import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, makeStyles } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CLEAR_ERRORS } from '../../../actions/types';

const ERROR_IMAGE = `
  https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png
`;

const useStyles = makeStyles(() => ({
  container: {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    fontFamily: 'Silka',
    height: '700px',
  },
  title: {
    fontFamily: 'Silka',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowDownButton: {
    fontSize: '30px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imageContainer: {
    fontFamily: 'Silka',
  },
  viewDetailsContainer: {
    fontFamily: 'Silka',
    height: '100px',
    marginTop: '25px',
  },
  viewDetailsTitle: {
    fontFamily: 'Silka',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  viewDetails: {
    fontFamily: 'Silka',
  },
  errorContainer: {
    fontFamily: 'Silka',
    overflowY: 'scroll',
  },
  button: {
    fontFamily: 'Silka',
    fontSize: '20px',
  },
}));

/**
 * NOTE: Error Boundaries only work on run-time errors within the UI.
 * NOT COMPILE_TIME ERRORS
 * SEE: https://stackoverflow.com/questions/846103/runtime-vs-compile-time
 */

/**
 * @param {string} error
 * @param {function} resetErrorBoundary - function supplied by react-error-boundary to reset
 * @returns
 */
const ErrorFallBackPage = ({ error, resetErrorBoundary }) => {
  const classes = useStyles();
  const [viewError, setViewError] = useState(false);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Something went wrong, click refresh to refresh the page</h1>
      <div className={classes.imageContainer}>
        <img src={ERROR_IMAGE} alt="error image" />
      </div>
      <div className={classes.viewDetailsContainer}>
        <div className={classes.viewDetailsTitle}>
          <h3 className={classes.viewDetails}>View Details</h3>
          <ArrowDropDownIcon
            className={classes.arrowDownButton}
            onClick={() => setViewError(!viewError)}
          />
        </div>
        {viewError && (
          <div className={classes.errorContainer}>
            <pre className={classes.errorMessage}>{error.message}</pre>
          </div>
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={resetErrorBoundary}
      >
        Refresh
      </Button>
    </div>
  );
};

export const ErrorFallBackPageWrapper = connect(null, (dispatch) => ({
  resetErrorBoundary: async () => {
    await dispatch({ type: CLEAR_ERRORS });
    window.location.reload();
  }
}))(ErrorFallBackPage);

ErrorFallBackPageWrapper.propTypes = {
  error: PropTypes.string,
  resetErrorBoundary: PropTypes.func,
};

ErrorFallBackPageWrapper.defaultProps = {
  error: 'An Error has occured, please refresh page',
  resetErrorBoundary: () => {
    console.error('resetErrorBoundary not passed to ErrorFallback component');
  },
};


/**
 * @param {function} resetState - this is an action that resets
 * the neccessary state within the store
 * This component is connected to the store and will clear errors from it
 * @returns
 */
export const ErrorHandler = connect(null, (dispatch) => ({
  resetState: () => dispatch({ type: CLEAR_ERRORS }),
}))(({ resetState, ...props }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallBackPage}
    onReset={async () => {
      await resetState();
      window.location.reload();
    }}
  >
    {props.children}
  </ErrorBoundary>
));
