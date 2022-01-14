import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from 'antd';
import AccountTable from '../../components/AccountTable';
import BluetecLandingFooter from '../../../../BlueTecUIKit/BlueTecLandingFooter';

import 'antd/dist/antd.css';
import './style.css';

const useStyles = makeStyles({
  root: {},
});

const AnalyticsContainer = () => {
  const classes = useStyles();
  return (
    <div className="app">
      <div className="home-container container-fluid" style={{minHeight: 'calc(100vh - 297.38px)'}}>
        <div className="row py-4">
          <div className="col-12 col-md-4 text-left">
            <Input.Search placeholder="search" enterButton />
          </div>
          <div className="col-12 col-md-2 text-end" />
          <div className="col-12 mt-3 over-flow-hidden">
            <AccountTable />
          </div>
        </div>
      </div>
      <BluetecLandingFooter />
    </div>
  );
};

export default AnalyticsContainer;
