import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Input,
  Chip,
  Button,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputMainLabel } from '../../../sharedComponents/components';

const useStyles = makeStyles({
  chip: {
    marginTop: '.3rem',
    marginBottom: '.3rem',
    marginRight: '.5rem',
  },
  paper: {
    maxWidth: '600px',
    margin: '0 auto',
  },
});

const TargetingInfo = ({
  handleSumbitTargetInfo,
  businessInfo,
  streetVal,
  cityVal,
  stateVal,
  zipVal,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [distance, setDistance] = useState('local');
  const [localeFormat, setLocaleFormat] = useState('zip');
  const [interest, setInterest] = useState([]);
  const [addressState, setAddressState] = useState({
    street: streetVal,
    city: cityVal,
    state: stateVal,
    zip: zipVal,
  });

  const nextClick = () => {
    handleSumbitTargetInfo({ distance, interest, addresses: addressState });
    history.push('/create/expanded-targeting');
  };

  return (
    <Paper className={classes.paper} elevation={2}>
      <InputMainLabel>Find Your Target Audience</InputMainLabel>
      <Box>
        <Typography>
          Find people interested in your business by selecting a location and entering a target
          interest.
        </Typography>
      </Box>

      <Box marginTop="2rem">
        <InputMainLabel>
          Select the distance from your target location that your ads will be distrubuted to.
        </InputMainLabel>
        <RadioGroup
          aria-label="distance"
          name="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        >
          <FormControlLabel value="hyper-local" control={<Radio />} label="Hyper-Local" />
          <FormControlLabel value="local" control={<Radio />} label="Local (5 miles)" />
          <FormControlLabel value="drive" control={<Radio />} label="A drive away (15 miles)" />
          <FormControlLabel value="nationwide" control={<Radio />} label="nationwide" />
        </RadioGroup>
      </Box>
      {distance === 'hyper-local' && (
        <>
          <Box marginTop="2rem">
            <InputMainLabel>Select how you would like to target your location.</InputMainLabel>
            <RadioGroup
              aria-label="localeFormat"
              name="localeFormat"
              value={localeFormat}
              onChange={(e) => setLocaleFormat(e.target.value)}
            >
              <FormControlLabel value="zip" control={<Radio />} label="Zip Code" />
              <FormControlLabel value="city" control={<Radio />} label="City and State" />
            </RadioGroup>
          </Box>
        </>
      )}
      {localeFormat === 'zip' && (
        <Box marginTop="2rem">
          <InputMainLabel>Enter your target location's zip code</InputMainLabel>
          <Input
            value={addressState.zip}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                zip: e.target.value,
              })
            }
            placeholder="Zip Code"
          />
        </Box>
      )}
      {localeFormat === 'city' && (
        <Box marginTop="2rem">
          <InputMainLabel>Enter your target location by city and state code.</InputMainLabel>
          <Input
            value={addressState.city}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                city: e.target.value,
              })
            }
            placeholder="City"
          />
          <Input
            value={addressState.state}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                state: e.target.value,
              })
            }
            placeholder="State"
          />
        </Box>
      )}
      {distance === (local || 'drive') && (
        <Box marginTop="2rem">
          <InputMainLabel>Enter your target location</InputMainLabel>
          <Input
            value={addressState.street}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                city: e.target.value,
              })
            }
            placeholder="Street Address"
          />
          <Input
            value={addressState.city}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                city: e.target.value,
              })
            }
            placeholder="City"
          />
          <Input
            value={addressState.state}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                state: e.target.value,
              })
            }
            placeholder="State"
          />
          <Input
            value={addressState.zip}
            onChange={(e) =>
              setAddressState({
                ...addressState,
                zip: e.target.value,
              })
            }
            placeholder="Zip Code"
          />
        </Box>
      )}

      <Box marginTop="2rem">
        <InputMainLabel>
          Enter a keyword that your target customer will be interested in.
        </InputMainLabel>
        <Input
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="add interests"
          // onKeyPress={addInterest}
        />
        {/* <Box marginTop="1rem">
          {interests.map((int) => (
            <Chip className={classes.chip} label={int} />
          ))}
        </Box> */}
      </Box>
      <Box marginTop="2rem">
        {/* <InputMainLabel>Audience Tags</InputMainLabel>
        <Input
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="add tags"
          onKeyPress={addTag}
        />
        <Box marginTop="1rem">
          {tags.map((tag) => (
            <Chip className={classes.chip} label={tag} />
          ))}
        </Box> */}
        <Box marginTop={3} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/create/connect-social')}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={nextClick}>
            Next
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TargetingInfo;
