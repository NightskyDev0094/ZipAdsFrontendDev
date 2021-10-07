import React, { useState } from "react";
import { Button, Divider, Checkbox, Typography } from "antd";
import { CopyOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";

import "./style.scss";

const Select = ({ title = "", option }) => {
  const [category, setCategory] = useState(false);

  return (
    <div className="select my-3">
      <div onClick={(e) => setCategory(!category)}>
        <div className="option">
          <Checkbox className="text-white">{title}</Checkbox>
          {category ? (
            <UpOutlined className="text-white" />
          ) : (
            <DownOutlined className="text-white" />
          )}
        </div>
        <Divider className="my-1" />
      </div>
      {category &&
        [1, 2, 3].map((ele, index) => (
          <div className="option">
            <Checkbox className="text-white">
              {index + 1} {option}
            </Checkbox>
          </div>
        ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-component c-bg-secondary p-3 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <Button>View Report</Button>
        <Checkbox className="text-white">Show paused</Checkbox>
      </div>
      <Divider />
      <Typography.Paragraph className="text-center text-grey">
        No label created Manago Labels
      </Typography.Paragraph>
      <div className="heading">
        <Typography.Paragraph className="text-center ps-2 py-1 c-text-secondary">
          Name Contain
        </Typography.Paragraph>
        <CopyOutlined className="pe-2" />
      </div>
      <Select title="Select Category" option="Category" />
      <div className="heading">
        <Typography.Paragraph className="text-center ps-2 py-1 c-text-secondary">
          Date Range
        </Typography.Paragraph>
        <CopyOutlined className="pe-2" />
      </div>
      <Select title="Last 30 Days" option="Days" />
      <div className="heading">
        <Typography.Paragraph className="text-center ps-2 py-1 c-text-secondary">
          Devices
        </Typography.Paragraph>
        <CopyOutlined className="pe-2" />
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <Checkbox className="text-white">Desktop</Checkbox>
        </div>
        <div className="col-6">
          <Checkbox className="text-white"> Mobile</Checkbox>
        </div>
        <div className="col-6">
          <Checkbox className="text-white">Tablet</Checkbox>
        </div>
        <div className="col-6">
          <Checkbox className="text-white">TVs</Checkbox>
        </div>
        <div className="col-6">
          <Checkbox className="text-white">Shutdown</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
