import React from 'react';
import {
  Sidebar,
  Titles,
  AdsSet,
  Overview,
  Compare,
  Campaigns,
  SidebarRight,
} from '../../components';
import axios from 'axios';
import { SERVER_URL } from '../../../../environmentVariables';

const DashboardContainer = () => {
  const token = localStorage.getItem('token');
  console.log(token);

  //   const googleAdAccounts = await axios.post(
  //     `${SERVER_URL}/api/google-keyword-stats/`, {
  //     headers: {Authorization: `Token ${token}`}
  // })

  return (
    <div className="app">
      <div className="dashboard-container my-4 container-fluid pb-2">
        <div className="row">
          <div className="col-12 col-md-8 col-xxl-8">
            <Titles />
            <AdsSet />
            <Overview />
            <Compare />
            <Campaigns />
          </div>
          <div className="col-12 col-md-4 col-xxl-2">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
