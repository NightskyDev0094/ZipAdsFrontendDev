import React from 'react';
import { Route } from 'react-router-dom';

import PaymentContainer from './containers/PaymentPortalContainer';

const PaymentPortalRoutes = () => (
  <>
    <Route exact path="/payment-portal/" component={PaymentContainer} />
  </>
);

export default PaymentPortalRoutes;
