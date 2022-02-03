import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';
import { getBusinessInfo, updateBusinessInfo } from '../../../actions/businessInfoActions';
import {Input} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  InfoContainer: {
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
    if(!businessInfoLoading){
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
    setEdit(false)
  }
  const setSavedVals = () => {
    // if (businessInfo.campaign_type === 'Draft' || businessInfo.campaign_type === 'Template') {
    setBusinessName(businessInfo.business_name || '');
    setWebsite(businessInfo.business_url || '');
    setIndustry(businessInfo.industry || '');
    setStreet(businessInfo.street || '');
    setApartment(businessInfo.apartment || '');
    setCity(businessInfo.city || '');
    setState(businessInfo.state || '');
    setZip(businessInfo.zip || '');
    console.log("Business info value::::", businessInfo.business_url)
    // }
  };

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.InfoContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Business Information
        </p>
        {edit === false ? (
          <>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Business Name:</p>
            <p>{businessName}</p>
            
          </div>
          <div>
            <p className="font-weight-light m-0">Website:</p>
            <p>{website}</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Business Address:</p>
            <p>{street}</p>
            <p>{apartment}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Industry:</p>
            <p>{industry}</p>
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
          <div>
            <div className={classes.info}>
              <div>
                <p className="font-weight-light m-0">Business Name:</p>
                <p>
                <Input
                  value={businessName}
                  onChange={(e) =>
                    setBusinessName(e.target.value)
                  }
                  placeholder="Business Name"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Website:</p>
                <p>
                <Input
                  value={website}
                  onChange={(e) =>
                    setWebsite(e.target.value)
                  }
                  placeholder="Website"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Business Address:</p>
                <p>
                <Input
                  value={street}
                  onChange={(e) =>
                    setStreet(e.target.value)
                  }
                  placeholder="Address Line 1"
                />
                </p>
                <p>
                <Input
                  value={apartment}
                  onChange={(e) =>
                    setApartment(e.target.value)
                  }
                  placeholder="Address Line 2"
                />
                </p>
                <p>
                <Input
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder="City"
                />
                </p>
                <p>
                <Input
                  value={state}
                  onChange={(e) =>
                    setState(e.target.value)
                  }
                  placeholder="State"
                />
                </p>
                <p>
                <Input
                  value={zip}
                  onChange={(e) =>
                    setZip(e.target.value)
                  }
                  placeholder="Zip"
                />
                </p>
              </div>
              <div>
                <p className="font-weight-light m-0">Industry:</p>
                <p>
                <Input
                  value={industry}
                  onChange={(e) =>
                    setIndustry(e.target.value)
                  }
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
})(BusinessInfo);
