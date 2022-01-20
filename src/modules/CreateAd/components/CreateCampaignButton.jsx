import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ArrowButton: {
    padding: '3px 10px',
    outline: 'none !important',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#005dbf',
    zIndex: 1,
    ['&:hover']: {
      backgroundColor: '#0152a8',
    },
  },
}));

function CreateCampaignButton({ children }) {
  const classes = useStyles();

  return (
    <div>
      {children == 'Back' && (
        <Button
          variant="contained"
          color="primary"
          className={classes.ArrowButton}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
              style={{marginRight: '-10px'}}
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          }
        >
          Back
        </Button>
      )}
      {children == 'Next' && (
        <Button
          variant="contained"
          color="primary"
          className={classes.ArrowButton}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
              style={{marginLeft: '-10px'}}
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          }
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default CreateCampaignButton;
