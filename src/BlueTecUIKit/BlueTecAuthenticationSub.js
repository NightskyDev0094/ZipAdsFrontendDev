import React from 'react';
import SignIn_Up from './images/signin&up.png';
import CheckMark from './images/icons/green checkmark.png';

import './css/style.css';

const BlueTecAuthenticationSub = () => (
  <div className="w-100 h-100 d-flex flex-column">
    <div className="mb-4">
      <img alt="true" src={SignIn_Up} />
    </div>
    <div className="d-flex flex-column justify-content-around flex-fill">
      <div className="d-flex py-4 ads-feature">
        <div className="d-flex align-items-center">
          <img src={CheckMark} style={{width: '52px'}} />
        </div>
        <div className="text-left ml-3 d-flex flex-column justify-content-between">
          <h3 className="m-0 text-white font-italic">Seamless account</h3>
          <h3 className="m-0 text-white font-italic">creation and ad creation</h3>
        </div>
      </div>
      <div className="d-flex py-4">
        <div className="d-flex align-items-center">
          <img src={CheckMark} style={{width: '52px'}} />
        </div>
        <div className="text-left ml-3 d-flex flex-column justify-content-between">
          <h3 className="m-0 text-white font-italic">Ability to reach audiences</h3>
          <h3 className="m-0 text-white font-italic">on all social platforms</h3>
        </div>
      </div>
      <div className="d-flex py-4">
        <div className="d-flex align-items-center">
          <img src={CheckMark} style={{width: '52px'}} />
        </div>
        <div className="text-left ml-3 d-flex flex-column justify-content-between">
          <h3 className="m-0 text-white font-italic">Affordable pricing with</h3>
          <h3 className="m-0 text-white font-italic">various payment options</h3>
        </div>
      </div>
      <div className="d-flex py-4">
        <div className="d-flex align-items-center">
          <img src={CheckMark} style={{width: '52px'}} />
        </div>
        <div className="text-left ml-3 d-flex flex-column justify-content-between">
          <h3 className="m-0 text-white font-italic">24/7 real live customer</h3>
          <h3 className="m-0 text-white font-italic">support - no bots!</h3>
        </div>
      </div>
    </div>
  </div>
);

export default BlueTecAuthenticationSub;
