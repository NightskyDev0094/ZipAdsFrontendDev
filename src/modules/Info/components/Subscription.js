import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Switch, Button } from 'antd';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  SubscriptionContainer: {
    margin: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: '25px',
    fontWeight: '600',

    '@media (max-width:718px)': {
      fontSize: '20px',
    },
  },
  info: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '80px',
    margin: '50px 0',

    '@media (max-width:965px)': {
      gridTemplateColumns: '1fr',
      gridGap: '50px',
    },
  },
  infoTitle: {
    color: '#00468f',
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const Subscription = () => {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([
    {
      key: '1',
      start_date: 'Oct 17, 2021',
      renewal_date: 'Feb 17, 2022',
      plan: 'Basic',
      price: '$9.99',
      auto_renew: false,
    },
    {
      key: '2',
      start_date: 'Oct 17, 2021',
      renewal_date: 'Feb 17, 2022',
      plan: 'Basic',
      price: '$9.99',
      auto_renew: true,
    },
    {
      key: '3',
      start_date: 'Oct 17, 2021',
      renewal_date: 'Feb 17, 2022',
      plan: 'Basic',
      price: '$9.99',
      auto_renew: true,
    },
    {
      key: '4',
      start_date: 'Oct 17, 2021',
      renewal_date: 'Feb 17, 2022',
      plan: 'Basic',
      price: '$9.99',
      auto_renew: true,
    },
    {
      key: '5',
      start_date: 'Oct 17, 2021',
      renewal_date: 'Feb 17, 2022',
      plan: 'Basic',
      price: '$9.99',
      auto_renew: true,
    },
  ]);

  const subscriptionColumns = [
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      width: '165px',
    },
    {
      title: 'Renewal Date',
      dataIndex: 'renewal_date',
      key: 'renewal_date',
      width: '165px',
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      width: '90px',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '90px',
    },
    {
      title: 'Auto-Renew',
      dataIndex: 'auto_renew',
      key: 'auto_renew',
      fixed: 'right',
      width: '150px',
      render: (value, index) => (
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          checked={value}
          onChange={(checked) => {
            setSubscriptionData(
              subscriptionData.map((data) => {
                if (data.key == index.key) return { ...data, auto_renew: checked };
                else return { ...data };
              })
            );
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData.map((data) => {
        if (data.auto_renew) return data.key;
      })
    );
  }, []);

  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData.map((data) => {
        if (data.auto_renew) return data.key;
      })
    );
  }, [subscriptionData]);

  const rowSelection = {
    selectedRowKeys,
  };

  return (
    <div className="w-100 h-100 subscription">
      <div className={clsx(classes.SubscriptionContainer, classes.textStyle)}>
        <p className={classes.infoTitle}>Subscription Details</p>
        <Table
          dataSource={subscriptionData}
          columns={subscriptionColumns}
          rowSelection={rowSelection}
          scroll={{ x: 210 }}
          pagination={{ pageSize: 3 }}
        />
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '25px',
          }}
        >
          <Button
            className="text-light font-weight-bold border-0"
            style={{
              backgroundColor: '#00468f',
              borderRadius: '8px',
              width: '120px',
              height: '55px',
              fontSize: '18px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
