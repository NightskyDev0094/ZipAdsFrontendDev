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

const useStyles = makeStyles(() => ({
  BlueText: { color: '#0b6ea5', 'font-weight': 600, width: '100%', textAlign: 'center' },
  InputItem: {
    width: '100%',
    height: '3rem',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    borderRadius: '0.25rem',
    fontSize: '1.25rem',
    marginBottom: '1em',

    ['@media (min-width: 450px)']: { height: '3.5rem', fontSize: '1.7rem' },
  },
  FormSection: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '4em',
    ['@media (min-width: 450px)']: { width: '45em' },
  },
  SelectItem: {
    width: '100%',
    height: '3rem',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    borderRadius: '0.25rem',
    marginBottom: '1em',
    fontSize: '1.25rem',
    display: 'inline-block',
    cursor: 'pointer',

    ['& > option']: { padding: '1.75em 0px' },

    ['@media (min-width: 450px)']: { height: '3.5rem', width: '85%', fontSize: '1.7rem' },
  },
  AToZ: {
    display: 'none',
    ['@media (min-width: 450px)']: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      border: '1px solid #cccccc',
      color: '#cccccc',
      borderRadius: '0.25rem',
      textAlign: 'center',
      height: '3.5rem',
      width: '13%',
      marginLeft: '2%',
      fontSize: '1.7rem',
    },
  },
  RadioItem: {
    width: '100%',
    fontSize: '1.75rem',
    display: 'flex',
    alignItems: 'center',
    ['& > input']: {
      height: '1em',
      width: '1em',
      marginLeft: '25%',
      padding: '0.5em',
      cursor: 'pointer',
    },
    ['& > label']: { marginLeft: '1.25em' },
  },

  SubmitButton: {
    width: '40%',
    height: '3rem',
    padding: '0.5rem 1rem',
    border: 'solid 1px #cccccc',
    backgroundColor: '#0b6ea5',
    color: '#cccccc',
    borderRadius: '0.5rem',
    margin: '1em auto',
    display: 'block',

    ['@media (min-width: 450px)']: { height: '3.5rem', fontSize: '1.7rem' },
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
    <Container maxWidth="md" sx={{ marginTop: '20em' }}>
      <form
        style={{ width: '100%', paddingTop: '3em', paddingBottom: '3em' }}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <Typography variant="h2" gutterBottom className={classes.BlueText}>
          Let's Get to Know Your Business
        </Typography>
        {/* GET TO KNOW BUSINESS SECTION  */}
        <Box className={classes.FormSection}>
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
            placeholder="Your Website URL (http://example.com)"
            value={businessUrl}
            onChange={(e) => setBusinessUrl(e.target.value)}
          />
          <Input
            disableUnderline
            className={classes.InputItem}
            placeholder="Business Street Address (555 Main St)"
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
        <Box className={classes.FormSection}>
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
          <h2 style={{ width: '100%', textAlign: 'center' }}>
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
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
        </Box>
        {/* CONNECT SOCIAL NETWORKS SECTION  */}
        <Box className={classes.FormSection}>
          <h2 style={{ width: '100%', textAlign: 'center' }}>
            Let's connect your social accounts:
          </h2>
          <ConnectSocialNetworkButton socialNetworkName="Facebook" />
          <ConnectSocialNetworkButton socialNetworkName="Google" />
          <p style={{ width: '100%', textAlign: 'center', fontSize: '1em' }}>
            <a style={{ textDecoration: 'underline' }}>Need help?</a>
          </p>
        </Box>
        <Box className={classes.FormSection}>
          <button type="submit" className={classes.SubmitButton}>
            Submit
          </button>
        </Box>
      </form>
    </Container>
  );
}

export default connect(null, {
  addAddresses,
  addBusinessInfo,
})(OnboardingPageOne);
