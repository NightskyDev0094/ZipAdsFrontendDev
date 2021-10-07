import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { CircularProgress } from '@material-ui/core';

import 'semantic-ui-css/semantic.min.css';
import { store, persistor } from '../store';
import { theme } from '../muiTheme';
import AuthenticatedRoutes from './Authenticated';
import NonAuthenticatedRoutes from './NonAuthenticated';

const stripePromise = loadStripe(
  'pk_test_51Ha6lKBytuXQBECgLBUclwvE1dtaEt2coUeUybxjmjdVo6VJ7BL6AAMV13U0OSGN5xWEYxGQQqytoihDiC1egvGq00I5NRoZNd'
);

// This is required for Persistence in the redux store
// When redux is rehydrating store, this will be displayed
const LoadingView = () => (
  <div>
    <CircularProgress style={{ marginTop: '300px' }} size={120} />
  </div>
);
const Routes = ({ isAuthenticated }) => (
  <Elements stripe={stripePromise}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <AuthenticatedRoutes />
          <NonAuthenticatedRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </Elements>
);

export default Routes;
