import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';

const InfoItem = ({ header, userInfo }) => (
  <Box marginTop="1rem" marginBottom="1rem">
    <Typography>
      <strong>{header}</strong>
    </Typography>
    {userInfo ? (
      <Typography>{userInfo}</Typography>
    ) : (
      <Typography>
        <i>No Info Provided</i>
      </Typography>
    )}
  </Box>
);

export default InfoItem;
