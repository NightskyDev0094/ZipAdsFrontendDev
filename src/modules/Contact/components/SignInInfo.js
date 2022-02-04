import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';
import { getUser, updateUser } from '../../../actions/userActions';
import {Input} from '@material-ui/core';

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
}));

const SignInInfo = ({
  getUser,
  updateUser,
  user,
  userLoading,
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState(false);
  const [username, setUsername] = useState(false);
  useEffect(() => {
    // Get Contact Info values
    getUser();
  }, []);
  useEffect(() => {
    // Set Contact Info values
    if(!userLoading){
      setSavedVals();
    }
  }, [user]);

  const submitSignInInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('username', username);
    updateUser(formData);
    // Update form state
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (user.campaign_type === 'Draft' || user.campaign_type === 'Template') {
    // setPassword(user.password || '');
    setUsername(user.username || '');
    // }
  };

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.SignInInfoContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Sign-In Information
        </p>
        {edit === false ? (
        <>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">username:</p>
            <p>{username}</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Password:</p>
            <p style={{ webkitTextSecurity: 'disc' }}>{password}</p>
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
            onClick={(e) => setEdit(true)}
          >
            Edit
          </Button>
        </div>
        </>
        ) : (
          <>
              <div>
                <p className="font-weight-light m-0">Username:</p>
                <p>
                <Input
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  placeholder="Username"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Password:</p>
                <p>
                <Input
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Password"
                />
                </p>
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
                onClick={(e) => submitSignInInfos()}
              >
                Save Changes
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  userLoading: state.user.userLoading,
});

export default connect(mapStateToProps, {
  getUser,
  updateUser
})(SignInInfo);