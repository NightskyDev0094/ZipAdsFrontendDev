import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EditAccountInfo from './pages/EditAccountInfo';
import ManageAdNetworkContainer from './containers/ManageAdNetworkContainer';

const AccountRoutes = () => (
  <>
    <Route path="/edit-account-info" component={EditAccountInfo} />
    <Route path="/manage-ad-networks" component={ManageAdNetworkContainer} />
  </>
);

export default AccountRoutes;
