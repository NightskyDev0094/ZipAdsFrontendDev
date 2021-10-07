import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../environmentVariables';

const columns = [
  {
    title: 'No',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the name of your Ads account.">
        Account Name
      </Tooltip>,
    dataIndex: 'name',
    key: 'name',
    render: (value) => <Link to={`/analytics/${value}`}>{value}</Link>,
  },
  {
    title: '      ',
    dataIndex: 'monthlyBudget',
    key: 'monthlyBudget',
    render: () => '',
  },
  {
    title: '      ',
    dataIndex: 'monthlyBudget',
    key: 'monthlyBudget',
    render: () => '',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the max amount you will spend on this account monthly.">
        Monthly Budget
      </Tooltip>,
    dataIndex: 'monthlyBudget',
    key: 'monthlyBudget',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is your suggested daily budget.">
        Suggestion
      </Tooltip>,
    dataIndex: 'suggestion',
    key: 'suggestion',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This current amount ou have spent on this account.">
        Cost
      </Tooltip>,
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This amount of people who have viewed your campaigns.">
        Impr
      </Tooltip>,
    dataIndex: 'impr',
    key: 'impr',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This number of clicks on your campaigns in this account.">
        Clicks
      </Tooltip>,
    dataIndex: 'clicks',
    key: 'clicks',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This average amount you spend each time someone clicks on one of your ads.">
        Avg CPC
      </Tooltip>,
    dataIndex: 'cpc',
    key: 'cpc',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the overall performance of your campaigns.">
        Quality Scores
      </Tooltip>,
    dataIndex: 'scores',
    key: 'scores',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the number of conversions from your campaigns.">
        Conv
      </Tooltip>,
    dataIndex: 'conv',
    key: 'conv',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the ratio of conversions to clicks on your ads.">
        Cost/Conv
      </Tooltip>,
    dataIndex: 'constconv',
    key: 'constconv',
  },
  {
    title: 
      <Tooltip placement='bottom' title="This is the ratio of conversions to clicks on your ads.">
        ROAS
      </Tooltip>,
    dataIndex: 'roas',
    key: 'roas',
  },
];

const data = [
  {
    accountName: 'Google',
    monthlyBudget: '1000',
    suggestion: '51',
    cost: '12',
    impr: '112',
    clicks: '123',
    cpc: '1233',
    scores: '1.2',
    conv: '123',
    constconv: '12.31',
    roas: '0%',
  },
  {
    accountName: 'Facebook',
    monthlyBudget: '$2352.45',
    suggestion: '51',
    cost: '12',
    impr: '112',
    clicks: '123',
    cpc: '1233',
    scores: '1.2',
    conv: '123',
    constconv: '12.31',
    roas: '0%',
  },
];

const AccountTable = (props) => {
  const [campaignData, setCampaignData] = useState({
    data: [],
    googleData: [],
    googleAccountInfo: [],
    facebookData: [],
  });

  const getGoogleAdAccountStatistics = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    const googleAdAccounts = await axios.get(`${SERVER_URL}/api/google-ad-accounts/`, {
      headers: { Authorization: `Token ${token}` },
    });

    console.log(googleAdAccounts);

    if (googleAdAccounts.data.length) {
      setCampaignData({ data: googleAdAccounts.data });
    }

    // const  googleGACampaigns = await axios.post(`${SERVER_URL}/api/ga-campaigns/`, {
    //     headers: { Authorization: `Token ${token}`}
    //   })

    //   console.log(googleGACampaigns)

    //setCampaignData({ data: googleAdAccounts } )

    // const googleAdCampaigns = await axios.post(
    //   `${SERVER_URL}/api/ga-campaigns/`, {
    //   headers: {Authorization: `Token ${token}`}
    // })

    // console.log(googleAdAccounts)
    // console.log(campaignData)
    // if(googleAdAccounts.data.length){
    //   console.log(googleAdAccounts)
    //   console.log(googleAdCampaigns)
    // }
  };

  useEffect(() => {
    /**Temp until actual async action for facebook */
    getGoogleAdAccountStatistics();
  }, []);

  // if(googleAdAccounts.status !== 200){

  // } else if(!googleAdAccounts.data.length){

  // }

  return (
    <>
      <Table
        columns={columns}
        dataSource={campaignData?.data.map((element, index) => ({ ...element, index: index + 1 }))}
      />
    </>
  );
};

export default AccountTable;
