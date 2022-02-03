import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';
import {Input} from '@material-ui/core';

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

const Subscription = ({
  getBusinessInfo,
  updateBusinessInfo,
  businessInfo,
  businessInfoLoading,
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [plan, setPlan] = useState('');
  const [autoRenew, setAutoRenew] = useState('');
  useEffect(() => {
    // Get Subscription Info values
    getBusinessInfo();
  }, []);
  useEffect(() => {
    // Set Subscription Info values
    if(!businessInfoLoading){
      setSavedVals();
    }
  }, [businessInfo]);

  const submitSubscriptionInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('plan', plan);
    formData.append('auto_renew', autoRenew);
    updateBusinessInfo(formData);
    // Update form state
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setPlan(businessInfo.plan || '');
    setAutoRenew(businessInfo.auto_renew || '');
    // }
  };

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.SubscriptionContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Subscription
        </p>
        {edit === false ? (
        <>
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
            onClick={(e) => setEdit(true)}
          >
            Edit
          </Button>
          </div>
          </>
            ) : (
              <>
                  <div>
                    <p className="font-weight-light m-0">Plan:</p>
                    <p>
                    <Input
                      value={plan}
                      onChange={(e) =>
                        setPlan(e.target.value)
                      }
                      placeholder="Plan"
                    />
                    </p>
                  </div>
                  <div>
                    <p className="font-weight-light m-0">Auto Renew:</p>
                    <p>
                    <Input
                      value={autoRenew}
                      onChange={(e) =>
                        setAutoRenew(e.target.value)
                      }
                      placeholder="AutoRenew"
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
                    className="text-light font-weight-bold border-0"
                    style={{
                      backgroundColor: '#00468f',
                      borderRadius: '8px',
                      width: '120px',
                      height: '55px',
                      fontSize: '18px',
                    }}
                    onClick={(e) => submitSubscriptionInfos()}
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
  businessInfo: state.businessInfo.businessInfos[0],
  businessInfoLoading: state.businessInfo.businessInfoLoading,
});

export default connect(mapStateToProps, {
  getBusinessInfo,
  updateBusinessInfo
})(Subscription);