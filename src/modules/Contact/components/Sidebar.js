import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  contentSidebar: {
    backgroundColor: '#737373',
    width: '260px',
    minHeight: 'calc(100vh - 297.38px)',
    display: 'flex',
    flexDirection: 'column',

    '& div': {
      display: 'contents',
    },

    '@media (max-width:718px)': {
      width: '190px',
    },
  },
  menuItem: {
    color: 'white',
    padding: '35px 30px',
    fontSize: '1.5rem',
    fontFamily: 'Nunito',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#a6a6a6',
      color: 'white',
      textDecoration: 'none',
    },
  },
  activeTab: {
    background: '#a6a6a6',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const checkRoute = (title) => {
    let route = window.location.href;
    return route.includes(title);
  };

  return (
    <div className={classes.contentSidebar}>
      <div>
        <Link
          className={classes.menuItem}
          style={{ background: checkRoute('contact-info') ? '#a6a6a6' : '' }}
          to="/contact/contact-info"
        >
          Contact Information
        </Link>
      </div>
      <div>
        <Link className={classes.menuItem} style={{ background: checkRoute('business-info') ? '#a6a6a6' : '' }} to="/contact/business-info">
          Business Information
        </Link>
      </div>
      <div>
        <Link className={classes.menuItem} style={{ background: checkRoute('login-info') ? '#a6a6a6' : '' }} to="/contact/login-info">
          Sign-In Information
        </Link>
      </div>
      <div>
        <Link className={classes.menuItem} style={{ background: checkRoute('subscription-info') ? '#a6a6a6' : '' }} to="/contact/subscription-info">
          Subscription
        </Link>
      </div>
      <div>
        <Link className={classes.menuItem} style={{ background: checkRoute('payment-portal') ? '#a6a6a6' : '' }} to="/contact/payment-portal">
          Payment Portal
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
