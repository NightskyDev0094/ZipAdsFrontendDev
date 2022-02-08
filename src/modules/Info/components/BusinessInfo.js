import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  InfoContainer: {
    margin: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
  formContainer: {
    maxWidth: '800px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  InputItem: {
    width: '100%',
    padding: '14px 8px',
    fontSize: '20px',
    border: '2px solid #c7c7c7',
    borderRadius: '6px',
    outline: 'none',
    ['& > input']: {
      padding: '0 !important',
    },
  },
  formText: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
  },
}));

const BusinessInfo = ({
  getBusinessInfo,
  updateBusinessInfo,
  businessInfo,
  businessInfoLoading,
}) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [businessName, setBusinessName] = useState(false);
  const [website, setWebsite] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [street, setStreet] = useState(false);
  const [apartment, setApartment] = useState(false);
  const [city, setCity] = useState(false);
  const [state, setState] = useState(false);
  const [zip, setZip] = useState(false);
  useEffect(() => {
    // Get Contact Info values
    getBusinessInfo();
  }, []);
  useEffect(() => {
    // Set Contact Info values
    if (!businessInfoLoading) {
      setSavedVals();
    }
  }, [businessInfo]);

  const submitContactInfos = () => {
    // Submit updated values to business info
    let formData = new FormData();
    formData.append('business_name', businessName);
    formData.append('business_url', website);
    formData.append('industry', industry);
    formData.append('street', street);
    formData.append('apartment', apartment);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zip', zip);
    updateBusinessInfo(formData);
    // Update form state
    setEdit(false);
  };
  const setSavedVals = () => {
    setBusinessName(businessInfo?.business_name || '');
    setWebsite(businessInfo?.business_url || '');
    setIndustry(businessInfo?.industry || '');
    setStreet(businessInfo?.street || '');
    setApartment(businessInfo?.apartment || '');
    setCity(businessInfo?.city || '');
    setState(businessInfo?.state || '');
    setZip(businessInfo?.zip || '');
  };

  return (
    <div className="w-100 h-100" style={{padding: '0px 20px'}}>
      <div className={clsx(classes.InfoContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Business Information
        </p>
        {edit === false ? (
          <div className={classes.formContainer}>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">Business Name:</p>
                <p className={classes.formText}>{businessName}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Website:</p>
                <p className={classes.formText}>{website}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Business Address:</p>
                <p className={classes.formText}>{street}</p>
                <p className={classes.formText}>{apartment}</p>
                <p className={classes.formText}>{city}</p>
                <p className={classes.formText}>{state}</p>
                <p className={classes.formText}>{zip}</p>
              </div>
              <div>
                <p className="font-weight-light m-0">Industry:</p>
                <p className={classes.formText}>{industry}</p>
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
                  width: '160px',
                  height: '55px',
                }}
                onClick={(e) => setEdit(true)}
              >
                Edit
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.formContainer}>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">Business Name:</p>
                <p>
                  {/* <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Business Name"
                  /> */}
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    placeholder="Business Name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Website:</p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Website"
                  />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Business Address:</p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Address Line 1"
                  />
                </p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    placeholder="Address Line 2"
                  />
                </p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                </p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                  />
                </p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Zip"
                  />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Industry:</p>
                <p>
                  <Input
                    disableUnderline
                    className={classes.InputItem}
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="Industry"
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
                className="text-light font-weight-bold border-0Z"
                style={{
                  backgroundColor: '#00468f',
                  borderRadius: '8px',
                  width: '160px',
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
  updateBusinessInfo,
})(BusinessInfo);
