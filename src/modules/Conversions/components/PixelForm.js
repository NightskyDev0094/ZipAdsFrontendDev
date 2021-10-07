import React from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  makeStyles,
  TextField,
} from '@material-ui/core';
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
  },
  box: {
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '170px',
  },
  submitButtonContainer: {
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '60px',
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
 * @param {string} adAccount
 * @param {string} handleUpdateAdAccount
 * @param {array} accountData
 * @returns <Component />
 */
const PixelForm = ({
  accountData,
  handleSubmit,
  name,
  setName,
  adAccount,
  handleUpdateAdAccount,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h1" component="h2">
        Enter your pixel info
      </Typography>
      <Typography className={classes.subTitle}>
        Enter basic information about your conversion pixel to generate a Facebook Pixel code and
        start tracking your users actions. As you accumulate more data on your users your ads will
        become more effective.
      </Typography>
      <div className={classes.formBody}>
        <Box className={classes.box}>
          <Typography variant="h5" component="h5">
            Pixel Name
          </Typography>
          <Typography>
            A name for your Facebook Pixel that helps you identify it. For example: Product name
            purchase.
          </Typography>
          <TextField onChange={(e) => setName(e.target.value)} value={name} />
        </Box>
        <Box className={classes.box}>
          <Typography variant="h5" component="h5">
            Facebook Ads Account
          </Typography>
          <Typography>Select your Facebook ad account associated with this conversion.</Typography>
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

PixelForm.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.string,
  adAccount: PropTypes.string,
  handleUpdateAdAccount: PropTypes.func,
  accountData: PropTypes.array,
};

PixelForm.defaultProps = {
  handleSubmit: () => {},
  name: 'name',
  setName: () => {},
  adAccount: '',
  handleUpdateAdAccount: () => {},
  adAccount: [],
};

export default PixelForm;
