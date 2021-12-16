import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import OnboardingPageOne from './newPages/Onboarding1';
import OnboardingCompleted from './pages/OnboardingCompleted';
import ConnectSocial from './containers/ConnectSocialContainer';

const OnboardingRoutes = () => (
  <>
    <Route path="/onboarding/1" component={OnboardingPageOne} />
    <Route path="/onboarding/2" component={ConnectSocial} />
    <Route path="/onboarding/3" component={OnboardingCompleted} />
  </>
);

export default OnboardingRoutes;
