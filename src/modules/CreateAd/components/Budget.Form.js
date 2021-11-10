import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import SocialDisplays from './ConnectSocial.Displays';

const BudgetForm = ({ handleSubmitBudget, socialsToPost, ...props }) => {
  const history = useHistory();
  //
  const [google_budget, setGoogleBudget] = useState('5.00');
  const [google_cpc, setGoogleCPC] = useState('1.00');
  const [ga_campaign_length, setGACampaignLength] = useState('7');
  const [fb_campaign_length, setFBCampaignLength] = useState('7');
  const [facebook_budget, setFacebookBudget] = useState('5.00');
  const [objective, setObjective] = useState('Conversions');

  const nextClick = () => {
    
    handleSubmitBudget({
      google_budget,
      facebook_budget,
      objective,
      google_cpc,
      ga_campaign_length,
      fb_campaign_length,
    });

    history.push('/create/summary');
    if (!socialsToPost || !socialsToPost.length) history.push('/create/summary');
    else if (socialsToPost.includes('facebook ad')) {
      history.push('/create/facebook');
    } else if (socialsToPost.includes('google adwords')) {
      history.push('/create/google');
    }
  };

  return (
    <Box textAlign="left">
      <InputMainLabel>Create a Budget and Select your Objective</InputMainLabel>
      <Typography>
        Enter the budget for your ad campaigns, select your advertising objective, and select which
        ad accounts to post to.
      </Typography>
      <InputMainLabel>Not sure how much to spend?</InputMainLabel>
      <Typography>
        We recommend you set your daily budgets to $5.00 when testing your new ads.
      </Typography>
      {socialsToPost.includes('google search ad') && (
        <Box marginTop="1rem">
          <InputMainLabel>Daily Google Ads Budget</InputMainLabel>

          <Input
            small
            onChange={(e) => setGoogleBudget(e.target.value)}
            value={google_budget}
            defaultValue="5.00"
          />
          <InputSmallLabel>
            Whats the max amount you want to spend on Google Ads daily
          </InputSmallLabel>
        </Box>
      )}
      {socialsToPost.includes('google search ad') && (
        <Box marginTop="1rem">
          <InputMainLabel>Google Ads CPC</InputMainLabel>

          <Input
            small
            onChange={(e) => setGoogleCPC(e.target.value)}
            value={google_cpc}
            defaultValue="1.00"
          />
          <InputSmallLabel>
            Whats the max amount you want to spend for a click on your Google Ad
          </InputSmallLabel>
        </Box>
      )}
      {socialsToPost.includes('google search ad') && (
        <Box marginTop="1rem">
          <InputMainLabel>Google Ads Campaign Length</InputMainLabel>

          <Input
            small
            onChange={(e) => setGACampaignLength(e.target.value)}
            value={ga_campaign_length}
            defaultValue="1.00"
          />
          <InputSmallLabel>How long should your Google Ad run (in days)</InputSmallLabel>
        </Box>
      )}
      {socialsToPost.includes('facebook feed ad') && (
        <Box marginTop="1rem">
          <InputMainLabel>Daily Facebook Ads Budget</InputMainLabel>
          <Input
            small
            onChange={(e) => setFacebookBudget(e.target.value)}
            value={facebook_budget}
            defaultValue="5.00"
          />
          <InputSmallLabel>
            Whats the max amount you want to spend on Facebook Ads daily?
          </InputSmallLabel>
        </Box>
      )}
      <Box marginTop="1rem">
        <InputMainLabel>Unsure of your advertising objective?</InputMainLabel>
        <Typography>
          We recommend setting your objective to generate sales or signups. This will help you find
          customers for your business.
        </Typography>
        <InputMainLabel>Objective</InputMainLabel>
        <RadioGroup
          aria-label="distance"
          name="distance"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        >
          <FormControlLabel
            value="Conversions"
            control={<Radio />}
            label="Generate sales or signups"
          />
          <FormControlLabel
            value="Brand Awareness"
            control={<Radio />}
            label="Make people aware of my business"
          />
          <FormControlLabel
            value="Store Traffic"
            control={<Radio />}
            label="Increase customers visiting at my businesses physical location"
          />
          <FormControlLabel value="Traffic" control={<Radio />} label="Generate web traffic" />
        </RadioGroup>
      </Box>
      <Box marginTop={3} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/create/expanded-targeting')}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={nextClick}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default BudgetForm;
