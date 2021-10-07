import React from "react";
import { Card, List, Typography } from "antd";

import "./style.scss";

const OVERVIEW = [
  {
    title: "Impression",
    value: "6,8243",
  },
  {
    title: "Clicks",
    value: "1,231",
  },
  {
    title: "Average CPC",
    value: "6.22",
  },
  {
    title: "CTR",
    value: "2.5%",
  },
  {
    title: "All Conversions",
    value: "135.2",
  },
  {
    title: "All Conversions values",
    value: "135.2",
  },
  {
    title: "All Conversions rates",
    value: "135.2",
  },
  {
    title: "All Conversions values/cost",
    value: "135.2",
  },
  {
    title: "Cost/All Conversions",
    value: "135.2",
  },
];

const Overview = () => {
  return (
    <Card className="my-3 overview-container" size="small">
      <List
        dataSource={OVERVIEW}
        className="m-0 "
        renderItem={(item) => (
          <List.Item className="m-0 p-1">
            <p>{item.title}</p>
            <Typography.Paragraph strong>{item.value}</Typography.Paragraph>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Overview;
