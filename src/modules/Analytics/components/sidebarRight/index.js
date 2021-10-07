import React from "react";
import { List, Card, Button, Divider, Typography } from "antd";

import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-right-component">
      <Card className="mb-2" title="PPC AUDIT SCORE" size="small">
        <div className="d-flex justify-content-between align-items-center">
          <Typography.Paragraph className="m-0" strong>
            Audit Grade:
          </Typography.Paragraph>
          <Typography.Title level={5} className="m-0 c-text-secondary">
            B
          </Typography.Title>
        </div>
        <Divider className="my-3" />
        <div className="p-1">
          <Button className="w-100">View Report</Button>
        </div>
      </Card>
      <Card className="my-2" title="OPTYMYZER EXPRESS" size="small">
        <List
          dataSource={[1, 2, 3, 4]}
          className="m-0"
          renderItem={(item) => (
            <List.Item>
              <Typography.Text className="m-0" strong>
                Testing new odds
              </Typography.Text>
              <Button size="small">View Report</Button>
            </List.Item>
          )}
        />
      </Card>
      <Card className="my-2" title="QUICK INSIGHTS" size="small">
        <List
          dataSource={[1, 2, 3, 4]}
          className="m-0 "
          renderItem={(item) => (
            <List.Item className="m-0 p-1">
              <List.Item.Meta
                className="m-0 p-0 sm-font"
                avatar={<span className="circle-dot" />}
                title={
                  <p className="sm-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Sidebar;
