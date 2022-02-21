import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_PAYMENT_OPTIONS } from '../../../environmentVariables.js';

const useStyles = makeStyles(() => ({
  paymentInfoContainer: {
    margin: 'auto',
    width: 'fit-content',
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

const PaymentInfo = ({
  paypalOrderId,
  paymentAmount,
  setPaypalOrderId,
  setPaymentAmount,
  submitPaymentInfos,
  paypalStatus,
  paypalIntent
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);


  return (
    <div className="w-100" style={{padding: '60px 0px 80px 0'}}>
      <div className={clsx(classes.paymentInfoContainer, classes.textStyle)}>
        <p className={classes.infoTitle}>Make a Payment</p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Amount Due:</p>
            <p>{paymentAmount}</p>
          </div>
        </div>
        <div
          style={{
            paddingTop: '25px',
            textAlign: 'center',
          }}
        >
          <PayPalScriptProvider options={PAYPAL_PAYMENT_OPTIONS}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                      purchase_units: [
                          {
                              amount: {
                                  value: paymentAmount,
                              },
                          },
                      ],
                  });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        // const name = details.payer.name.given_name;
                        // alert(`Transaction completed by ${name}`);
                        console.log('PAYPAL ORDER DETAILS', details)
                        // setPaypalOrderId()
                        submitPaymentInfos(details);
                    });
                }}
              />
          </PayPalScriptProvider>
          <p>Order # {paypalOrderId} Payment Status: {paypalStatus}</p>
          {/* <Button
            className="border-0"
            style={{
              backgroundColor: '#4bf067',
              borderRadius: '8px',
              width: '140px',
              height: '55px',
              color: '#00468f',
            }}
          >
            Submit
          </Button> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
})(PaymentInfo);