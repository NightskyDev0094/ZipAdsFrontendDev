import React from 'react';
import { Link } from 'react-router-dom';

import ZipAdsLogo from './images/ZipAdsLogo.png';
import './css/bluetecfooter.css';

class BlueTecLandingFooter extends React.Component {
  render() {
    return (
      <footer className="footer footer-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <Link to="/">
                  <img alt id="logo" src={ZipAdsLogo} />
                </Link>
                <div className="spacer-20" />
                <p>
                  Easily create digital ads across multiple platforms in just a few simple steps,
                  with no technical knowledge whatsoever!
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="widget">
                <h5>Demo</h5>
                <ul>
                  <li>
                    <Link to="/">Pricing Plans</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="widget">
                <h5>Pages</h5>
                <ul>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/login/">Login</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service/">Terms Of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <h5>Newsletter</h5>
                <p>
                  Signup for our newsletter to get the latest news, updates and special offers in
                  your inbox.
                </p>
                <form
                  action="blank.php"
                  className="row"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div className="col text-center">
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="enter your email"
                      type="text"
                    />
                    <a href="#" id="btn-submit">
                      <i className="arrow_right" />
                    </a>
                    <div className="clearfix" />
                  </div>
                </form>
                <div className="spacer-10" />
                <small>Your email is safe with us. We dont spam.</small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 sm-text-center mb-sm-30"></div>
            <div className="col-md-6 text-md-right text-sm-left">
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus fa-lg" />
                </a>
                <a href="#">
                  <i className="fa fa-rss fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default BlueTecLandingFooter;
