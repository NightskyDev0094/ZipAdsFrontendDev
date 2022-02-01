import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Button } from 'antd';
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
    marginBottom: '20px',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const PaymentHistory = () => {
  const classes = useStyles();
  const paymentColumns = [
    {
      title: 'No.',
      dataIndex: 'key',
      key: 'key',
      width: '65px',
    },
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
      width: '165px',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '110px',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '165px',
    },
    {
      title: '',
      dataIndex: 'button',
      key: 'button',
      fixed: 'right',
      width: '200px',
      render: (value, index) => (
        <Button
          className="text-light border-0"
          style={{
            backgroundColor: '#00468f',
            borderRadius: '8px',
            width: '170px',
            height: '55px',
          }}
        >
          More Details
        </Button>
      ),
    },
  ];
  const [paymentData, setPaymentData] = useState([
    {
      key: '1',
      item: 'Monthly Subscription',
      amount: '$9.99',
      date: 'Feb 17, 2022',
    },
    {
      key: '2',
      item: 'Monthly Subscription',
      amount: '$9.99',
      date: 'Feb 17, 2022',
    },
    {
      key: '3',
      item: 'Monthly Subscription',
      amount: '$9.99',
      date: 'Feb 17, 2022',
    },
    {
      key: '4',
      item: 'Monthly Subscription',
      amount: '$9.99',
      date: 'Feb 17, 2022',
    },
  ]);

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.paymentInfoContainer, classes.textStyle)}>
        <p className={classes.infoTitle}>Make a Payment</p>
        <div className='payment-history'>
          <Table
            pagination={false}
            columns={paymentColumns}
            scroll={{ x: 210 }}
            dataSource={paymentData}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
