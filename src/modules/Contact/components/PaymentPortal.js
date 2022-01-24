import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaymentForm from './PaymentForm';
import PaymentInfo from './PaymentInfo';

const useStyles = makeStyles(() => ({
  PaymentPortalContainer: {
    margin: 'auto',
    width: 'fit-content',
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

const PaymentPortal = () => {
  const [edit, setEdit] = useState(false);
  const [paymentFields, setPaymentFields] = React.useState();
  const paymentCallback = React.useCallback((form) => {
    setPaymentFields(form);
    console.log(form);
  }, []);

  return (
    <div className="w-100 h-100">
      {!paymentFields ? <PaymentForm paymentCallback={paymentCallback} /> : <PaymentInfo />}
    </div>
  );
};

export default PaymentPortal;
