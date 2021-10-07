import React, { useState, useEffect, Fragment } from 'react';
import { Box, Typography, Select, MenuItem, Paper, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';

/**
 * This is a temp function that
 * removes unneccessary id numbers from business
 * names. Until I can solve the bug, this is the
 * solution
 */

const parseBusinessNames = (account) => {
  const startIndex = account.name.split('').findIndex((char) => !char.match(/[a-z ]/i));
  if (startIndex === -1) {
    return account;
  }
  const substring = account.name.substring(startIndex, account.name.length);
  account.name = account.name.replace(substring, '');
  return account;
};

/**
 * reusable components for when we add more Account types
 * @param {string} title
 * @param {object} classes
 * @param {object} socialAccounts
 * @param {object || string} selectedSocialAccount
 * @param {function} handleSocialAccountUpdate
 * @param {object} styles
 * @returns <Component />
 */
const AccountSelectorComponent = ({
  title,
  classes,
  socialAccounts,
  selectedSocialAccount,
  handleSocialAccountUpdate,
  styles,
}) => {
  const [tempSocialTitle, setTempSocialTitle] = useState([{account_id: 5369441074}]);
  return (
    <Box className={classes.accountSelectorRoot}>
      <Typography className={classes.accountSelectorTitle} component="h6" variant="h6">
        {title}
      </Typography>
      <Select
        className={classes.accountSelectorSelect}
        value={selectedSocialAccount}
        onChange={(e) => handleSocialAccountUpdate(e.target.value)}
      >
        {socialAccounts.length && socialAccounts.map((socialAccount) => {
          const fixedBusinessName = parseBusinessNames(socialAccount);
          return (
            <MenuItem
              className={classes.accountSelectorMenuItem}
              key={socialAccount.account_id || socialAccount.ad_account_id}
              value={socialAccount.account_id || socialAccount.ad_account_id}
            >
              {/* {fixedBusinessName.account_id || fixedBusinessName.account_id} */}
              {socialAccount.account_id || socialAccount.ad_account_id}
            </MenuItem>
          );
        })}
        {!socialAccounts.length && title === 'Select a Google Ads Account' && tempSocialTitle.map((socialAccount) => {
          // const fixedBusinessName = parseBusinessNames(socialAccount);
          return (
            <MenuItem
              className={classes.accountSelectorMenuItem}
              key={socialAccount.account_id || socialAccount.ad_account_id}
              value={socialAccount.account_id || socialAccount.ad_account_id}
            >
              {/* {fixedBusinessName.account_id || fixedBusinessName.account_id} */}
              {socialAccount.account_id || socialAccount.ad_account_id}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

AccountSelectorComponent.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object,
  socialAccounts: PropTypes.object,
  selectedSocialAccount: PropTypes.object,
  handleSocialAccountUpdate: PropTypes.func,
  styles: PropTypes.object,
};

AccountSelectorComponent.defaultProps = {
  title: 'Title has not been supplied',
  classes: {},
  socialAccounts: [],
  selectedSocialAccount: '',
  handleSocialAccountUpdate: () => {},
  styles: {},
};

const useStyles = makeStyles(() => ({
  paper: {
    height: '250px',
    marginTop: '100px',
    padding: '30px',
    fontFamily: 'Silka',
    '@media (max-width:700px)': {
      margin: '100px auto',
      width: '80vw',
      marginLeft: '100px',
      height: 'fit-content'
    },
    '@media (max-width:500px)': {
      width: '100%',
      marginLeft: 0 
    }
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  },

  accountSelectorRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '20px',
    '@media (max-width:700px)': {
      flexDirection: 'column'
    }
  },
}));

/**
 * Component that displays users accounts and gives them an option to
 * connect their accounts
 * @param {array} socialsToPost - parent state that contains SOCIAL_ACCOUNTS
 * @param {string} fbAccount - selected fb account
 * @param {string} gaAccount - selected google account
 * @param {func} handleUpdateGaAdAccount - update google account with users selected account
 * @param {func} handleUpdatefbAdAccount - update facebook account with users selected account
 * @param {array} fbAccountData - users fb accounts
 * @param {array} gaAccountdata - users google accounts
 * @param {object} styles - passed styles
 * @returns <Component />
 */
const SelectAccount = ({
  gaAdAccounts,
  fbAdAccounts,
  fbPages,
  socialsToPost,
  fbAccount,
  gaAccount,
  fbPage,
  handleUpdateGaAdAccount,
  handleUpdateFbAdAccount,
  handleUpdateFbPage,
  fbAccountData,
  gaAccountData,
  styles,
}) => {
  const classes = useStyles();
  const SOCIALS_ACCOUNTS = {
    FACEBOOK_FEED_AD: 'facebook feed ad',
    FACEBOOK_DISPLAY_AD: 'facebook display ad',
    GOOGLE_SEARCH_AD: 'google search ad',
    GOOGLE_DISPLAY_AD: 'google display ad',
    INSTAGRAM_AD: 'instagram ad',
  };

  return (
    <Paper
      className={classes.paper}
      style={{ ...styles?.paper }}
      elevation={3}
      style={{ display: socialsToPost.length ? '' : 'none' }}
    >
      <div style={{ ...styles?.titleContainer }} className={classes.titleContainer}>
        {socialsToPost.length && (
          <Typography variant="h5" component="h5">
            Account Selector
          </Typography>
        )}
        {socialsToPost.length && (
          <div style={{ ...styles?.subTitle }} className={classes.subTitle}>
            Select an account you may have with us.
          </div>
        )}
      </div>
      <div style={{ ...styles?.body }} className={classes.body}>
        {(socialsToPost.includes(SOCIALS_ACCOUNTS.GOOGLE_SEARCH_AD) ||
          socialsToPost.includes(SOCIALS_ACCOUNTS.GOOGLE_DISPLAY_AD)) && (
          <AccountSelectorComponent
            title={'Select a Google Ads Account'}
            classes={classes}
            socialAccounts={gaAccountData}
            selectedSocialAccount={gaAccount}
            handleSocialAccountUpdate={handleUpdateGaAdAccount}
            styles={{}}
          />
        )}
        {(socialsToPost.includes(SOCIALS_ACCOUNTS.FACEBOOK_FEED_AD) ||
          socialsToPost.includes(SOCIALS_ACCOUNTS.FACEBOOK_DISPLAY_AD) ||
          socialsToPost.includes(SOCIALS_ACCOUNTS.INSTAGRAM_AD)) && (
          <>
            <AccountSelectorComponent
              title={'Select a Facebook Ads Account'}
              classes={classes}
              socialAccounts={fbAccountData}
              selectedSocialAccount={fbAccount}
              handleSocialAccountUpdate={handleUpdateFbAdAccount}
              styles={{}}
            />
          </>
        )}
      </div>
    </Paper>
  );
};

SelectAccount.propTypes = {
  socialsToPost: PropTypes.array,
  fbAccount: PropTypes.string,
  gaAccount: PropTypes.string,
  handleUpdateGaAdAccount: PropTypes.func,
  handleUpdateFbAdAccount: PropTypes.func,
  fbAccountData: PropTypes.array,
  gaAccountData: PropTypes.array,
  styles: PropTypes.object,
};

SelectAccount.defaultProps = {
  socialsToPost: [],
  fbAccount: '',
  gaAccount: '',
  handleUpdateGaAdAccount: () => {},
  handleUpdateFbAdAccount: () => {},
  fbAccountData: [],
  gaAccountData: [],
  styles: {},
};

export default SelectAccount;
