import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ZipAdsLogo from './images/ZipAdsLogo.png';
import classnames from 'classnames';

import './css/bluetecappbar.css';
import './css/fonts.css';

class BlueTecHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  render() {
    return (
      <div id="wrapper">
        {}
        <header
          id="header"
          className={classnames('header-light transparent scroll-light', {
            'header--hidden': !this.state.visible,
          })}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between">
                  <div className="align-self-center header-col-left">
                    {}
                    <div id="logo">
                      <Link to="/">
                        <img alt src={ZipAdsLogo} />
                      </Link>
                    </div>
                    {}
                  </div>
                  <div className="align-self-center ml-auto header-col-mid">
                    {}
                    <ul id="mainmenu">
                      <li style={{ fontFamily: 'SilkaLight' }}>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <Link to="/faq">About</Link>
                      </li>
                      <li style={{ fontFamily: 'SilkaLight' }}>
                        <Link to="/login/">Login</Link>
                      </li>
                      <li style={{ fontFamily: 'SilkaLight' }}>
                        <Link to="/signup/">Register</Link>
                      </li>
                    </ul>
                  </div>
                  <div id="start-now-button" className="align-self-center ml-auto header-col-right">
                    <a className="btn-custom" href="/signup/">
                      <i className="fa fa-arrow-down" /> Start Now
                    </a>
                    <span id="menu-btn" />
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default BlueTecHeader;
