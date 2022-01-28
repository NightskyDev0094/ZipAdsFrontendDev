import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addAddresses } from '../../../actions/userInfoActions';
import { addBusinessInfo } from '../../../actions/businessInfoActions';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { RadioGroup } from '@material-ui/core';
import ConnectSocialNetworkButton from '../components/ConnectSocialNetworkButton';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const useStyles = makeStyles(() => ({
  BlueText: {
    color: '#00468f',
    width: '100%',
    textAlign: 'center',
    fontSize: '32px',
    fontFamily: 'sans-serif',
    letterSpacing: '0.5px',
  },
  InputItem: {
    marginBottom: '1em',
    padding: '14px 8px',
    fontSize: '20px',
    border: '2px solid #c7c7c7',
    borderRadius: '6px',
    outline: 'none',
    ['& > input']: {
      padding: '0 !important',
    },
  },
  FormSection: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '4em',
  },
  SelectItem: {
    fontSize: '14px',
    height: '3rem',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    borderRadius: '5px',
    marginBottom: '1em',
    display: 'inline-block',
    cursor: 'pointer',

    ['& > option']: { padding: '10px 0px' },
  },
  AToZ: {
    display: 'none',
    ['@media (min-width: 450px)']: {
      display: 'inline-block',
      borderRadius: '0.25rem',
      textAlign: 'center',
      marginLeft: '10px',
      fontSize: '14px',
      fontStyle: 'italic',
      marginBottom: '1em',
    },
  },
  RadioItem: {
    width: '100%',
    fontSize: '1.75rem',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem !important',
    ['& > input']: {
      height: '1em',
      width: '1em',
      marginLeft: '25%',
      padding: '0.5em',
      cursor: 'pointer',
    },
    ['& > label']: {
      fontSize: '21px',
      fontFamily: 'system-ui',
      letterSpacing: '0.5px',
      margin: 0,
      paddingLeft: '20px',
    },
  },

  SubmitButton: {
    width: '282px',
    fontFamily: 'Nunito',
    color: 'white',
    padding: '14px 0px',
    backgroundColor: 'rgb(0, 70, 143)',
    fontSize: '23px',
    borderRadius: '6px',
    border: 'none',

    '&:hover': {
      backgroundColor: '#002d5c',
    },
  },
}));

function OnboardingPageOne({ addAddresses, addBusinessInfo }) {
  const history = useHistory();
  const classes = useStyles();

  const submitHandler = () => {
    const businessInfoFormData = new FormData();
    if (businessName) {
      businessInfoFormData.append('business_name', businessName);
    }
    if (industry) {
      businessInfoFormData.append('industry', industry);
    }
    if (businessUrl) {
      businessInfoFormData.append('business_url', businessUrl);
    }
    if (apartment) {
      businessInfoFormData.append('apartment', apartment);
    }
    if (streetAddress) {
      businessInfoFormData.append('street', streetAddress);
    }
    if (city) {
      businessInfoFormData.append('city', city);
    }
    if (stateCode) {
      businessInfoFormData.append('state', stateCode);
    }
    if (zipCode) {
      businessInfoFormData.append('zip', zipCode);
    }

    addBusinessInfo(businessInfoFormData);
    history.push('/onboarding/2');
  };

  const IndustryOptions = [
    'Advertising & Marketing',
    'Art',
    'Auto Repair',
    'Beauty',
    'Business Products & Services',
    'Consumer products & Services',
    'Finance',
    'Fitness',
    'Food',
    'General Retail',
    'Health',
    'In-Home Cleaning & Maintenance',
    'IT Services',
    'Mental Health',
    'Mortgage Broker',
    'Music',
    'Personal Finance',
    'Pet',
    'Real Estate',
    'Restaurant',
    'Social Media',
    'Tech',
    'Television',
    'Transportation',
    'Travel and Lodging',
    'Website Design',
    'Other',
  ];

  const AdvertisingFamiliarity = [
    { id: 'not-familiar', label: "I'm not at all familiar", value: 'not-familiar' },
    { id: 'know-a-few', label: 'I know a few things', value: 'know-a-few' },
    { id: 'know-solid-amount', label: 'I know a solid amount', value: 'know-solid-amount' },
    { id: 'very-familiar', label: "I'm very familiar", value: 'very-familiar' },
  ];

  const [businessName, setBusinessName] = React.useState();
  const [industry, setIndustry] = React.useState(IndustryOptions[0]);
  const [businessUrl, setBusinessUrl] = React.useState();
  const [streetAddress, setStreetAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [stateCode, setStateCode] = React.useState();
  const [zipCode, setZipCode] = React.useState();
  const [apartment, setApartment] = React.useState('');
  const [advertisingFamiliarity, setAdvertisingFamiliarity] = React.useState('');

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: '20em' }}>
        <form
          style={{ width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="input-placeholder"
        >
          <Typography variant="h2" gutterBottom className={classes.BlueText} style={{margin: '0px 10px 0px 20px'}}>
            Let's Get to Know Your Business
          </Typography>
          {/* GET TO KNOW BUSINESS SECTION  */}
          <Box className={classes.FormSection} style={{ display: 'flex', flexDirection: 'column' }}>
            <Input
              disableUnderline
              autoFocus
              className={classes.InputItem}
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <Input
              disableUnderline
              className={classes.InputItem}
              placeholder="Your Website URL"
              value={businessUrl}
              onChange={(e) => setBusinessUrl(e.target.value)}
            />
            <Input
              disableUnderline
              className={classes.InputItem}
              placeholder="Business Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <Input
              disableUnderline
              className={classes.InputItem}
              placeholder="Business City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              disableUnderline
              className={classes.InputItem}
              placeholder="Business State"
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
            />
            <Input
              disableUnderline
              className={classes.InputItem}
              placeholder="Business Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Box>

          <Typography variant="h2" gutterBottom className={classes.BlueText}>
            Select Your Industry
          </Typography>
          {/* SELECT INDUSTRY SECTION  */}
          <Box
            className={classes.FormSection}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <select
              className={classes.SelectItem}
              label="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {IndustryOptions.map((item) => (
                <option key={crypto.randomUUID()} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className={classes.AToZ}>A-Z</div>
          </Box>
          {/* ADVERTISING FAMILIARITY SECTION  */}
          <Box className={classes.FormSection}>
            <h2
              className="mb-4"
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '22px',
                fontFamily: 'sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              How familiar are you with online advertising?
            </h2>
            {AdvertisingFamiliarity.map((item) => (
              <div key={crypto.randomUUID()} className={classes.RadioItem}>
                <input
                  type="radio"
                  name="advertising-familiarity"
                  value={item.value}
                  id={item.id}
                  checked={advertisingFamiliarity === item.value}
                  onChange={(e) => setAdvertisingFamiliarity(e.target.value)}
                />
                <label
                  htmlFor={item.id}
                  style={{ fontSize: '21px', fontFamily: 'system-ui', letterSpacing: '0.5px' }}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </Box>
          {/* CONNECT SOCIAL NETWORKS SECTION  */}
          <Box className={classes.FormSection}>
            <h2
              className="mb-4"
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '22px',
                fontFamily: 'sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Let's connect your social accounts:
            </h2>
            <ConnectSocialNetworkButton socialNetworkName="Facebook" />
            <ConnectSocialNetworkButton socialNetworkName="Google" />
            <p style={{ width: '100%', textAlign: 'center' }}>
              <a
                style={{
                  textDecoration: 'underline',
                  color: '#00468f',
                  fontSize: '21px',
                  fontFamily: 'sans-serif',
                  fontStyle: 'italic',
                }}
              >
                Need help?
              </a>
            </p>
          </Box>
          <Box className={classes.FormSection} style={{display: 'flex', justifyContent: 'center'}}>
            <button type="submit" className={classes.SubmitButton}>
              Submit
            </button>
          </Box>
        </form>
      </Container>
      <BlueTecLandingFooter />
    </>
  );
}

export default connect(null, {
  addAddresses,
  addBusinessInfo,
})(OnboardingPageOne);
