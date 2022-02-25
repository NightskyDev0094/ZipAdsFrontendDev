import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Switch, Button } from 'antd';
import clsx from 'clsx';
import { getSubscription, updateSubscription, addSubscription } from '../../../actions/subscriptionActions';
// import {Input, Switch} from '@material-ui/core';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_SUBSCRIPTION_OPTIONS } from '../../../environmentVariables.js';

const useStyles = makeStyles(() => ({
  SubscriptionContainer: {
    margin: 'auto',
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
    marginBottom: '20px',

    '@media (max-width:576px)': {
      fontSize: '24px',
    },
  },
}));

const Subscription = ({
  getSubscription, 
  updateSubscription,
  subscription,
  subscriptionLoading,
}) => {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [plan, setPlan] = useState('');
  const [subscriptionId, setSubscriptionId] = useState('');
  const [subscriptionReviseVal, setSubscriptionReviseVal] = useState('');
  const [autoRenew, setAutoRenew] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([]);

  const subscriptionColumns = [
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      width: '165px',
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      width: '90px',
    },
    {
      title: 'Price',
      dataIndex: 'monthly_amount',
      key: 'monthly_amount',
      width: '90px',
    },
    {
      title: 'Auto-Renew',
      dataIndex: 'active',
      key: 'active',
      fixed: 'right',
      width: '150px',
      render: (value, index) => (
        <PayPalScriptProvider options={PAYPAL_SUBSCRIPTION_OPTIONS}>
            <PayPalButtons
              createSubscription={(data, actions) => {
                console.log("PAYPAL VARS!!!", subscriptionId, subscriptionReviseVal)
                  return actions.subscription.revise(subscriptionId, {
                    'status': subscriptionReviseVal
                  });
                }
              }
              onApprove={(data, actions) => {
                  return actions.subscription.get().then((details) => {
                      let orderId = data.orderID
                      // setPaypalOrderId()
                      toggleSubscription(orderId, details);
                  });
              }}
            />
        </PayPalScriptProvider>
      ),
    },
  ];

  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData.map((data) => {
        if (data.active) return data.key;
      })
    );
    // Get Subscription Info values
    getSubscription();
  }, []);
  useEffect(() => {
    // Set Subscription Info values
    if(!subscriptionLoading){
      setSavedVals();
    }
  }, [subscription]);

  const submitSubscriptionInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('plan', plan);
    updateSubscription(formData);
    // Update form state
    setEdit(false)
  }
  const toggleSubscription = (orderId, details) => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('active', details.status);
    updateSubscription(formData);
    // Update form state
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (subscription.campaign_type === 'Draft' || subscription.campaign_type === 'Template') {
    setPlan(subscription?.plan || '');
    setSubscriptionId(subscription?.paypal_subscription_id || '');
    console.log("setSavedVals Running!!!", subscription?.paypal_subscription_id, subscriptionReviseVal)
    if(subscription?.length >= 1) {
      setSubscriptionData([subscription[subscription.length - 1]]);
    }
    
    if(subscription?.active === 'SUSPENDED') {
      setAutoRenew(false);
      setSubscriptionReviseVal('ACTIVE');
    }else if (subscription?.active === 'ACTIVE') {
      setAutoRenew(true);
      setSubscriptionReviseVal('SUSPENDED');
    }
  };
  useEffect(() => {
    setSelectedRowKeys(
      subscriptionData?.map((data) => {
        if (data.active) return data.key;
      })
    );
  }, [subscriptionData]);

  const rowSelection = {
    selectedRowKeys,
  };

  return (
    <div className="w-100 h-100 subscription">
      <div className={clsx(classes.SubscriptionContainer, classes.textStyle)}>
        {edit === false ? (
        <>
        <p className={classes.infoTitle}>Subscription Details</p>
        <div className={classes.info}>
        <Table
          dataSource={subscriptionData}
          columns={subscriptionColumns}
          rowSelection={rowSelection}
          scroll={{ x: 210 }}
          pagination={{ pageSize: 3 }}
        />
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
                      <select
                        value={plan}
                        onChange={(e) =>
                          setPlan(e.target.value)
                        }
                        placeholder="Plan"
                      >
                        <option>Basic - $9.99</option>
                      </select>
                    </p>
                  </div>
                  <div>
                    <p className="font-weight-light m-0">Auto Renew:</p>
                    {/* <p>
                      OFF <Switch
                        onChange={(e) => {
                          setAutoRenew(!autoRenew)
                        }}
                      /> ON
                    </p> */}
                    <PayPalScriptProvider options={PAYPAL_SUBSCRIPTION_OPTIONS}>
                        <PayPalButtons
                          createSubscription={(data, actions) => {
                              return actions.subscription.revise(subscriptionId, {
                                'status': subscriptionReviseVal
                              });
                            }
                          }
                          onApprove={(data, actions) => {
                              return actions.subscription.get().then((details) => {
                                  let orderId = data.orderID
                                  // setPaypalOrderId()
                                  toggleSubscription(orderId, details);
                              });
                          }}
                        />
                    </PayPalScriptProvider>
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
  subscription: state.subscriptions.subscriptions,
  subscriptionLoading: state.subscriptions.subscriptionLoading,
});

export default connect(mapStateToProps, {
  getSubscription, 
  updateSubscription
})(Subscription)