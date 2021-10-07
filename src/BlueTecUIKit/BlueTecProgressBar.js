import React from 'react';
import { history, Link } from 'react-router-dom';

import './css/colors/scheme-02.css';
import './css/coloring.css';
import './css/bootstrap-grid.min.css';
import './css/bootstrap-reboot.min.css';
import './css/bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.css';
import './css/owl.theme.css';
import './css/owl.transitions.css';
import './css/magnific-popup.css';
import './css/jquery.countdown.css';
import './css/style.css';
import './css/blueteclanding.css';
import './css/colors/scheme-01.css';

import './css/bluetecprogressbar.css';

const BlueTecProgressBar = (name, percentage) => (
  <div className="progress-bar-container">
    <div className="progress-bar-column">
      <div className="skill-bar style-2">
        {/* <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    Please fill out Profile Information before Ad Creation{" "}
                    <Link to="/onboarding/1" className="alert-link">
                    Click Here
                    </Link>
                    .
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
              </div> */}
        <h5>Profile information</h5>
        <div className="de-progress">
          <div style={{ color: 'green', fontSize: '15px' }} className="value">
            100 %
          </div>
          <div className="progress-bar" data-value="100" />
        </div>
      </div>
    </div>
    {/* <div className="progress-bar-column">
            <div class="skill-bar style-2">
              <h5>Current Campaign</h5>
                <div style={{ color: 'green'}} class="de-progress">
                    <div style={{ color: 'green', fontSize: '15px'}} class="value">40%</div>
                    <div class="progress-bar" data-value="40">
                    </div>
                </div>
                <div  className="progress-bar-date">Last Completed: 02/10/21</div>
            </div>
        </div> */}
  </div>
);

export default BlueTecProgressBar;
