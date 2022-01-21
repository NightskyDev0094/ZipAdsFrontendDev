import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';

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
    // padding: theme.spacing(2, 4, 3),
    borderRadius: '8px',
    '@media (max-width:500px)': {
      width: '100vh',
      height: '100vh',
    },
  },
  exitContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    padding: '15px 30px 0 0',
  },
  exitIcon: {
    fontSize: '30px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const AddPaymentsModal = ({ setHideElement, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
          setHideElement(true);
        }}
      >
        Choose Payment Options
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.exitContainer}>
              <ExitToAppIcon onClick={() => setOpen(false)} className={classes.exitIcon} />
            </div>
            {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

AddPaymentsModal.propTypes = {
  setHideElement: PropTypes.func,
};

AddPaymentsModal.defaultProps = {
  setHideElement: () => {},
};

export default AddPaymentsModal;
