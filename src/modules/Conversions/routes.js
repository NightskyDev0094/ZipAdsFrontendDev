import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ConversionFormContainer from './containers/ConversionFormContainer';
import ManageConversionsContainer from './containers/ManageConversionsContainer';
import PixelFormContainer from './containers/PixelFormContainer';
import ManagePixelsContainer from './containers/ManagePixelsContainer';

const ConversionsRoutes = () => (
  <Switch>
    <Route exact path="/conversion-form" component={ConversionFormContainer} />
    <Route exact path="/manage-conversions" component={ManageConversionsContainer} />
    <Route exact path="/pixel-form" component={PixelFormContainer} />
    <Route exact path="/manage-pixels" component={ManagePixelsContainer} />
  </Switch>
);

export default ConversionsRoutes;
