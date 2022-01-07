import React from 'react';
import { Box, Button } from '@material-ui/core';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';

const GoogleAd = () => (
  <Box>
    <InputMainLabel>Google Ad Content</InputMainLabel>
    <Box>
      <Input />
      <InputSmallLabel>This is the URL your ad will link to</InputSmallLabel>
    </Box>
    <Box marginTop="1rem">
      <Input />
      <InputSmallLabel>Tagline for your sponsored listing</InputSmallLabel>
    </Box>
    <Box marginTop="1rem">
      <Input mulitline />
      <InputSmallLabel>Some text about why people should engage with your business</InputSmallLabel>
    </Box>
    <Box marginTop="2rem" display="flex" justifyContent="flex-end">
      <Box marginRight="1rem">
        <Button color="secondary">Cancel</Button>
      </Box>
      <Box>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Box>
  </Box>
);

export default GoogleAd;
