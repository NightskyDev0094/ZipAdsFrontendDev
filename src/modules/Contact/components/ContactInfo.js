import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';
import { getUser, updateUser } from '../../../actions/userActions';
import {Input} from '@material-ui/core';
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
}));

const ContactInfo = ({
  getBusinessInfo,
  updateBusinessInfo,
  businessInfo,
  businessInfoLoading,
  getUser,
  updateUser,
  user,
  userLoading,
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  // Get and set business info data
  useEffect(() => {
    // Get Contact Info values
    getBusinessInfo();
  }, []);
  useEffect(() => {
    // Set Contact Info values
    if(!businessInfoLoading){
      setSavedBusinessVals();
    }
  }, [businessInfo]);
  // Get and set user data
  useEffect(() => {
    // Get Contact Info values
    getUser();
  }, []);
  useEffect(() => {
    // Set Contact Info values
    if(!userLoading){
      setSavedUserVals();
    }
  }, [user]);

  const submitContactInfos = () => {
    // Submit updated values to business info
    let formDataBusinessInfo = new FormData();
    formDataBusinessInfo.append('phone', phone);
    updateBusinessInfo(formDataBusinessInfo);
    // Submit updated values to business info
    let formDataUser = new FormData();
    formDataUser.append('first_name', firstName);
    formDataUser.append('last_name', lastName);
    formDataUser.append('email', email);
    updateUser(formDataUser);
    // Update form state
    setEdit(false)
  }
  const setSavedBusinessVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setPhone(businessInfo.phone || '');
    // }
  };
  const setSavedUserVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setFirstName(user.first_name || '');
    setLastName(user.last_name || '');
    setEmail(user.email || '');
    // }
  };

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.contactInfo, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Contact Information
        </p>
        {edit === false ? (
          <div>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">First Name:</p>
                <p>{firstName}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Last Name:</p>
                <p>{lastName}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Phone Number:</p>
                <p>{phone}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Email Address:</p>
                <p>{email}</p>
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
          </div>
        ) : (
          <div>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">First Name:</p>
                <p>
                <Input
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                  placeholder="First Name"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Last Name:</p>
                <p>
                <Input
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  placeholder="Last Name"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Phone Number:</p>
                <p>
                <Input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="Phone"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Email Address:</p>
                <p>
                <Input
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Email"
                />
                </p>
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
                onClick={(e) => submitContactInfos()}
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

const mapStateToProps = (state) => ({
  businessInfo: state.businessInfo.businessInfos[0],
  businessInfoLoading: state.businessInfo.businessInfoLoading,
  user: state.user.user,
  userLoading: state.user.userLoading,
});

export default connect(mapStateToProps, {
  getBusinessInfo,
  updateBusinessInfo,
  getUser,
  updateUser
})(ContactInfo);
