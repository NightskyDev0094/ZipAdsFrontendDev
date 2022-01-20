import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BlueTecLandingFooter from '../../BlueTecUIKit/BlueTecLandingFooter';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles(() => ({
  contactContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  contactContent: {
    width: 'calc(100vw - 260px)',
    minHeight: 'calc(100vh - 297.38px)',
    padding: '20px',

    '@media (max-width:718px)': {
      width: 'calc(100vw - 190px)',
    },
  },
}));

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Contact = ({ routes }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contactContainer}>
        <Sidebar />
        <div className={classes.contactContent}>
          <Switch>
            <Route
              exact
              path="/contact"
              render={() => {
                return <Redirect to="/contact/contact-info" />;
              }}
            />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
      <BlueTecLandingFooter />
    </div>
  );
};

export default Contact;
