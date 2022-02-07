import React, { useEffect, useState } from 'react';
import { Paper, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useWindowSize } from '../shared_logic/custom_hooks';
import { STATIC_URL } from '../../../environmentVariables';


const SuccessImageSmall = STATIC_URL + 'img/successImageSmall.jpg';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  paper: {
    backgroundSize: 'cover',
    width: '65%',
    margin: '2.7624309392265194vw auto',
    height: '44.19889502762431vw',
    borderRadius: '20px',
    position: 'relative',
    padding: '0 1.3812154696132597vw',
  },
  successImage: {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${SuccessImageSmall})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'relative',
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    height: '62%',
    paddingLeft: '4vw',
    position: 'relative',
  },
  button: {
    backgroundColor: 'white',
    border: '2px solid #2070FB',
    color: '#2070FB',
    width: '10.883977900552486vw',
    height: '3.6464088397790055vw',
    fontSize: '1.6574585635359116vw',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(25, 118, 210, 1)',
      color: 'white',
    },
  },
  // Mobile Styling
  successMobileContainer: {
    width: '90%',
    margin: '100px auto',
    height: '300px',
    padding: '30px',
  },
  mobileTitle: {
    fontFamily: 'Silka',
    width: '100%',
    textAlign: 'center',
  },
  mobileSubTitle: {
    fontFamily: 'Silka',
    width: '100%',
    textAlign: 'center',
    padding: '15px 10px'
  },
  mobileButtonContainer: {
    height: '50%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileButton: {
    backgroundColor: 'white',
    border: '2px solid #2070FB',
    color: '#2070FB',
    fontWeight: 'bold'
  }
}));

// Because the photo is edited, its stretchs on Mobile.
//so we implement a different design
const SuccessPageMobile = ({ classes, history }) => {
  return (
    <Paper elevation={3} className={classes.successMobileContainer}>
      <Typography variant="h3" className={classes.mobileTitle}>
        Success!
      </Typography>
      <Typography variant="h5" className={classes.mobileSubTitle}>
        You have successfully created a Campaign, continue on to the Dashboard!
      </Typography>
      <div className={classes.mobileButtonContainer}>
        <Button
          className={classes.mobileButton}
          onClick={() => history.push('/analytics')}
          variant="contained"
          color="primary"
        >
          Dashboard
        </Button>
      </div>
    </Paper>
  );
};

const SuccessPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const screenSize = useWindowSize();
  const [isInTabletView, setIsInTabletView] = useState(false);

  useEffect(() => {
    if (screenSize.width < 700) {
      setIsInTabletView(true);
    } else {
      setIsInTabletView(false);
    }
  }, [screenSize.width]);

  return (
    <div className={classes.container}>
      {!isInTabletView && (
        <div className={classes.paper}>
          <div className={classes.successImage}>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.button}
                onClick={() => history.push('/analytics')}
                variant="contained"
                color="primary"
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
      {isInTabletView && <SuccessPageMobile classes={classes} history={history} />}
    </div>
  );
};

export default SuccessPage;
