import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';

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
}));

const PaymentInfo = () => {
  const classes = useStyles();

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.paymentInfoContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Payment Portal
        </p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Preferred Card:</p>
            <p>AMEX ending in 5555</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Expiration Date:</p>
            <p>08/24</p>
          </div>
        </div>
        <div
          style={{
            paddingTop: '25px',
            textAlign: 'center',
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
        <p
          className="text-center m-0"
          style={{ color: '#00468f', fontSize: '30px', paddingTop: '80px' }}
        >
          Make a Payment
        </p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Amount Due:</p>
            <p>$9.99</p>
          </div>
        </div>
        <div
          style={{
            paddingTop: '25px',
            textAlign: 'center',
          }}
        >
          <Button
            className="font-weight-bold border-0"
            style={{
              backgroundColor: '#4bf067',
              borderRadius: '8px',
              width: '120px',
              height: '55px',
              fontSize: '18px',
              color: '#00468f',
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
