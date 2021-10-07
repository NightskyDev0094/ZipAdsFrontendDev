import React from 'react';

import { Box, Checkbox, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons/';

import { InputMainLabel, FacebookIcon, GoogleIcon } from '../../../sharedComponents/components';

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    width: '30%',
    display: 'flex',
    // justifyContent="space-between"
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  root: {
    width: '400px',
    padding: '2rem',
    border: '1px solid blue',
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
  checkIcon: {
    color: theme.palette.success.main,
  },
  checkbox: {
    padding: 0,
  },
  connectText: {
    fontSize: '10pt',
  },
}));

const LeftColumn = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
  };

  React.useEffect(() => {
    props.handleCheck(checked);
  }, [checked]);

  return (
    <Box
      className={props?.className ? props?.className : classes.itemContainer}
      // className={
      //   selected.includes("facebook feed")
      //     ? classes.selected
      //     : classes.socialItem
      // }
      // onClick={() => selectSocial("facebook feed")}
    >
      <Checkbox
        className={classes.checkbox}
        color="primary"
        onChange={handleChange}
        name="socialcheck"
      />
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        height="25px"
        marginBottom=".5rem"
        marginTop="-10px"
      >
        {props.site === 'facebook' && <FacebookIcon />}
        {props.site === 'google' && <GoogleIcon />}
      </Box>
      <Box textAlign="center" width="100%" display="flex" justifyContent="center">
        <Box width="50%">
          <Typography variant="body2" className={classes.socialItem}>
            {props.displayName}
          </Typography>
        </Box>
      </Box>
      <Box marginTop=".5rem" display="flex" justifyContent="center" width="100%">
        {/* {props.isConnected ? (
          <CheckCircle className={classes.checkIcon} color="secondary" />
        ) : (
          <Button color="secondary" onClick={() => props.handleConnect()}>
            connect
          </Button>
        )} */}
      </Box>
    </Box>
  );
};

export default LeftColumn;
