import React from "react";
import { Menu, Card, Dropdown, Typography, Select } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import "./style.scss";

let data = [
  {
      "keyword_text": "green tea",
      "match_type": "EXACT",
      "keyword_id": 12372780,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "jasmine tea",
      "match_type": "EXACT",
      "keyword_id": 15921531,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "green tea powder",
      "match_type": "EXACT",
      "keyword_id": 17904352,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "green tea weight loss",
      "match_type": "EXACT",
      "keyword_id": 30491411,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "sencha",
      "match_type": "EXACT",
      "keyword_id": 43280452,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "best green tea",
      "match_type": "EXACT",
      "keyword_id": 114870371,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "organic green tea",
      "match_type": "EXACT",
      "keyword_id": 114870451,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "matcha",
      "match_type": "EXACT",
      "keyword_id": 374104695,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "arizona green tea",
      "match_type": "EXACT",
      "keyword_id": 383565914,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "matcha green tea",
      "match_type": "EXACT",
      "keyword_id": 383567834,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "hojicha",
      "match_type": "EXACT",
      "keyword_id": 407165304,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "genmaicha",
      "match_type": "EXACT",
      "keyword_id": 407165424,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "egcg",
      "match_type": "EXACT",
      "keyword_id": 415449024,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "gunpowder tea",
      "match_type": "EXACT",
      "keyword_id": 486960849,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "matcha tea",
      "match_type": "EXACT",
      "keyword_id": 654377601,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "matcha green tea powder",
      "match_type": "EXACT",
      "keyword_id": 836822559,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "matcha powder",
      "match_type": "EXACT",
      "keyword_id": 1352719075,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "the matcha",
      "match_type": "EXACT",
      "keyword_id": 3653314212,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  },
  {
      "keyword_text": "lipton green tea",
      "match_type": "EXACT",
      "keyword_id": 302154873555,
      "ad_group": "Matcha Latted8c1cc42-bb65-4b03-9ba9-0f7ec99902cc",
      "ad_group_id": 119161950957,
      "campaign": "Matcha Lattecaaa2085-b344-4ca6-a50a-2f9f475bbc25",
      "campaign_id": 12523630512,
      "impressions": 0,
      "seven_day_cost": 0
  }
]

const { Option } = Select;

const menu = (
  <Menu>
     {/*<Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item> */}
  </Menu>
);

const Compare = () => {
  const _renderExtra = () => (
    <div className="d-flex justify-content-between align-items-center">
      <Select defaultValue="Select">
        
      </Select>
      <Typography.Paragraph className="m-0 px-2">By</Typography.Paragraph>
      
      <Dropdown overlay={menu} className="ms-2">
        <AlignCenterOutlined />
      </Dropdown>
    </div>
  );
  return (
    <>
      {" "}
      <Card
        className="my-3 campaigns-container"
        title={<Typography.Title level={4}>Top</Typography.Title>}
        extra={_renderExtra()}
        size="small"
      />
      <table className="w-100 mb-5">
        <tr>
          <th>Compaigns</th>
          <th className="text-center">Impressions</th>
          <th className="text-center">Clicks</th>
          <th className="text-center">Conv</th>
          <th className="text-center">Conv rate</th>
          <th className="text-center">Conv val</th>
          <th className="text-center">Conv val/cost</th>
        </tr>
        {data.map((ele) => (
          <tr>
            <td className="pt-3 text-muted">{ele.campaign}</td>
            <td className="pt-3 text-center text-muted">{ele.impressions}</td>
            {/* <td className="pt-3 text-center text-muted">323</td>
            <td className="pt-3 text-center text-muted">22.22</td>
            <td className="pt-3 text-center text-muted">11.05</td>
            <td className="pt-3 text-center text-muted">12</td>
            <td className="pt-3 text-center text-muted">0</td> */}
          </tr>
        ))}
      </table>
    </>
  );
};

export default Compare;
