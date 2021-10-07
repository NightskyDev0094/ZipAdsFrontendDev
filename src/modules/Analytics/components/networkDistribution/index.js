import React from "react";
import { Card, Slider, Radio, Select } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import "./style.scss";

const { Option } = Select;

const NetworkDistribution = () => {
  return (
    <Card className="my-3 py-3 network-container" size="small">
      <div className="text-center radio-container">
        <Radio.Group size="large" value="top">
          <Radio.Button value="top" className="px-5">
            Horizontal
          </Radio.Button>
          <Radio.Button value="left" className="px-5">
            Vertical
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="mt-4 text-center">
        <Radio.Group size="small" value="top">
          <Radio.Button value="top">
            <AlignCenterOutlined className="me-2" />
            Search
          </Radio.Button>
          <Radio.Button value="top1">
            <AlignCenterOutlined className="me-2" />
            Partners
          </Radio.Button>
          <Radio.Button value="top1">
            <AlignCenterOutlined className="me-2" />
            Display
          </Radio.Button>
          <Radio.Button value="top1">
            <AlignCenterOutlined className="me-2" />
            YT Display
          </Radio.Button>
          <Radio.Button value="top1">
            <AlignCenterOutlined className="me-2" />
            YT Search
          </Radio.Button>
          <Radio.Button value="top1">
            <AlignCenterOutlined className="me-2" />
            Cross
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="mt-4 container">
        <div className="row my-2">
          <div className="col-8 col-sm-8 col-xxl-10">
            <Slider
              defaultValue={30}
              handleStyle={{ backgroundColor: "white" }}
              trackStyle={{ backgroundColor: "#aa0f0f" }}
            />
          </div>
          <div className="col-4 col-sm-4 col-xxl-2">
            <Select defaultValue="Select" className="w-100">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-8 col-sm-8 col-xxl-10">
            <Slider
              defaultValue={30}
              handleStyle={{ backgroundColor: "white" }}
              trackStyle={{ backgroundColor: "#0a78de" }}
            />
          </div>
          <div className="col-4 col-sm-4 col-xxl-2">
            <Select defaultValue="Select" className="w-100">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-8 col-sm-8 col-xxl-10">
            <Slider
              defaultValue={30}
              handleStyle={{ backgroundColor: "white" }}
              trackStyle={{ backgroundColor: "#0ade8c" }}
            />
          </div>
          <div className="col-4 col-sm-4 col-xxl-2">
            <Select defaultValue="Select" className="w-100">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NetworkDistribution;
