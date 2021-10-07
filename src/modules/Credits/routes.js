import React from 'react';
import { Route } from 'react-router-dom';

import CreditContainer from './containers/CreditContainer';

const CreditRoutes = () => (
  <>
    <Route exact path="/credits/" component={CreditContainer} />
  </>
);

export default CreditRoutes;
