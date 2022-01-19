import React from 'react';
import { makeStyles, Modal, Backdrop, Fade, Button, StylesProvider } from '@material-ui/core';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
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
    padding: theme.spacing(2, 4, 3),
    width: '400px',
  },
  container: {
  },
  button: {},
}));

/**
 * @param {string} title - title of info modal
 * @param {string} text - text of modal
 * @param {object} styling - passed to override styling
 * @returns <Component />
 */
const InformationModal = ({ title, text, styles, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ ...styles.container }} className={classes.container}>
      <div style={{ ...styles.button }} className={classes.button} onClick={() => setOpen(true)}>
        <HelpSharpIcon />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        style={{ ...styles.modal }}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{ ...styles.paper }} className={classes.paper}>
            <h6 style={{ ...styles.title }} className={classes.title}>
              {title}
            </h6>
            <p style={{ ...styles.text }} className={classes.text}>
              {text}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

InformationModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.shape({
    container: PropTypes.object,
    button: PropTypes.object,
    modal: PropTypes.object,
    text: PropTypes.object,
  }),
};

InformationModal.defaultProps = {
  title: 'Title no passed',
  text: 'text not passed',
  styles: {},
};

export default InformationModal;
