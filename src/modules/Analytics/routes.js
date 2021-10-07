import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AnalyticsMainPage from './pages';
import DashBoardContainer from './containers/dashboard'

const CreateAdRoutes = () => (
    <Switch>
      <Route exact path="/analytics" component={AnalyticsMainPage} />
      <Route exact path="/analytics/:campaign" component={DashBoardContainer} />
    </Switch>
);

export default CreateAdRoutes;
