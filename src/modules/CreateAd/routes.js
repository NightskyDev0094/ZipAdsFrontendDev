import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import CreateAdMainPage from "./pages";
import SelectCampaignContainer from './containers/SelectCampaignContainer';
import CreateCampaignContainer from './containers/CreateCampaignContainer';
import ConnectSocialContainer from './containers/ConnectSocialContainer';
import TargetingContainer from './containers/TargetingContainer';
import ExpandedTargetingContainer from './containers/ExpandedTargetingContainer';
import BudgetContainer from './containers/BudgetContainer';
import ObjectiveContainer from './containers/ObjectiveContainer';
import FacebookAdContainer from './containers/FacebookAdContainer';
import FacebookFeedContainer from './containers/FacebookFeedContainer';
import GoogleAdContainer from './containers/GoogleAdContainer';
import SummaryContainer from './containers/SummaryContainer';
import CreditsContainer from '../Credits/containers/CreditContainer';

const CreateAdRoutes = () => (
  <Switch>
    <Route exact path="/create/summary" component={SummaryContainer} />
    <Route exact path="/create/google" component={GoogleAdContainer} />
    <Route exact path="/create/facebook-ad" component={FacebookAdContainer} />
    <Route exact path="/create/facebook-feed" component={FacebookFeedContainer} />
    <Route exact path="/create/budget" component={BudgetContainer} />
    <Route exact path="/create/objective" component={ObjectiveContainer} />
    <Route exact path="/create/targeting" component={TargetingContainer} />
    <Route exact path="/create/expanded-targeting" component={ExpandedTargetingContainer} />
    <Route exact path="/create/connect-social" component={ConnectSocialContainer} />
    <Route exact path="/create/credits" component={CreditsContainer} />
    <Route exact path="/create/create-campaign" component={CreateCampaignContainer} />
    <Route exact path="/create" component={CreateCampaignContainer} />
    <Route exact path="/select-campaign" component={SelectCampaignContainer} />
  </Switch>
);

export default CreateAdRoutes;
