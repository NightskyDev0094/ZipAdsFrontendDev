import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 50px',
    flexDirection: 'column',
    fontFamily: 'Silka',
  },
  link: {
      textDecoration: 'underline',
      margin: '0px 5px',
      '&:hover': {
          cursor: 'pointer'
      }
  }
}));

const DefaultAdPreview = ({ AdDisplayTitle, styles, ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper style={{ ...styles?.container }} className={classes.container} elevation={3}>
      <AdDisplayTitle
        styles={{
          displayNameContainer: { width: '100%', textAlign: 'center', marginBottom: '20px' },
          displayName: {},
        }}
        name="No Network Selected"
      />
      <Typography className={classes.body} variant="h5">
        Social Network not selected, please return to the
        <strong className={classes.link} onClick={() => history.push('/create/connect-social')}>
          select network page
        </strong>
        and select networks to create ad
      </Typography>
    </Paper>
  );
};

export default DefaultAdPreview;
