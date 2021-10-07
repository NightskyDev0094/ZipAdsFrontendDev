import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  mainBody: {
    backgroundColor: '#95c2de',
  },
  mainBox: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    backgroundColor: '#95c2de',
    margin: '30px auto',
  },
  err: {
    color: '#ffffff',
    fontFamily: ['Nunito Sans', 'sans-serif'],
    fontSize: '11rem',
  },
  far: {
    fontSize: '8.5rem',
    color: '#ffffff',
  },
  err2: {
    color: '#ffffff',
    fontFamily: ['Nunito Sans', 'sans-serif'],
    fontSize: '11rem',
  },
  msg: {
    textAlign: 'center',
    fontFamily: ['Nunito Sans', 'sans-serif'],
    fontSize: '1.6rem',
    position: 'absolute',
    width: '100%',
    marginTop: '50px'
  },
  home: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container404: {
    width: '90%',
    height: '300px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const NotFound404 = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.mainBox}>
      <div className={classes.container404}>
        <div className={classes.err}>4</div>
        <i style={{ fontSize: '11rem', marginLeft: '50px', marginRight: '50px', color: 'white' }} className="far fa-question-circle"></i>
        <div className={classes.err2}>4</div>
      </div>
      <div className={classes.msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
        place?
        <p>
          Let's go{' '}
          <div onClick={() => history.push('/create')} className={classes.home}>
            home
          </div>{' '}
          and try from there.
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
