import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardMainPage from './pages';

const DashboardRoutes = () => (
  <Switch>
    <Route path="/dashboard" component={DashboardMainPage} />
  </Switch>
);

export default DashboardRoutes;
