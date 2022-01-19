import React from 'react';
import { Route } from 'react-router-dom';

import PaymentPlanContainer from './containers/PaymentPlanContainer';

const PaymentPlanRoutes = () => (
  <>
    <Route exact path="/subscription-plan/" component={PaymentPlanContainer} />
  </>
);

export default PaymentPlanRoutes;
