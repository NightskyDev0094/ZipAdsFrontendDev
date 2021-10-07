import React from 'react';
import { Box, Typography } from '@material-ui/core';

import ProfileInfoItem from './ProfileInfoItem';

const Profile = ({ basicInfo }) => {
  const { businessName, website, streetAddress, city, state, zip } = basicInfo;
  return (
    <Box>
      <Box marginBottom="2rem">
        <Typography variant="h2">User Profile</Typography>
      </Box>
      <Typography variant="h4">Basic Info</Typography>
      <ProfileInfoItem header="Business Name" userInfo={businessName} />
      <ProfileInfoItem header="Website URL" userInfo={website} />
      <ProfileInfoItem header="Street Address" userInfo={streetAddress} />
      <ProfileInfoItem header="City" userInfo={city} />
      <ProfileInfoItem header="State" userInfo={state} />
      <ProfileInfoItem header="Zip" userInfo={zip} />

      <Typography variant="h4">Payment Info</Typography>
      <Box />
    </Box>
  );
};

export default Profile;
