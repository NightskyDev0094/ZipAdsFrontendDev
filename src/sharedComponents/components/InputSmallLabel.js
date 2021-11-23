import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const InputSmallLabel = React.forwardRef((props, ref) => {
  return (
    <Box>
      <Typography
        ref={ref}
        className={props.className}
        color="textSecondary"
        variant="caption"
        {...props}
      >
        {props.children}
      </Typography>
    </Box>
  );
});

InputSmallLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.Node,
};

export default InputSmallLabel;
