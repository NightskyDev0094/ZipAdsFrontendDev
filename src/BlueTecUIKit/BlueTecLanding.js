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
import Person1 from './images/people/1.jpg';
import Person2 from './images/people/2.jpg';
import Person3 from './images/people/3.jpg';
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

        <section className="vertical-center" style={{ padding: '90px 0px', minHeight: 'auto' }}>
          <div style={{ width: '90%', margin: '0 auto' }}>
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                <div className="spacer-10"></div>
                <h1 id="main-title">
                  Let's take <span className="id-color">your business</span> to new heights!
                </h1>
                <p id="sub-title" className="lead">
                  <span className="id-color">ZipAds</span> is here to help. Easily create, post and
                  track your online ads from our simple application.
                </p>
                <div className="spacer-20"></div>
                {/* <a className="btn-custom" href="#">
                  Learn More
                </a> */}
                <Link
                  className="btn-custom"
                  href="/signup/"
                  style={{
                    backgroundColor: '#ffe185',
                    borderRadius: '5px',
                    fontSize: '20px',
                    padding: '14px 80px',
                    color: '#00468f',
                    fontWeight: 'inherit',
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
            <h1 id="middle-title" style={{ color: '#00468f' }}>
              What our customers are saying...
            </h1>
            <div className="row m-0 justify-content-around">
              <div className="text-center mx-3 my-5" style={{ maxWidth: '320px' }}>
                <img
                  alt=""
                  className="rounded-circle"
                  src={Person1}
                  style={{ width: '320px', height: '320px', border: '7px solid #00468f' }}
                />
                <h3 className="mt-4 font-italic" style={{ color: '#00468f' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </h3>
                <h3 className="font-weight-bold mt-4 font-italic" style={{ color: '#00468f' }}>
                  - First Name Last Initial, The [INDUSTRY] Industry
                </h3>
              </div>
              <div className="text-center m-3 my-5" style={{ maxWidth: '320px' }}>
                <img
                  alt=""
                  className="rounded-circle"
                  src={Person2}
                  style={{ width: '320px', height: '320px', border: '7px solid #00468f' }}
                />
                <h3 className="mt-4 font-italic" style={{ color: '#00468f' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </h3>
                <h3 className="font-weight-bold mt-4 font-italic" style={{ color: '#00468f' }}>
                  - First Name Last Initial, The [INDUSTRY] Industry
                </h3>
              </div>
              <div className="text-center m-3 my-5" style={{ maxWidth: '320px' }}>
                <img
                  alt=""
                  className="rounded-circle"
                  src={Person3}
                  style={{ width: '320px', height: '320px', border: '7px solid #00468f' }}
                />
                <h3 className="mt-4 font-italic" style={{ color: '#00468f' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </h3>
                <h3 className="font-weight-bold mt-4 font-italic" style={{ color: '#00468f' }}>
                  - First Name Last Initial, The [INDUSTRY] Industry
                </h3>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Link
                className="btn-custom"
                href="/signup/"
                style={{
                  backgroundColor: '#ffe185',
                  borderRadius: '5px',
                  fontSize: '20px',
                  padding: '14px 80px',
                  color: '#00468f',
                  fontWeight: 'inherit',
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
