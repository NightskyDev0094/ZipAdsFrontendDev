import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
  customClass: {
    maxWidth: '30rem',
    padding: '0.5rem 0.25rem',
    fontSize: '0.75rem',
  },
}));

export default function InfoButton({ infoText }) {
  const classes = useStyles();
  return (
    <Tooltip title={infoText} arrow placement="top-end" classes={{ tooltip: classes.customClass }}>
      <IconButton>
        <HelpIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
}
