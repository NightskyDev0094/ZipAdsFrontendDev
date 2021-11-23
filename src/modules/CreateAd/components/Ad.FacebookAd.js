import React from 'react';
import { Box, Button } from '@material-ui/core';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';

const GoogleAd = () => (
  <Box>
    <InputMainLabel>Facebook Feed Content</InputMainLabel>
    <Box>
      <Input multiline={true} />
      <InputSmallLabel>Post text giving context to your content</InputSmallLabel>
    </Box>
    <Box marginTop="1rem">
      <Input multiline={true} />
      <InputSmallLabel>Some text about why people should engage with your business</InputSmallLabel>
    </Box>
    <Box marginTop="1rem">
      <Input />
      <InputSmallLabel>The URL your ad will link to </InputSmallLabel>
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
    {/* TODO: ADD GOOGLE KEYWORD GROUPS */}
  </Box>
);

export default GoogleAd;
