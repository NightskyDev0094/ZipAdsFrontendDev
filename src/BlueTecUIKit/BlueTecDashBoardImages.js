import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/';

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

import { STATIC_URL } from '../environmentVariables';

const FirstImage = STATIC_URL + 'images/services/1.jpg';
const SecondImage = STATIC_URL + 'images/services/2.jpg';
const ThirdImage = STATIC_URL + 'images/services/3.jpg';
const FourthImage = STATIC_URL + 'images/services/4.jpg';
const FifthImage = STATIC_URL + 'images/services/5.jpg';
const SixthImage = STATIC_URL + 'images/services/6.jpg';
const CreationImage1 = STATIC_URL + 'images/creation1.png';
const CreationImage2 = STATIC_URL + 'images/creation2.png';
const CreationImage3 = STATIC_URL + 'images/creation3.png';
// const CreationImage4 = STATIC_URL + 'images/creation4.png';
const BackgroundImage1 = STATIC_URL + 'images/background/7.png';

const useStyles = makeStyles((theme) => ({
  boardTitle: {
    marginBottom: '22px',
    fontWeight: '600',
  },
  boardContent: {
    // fontSize: '1.15rem',
  },
}));

const BlueTecDashBoardImages = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div
      // style={{ background: `url(${BackgroundImage1})` }}
      className="no-bottom no-top flex-fill d-flex justify-content-center align-items-center"
      id="content"
    >
      {}
      <section className="top p-0">
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
                  src={CreationImage1}
                  className="fp-image img-fluid w-100 h-100"
                  alt
                />
              </div>
              <h4 className={classes.boardTitle}>Create an Ad Campaign</h4>
              <h4 className={classes.boardContent}>
                <strong>Click here</strong> to create a new ad campaign.
              </h4>
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
                <img src={CreationImage2} className="fp-image img-fluid w-100 h-100" alt />
              </div>
              <h4 className={classes.boardTitle}>Understanding Ad Campaigns</h4>
              <h4 className={classes.boardContent}>
                <strong>Click here</strong> to learn more about ad campaigns and how important they
                can be to the success of your business.
              </h4>
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
                  src={CreationImage3}
                  className="fp-image img-fluid w-100 h-100"
                  style={{ height: '275px' }}
                  alt
                />
              </div>
              <h4 className={classes.boardTitle}>Analytics Dashboard</h4>
              <h4 className={classes.boardContent}>
                <strong>Click here</strong> to see real time statistics on your various ad
                campaigns.
              </h4>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-6 mb30">
              <div className="fp-wrap f-invert mb20">
                <div className="fp-icon">
                  <i className="fa fa-object-group" />
                </div>
                <img src={FourthImage} className="fp-image img-fluid w-100 h-100" alt />
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
                <img src={FifthImage} className="fp-image img-fluid w-100 h-100" alt />
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
                  className="fp-image img-fluid w-100 h-100"
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
