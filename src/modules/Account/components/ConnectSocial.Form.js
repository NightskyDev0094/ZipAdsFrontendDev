import React, { useEffect } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { InputMainLabel, FacebookIcon, GoogleIcon } from '../../../sharedComponents/components';

import mailChimpIcom from '../../../img/mailChimp.png';
import SocialItem from './ConnectSocial.SocialItem';
import { ManagedAccountComponent } from './ConnectSocial.ManagedAccount';
import GoogleConnect from './ConnectSocial.GoogleConnect';
import FacebookConnect from './ConnectSocial.FacebookConnect';

const useStyles = makeStyles({
  root: {
    width: '600px !important',
    padding: '2rem',
    '@media (max-width:700px)': {
      width: '100% !important',
      marginBottom: '100px',
    },

    // background: "#e2e2e2",
  },
  socialItem: {
    fontWeight: 800,
    textAlign: 'center',
    filter: 'opactity(.8)',
    cursor: 'pointer',
    borderBottom: '2px solid #fff',
  },
  selected: {
    fontWeight: 800,
    textAlign: 'center',
    borderBottom: '2px solid #ff579d',
    cursor: 'pointer',
  },
  connectSocialHeader: {
    fontWeight: 800,
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '20px',
    '@media (max-width:700px)': {
      fontSize: '3vw',
    },
    '@media (max-width:400px)': {
      fontSize: '4vw',
    },
  },
  connectSocialSubHeader: {
    '@media (max-width:700px)': {
      fontSize: '2.571428571428571vw',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    '@media (max-width:700px)': {
      fontSize: '4vw',
      fontWeight: 'bold',
      marginBottom: '30px',
      paddingLeft: '10px',
    },
  },
  socialIconContainer: {
    '@media (max-width:700px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '10px',
    },
  },
  socialItems: {
    width: '30%',
    display: 'flex',
    // justifyContent="space-between"
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (max-width:700px)': {
      border: '.2px solid grey',
      width: '100%',
      display: 'flex',
      marginBottom: '10px',
      borderRadius: '10px',
    },
  },
  // ['@media (max-width:700px)']: {

  // }
});

const ConnectSocialForm = ({
  basicInformation,
  handleUpdateSocial,
  networksSelected,
  setNetworksSelected,
  ...props
}) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const setSocial = (isChecked, socialName) => {
    const socialRemoved = selected.filter((i) => i !== socialName);
    const socialAdded = [...selected, socialName];

    isChecked ? setSelected(socialAdded) : setSelected(socialRemoved);
  };

  useEffect(() => {
    handleUpdateSocial(selected);
    setNetworksSelected({ ...networksSelected, ...selected });
  }, [selected]);

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography className={classes.connectSocialHeader}>
        Select Ad Networks and Connect to Accounts
      </Typography>
      <Typography className={classes.connectSocialSubHeader}>
        Choose which platforms you want to publish your ad to.
      </Typography>
      <Typography className={classes.connectSocialSubHeader}>
        Don’t be intimidated! These are just the formal names for the different kinds of ads we’ll
        run for you. We recommend checking off all of them to optimize your campaign’s success.
      </Typography>
      <InputMainLabel>Choose which networks to run ads on.</InputMainLabel>
      <Box
        className={classes.socialIconContainer}
        display="flex"
        justifyContent="space-between"
        marginTop={2}
      >
        <SocialItem
          site="facebook"
          displayName="Facebook Ad"
          className={classes.socialItems}
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook feed ad')}
          {...props}
        />
        <SocialItem
          site="facebook"
          displayName="Instagram Ad"
          className={classes.socialItems}
          handleCheck={(isChecked) => setSocial(isChecked, 'instagram ad')}
          {...props}
        />
        <SocialItem
          site="facebook"
          displayName="Facebook Display Network Ad"
          className={classes.socialItems}
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook display ad')}
          {...props}
        />
        <SocialItem
          isConnected
          site="google"
          className={classes.socialItems}
          displayName="Google Adwords"
          handleCheck={(isChecked) => setSocial(isChecked, 'google search ad')}
          {...props}
        />
        <SocialItem
          isConnected
          site="google"
          className={classes.socialItems}
          displayName="Google Display Network Ad"
          handleCheck={(isChecked) => setSocial(isChecked, 'google display ad')}
          {...props}
        />
      </Box>
      <ManagedAccountComponent basicInformation={basicInformation} {...props} />
      <FacebookConnect {...props} />
      <GoogleConnect {...props} />
    </Paper>
  );
};

export default ConnectSocialForm;
