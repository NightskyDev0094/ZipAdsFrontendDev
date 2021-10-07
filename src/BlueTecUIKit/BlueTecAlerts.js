import React from 'react';

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

class BlueTecAlerts extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
              A simple primary alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
              A simple secondary alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              A simple success alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              A simple danger alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              A simple warning alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              A simple info alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-light alert-dismissible fade show" role="alert">
              A simple light alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-dark alert-dismissible fade show" role="alert">
              A simple dark alert with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              .
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div className="spacer-double" />
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message. This example text is
                going to run a bit longer so that you can see how spacing within an alert works with
                this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
              </p>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { BlueTecAlerts };
