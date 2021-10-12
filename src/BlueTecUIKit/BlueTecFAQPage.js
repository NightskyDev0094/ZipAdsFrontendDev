import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderContainerImage from './images/background/5.png';
import FooterContainerImage from './images/background/7.png';

const useStyles = makeStyles(() => ({
  headerContainer: {
    marginBottom: '200px',
  },
  header: {
    fontSize: '52px',
    fontWeight: 'bold',
    lineHeight: '56px',
    LetterSpacing: '-1px',
  },
  subHeader: {
    fontFamily: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    color: '#8492a6',
    lineHeight: '1.7em',
  },
  buttons: {
    padding: '.75rem 1.25rem',
  },
}));

const FAQPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" data-bgimage={`url(${HeaderContainerImage}) bottom`}>
          <div className="center-y relative text-center" data-scroll-speed="4">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form
                    action="blank.php"
                    className="row"
                    id="form_subscribe"
                    method="post"
                    name="myForm"
                  >
                    <div className="col-md-12 text-center">
                      <h1 className={classes.header}>FAQs</h1>
                      <p className={classes.subHeader}>Thanks for using ZipAds, you rock!</p>
                    </div>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top relative pos-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div id="accordion-1" className="accordion accordion-style-1">
                  <div className="card">
                    <div id="heading-a1" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a1"
                          aria-expanded="false"
                          aria-controls="collapse-a1"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          How can ZipAds can help your business?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a1"
                      aria-labelledby="heading-a1"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a2" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a2"
                          aria-expanded="false"
                          aria-controls="collapse-a2"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          When was ZipAds founded?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a2"
                      aria-labelledby="heading-a2"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a3" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a3"
                          aria-expanded="false"
                          aria-controls="collapse-a3"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          What is ZipAds mission?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a3"
                      aria-labelledby="heading-a3"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div id="accordion-2" className="accordion accordion-style-1">
                  <div className="card">
                    <div id="heading-b1" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b1"
                          aria-expanded="false"
                          aria-controls="collapse-b1"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          What are the business core of ZipAds?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b1"
                      aria-labelledby="heading-b1"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b2" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b2"
                          aria-expanded="false"
                          aria-controls="collapse-b2"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          How many employess at ZipAds?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b2"
                      aria-labelledby="heading-b2"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b3" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b3"
                          aria-expanded="false"
                          aria-controls="collapse-b3"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          Where is ZipAds position in the market?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b3"
                      aria-labelledby="heading-b3"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                          dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                          moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-bgimage={`url(${FooterContainerImage}) center`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>
                  <span className="id-color">Call us</span> for further information. ZipAds customer
                  care is here to help you <span className="id-color">anytime</span>.{' '}
                </h2>
                <p className="lead">We're available for 24 hours!</p>
              </div>

              <div className="col-md-6 text-lg-center text-sm-center">
                <div className="phone-num-big">
                  <i className="fa fa-phone id-color"></i>
                  <span className="pnb-text">Call Us Now</span>
                  <span className="pnb-num">1 200 333 800</span>
                </div>
                <a href="#" className="btn-custom capsule med">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
