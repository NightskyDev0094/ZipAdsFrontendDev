import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import CreateAdRoutes from '../modules/CreateAd/routes';
import ConversionsRoutes from '../modules/Conversions/routes';
import DashboardRoutes from '../modules/Dashboard/routes';
import InfoRoutes from '../modules/Info/index';
import BlueTecAppBarAuthorized from '../BlueTecUIKit/BlueTecAppBarAuthorizedAppBar';
import AnalyticsRoutes from '../modules/Analytics/routes';
import ProfileRoutes from '../modules/Profile/routes';
import OnboardingRoutes from '../modules/Onboarding/routes';
import CheckToken from './checkToken';
import NotFound404 from '../modules/ErrorHandling/404Handler';
import AccountRoutes from '../modules/Account/routes';
import FAQPage from '../BlueTecUIKit/BlueTecFAQPage';
import SuccessPage from '../modules/CreateAd/pages/SuccessPage';
import ContactInfo from '../modules/Info/components/ContactInfo';
import BusinessInfo from '../modules/Info/components/BusinessInfo';
import SignInInfo from '../modules/Info/components/SignInInfo';
import Subscription from '../modules/Info/components/Subscription';
import PaymentPortal from '../modules/Info/components/PaymentPortal';
import PaymentPlanRoutes from '../modules/PaymentPlans/routes';
import PaymentPortalRoutes from '../modules/PaymentPortal/routes';

const routes = [
  {
    path: '/info',
    component: InfoRoutes,
    exact: true,
    routes: [
      {
        path: '/info/contact-Info',
        component: ContactInfo,
        exact: true,
      },
      {
        path: '/info/business-Info',
        component: BusinessInfo,
        exact: true,
      },
      {
        path: '/info/login-Info',
        component: SignInInfo,
        exact: true,
      },
      {
        path: '/info/subscription-Info',
        component: Subscription,
        exact: true,
      },
      {
        path: '/info/payment-portal',
        component: PaymentPortal,
        exact: true,
      },
    ],
  },
];
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

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
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <CheckToken />
              <OnboardingRoutes />
              <ConversionsRoutes />
              <CreateAdRoutes />
              <DashboardRoutes />
              <AnalyticsRoutes />
              <ProfileRoutes />
              <AccountRoutes />
              {/* <ContactRoutes /> */}
              {/* <PaymentPortalRoutes /> */}
              <PaymentPlanRoutes />
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
