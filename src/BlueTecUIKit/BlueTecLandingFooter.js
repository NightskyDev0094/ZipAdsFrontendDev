import React from 'react';
import { Link } from 'react-router-dom';

import Mic from './images/mic.png';
import FacebookLogo from './images/icons/footer_socials_facebook.png';
import InstagramLogo from './images/icons/footer_socials_instagram.png';
import TwitterLogo from './images/icons/footer_socials_twitter.png';
import LinkdinLogo from './images/icons/footer_socials_linked in.png';
import YoutubeLogo from './images/icons/footer_socials_youtube.png';
import CallUs from './images/icons/footer_call us.png';
import EmailUs from './images/icons/footer_email us.png';
import './css/bluetecfooter.css';

class BlueTecLandingFooter extends React.Component {
  render() {
    return (
      <footer style={{ padding: '10px 40px', background: '#d9d9d9' }}>
        <div className="footer-container">
          {/* <div className="row">
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
                  <div className="col text-center d-flex">
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="enter your email"
                      type="text"
                    />
                    <a href="#" id="btn-submit">
                      <i
                        className="arrow_right position-absolute"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      />
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
          </div> */}
          <div className="section mt-auto" style={{ marginBottom: '20px' }}>
            <h3 className="mb-3" style={{ color: '#737373', fontWeight: '600' }}>
              Contact Us
            </h3>
            <div className='d-flex mb-3' style={{height: '16px'}}>
              <img src={CallUs} />
              <h5 className="ml-2" style={{ color: '#737373', fontWeight: '600' }}>
                (555) 555-5555
              </h5>
            </div>
            <div className='d-flex' style={{height: '16px'}}>
              <img src={EmailUs} />
              <h5 className='ml-2' style={{ color: '#737373', fontWeight: '600' }}>support@zipads.net</h5>
            </div>
          </div>
          <div
            className="social-icons section d-flex justify-content-center"
            style={{ marginBottom: '20px' }}
          >
            <a className="mt-auto mx-3" href="#">
              <div className="logo-section">
                <img className="logo" src={FacebookLogo} />
              </div>
            </a>
            <a className="mt-auto mx-3" href="#">
              <div className="logo-section">
                <img className="logo" src={InstagramLogo} />
              </div>
            </a>
            <a className="mt-auto mx-3" href="#">
              <div className="logo-section">
                <img className="logo" src={TwitterLogo} />
              </div>
            </a>
            <a className="mt-auto mx-3" href="#">
              <div className="logo-section">
                <img className="logo" src={LinkdinLogo} />
              </div>
            </a>
            <a className="mt-auto mx-3" href="#">
              <div className="logo-section">
                <img className="logo" src={YoutubeLogo} />
              </div>
            </a>
          </div>
          <div className="section ml-auto">
            <div className="text-center" style={{ width: 'fit-content' }}>
              <img className="mb-2" src={Mic} style={{ width: '80px', height: '80px' }} />
              <h4 style={{ color: '#737373', fontWeight: '600' }} className="m-0">
                Chat with
              </h4>
              <h4 style={{ color: '#737373', fontWeight: '600' }}>Live Support</h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default BlueTecLandingFooter;
