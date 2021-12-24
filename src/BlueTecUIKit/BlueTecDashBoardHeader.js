import React from 'react';
import './css/fonts.css';

const BlueTecDashBoardHeader = () => (
  <>
    <div id="top" />
    {}
    <section style={{padding: '10px 0 0 0'}}>
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
                  <h1 style={{fontFamily: 'SilkaMedium', color: '#2f68a3'}}>Dashboard</h1>
                  {/* <p style={{fontFamily: 'SilkaLight'}}>Your account information</p> */}
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
