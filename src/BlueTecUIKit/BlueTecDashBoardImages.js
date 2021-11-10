import React from 'react';
import { useHistory } from 'react-router-dom';

import './css/colors/scheme-02.css';
import './css/coloring.css';
import './css/bootstrap-grid.min.css';
import './css/bootstrap-reboot.min.css';
import './css/animate.css';
import './css/owl.carousel.css';
import './css/owl.theme.css';
import './css/owl.transitions.css';
import './css/magnific-popup.css';
import './css/jquery.countdown.css';
import './css/style.css';
import './css/blueteclanding.css';
import './css/colors/scheme-01.css';

import './css/blueteclogin.css';

import FirstImage from './images/services/1.jpg';
import SecondImage from './images/services/2.jpg';
import ThirdImage from './images/services/3.jpg';
import FourthImage from './images/services/4.jpg';
import FifthImage from './images/services/5.jpg';
import SixthImage from './images/services/6.jpg';
import CreationImage from './images/creation.png';
import CreationImage2 from './images/creation2.png';
import CreationImage3 from './images/creation3.jpg';
import CreationImage4 from './images/creation4.jpg';
import BackgroundImage1 from './images/background/7.png';

const BlueTecDashBoardImages = () => {
  const history = useHistory();
  return (
    <div
      style={{ background: `url(${BackgroundImage1})` }}
      className="no-bottom no-top"
      id="content"
    >
      {}
      <section className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div className="fp-wrap f-invert mb20">
                <div
                  onClick={() => {
                    history.push('/select-campaign');
                  }}
                  className="fp-icon"
                >
                  <i className="fa fa-paper-plane-o" />
                </div>
                <img
                  style={{ height: '275px', '&:hover': { cursor: 'pointer' } }}
                  src={CreationImage4}
                  className="fp-image img-fluid"
                  alt
                />
              </div>
              <h4>Create an Ad Campaign</h4>
              <p>
                <strong>Click here</strong> to create a new Ad Campaign.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div
                className="fp-wrap f-invert mb20"
                onClick={() => {
                  history.push('/faq');
                }}
              >
                <div className="fp-icon">
                  <i className="fa fa-desktop" />
                </div>
                <img src={CreationImage} className="fp-image img-fluid" alt />
              </div>
              <h4>Understanding Ad Campaigns</h4>
              <p>
                <strong>Click here</strong> to learn more about ad campaigns and how important they
                can be to the success of your business.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div
                onClick={() => {
                  history.push('/analytics');
                }}
                className="fp-wrap f-invert mb20"
              >
                <div className="fp-icon">
                  <i className="fa fa-line-chart" />
                </div>
                <img
                  src={CreationImage2}
                  className="fp-image img-fluid"
                  style={{ height: '275px' }}
                  alt
                />
              </div>
              <h4>Analytics Dashboard</h4>
              <p>
                <strong>Click here</strong> to see real time statistics on your various ad
                campaigns.
              </p>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div className="fp-wrap f-invert mb20">
                <div className="fp-icon">
                  <i className="fa fa-object-group" />
                </div>
                <img src={FourthImage} className="fp-image img-fluid" alt />
              </div>
              <h4>Our Tutorials</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div className="fp-wrap f-invert mb20">
                <div className="fp-icon">
                  <i className="fa fa-hdd-o" />
                </div>
                <img src={FifthImage} className="fp-image img-fluid" alt />
              </div>
              <h4>Consult with US</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div className="fp-wrap f-invert mb20">
                <div className="fp-icon">
                  <i className="fa fa-comments-o" />
                </div>
                <img
                  src={CreationImage3}
                  className="fp-image img-fluid"
                  style={{ height: '250px' }}
                  alt
                />
              </div>
              <h4>IT Consultancy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
            <div />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlueTecDashBoardImages;
