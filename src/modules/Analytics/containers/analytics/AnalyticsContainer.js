import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "antd";
import  AccountTable  from "../../components/AccountTable";

import 'antd/dist/antd.css';
import './style.css';

const useStyles = makeStyles({
  root: {},
});

const AnalyticsContainer = () => {
  const classes = useStyles();
  return (
    <div className="app">
    <div className="home-container container-fluid">
      <div className="row my-4">
        <div className="col-12 col-md-4 text-left">
          <Input.Search placeholder="search" enterButton />
        </div>
        <div className="col-12 col-md-2 text-end" />
        <div className="col-12 mt-3 over-flow-hidden">
          <AccountTable />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnalyticsContainer;


