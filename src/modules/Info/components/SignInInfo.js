import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  SignInInfoContainer: {
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

  passwordCheckBox: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',

    '& > input': {
      width: '25px',
      height: '25px',
      marginRight: '0.5rem',

      '@media (max-width:576px)': {
        width: '20px',
        height: '20px',
      },
    },

    '& > p': {
      fontSize: '20px',
      fontWeight: 'lighter',
      margin: 0,

      '@media (max-width:576px)': {
        fontSize: '16px',
      },
    },
  },
}));

const SignInInfo = () => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = React.useState(false);

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.SignInInfoContainer, classes.textStyle)}>
        <p className={classes.infoTitle}>
          Sign-In Information
        </p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Username:</p>
            <p>jappleseed@gmail.com</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Password:</p>
            <p style={{ webkitTextSecurity: password ? 'initial' : 'disc' }}>Password</p>
            <div
              className={classes.passwordCheckBox}
              onClick={() => {
                setPassword(!password);
              }}
            >
              <input
                type="checkbox"
                checked={password}
              />
              <p>Show Password</p>
            </div>
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
            className="text-light border-0"
            style={{
              backgroundColor: '#00468f',
              borderRadius: '8px',
              width: '140px',
              height: '55px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInInfo;
