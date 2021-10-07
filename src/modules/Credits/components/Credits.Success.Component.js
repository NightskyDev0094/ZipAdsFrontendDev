import React, {useLayoutEffect, useState, useEffect} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import * as animationUpload from '../../../img/lottie/uploaded.json';


/**
 * This is the a windowResizeHook, 
 * we are getting the width from this hook.
 * This is for creating a responsive mobile view
 * for react-lottie svg
 */
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '600px',
    height: '450px',
    fontFamily: 'Silka',
    '@media (max-width:700px)': {
      width: '65vw',
      height: 'calc(87.89473684210526vw + 10%)'
    },
  },
  successContainer: {
    marginTop: '50px',
    fontFamily: 'Silka'
  },
  title: {
    textAlign: 'center',
    // fontWeight: 800,
    fontFamily: 'Silka'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Silka'
  },
  link: {
     fontFamily: 'Silka' ,
    '&:hover': {
      cursor: 'pointer'
    },
  },
}));

export const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationUpload.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const SuccessMessage = ({clearCreditSuccess}) => {
  const classes = useStyles();
  const history = useHistory();
  const size = useWindowSize();
  const [isMobileView, setIsMobileView] = useState(false)

  useLayoutEffect(() => {
    if(size.width < 760){
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [size.width]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" component="h4">
        You have Successfully purchased a campaign.
      </Typography>
      <div className={classes.successContainer}>
        <Lottie
          style={{ transform: 'scale(1)', margin: !isMobileView ? '0 auto' : '30px auto'}}
          options={defaultOptions}
          height={!isMobileView ? 320: '42.10526315789473vw'}
          width={!isMobileView ? 300 : '39.473684210526315vw'}
        />
      </div>
      <div className={classes.linkContainer}>
        <Typography
          onClick={() => {
            clearCreditSuccess(); 
            history.push('/analytics') 
          }}
          component="h5"
          variant="h5"
          className={classes.link}
        >
          Dashboard
        </Typography>
        <Typography
          onClick={() => {
            clearCreditSuccess(); 
            history.push('/analytics') 
          }}
          component="h5"
          variant="h5"
          className={classes.link}
        >
          Details
        </Typography>
      </div>
    </div>
  );
};

export default SuccessMessage;
