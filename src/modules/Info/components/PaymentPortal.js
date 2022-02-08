import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaymentForm from './PaymentForm';
import PaymentInfo from './PaymentInfo';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';

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

const PaymentPortal = ({
  getBusinessInfo,
  updateBusinessInfo,
  businessInfo,
  businessInfoLoading,
}) => {
  const [paymentFields, setPaymentFields] = useState();
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  
  const paymentCallback = useCallback((form) => {
    setPaymentFields(form);
    // console.log(form);
  }, []);
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

  const submitSignInInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('email', email);
    updateBusinessInfo(formData);
    // Update form state
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setPassword(businessInfo?.password || '');
    setEmail(businessInfo?.email || '');
    // }
  };

  return (
    <div className="w-100 h-100">
      {!paymentFields ? <PaymentForm paymentCallback={paymentCallback} /> : <PaymentInfo />}
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
})(PaymentPortal);