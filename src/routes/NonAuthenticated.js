import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Box } from '@material-ui/core';
import { connect } from 'react-redux';

import OnboardingRoutes from '../modules/Onboarding/routes';
import LoggedOutNav from '../modules/Navbar/components/LoggedOutNav';
import HomePage from '../modules/Home/pages/HomePage';
import PrivacyPolicy from '../modules/Home/pages/PrivacyPolicy';
import TermsOfService from '../modules/Home/pages/TermsOfService';
import LoginPage from '../modules/Auth/pages/LoginPage';
import SignupPage from '../modules/Auth/pages/SignupPage';
import NotFound404 from '../modules/ErrorHandling/404Handler';
import FAQPage from '../BlueTecUIKit/BlueTecFAQPage';

const NonAuthenticatedRoutes = ({ isAuthenticated }) => {
  // const location = useLocation();
  const [isOnboardingRoute, setIsOnboardingRoute] = useState(false);

  React.useEffect(() => {
    // console.log(location);
    // const isOnboarding = location?.pathname.split("/").includes("onboarding");
    // setIsOnboardingRoute(isOnboarding);
  }, []);

  return (
    <>
      {!isAuthenticated && (
        <>
          <Router>
            <Switch>
              <Route exact path="/onboarding/*">
                <OnboardingRoutes />
              </Route>
              <Route>
                <Route path="/" component={LoggedOutNav} />
                <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/signup" component={SignupPage} />
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                  <Route exact path="/terms-of-service" component={TermsOfService} />
                  <Route exact path="/faq" component={FAQPage} />
                  <Route component={NotFound404} />
                </Switch>
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(NonAuthenticatedRoutes);
