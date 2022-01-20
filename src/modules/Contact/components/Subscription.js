import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  SubscriptionContainer: {
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
    margin: '50px 0',

    '@media (max-width:965px)': {
      gridTemplateColumns: '1fr',
      gridGap: '50px',
    },
  },
}));

const Subscription = () => {
  const classes = useStyles();

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.SubscriptionContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Subscription
        </p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Plan:</p>
            <p>Basic - $9.99/month</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Auto Renew:</p>
            <p>ON</p>
          </div>
        </div>
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
