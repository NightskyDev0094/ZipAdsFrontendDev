import React from 'react';
import { Box, Grid, Button, Typography } from '@material-ui/core';

import RightColumnWrapper from '../components/Wrapper.RightColumn';
// import LeftColumnWrapper from "../components/Wrapper.LeftColumn";
import GoogleAd from '../components/Ad.Google';

const GoogleAdPage = (props) => (
  <Box maxWidth="950px">
    <Box marginBottom="3rem">
      <Typography variant="h2">Create an Ad</Typography>
    </Box>
    <Grid container>
      <Grid item sm={12} md={6}>
        <RightColumnWrapper>
          <GoogleAd {...props} />
        </RightColumnWrapper>
      </Grid>
    </Grid>
  </Box>
);

export default GoogleAdPage;
