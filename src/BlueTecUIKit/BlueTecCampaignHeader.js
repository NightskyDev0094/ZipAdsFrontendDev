import React from 'react';
import { STATIC_URL } from '../environmentVariables';

const backgroundImg = STATIC_URL + 'images/background/5.png'

const BlueTecCampaignHeader = () => (
  <>
    <section id="subheader" data-bgimage="url(https://auto-ads-media-storage.s3.us-west-2.amazonaws.com/frontend-static/images/background/5.png) bottom">
      <div className="center-y relative text-center" data-scroll-speed={4}>
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
                  <h1>Ad Campaign Information</h1>
                  <p>you current ad campaigns</p>
                </div>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default BlueTecCampaignHeader;
