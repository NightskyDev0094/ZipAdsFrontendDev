import React from 'react';
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
    marginBottom: '100px',
    '@media (max-width:700px)': {
      fontSize: '4vw',
      height: 'calc(800px + 20%)',
      width: '80vw !important',
    },
    '@media (max-width:1500px)': {
      margin: '100px auto',
    },
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
  connectSocialSubHeader: {},
  socialIconContainer: {
    '@media (max-width:700px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'fit-content',
    },
  },
  socialItems: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const ConnectSocialForm = ({
  basicInformation,
  handleUpdateSocial,
  networksSelected,
  setNetworksSelected,
  socialsToPost,
  selected,
  setSelected,
  ...props
}) => {
  const classes = useStyles();
  const [loggedInFacebook, setLoggedInFacebook] = React.useState(false);
  const [loggedInGoogle, setLoggedInGoogle] = React.useState(false);
  const [fbFeedChecked, setFbFeedChecked] = React.useState(true);
  const [fbDisplayChecked, setFbDisplayChecked] = React.useState(true);
  const [instagramChecked, setInstagramChecked] = React.useState(true);
  const [gaSearchChecked, setGaSearchChecked] = React.useState(true);
  const [gaDisplayChecked, setGaDisplayChecked] = React.useState(true);

  React.useEffect(() => {
    if (socialsToPost.includes('facebook feed ad')) {
      setFbFeedChecked(true);
    }
    if (socialsToPost.includes('facebook display ad')) {
      setFbDisplayChecked(true);
    }
    if (socialsToPost.includes('instagram ad')) {
      setInstagramChecked(true);
    }
    if (socialsToPost.includes('google search ad')) {
      setGaSearchChecked(true);
    }
    if (socialsToPost.includes('google display ad')) {
      setGaDisplayChecked(true);
    }
  }, []);

  const setSocial = (isChecked, socialName) => {
    const socialRemoved = selected.filter((i) => i !== socialName);
    const socialAdded = [...selected, socialName];
    isChecked ? setSelected(socialAdded) : setSelected(socialRemoved);
  };

  React.useEffect(() => {
    // handleUpdateSocial(selected);
    setNetworksSelected({ ...networksSelected, ...selected });
    // console.log('networksSelected:::', networksSelected);
  }, [selected]);

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography className={classes.connectSocialHeader}>
        Select Ad Networks and Connect to Accounts
      </Typography>
      <Typography className={classes.connectSocialSubHeader}>
        Choose which platforms you want to publish to your ad to. Then connect your business accounts
        or let us manage your ads.
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
          checked={fbFeedChecked}
          setChecked={setFbFeedChecked}
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook feed ad')}
          {...props}
        />
        <SocialItem
          site="facebook"
          displayName="Instagram Ad"
          className={classes.socialItems}
          checked={instagramChecked}
          setChecked={setInstagramChecked}
          handleCheck={(isChecked) => setSocial(isChecked, 'instagram ad')}
          {...props}
        />
        <SocialItem
          site="facebook"
          displayName="Facebook Audience Network Ad"
          className={classes.socialItems}
          checked={fbDisplayChecked}
          setChecked={setFbDisplayChecked}
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook display ad')}
          {...props}
        />
        <SocialItem
          isConnected
          site="google"
          className={classes.socialItems}
          displayName="Google Adwords"
          checked={gaSearchChecked}
          setChecked={setGaSearchChecked}
          handleCheck={(isChecked) => setSocial(isChecked, 'google search ad')}
          {...props}
        />
        <SocialItem
          isConnected
          site="google"
          className={classes.socialItems}
          displayName="Google Display Network Ad"
          checked={gaDisplayChecked}
          setChecked={setGaDisplayChecked}
          handleCheck={(isChecked) => setSocial(isChecked, 'google display ad')}
          {...props}
        />
      </Box>
    </Paper>
  );
};

export default ConnectSocialForm;
