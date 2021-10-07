import React from 'react';
import { Box, Typography, Button, makeStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import SelectAccount from './SelectAccount';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    margin: '20px auto',
    width: '50%',
    '@media (max-width:500px)': {
      width: '80%',
    },
  },
  box: {
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '170px',
    '@media (max-width:500px)': {
      marginTop: '30px',
    },
  },
  submitButtonContainer: {
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '60px',
    '@media (max-width:500px)': {
      marginTop: '30px',
    },
  },
  formBody: {
    padding: '30px 0',
  },
}));

/**
 * This component is the Conversion form
 * @param {function} handleSubmit
 * @param {string} name
 * @param {function} setName
 * @param {string} value
 * @param {function} setValue
 * @param {string} googleAdAccount
 * @param {string} setGoogleAdAccount
 * @returns <Component />
 */
const ConversionForm = ({
  handleSubmit,
  name,
  setName,
  value,
  setValue,
  adAccount,
  handleUpdateAdAccount,
  accountData,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h1" component="h2">
        Enter your conversion info
      </Typography>
      <Typography className={classes.subTitle}>
        Enter basic information about your conversion action to generate a conversion code and start
        tracking your users actions. As you accumulate more data on your users your ads will become
        more effective.
      </Typography>
      <div className={classes.formBody}>
        <Box className={classes.box}>
          <Typography className={classes.title} variant="h5" component="h5">
            Conversion Action Name
          </Typography>
          <Typography className={classes.subTitle}>
            A name for your conversion action that helps you identify it. For example: Product name
            purchase.
          </Typography>
          <TextField onChange={(e) => setName(e.target.value)} value={name} />
        </Box>
        <Box className={classes.box}>
          <Typography variant="h5" component="h5">
            Conversion Value
          </Typography>
          <Typography>The monetary value of your conversion.</Typography>
          <TextField onChange={(e) => setValue(e.target.value)} value={value} />
        </Box>
        <Box className={classes.box}>
          <Typography variant="h5" component="h5">
            Google Ads Account
          </Typography>
          <Typography>Select your google ad account associated with this conversion.</Typography>
          <SelectAccount
            accountData={accountData}
            adAccount={adAccount}
            handleUpdateAdAccount={handleUpdateAdAccount}
          />
        </Box>
        <Box className={classes.submitButtonContainer}>
          <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Box>
      </div>
    </Box>
  );
};

ConversionForm.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  googleAdAccount: PropTypes.string,
  setGoogleAdAccount: PropTypes.func,
  type: PropTypes.string,
  setType: PropTypes.func,
};

ConversionForm.defaultProps = {
  handleSubmit: () => {},
  name: 'name',
  setName: () => {},
  value: 'value',
  setValue: () => {},
  googleAdAccount: '',
  setGoogleAdAccount: () => {},
  type: '',
  setType: () => {},
};

export default ConversionForm;
