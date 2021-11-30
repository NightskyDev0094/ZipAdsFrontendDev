import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem, Fade, makeStyles } from '@material-ui/core';

import BlueTecLogo from './images/logo-2.png';
import LandingRocketShip from './images/misc/3.png';
import GenericBackgroundImageOne from './images/background/3b.png';
import ZipAdsLogo from './images/ZipAdsLogo.png';
import NavButtonLink from '../modules/Navbar/components/NavButtonLink';
import { logout } from '../actions/authActions';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../actions/step.actions';

import './css/bluetecauthorizedappbar.css';

const useStyles = makeStyles(() => ({
  mockedLinkStyle: {
    display: 'inline-block',
    padding: '0px 18px',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    outline: 'none',
    borderRadius: '5px',
    fontfamily: 'Silka',
    fontWeight: 800,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  innerLink: {
    color: 'black',
    textDecoration: 'none',
    textDecorationLine: 'none',
  },
}));

const BlueTecAppBarAuthorized = ({ logoutUser, completeStep }) => {
  const history = useHistory();
  const classes = useStyles();
  const [isMobileView, setIsMobileView] = useState(false);
  const MOBILE_BREAKPOINT = 1000;

  const [anchorEl, setAnchorEl] = React.useState({
    conversions: null,
    dashboard: null,
    createAd: null,
  });
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [conversionsOpen, setConversionOpen] = useState(false);
  const [createAdOpen, setCreateAdOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl({ conversions: null, dashboard: null, createAd: null });
    setCreateAdOpen(false);
    setConversionOpen(false);
    setDashboardOpen(false);
  };

  const handleNav = () => {
    logoutUser();
    history.push('/');
  };

  //switch to drop down menu on mobile
  useLayoutEffect(() => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [window.innerWidth]);

  const handleClick = (event) => {
    if (event.target.innerText === 'DashBoard') {
      setAnchorEl({ ...anchorEl, dashboard: event.currentTarget });
      setDashboardOpen(!dashboardOpen);
    }

    if (event.target.innerText === 'Conversions') {
      setAnchorEl({ ...anchorEl, conversions: event.currentTarget });
      setConversionOpen(!conversionsOpen);
    }

    if (event.target.innerText === 'Create Ad') {
      setAnchorEl({ ...anchorEl, createAd: event.currentTarget });
      setCreateAdOpen(!createAdOpen);
    }
    if (event.target.innerText === 'Account') {
      setAnchorEl({ ...anchorEl, account: event.currentTarget });
      setCreateAdOpen(!createAdOpen);
    }
  };

  return (
    <div id="wrapper">
      <header className="header-light transparent scroll-light">
        <div className="container">
          <div style={{ height: '100%' }} className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="align-self-center header-col-left">
                  <div id="logo">
                    <Link to="/dashboard">
                      <img alt="ZipAds Logos" src={ZipAdsLogo} />
                    </Link>
                  </div>
                </div>
                <div className="align-self-center ml-auto header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link to="/select-campaign">Create Ad</Link>
                    </li>
                    <li>
                      <Link to="/analytics">Analytics</Link>
                    </li>
                    <li>
                      <div
                        aria-controls="conversions-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        className={classes.mockedLinkStyle}
                        name="conversions-menu"
                      >
                        Conversions
                      </div>
                      <Menu
                        id="conversions-menu"
                        anchorEl={anchorEl.conversions}
                        keepMounted
                        style={{ transform: 'translateY(60px)' }}
                        open={conversionsOpen}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link className={classes.innerLink} to="/manage-conversions">
                            Manage Conversions
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link className={classes.innerLink} to="/conversion-form">
                            Create Conversions
                          </Link>
                        </MenuItem>
                      </Menu>
                    </li>
                    <li>
                      <div
                        aria-controls="account-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        className={classes.mockedLinkStyle}
                        name="account-menu"
                      >
                        Account
                      </div>
                      <Menu
                        id="account-menu"
                        anchorEl={anchorEl.account}
                        keepMounted
                        style={{ transform: 'translateY(60px)' }}
                        open={createAdOpen}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link className={classes.innerLink} to="/edit-account-info">
                            Edit Account Info
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link className={classes.innerLink} to="/manage-ad-networks">
                            Manage Ad Networks
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link className={classes.innerLink} to="/faq">
                            FAQ
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <a className={classes.innerLink} onClick={() => handleNav()}>
                            Logout
                          </a>
                        </MenuItem>
                      </Menu>
                    </li>
                  </ul>
                </div>
                <div className="align-self-center ml-auto header-col-right" />
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => logout(dispatch),
  completeStep: (stepNumber) => completeStep(stepNumber),
});

export default connect(null, mapDispatchToProps)(BlueTecAppBarAuthorized);
