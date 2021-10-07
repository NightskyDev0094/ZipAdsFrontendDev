import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfileContainer from './containers/ProfileContainer';

const CreateAdRoutes = () => (
  <Switch>
    <Route exact path="/profile/" component={ProfileContainer} />
    <Route exact path="/profile/*" component={ProfileContainer} />
  </Switch>
);

export default CreateAdRoutes;
