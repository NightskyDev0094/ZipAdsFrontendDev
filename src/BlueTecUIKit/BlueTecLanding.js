import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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

import GuySittingAtDeskImage from './images/misc/1.png';
import Person1 from './images/people/portrait 1.png';
import Person2 from './images/people/portrait 2.png';
import Person3 from './images/people/portrait 3.png';
import Person4 from './images/people/4.jpg';
import Miscellanous1 from './images/misc/2.png';
import BackgroundImage1 from './images/background/1.png';
import BackgroundImage2 from './images/background/2.png';
import BackgroundImage3 from './images/background/3.png';
import BackgroundImage4 from './images/background/4.png';

const styles = (theme) => ({
  tesimonials: {
    '@media (max-width:800px)': {
      display: 'none',
    },
  },
});

class BlueTecLanding extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="no-bottom no-top" id="content" data-component="landing">
        <div id="top"></div>

        <section className="vertical-center landing-main">
          <div style={{ width: '90%', margin: '0 auto' }}>
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                <div className="spacer-10"></div>
                <h1 id="main-title">
                  Let's take <span className="id-color font-weight-bold">your business</span> to new
                  heights!
                </h1>
                <p id="sub-title" className="lead font-weight-normal">
                  <span className="id-color font-weight-bold" style={{ fontFamily: 'SilkaMedium' }}>
                    ZipAds
                  </span>{' '}
                  is here to help. Easily create, post and track your online ads from our simple
                  application.
                </p>
                <div className="spacer-20"></div>
                {/* <a className="btn-custom" href="#">
                  Learn More
                </a> */}
                <Link
                  className="btn-custom linkToButton"
                  href="/signup/"
                  style={{
                    backgroundColor: '#ffe185',
                    borderRadius: '5px',
                    fontSize: '20px',
                    padding: '18px 90px',
                    color: '#00468f',
                    fontWeight: '600',
                  }}
                >
                  Get Started
                </Link>
                <div className="mb-sm-30"></div>
              </div>
              <div
                className="col-lg-6 offset-lg-1 wow fadeInLeft p-0 d-flex justify-content-center"
                data-wow-delay=".5s"
                style={{ marginLeft: 0 }}
              >
                <img src={GuySittingAtDeskImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex justify-content-center" style={{ paddingTop: 0 }}>
          <div className="position-relative" style={{ maxWidth: '1250px' }}>
            <img className="w-100" src={BackgroundImage2} />
            <h1
              id="middle-title"
              className="position-absolute"
              style={{ top: 0, left: 0, padding: '3vw 0 0 3vw' }}
            >
              Here's <br /> how it works...
            </h1>
          </div>
        </section>

        <section id="section-testimonial" className="pt-0">
          <div className="m-auto px-3" style={{ maxWidth: '1230px' }}>
            <h1 className="customer-title" style={{ color: '#00468f' }}>
              What our customers are saying...
            </h1>
            <div
              className="row m-0 justify-content-around"
              style={{ height: '100%' }}
            >
              <div className="text-center my-5 position-relative" style={{ maxWidth: '320px', minHeight: '600px' }}>
                <img
                  alt=""
                  className="rounded-circle p-3"
                  src={Person2}
                  style={{ width: '320px', height: '320px' }}
                />
                <h3
                  className="mt-4"
                  style={{
                    color: '#00468f',
                    fontWeight: '600',
                    fontSize: '16px',
                  }}
                >
                  "I'm not a technical person and the{' '}
                  <b style={{ fontFamily: 'SilkaMedium' }}>ZipAds </b>
                  platform makes creating and publishing online ads super easy! There is no
                  technical background required and I can create a single ad and deliver it to
                  multiple platforms in minutes!"
                </h3>
                <h4
                  className="font-weight-bold mt-4 position-absolute"
                  style={{
                    color: '#00468f',
                    fontFamily: 'SilkaMedium',
                    fontSize: '20px',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    width: 'fit-content',
                  }}
                >
                  - Jane Smith, <br /> The Beauty Industry
                </h4>
              </div>
              <div className="text-center my-5 position-relative" style={{ maxWidth: '320px', minHeight: '600px' }}>
                <img
                  alt=""
                  className="rounded-circle p-3"
                  src={Person1}
                  style={{ width: '320px', height: '320px' }}
                />
                <h3
                  className="mt-4"
                  style={{ color: '#00468f', fontWeight: '600', fontSize: '20px' }}
                >
                  "<b style={{ fontFamily: 'SilkaMedium' }}>ZipAds </b>
                  is remarkable! The software simplifies the ad creation and publishing process and
                  saves me a huge amount of time!"
                </h3>
                <h4
                  className="font-weight-bold mt-4 position-absolute"
                  style={{
                    color: '#00468f',
                    fontFamily: 'SilkaMedium',
                    fontSize: '20px',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    width: 'fit-content',
                  }}
                >
                  - John Appleseed, <br /> The Business Industry
                </h4>
              </div>
              <div className="text-center my-5 position-relative" style={{ maxWidth: '320px', minHeight: '600px' }}>
                <img
                  alt=""
                  className="rounded-circle p-3"
                  src={Person3}
                  style={{ width: '320px', height: '320px' }}
                />
                <h3
                  className="mt-4"
                  style={{ color: '#00468f', fontWeight: '600', fontSize: '16px' }}
                >
                  "I love the fact that I can deploy my digital ads to multiple platforms with one
                  click and then manage ads running on different platforms centrally from the
                  <b style={{ fontFamily: 'SilkaMedium' }}> ZipAds </b>
                  dashboard. Meaning. I don't need to log into Facebook to see how those ads are
                  doing and then log into Google to see how those ads doing--Everything is done from
                  one place-it's awesome!"
                </h3>
                <h4
                  className="font-weight-bold mt-4 position-absolute"
                  style={{
                    color: '#00468f',
                    fontFamily: 'SilkaMedium',
                    fontSize: '20px',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    width: 'fit-content',
                  }}
                >
                  - Bill Johnson, <br /> The Food Industry
                </h4>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                className="btn-custom linkToButton"
                href="/signup/"
                style={{
                  backgroundColor: '#ffe185',
                  borderRadius: '5px',
                  fontSize: '20px',
                  padding: '14px 80px',
                  color: '#00468f',
                  fontWeight: '600',
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(BlueTecLanding);
