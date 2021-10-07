import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PropTypes from 'prop-types';

const HandleUserAccountPopUp = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p
        style={{
          margin: '15px 0px',
          display: 'flex',
          // border: '1px solid black',
          padding: '5px',
          width: '300px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px'
        }}
      >
          What is this step?
          <LiveHelpIcon style={{marginLeft: '10px'}}  onClick={() => setOpen(true)} />        
      </p>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"What is this step?"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize: '18px'}} id="alert-dialog-description">{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{fontSize: "20px"}} onClick={() => setOpen(false)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

HandleUserAccountPopUp.defaultProps = {
  text: 'Text not passed',
};

HandleUserAccountPopUp.propTypes = {
  text: PropTypes.string,
};

export default HandleUserAccountPopUp;
