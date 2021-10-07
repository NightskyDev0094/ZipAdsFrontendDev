import React, { useMemo, useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';

const errorParsing = (errorMessage) =>
  errorMessage.length > 100 ? errorMessage.substring(0, 50) : errorMessage;

const determinedErrorTypes = () => {
  alert('You have not set error types for checkout form');
};

const LoadingSpinner = () => (
  <div>
    <CircularProgress style={{ marginTop: '300px' }} size={120} />
  </div>
);

const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  UNSET: 'UNSET',
};

const StatusComponent = ({ state, errorData }) => {
  if (state === apiStates.SUCCESS) {
    return (
      <div>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have been registered! Welcome to <strong>EzAD!</strong>
        </Alert>
        <LoadingSpinner />
      </div>
    );
  }
  if (state === apiStates.ERROR) {
    const errorAlerts = determinedErrorTypes(errorData);
    return (
      <div>
        <Alert severity="error">
          <AlertTitle>The following error has occured:</AlertTitle>
          {errorAlerts.map((alert) => (
            <Alert severity="error">{alert}</Alert>
          ))}
        </Alert>
      </div>
    );
  }
  if (state === apiStates.LOADING) {
    return <LoadingSpinner />;
  }
  return <div />;
};

const useResponsiveFontSize = () => {
  const getFontSize = () => (window.innerWidth < 450 ? '16px' : '18px');
  const [fontSize, setFontSize] = useState(getFontSize);
  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });
  return fontSize;
};

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [fontSize]
  );

  return options;
};

export {
  StatusComponent,
  apiStates,
  errorParsing,
  LoadingSpinner,
  useResponsiveFontSize,
  useOptions,
};
