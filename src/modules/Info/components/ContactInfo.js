import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  contactInfo: {
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

const ContactInfo = () => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.contactInfo, classes.textStyle)}>
        <p className={classes.infoTitle}>Contact Information</p>
        {edit === false ? (
          <div>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">First Name:</p>
                <p>JOHN</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Last Name:</p>
                <p>APPLESEED</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Phone Number:</p>
                <p>(555) 555-5555</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Email Address:</p>
                <p>jappleseed@gmail.com</p>
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
                className="text-light font-weight-bold border-0Z"
                style={{
                  backgroundColor: '#00468f',
                  borderRadius: '8px',
                  width: '120px',
                  height: '55px',
                  fontSize: '18px',
                }}
                onClick={(e) => setEdit(true)}
              >
                Edit
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">First Name:</p>
                <p>JOHN</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Last Name:</p>
                <p>APPLESEED</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Phone Number:</p>
                <p>(555) 555-5555</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Email Address:</p>
                <p>jappleseed@gmail.com</p>
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
                className="text-light font-weight-bold border-0Z"
                style={{
                  backgroundColor: '#00468f',
                  borderRadius: '8px',
                  width: '120px',
                  height: '55px',
                  fontSize: '18px',
                }}
                onClick={(e) => setEdit(false)}
              >
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
