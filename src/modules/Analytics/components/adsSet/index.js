import React from "react";
import { Typography } from "antd";

import "./style.scss";

const AdsSet = () => {
  return (
    <div className="ads-set-component mt-3">
      {[...new Array(5)].map((ele, index) => (
        <div className={`adset-component my-2 ${index === 0 && "active"}`}>
          <div className="adset text-center">
            <Typography.Paragraph className="m-0 sm-font py-1">
              Ad 1
            </Typography.Paragraph>
          </div>
          <Typography.Paragraph className="m-0 sm-font text-center small">
            76.6%
          </Typography.Paragraph>
        </div>
      ))}
    </div>
  );
};

export default AdsSet;
