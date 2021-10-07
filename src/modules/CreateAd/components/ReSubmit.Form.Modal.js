import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
    width: '600px',
    height: '300px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  subTitle: {
    height: '70%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
  },
}));

const ReSubmitFormModal = ({ 
    isResubmitModalOpen, 
    setIsResubmitModalOpen,
    formData,
    handleSubmitAction, 
    nextRoute 
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isResubmitModalOpen}
        onClose={() => setIsResubmitModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isResubmitModalOpen}>
          <div className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Would you like to continue?
            </Typography>
            <Typography className={classes.subTitle} variant="h6">
              Resubmitting this will change the work you have previously saved, do you wish to
              continue?
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                size="medium"
                onClick={() => setIsResubmitModalOpen(false)}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => { 
                    handleSubmitAction(formData);
                    history.push(nextRoute); 
                }}
                className="nextButton"
              >
                Go to next
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

ReSubmitFormModal.propTypes = {
  isResubmitModalOpen: PropTypes.bool,
  setIsResubmitModalOpen: PropTypes.func,
  handleSubmitAction: PropTypes.func,
  formData: PropTypes.object,
  nextRoute: PropTypes.string
};

ReSubmitFormModal.defaultProps = {
  isResubmitModalOpen: false,
  setIsResubmitModalOpen: () => alert('setIsResubmitModalOpen not passed'),
  handleSubmitAction: () => alert('handleSubmitCmapgin is not passed'),
  formData: {},
  nextRoute: ''

};

export default ReSubmitFormModal;
