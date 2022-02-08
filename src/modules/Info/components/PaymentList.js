import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Switch, Button } from 'antd';
import CancelIcon from '@material-ui/icons/Cancel';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  paymentInfoContainer: {
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
    marginTop: '50px',

    '@media (max-width:965px)': {
      gridTemplateColumns: '1fr',
    },
  },
  infoTitle: {
    color: '#00468f',
    fontSize: '32px',
    textAlign: 'center',
    margin: '0',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const PaymentList = ({ addCardCallback }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([
    {
      key: '1',
      card: 'AMEX',
      ends_in: '5555',
      expiration: 'Exp. 08/24',
      status: true,
    },
    {
      key: '2',
      card: 'VISA',
      ends_in: '0202',
      expiration: 'Exp. 06/23',
      status: false,
    },
    {
      key: '3',
      card: 'VISA',
      ends_in: '3',
      expiration: 'Exp. 06/23',
      status: false,
    },
    {
      key: '4',
      card: 'VISA',
      ends_in: '4',
      expiration: 'Exp. 06/23',
      status: false,
    },
  ]);

  const subscriptionColumns = [
    {
      title: 'Card',
      dataIndex: 'card',
      key: 'card',
      width: '100px',
    },
    {
      title: 'Ends in',
      dataIndex: 'ends_in',
      key: 'ends_in',
      width: '100px',
    },
    {
      title: 'Expiration',
      dataIndex: 'expiration',
      key: 'expiration',
      width: '165px',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      fixed: 'right',
      width: '90px',
      render: (value, index) => (
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          checked={value}
          onChange={(checked) => {
            setSubscriptionData(
              subscriptionData.map((data) => {
                if (data.key == index.key) return { ...data, status: checked };
                else return { ...data };
              })
            );
          }}
        />
      ),
    },
    {
      title: 'Remove',
      dataIndex: '',
      key: 'x',
      width: '90px',
      fixed: 'right',
      render: (index) => (
        <CancelIcon
          onClick={() => {
            let data = [];
            for (let i = 0; i < subscriptionData.length; i++) {
              if (subscriptionData[i].key != index.key) data.push(subscriptionData[i]);
            }
            setSubscriptionData(data);
          }}
          style={{
            display: 'block',
            margin: 'auto',
            color: 'grey',
            fontSize: '34px',
            cursor: 'pointer',
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData.map((data) => {
        if (data.status) return data.key;
      })
    );
  }, []);

  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData.map((data) => {
        if (data.status) return data.key;
      })
    );
  }, [subscriptionData]);

  const rowSelection = {
    selectedRowKeys,
  };

  return (
    <div className="w-100">
      <div className={clsx(classes.paymentInfoContainer, classes.textStyle)}>
        <p className={classes.infoTitle}>Payment Portal</p>
        <div className="payment-list" style={{ padding: '50px 0px 25px 0' }}>
          <Table
            dataSource={subscriptionData}
            columns={subscriptionColumns}
            rowSelection={rowSelection}
            scroll={{ x: 210 }}
            pagination={{ pageSize: 3 }}
          />
        </div>
        <div
          style={{
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
              minWidth: '120px',
              height: '55px',
              fontSize: '18px',
            }}
            onClick={() => {
              addCardCallback(true);
            }}
          >
            Add New Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
