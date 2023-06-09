import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { STATIC_URL } from '../environmentVariables';

import './css/bluetecappbar.css';
import './css/fonts.css';

const ZipAdsLogo = STATIC_URL + 'images/ZipAdsLogo.png';
export default function BlueTecHeader() {
  const [visible, setVisible] = useState(false);
  return (
    <div id="wrapper" style={{backgroundColor: '#080934'}}>
      <header
        id="header"
        className={classnames('header-light transparent scroll-light', {
          'header--hidden': !visible,
        })}
      >
        <div style={{width: '90%', margin: 'auto'}}>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="align-self-center header-col-left">
                  <div id="logo">
                    <Link to="/">
                      <img alt="true" src={ZipAdsLogo} />
                    </Link>
                  </div>
                </div>
                <div className="align-self-center ml-auto header-col-mid">
                  <ul id="mainmenu">
                    <li style={{ fontFamily: 'SilkaLight' }}>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/faq">About</Link>
                    </li>
                    <li style={{ fontFamily: 'SilkaLight' }}>
                      <Link to="/login/">Login</Link>
                    </li>
                    <li style={{ fontFamily: 'SilkaLight' }}>
                      <Link to="/signup/" style={{color: '#ffe185'}}>Register</Link>
                    </li>
                  </ul>
                </div>
                {/* <div id="start-now-button" className="align-self-center ml-auto header-col-right">
                  <Link className="btn-custom" href="/signup/">
                    <i className="fa fa-arrow-down" /> Start Now
                  </Link>
                  <span id="menu-btn" />
                </div> */}
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
