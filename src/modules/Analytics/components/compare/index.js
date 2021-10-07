import React from "react";
import { Card, Select, Typography } from "antd";
import  Chart  from "../chart";

import "./style.scss";

const { Option } = Select;

const Compare = () => {
  return (
    <>
      <Card
        className="my-3 compare-container"
        title={<Typography.Title level={4}>Compare</Typography.Title>}
        extra={
          <Select defaultValue="Select">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        }
        size="small"
      >
        <Chart />
      </Card>
    </>
  );
};

export default Compare;
