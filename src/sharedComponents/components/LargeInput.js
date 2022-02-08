import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import '../../BlueTecUIKit/css/blueteclogin.css';

const useStyles = makeStyles((theme) => ({
  input: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const LargeInput = React.forwardRef(({ isPasswordMasked = false, ...props }, ref) => {
  const classes = useStyles();
  return (
    <TextField
      ref={ref}
      type={isPasswordMasked ? 'password' : 'text'}
      className="form-control form-style"
      fullWidth
      InputProps={{ disableUnderline: true }}
      InputLabelProps={{ style: { fontSize: 24 } }}
      {...props}
    />
  );
});

// LargeInput.propTypes = {
//   isPasswordMasked: PropTypes.boolean
// }

export default LargeInput;
