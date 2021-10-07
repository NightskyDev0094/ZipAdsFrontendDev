import React from 'react';
import './css/fonts.css';

const BlueTecDashBoardHeader = () => (
  <>
    <div id="top" />
    {}
    <section id="subheader" data-bgimage="url(images/background/5.png) bottom">
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
                  <h1 style={{fontFamily: 'SilkaMedium'}}>DashBoard</h1>
                  <p style={{fontFamily: 'SilkaLight'}}>Your account information</p>
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

export default BlueTecDashBoardHeader;
