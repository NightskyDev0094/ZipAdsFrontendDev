import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import FormContent1 from "./FormContent1";

const TEST_IMAGE =
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '400px',
    height: '300px',
    marginBottom: '2rem',
  },
  imageContainer: {
    // backgroundImage: (props) => `url(${props.form.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: '15px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  textContent: {
    backgroundColor: 'rgba(70,70,70,.80)',
    width: 'fit-content',
    padding: '1rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '80%',
  },
  text: {
    fontSize: '14pt',
    fontWeight: 800,
    color: 'white',
  },
  actionButton: {
    backgroundColor: '#ff4750',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '10pt',
    fontWeight: 700,
    padding: '.5rem 2rem',
    '&:hover': {
      backgroundColor: '#ff4750',
    },
  },
});

const ImageDisplay = (props) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.root}>
      <Box className={classes.imageContainer} textAlign="center">
        <Box>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default ImageDisplay;
