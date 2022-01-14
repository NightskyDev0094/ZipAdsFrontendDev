import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderContainerImage from './images/background/5.png';
import FooterContainerImage from './images/background/7.png';
import BluetecLandingFooter from './BlueTecLandingFooter';

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

// If adding or moving the collapse accordion, edit the number value of #id, data-target, aria-controls, etc to match the order and column position.
// Repetition triggers open and close of multiple
// Example: "id=heading-a1" => change all instance of a1

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
                          How can ZipAds can help my business?
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
                          Zip Ads helps your business by placing your ads in front of the right
                          audience at the right time. It is the only company of its kind designed
                          for small and medium sized businesses that can get your ads in 100% of the
                          same places that all the large companies do, including Facebook and
                          Google.
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
                        <p className="m-0">Zip Ads was founded in 2020.</p>
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
                          As an independent advertising network, Zip Ads provides small and medium
                          sized businesses the ability to grow their company and share it with the
                          world through intelligent, targeted advertising. At Zip Ads we believe
                          that all companies should have equal access in advertising through
                          numerous places on the internet, be it through Facebook, Google search, or
                          various websites. With the digital advertising space previously being
                          taken up mostly by large corporations, Zip Ads provides an opportunity for
                          smaller businesses to be seen, heard, and gain new customers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a4" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a4"
                          aria-expanded="false"
                          aria-controls="collapse-a4"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          What kind of companies is Zip Ads for?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a4"
                      aria-labelledby="heading-ar"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Zip Ads can be used by any kind of business in any kind of industry. This
                          includes hotels and restaurants, tech start ups, online stores, tourism
                          businesses, and many more.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a5" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a5"
                          aria-expanded="false"
                          aria-controls="collapse-a5"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          Does Zip Ads offer Facebook and Google advertising?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a5"
                      aria-labelledby="heading-a5"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Yes, Zip Ads offer Facebook and Google advertising.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a6" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a6"
                          aria-expanded="false"
                          aria-controls="collapse-a6"
                          className="d-block position-relative collapsed text-dark collapsible-link py-2"
                        >
                          How does Zip Ads ensure brand safety?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a6"
                      aria-labelledby="heading-a6"
                      data-parent="#accordion-2"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Zip Ads ensures brand safety by selecting high quality publishers with a
                          good reputation. Your ads will not appear on any inappropriate sites
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a7" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a7"
                          aria-expanded="false"
                          aria-controls="collapse-a7"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          What if I have an issue or a question? How fast is your customer service?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a7"
                      aria-labelledby="heading-a7"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Zip Ads has 24/7 customer service by both phone and chat so that we can
                          ensure that any of your issues or questions are resolved right away.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-a8" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-a8"
                          aria-expanded="false"
                          aria-controls="collapse-a8"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          I’m not very tech-savvy. Is the ad creation process hard?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-a8"
                      aria-labelledby="heading-a8"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          No, the ad-creation process is very straightforward and seamless.
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
                          Does Zip Ads offer ad templates or do I have to upload my own?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b1"
                      aria-labelledby="heading-b1"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          At Zip ads you can do either! We have many templates to choose from but
                          you can also upload your own at the standard sizes and formats.
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
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Does Zip Ads have pre-designed ads for my business type?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b2"
                      aria-labelledby="heading-b2"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          Yes, included in our many templates are 21 industry-specific sections
                          designed for your business type.
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
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Does Zip Ads offer ad templates or do I have to upload my own?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b3"
                      aria-labelledby="heading-b3"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          At Zip ads you can do either! We have over many templates to choose from
                          but you can also upload your own at the standard sizes and formats.{' '}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b4" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b4"
                          aria-expanded="false"
                          aria-controls="collapse-b4"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          How can I target my ads?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b4"
                      aria-labelledby="heading-b4"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">
                          After you’re finished with Ad Creation, you will be taken to the Targeting
                          sectioning. Here, you will fill out which type of audience you want to
                          view your ad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b5" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b5"
                          aria-expanded="false"
                          aria-controls="collapse-b5"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Does Zip Ads offer re-targeting?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b5"
                      aria-labelledby="heading-b5"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Yes, Zip Ads offers re-targeting.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b6" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b6"
                          aria-expanded="false"
                          aria-controls="collapse-b6"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Does Zip Ads offer analytics on my ads?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b6"
                      aria-labelledby="heading-b6"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Yes, Zip Ads offers analytics on your ad campaigns.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b7" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b7"
                          aria-expanded="false"
                          aria-controls="collapse-b7"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Does Zip Ads offer conversion tracking?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b7"
                      aria-labelledby="heading-b7"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Yes, Zip Ads offers conversion tracking. </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b8" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b8"
                          aria-expanded="false"
                          aria-controls="collapse-b8"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          How quickly are analytics updated?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b8"
                      aria-labelledby="heading-b8"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Your analytics are updated in real time. </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div id="heading-b9" className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse-b9"
                          aria-expanded="false"
                          aria-controls="collapse-b9"
                          className="d-block position-relative text-dark collapsible-link py-2"
                        >
                          Is Zip Ads a DSP?
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse-b9"
                      aria-labelledby="heading-b9"
                      data-parent="#accordion-1"
                      className="collapse"
                    >
                      <div className="card-body p-4">
                        <p className="m-0">Yes, Zip Ads is a DSP. </p>
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
                  care is here to help you <span className="id-color">anytime</span>.
                </h2>
                <p className="lead">We're available for 24/7!</p>
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
      <BluetecLandingFooter />
    </>
  );
};

export default FAQPage;
