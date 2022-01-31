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

    '@media (max-width:768px)': {
      flexDirection: 'column',
    },
  },
  contactContent: {
    width: 'calc(100vw - 260px)',
    minHeight: 'calc(100vh - 297.38px)',
    padding: '20px 0px',

    '@media (max-width:992px)': {
      width: 'calc(100vw - 190px)',
    },

    '@media (max-width:768px)': {
      width: '100%',
      minHeight: 'initial',
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
              path="/info"
              render={() => {
                return <Redirect to="/info/contact-info" />;
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
