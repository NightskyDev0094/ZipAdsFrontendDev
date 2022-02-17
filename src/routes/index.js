import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import 'semantic-ui-css/semantic.min.css';
import { store, persistor } from '../store';
import { theme } from '../muiTheme';
import AuthenticatedRoutes from './Authenticated';
import NonAuthenticatedRoutes from './NonAuthenticated';


// This is required for Persistence in the redux store
// When redux is rehydrating store, this will be displayed
const LoadingView = () => (
  <div>
    <CircularProgress style={{ marginTop: '300px' }} size={120} />
  </div>
);
const Routes = ({ isAuthenticated }) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <AuthenticatedRoutes />
          <NonAuthenticatedRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
);

export default Routes;
