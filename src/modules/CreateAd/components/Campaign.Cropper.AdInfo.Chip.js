import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const determineImageLabelInformation = (adName) => {
  switch (adName) {
    case 'Google Display Network':
      return {
        label: 'The suggested size for this ad is 625 X 330',
      };
    case 'Google Display Network Square Image':
      return {
        label: 'The suggested size for this ad is 600 X 600',
      };
    case 'Google Ad Network Image':
      return {
        label: 'The suggested size for this ad is 625 X 340',
      };
    case 'Facebook Feeds':
      return {
        label: 'The suggested size for this ad is 625 X 330',
      };
    case 'Facebook Audience Network':
      return {
        label: 'The suggested size for this ad is 340 X 600',
      };
    case 'Instagram Feeds':
      return {
        label: 'The suggested size for this ad is 600 X 600',
      };
    case 'Google search ads':
      return {
        label: 'The suggested size for this ad is 1000 X 800',
      };
    default:
      return {
        label: 'No Ad Name Passed',
      };
  }
};

const AdInfoChip = ({ adName, styles }) => {
  const classes = useStyles();
  let { label } = determineImageLabelInformation(adName);
  return (
    <div style={styles}>
      <Chip
        data-test="ad-info-chip"
        variant="outlined"
        clickable
        label={label}
        color="primary"
        deleteIcon={<DoneIcon />}
        icon={<FaceIcon />}
      />
    </div>
  );
};

export default AdInfoChip;
