import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./style.scss";

const Title = () => (
  <div className="title-component p-2 py-3">
    <div className="row">
      <div className="col-4">
        <BellOutlined />
      </div>
      <div className="col-8">
        <Typography.Paragraph>Conv. Value</Typography.Paragraph>
      </div>
      <div className="col-12">
        <Typography.Title level={4}>21</Typography.Title>
      </div>
      <div className="col-12">
        <img src="/images/level-1.png" className="img-fluid" />
      </div>
    </div>
  </div>
);

const Titles = () => {
  return (
    <div className="title-container row">
      <div className="col-12 col-md-6 col-lg-3">
        <Title />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Title />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Title />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Title />
      </div>
    </div>
  );
};

export default Titles;
