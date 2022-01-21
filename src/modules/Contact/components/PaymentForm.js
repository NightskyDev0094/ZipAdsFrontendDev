import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';
import '../../../index.css';

const useStyles = makeStyles(() => ({
  PaymentFormContainer: {
    margin: 'auto',
    width: 'fit-content',
    maxWidth: '600px',
    width: '100%',
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
}));

const PaymentForm = ({ paymentCallback }) => {
  const classes = useStyles();
  const [formState, setFormState] = React.useState({
    isFormSubmitted: false,
    fields: {
      cardNumber: '',
      date: '',
      CVCNumber: '',
      zipCode: '',
      fieldHasWhitepace: {
        cardNumber: false,
        date: false,
        CVCNumber: false,
        zipCode: false,
      },
    },
  });

  return (
    <div className="w-100 h-100 paymenForm">
      <div className={clsx(classes.PaymentFormContainer, classes.textStyle)}>
        <p
          className="text-center"
          style={{ color: '#00468f', fontSize: '30px', marginBottom: '64px' }}
        >
          Payment Portal
        </p>
        <form
          name="contactForm"
          className="form-border d-flex flex-column"
          style={{ flex: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (e.target.checkValidity()) {
              paymentCallback(formState.fields);
            }
          }}
        >
          <div className="field-set">
            {/* <label>User Name:</label> */}
            <TextField
              type="number"
              name="cardNumber"
              placeholder="16 Digit Card Number"
              id="cardNumber"
              required
              variant="standard"
              value={formState.fields.cardNumber}
              InputProps={{ disableUnderline: true }}
              onChange={(e) => {
                if (e.target.value.includes(' ')) return;
                setFormState({
                  ...formState,
                  fields: {
                    ...formState.fields,
                    cardNumber: e.target.value,
                  },
                });
              }}
              className="form-control form-style"
            />
          </div>
          <div className="field-set">
            {/* <label>Email Address:</label> */}
            <TextField
              type="text"
              name="text"
              id="date"
              placeholder="Expiration Date (MM/YY)"
              style={{ margin: '10px 0', fontSize: '20px' }}
              required
              className="form-control form-style"
              InputProps={{ disableUnderline: true }}
              value={formState.fields.date}
              onChange={(e) => {
                if (e.target.value.includes(' ')) return;
                setFormState({
                  ...formState,
                  fields: {
                    ...formState.fields,
                    date: e.target.value,
                  },
                });
              }}
              style={{ marginBottom: '32px !important', marginTop: '0 !important' }}
            />
          </div>
          <div className="field-set">
            {/* <label>Password:</label> */}
            <TextField
              type="number"
              name="CVCNumber"
              id="CVCNumber"
              placeholder="CVC Number"
              style={{ margin: '10px 0', fontSize: '20px' }}
              required
              className="form-control form-style"
              InputProps={{ disableUnderline: true }}
              value={formState.fields.CVCNumber}
              onChange={(e) => {
                if (e.target.value.includes(' ')) return;
                setFormState({
                  ...formState,
                  fields: {
                    ...formState.fields,
                    CVCNumber: e.target.value,
                  },
                });
              }}
              style={{ marginBottom: '32px !important', marginTop: '0 !important' }}
            />
          </div>
          <div className="field-set">
            {/* <label>Re-enter Password:</label> */}
            <TextField
              type="number"
              name="zipCode"
              id="zipCode"
              placeholder="Biling Zip Code"
              style={{ margin: '10px 0', fontSize: '20px !i' }}
              required
              className="form-control form-style"
              InputProps={{ disableUnderline: true }}
              value={formState.fields.zipCode}
              onChange={(e) => {
                if (e.target.value.includes(' ')) return;
                setFormState({
                  ...formState,
                  fields: {
                    ...formState.fields,
                    zipCode: e.target.value,
                  },
                });
              }}
              style={{ marginBottom: '32px !important', marginTop: '0 !important' }}
            />
          </div>
          <div
            id="submit"
            className="pull-left w-100 d-flex align-items-end justify-content-center"
            style={{ flex: 1, paddingBottom: '25px' }}
          >
            <input
              style={{
                backgroundColor: '#00468f',
                borderRadius: '8px',
                width: '120px',
                height: '55px',
                fontSize: '18px',
              }}
              type="submit"
              value="Add Card"
              className="btn btn-custom border-0 text-light font-weight-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
