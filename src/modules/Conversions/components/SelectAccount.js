import React, { useEffect } from 'react';
import { Box, Select, MenuItem } from '@material-ui/core';

const SelectAccount = ({ handleUpdateAdAccount, adAccount, accountData, classes }) => {
  const [account, setAccount] = React.useState('');

  useEffect(() => {
    handleUpdateAdAccount(account);
  }, [account]);

  return (
    <Box textAlign="left">
      <Select className={classes} value={adAccount} onChange={(e) => setAccount(e.target.value)}>
        {accountData.map((adAccount) => (
          <MenuItem className={classes} value={adAccount.account_id || adAccount.ad_account_id}>
            {adAccount.account_id || adAccount.ad_account_id}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectAccount;
