import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import CreateAdRoutes from '../modules/CreateAd/routes';
import ConversionsRoutes from '../modules/Conversions/routes';
import DashboardRoutes from '../modules/Dashboard/routes';
import BlueTecAppBarAuthorized from '../BlueTecUIKit/BlueTecAppBarAuthorizedAppBar';
import AnalyticsRoutes from '../modules/Analytics/routes';
import ProfileRoutes from '../modules/Profile/routes';
import OnboardingRoutes from '../modules/Onboarding/routes';
import CheckToken from './checkToken';
import NotFound404 from '../modules/ErrorHandling/404Handler';
import AccountRoutes from '../modules/Account/routes';
import FAQPage from '../BlueTecUIKit/BlueTecFAQPage';
import SuccessPage from '../modules/CreateAd/pages/SuccessPage';
import PaymentPortalRoutes from '../modules/PaymentPortal/routes';


const AuthenticatedRoutes = ({ isAuthenticated }) => (
  <>
    {isAuthenticated && (
      <>
        <Router>
          <Switch>
            <Box height="100%" minHeight="100vh">
              <Route path="/" component={BlueTecAppBarAuthorized} />
              <Route exact path="/create/success" component={SuccessPage} />
              <Route exact path="/faq" component={FAQPage} />
              <CheckToken />
              <OnboardingRoutes />
              <ConversionsRoutes />
              <CreateAdRoutes />
              <DashboardRoutes />
              <AnalyticsRoutes />
              <ProfileRoutes />
              <AccountRoutes />
              <PaymentPortalRoutes />
            </Box>
          </Switch>
        </Router>
      </>
    )}
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(AuthenticatedRoutes);
