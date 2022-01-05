import React from 'react';
import BlueTecLandingFooter from './BlueTecLandingFooter';
import BlueTecDashBoardImages from './BlueTecDashBoardImages';
import BlueTecDashBoardHeader from './BlueTecDashBoardHeader';
import BlueTecProgressBar from './BlueTecProgressBar';
import backgroundImage from './images/background/1.png';
import './css/bluetecdashboard.css';
import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inherit',
  },
}));

const BlueTecDashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column'}}>
      <BlueTecDashBoardHeader />
      <BlueTecDashBoardImages />
      <BlueTecLandingFooter />
    </div>
  );
};

export default BlueTecDashBoard;
