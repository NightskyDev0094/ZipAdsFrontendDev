import React from 'react';
import { withStyles } from '@material-ui/styles';

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

        <section
          data-bgimage={`url(${BackgroundImage1}) bottom`}
          className="full-height vertical-center"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                <div className="spacer-10"></div>
                <h1 id="main-title">
                  Are you ready to take your<span className="id-color"> business</span> to new
                  heights?
                </h1>
                <p id="sub-title" className="lead">
                  If so, <span className="id-color">ZipAds</span> can help! Easily create, publish
                  and track your online ads from one simple application.
                </p>
                <div className="spacer-20"></div>
                <a className="btn-custom" href="#">
                  Learn More
                </a>
                <div className="mb-sm-30"></div>
              </div>
              <div className="col-lg-6 offset-lg-1 wow fadeInLeft" data-wow-delay=".5s">
                <img src={GuySittingAtDeskImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="section-highlight" data-bgimage={`url(${BackgroundImage2}) top`}>
          <div
            style={{
              width: '80%',
              maxWidth: '1400px !important',
              margin: '0 auto',
            }} /**className="container" */
          >
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="text-center">
                  {/* <span className="uptitle id-color">Our Services</span> */}
                  <h2 id="heres-how-it-works-text">Here's how it works</h2>
                  <p className="lead">
                    Simply enter your ad content into a standard template, select your target
                    audience, select the desired ad platforms such as Facebook, Google and
                    Instagram, then click publish! It’s that easy!
                  </p>
                  <div className="spacer-20"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6  mb40 wow fadeInUp" data-wow-delay="0s">
                <div style={{ minHeight: '400px' }} className="feature-box f-boxed style-3">
                  <i className="bg-color i-circle fa fa-folder-plus"></i>
                  <div className="text">
                    <a href="service-single.html">
                      <h4>Create Your Ad</h4>
                    </a>
                    Simply input your ad content into a generic template and the ZipAds AI-driven
                    software will automatically complete a unique ad template for each selected
                    platform
                  </div>
                  <i className="wm fa fa-folder-plus"></i>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                <div style={{ minHeight: '400px' }} className="feature-box f-boxed style-3">
                  <i className="bg-color i-circle fa fa-bullseye"></i>
                  <div className="text">
                    <a href="service-single.html">
                      <h4>Select Your Target Audience </h4>
                    </a>
                    Based on the user’s profile, our AI algorithms will automatically select the
                    optimal targeting criteria for maximum ROI, or a user can specify their own
                    targeting criteria.
                  </div>
                  <i className="wm fa fa-bullseye"></i>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  mb40 sq-item wow fadeInUp" data-wow-delay=".5s">
                <div style={{ minHeight: '400px' }} className="feature-box f-boxed style-3">
                  <i className="bg-color i-circle fa fa-tools"></i>
                  <div className="text">
                    <a href="service-single.html">
                      <h4>Publish Your Ad</h4>
                    </a>
                    With one click, your ad will simultaneously publish to all platforms selected
                    such as Facebook, Google, Instagram, and programmatic sites!
                  </div>
                  <i className="wm i-circle fa fa-tools"></i>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  mb40 sq-item wow fadeInUp" data-wow-delay=".5s">
                <div style={{ minHeight: '400px' }} className="feature-box f-boxed style-3">
                  <i className="bg-color i-circle fa fa-line-chart"></i>
                  <div className="text">
                    <a href="service-single.html">
                      <h4>Track Your Ad with Powerful Analytics</h4>
                    </a>
                    Ad campaigns can be centrally managed across multiple platforms, including a
                    rich analytics dashboard that provides key performance metrics for each platform
                    on which the ad is running.
                  </div>
                  <i className="wm i-circle fa fa-line-chart"></i>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <a className="btn-custom" href="#">
                  More Features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="section-testimonial" data-bgimage={`url(${BackgroundImage4})  top`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2 id="heres-what-our-customers-are-saying" className="uptitle id-color">
                    Here’s What Our Customers Are Saying…
                  </h2>
                  <div className="spacer-20"></div>
                </div>
                <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          ZipAds is remarkable! The software simplifies the ad creation and
                          publishing process and saves me a huge amount of time!
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person1} />{' '}
                          <span>Johnny Appleseed</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          I’m not a technical person and the ZipAds platform makes creating and
                          publishing online ads super easy! There is no technical background
                          required and I can create a single ad and deliver it to multiple platforms
                          in minutes!!
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person2} />{' '}
                          <span>Jane Smith</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          I love the fact that I can deploy my digital ads to multiple platforms
                          with one click and then manage ads running on different platforms
                          centrally from the ZipAds dashboard. Meaning, I don’t need to log into
                          Facebook to see how those ads are doing and then log into Google to see
                          how those ads doing--Everything is done from one place—it’s awesome!!
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person3} />{' '}
                          <span>Bill Johnson </span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          Great support, like i have never seen before. Thanks to the support team,
                          they are very helpfull. This company provide customers great solution,
                          that makes them best.
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person4} />{' '}
                          <span>Thomas, Samsung</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          Great support, like i have never seen before. Thanks to the support team,
                          they are very helpfull. This company provide customers great solution,
                          that makes them best.
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person1} />{' '}
                          <span>John, Pixar Studio</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          Great support, like i have never seen before. Thanks to the support team,
                          they are very helpfull. This company provide customers great solution,
                          that makes them best.
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person2} />{' '}
                          <span>Sarah, Microsoft</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          Great support, like i have never seen before. Thanks to the support team,
                          they are very helpfull. This company provide customers great solution,
                          that makes them best.
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person3} />{' '}
                          <span>Michael, Apple</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="de_testi opt-2">
                      <blockquote>
                        <p>
                          Great support, like i have never seen before. Thanks to the support team,
                          they are very helpfull. This company provide customers great solution,
                          that makes them best.
                        </p>
                        <div className="de_testi_by">
                          <img alt="" className="rounded-circle" src={Person4} />{' '}
                          <span>Thomas, Samsung</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="section-fun-facts" className="pt60 pb60 text-light bg-color-3">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0s">
                          <div className="de_count">
                              <h3 className="timer" data-to="15425" data-speed="3000">0</h3>
                              <span>Website Powered</span>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".25s">
                          <div className="de_count">
                              <h3 className="timer" data-to="8745" data-speed="3000">0</h3>
                              <span>Clients Supported</span>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="de_count">
                              <h3 className="timer" data-to="235" data-speed="3000">0</h3>
                              <span>Awards Winning</span>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".75s">
                          <div className="de_count">
                              <h3 className="timer" data-to="15" data-speed="3000">0</h3>
                              <span>Years Experience</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
      </div>
    );
  }
}

export default withStyles(styles)(BlueTecLanding);
