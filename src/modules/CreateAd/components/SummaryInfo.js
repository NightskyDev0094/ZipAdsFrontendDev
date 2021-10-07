import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';

import SummaryCheckout from './SummaryCheckout';

// const useStyles = makeStyles((theme) => ({
//   layout: {
//     width: '40vw'
//   }
// }));

const ListItem = ({ description, content }) => (
  <div>
    --
    {description && <span>{description}:</span>}
    {content && (
      <span>
        <strong>{content}</strong>
      </span>
    )}
  </div>
);

const SummaryInfo = ({ currentCampaign, targetingInfo, budgetInfo, socialsToPost, ...props }) => (
  // const classes = useStyles();
  <section>
    <Box>
      <InputMainLabel>Review and Post Ad</InputMainLabel>
      <Box>
        <Typography>
          Make sure all your info is correct and post your ad to selected networks.
        </Typography>
      </Box>
      <Box>
        <InputMainLabel>Content</InputMainLabel>
        <Box>
          <ListItem description="Title" content={currentCampaign?.campaign_name} />
          <ListItem description="Text" content={currentCampaign?.ad_description} />
          <ListItem description="Url" content={currentCampaign?.ad_link} />
          <ListItem description="Button" content={currentCampaign?.ad_link} />
        </Box>
      </Box>
      <Box marginTop="2rem">
        <InputMainLabel>Audience</InputMainLabel>
        <Box>
          <ListItem content={targetingInfo?.interest} />
        </Box>
      </Box>
      <Box marginTop="2rem">
        <InputMainLabel>Campaign</InputMainLabel>
        <Box>
          {socialsToPost.includes('google search ad') && (
            <ListItem description="Google Search Ad Budget" content={budgetInfo?.google_budget} />
          )}
          <ListItem description="Google Search Ad CPC" content={budgetInfo?.google_cpc} />}
          {socialsToPost.includes('facebook feed ad') && (
            <ListItem description="Facebook Feed Ad Budget" content={budgetInfo?.facebook_budget} />
          )}
          <ListItem description="People interested in" content={budgetInfo?.objective} />
        </Box>
      </Box>
    </Box>
    <SummaryCheckout currentCampaign={currentCampaign} budget={budgetInfo} />
  </section>
);
export default SummaryInfo;
