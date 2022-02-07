import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputMainLabel } from '../../../sharedComponents/components';

import SocialItem from './ConnectSocial.SocialItem';

const useStyles = makeStyles({
  root: {
    width: '400px',
    padding: '2rem',
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
  subTitle: {
    fontSize: '20px',
  },
});

// eslint-disable-next-line react/prop-types
const ConnectSocialForm = ({ handleUpdateSocial }, props) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  // const [loggedInFacebook, _] = React.useState(false);
  // const [loggedInGoogle, setLoggedInGoogle] = React.useState(false);

  // console.log('PROPS::::', props)

  const setSocial = (isChecked, socialName) => {
    // eslint-disable-next-line no-empty
    // if (!loggedInFacebook && socialName === 'Facebook Ad') {
    // } else if (!loggedInGoogle && socialName === 'Google Adwords') {

    // }
    const socialRemoved = selected.filter((i) => i !== socialName);
    const socialAdded = [...selected, socialName];

    if (isChecked) {
      setSelected(socialAdded)
    } else {
      setSelected(socialRemoved);
    }
  };

  React.useEffect(() => {
    handleUpdateSocial(selected);
  }, [selected]);

  return (
    <div>
      <InputMainLabel>Social Platforms</InputMainLabel>
      <Typography className={classes.subTitle}>
        Choose which platforms you want to publish to your ad to. Templates are optimized for each,
        but be sure to double check if you changed any media or text content
      </Typography>
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <SocialItem
          isConnected
          site="facebook"
          displayName="Facebook Feed"
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook feed')}
          // isChecked
          //   ? setSelected([selected, "facebook feed"])
          //   : setSelected(selected.filter((i) => i !== "facebook feed"))

          {...props}
        />
        <SocialItem
          site="facebook"
          displayName="Facebook Ad"
          handleCheck={(isChecked) => setSocial(isChecked, 'facebook ad')}
          {...props}
        />
        <SocialItem
          isConnected
          site="google"
          displayName="Google Adwords"
          handleCheck={(isChecked) => setSocial(isChecked, 'google adwords')}
          {...props}
        />
      </Box>
      <Box>{/* <GoogleLogin /> */}</Box>
    </div>
  );
};

export default ConnectSocialForm;
