import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';
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
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  useEffect(() => {
    // Get Contact Info values
    getBusinessInfo();
  }, []);
  useEffect(() => {
    // Set Contact Info values
    if(!businessInfoLoading){
      setSavedVals();
    }
  }, [businessInfo]);

  const submitContactInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
    updateBusinessInfo(formData);
    // Update form state
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setFirstName(businessInfo.first_name || '');
    setLastName(businessInfo.last_name || '');
    setPhone(businessInfo.phone || '');
    setEmail(businessInfo.email || '');
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
});

export default connect(mapStateToProps, {
  getBusinessInfo,
  updateBusinessInfo
})(ContactInfo);
