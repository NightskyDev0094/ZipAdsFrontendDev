import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import tipBoxText from '../../../BlueTecUIKit/images/tip box_text.png';
import ShoutBox from '../../../BlueTecUIKit/images/Shoutbox.png';
import SpeechBubble from '../../../BlueTecUIKit/images/speech bubble.png';

const useStyles = makeStyles({
  BullHorn: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'end',
    bottom: 0,
  },
  bubbleTexts: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#005dbf',
    fontWeight: 'bold',
    padding: '16px',
    textAlign: 'center',
  },
  tipContainer: {
    width: '264px',
    position: 'relative',
    marginBottom: '20px',
    borderColor: '#005dbf',
    borderStyle: 'solid',
    borderWidth: '16px',
    borderTopWidth: '48px',
    borderRadius: '20px',
  },
  tipBoxText: {
    position: 'absolute',
    height: '180px',
    top: '-112px',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  tipBoxCloseBtn: {
    position: 'absolute',
    color: 'white',
    top: '-40px',
    right: '0',
    cursor: 'pointer',

    ['&:hover']: {
      background: '#dddddd73',
      borderRadius: '50%',
    },
  },
});

/**
 *
 * @param {function} formSubmitHandler optional submit function for any form on the current page, runs when clicking either nav arrow
 * @param {string} pageHeading title text that display on top of container
 * @param {React Node} children any react elements
 * @returns
 */
export default function Shoutbox({ children }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.BullHorn}>
      {/* <img src={ShoutBox} style={{ width: '100px' }} />
      <div className="position-relative">
        <img
          src={SpeechBubble}
          style={{ width: '250px', marginLeft: '-43px', marginBottom: '-23px' }}
        />
        <div className={classes.bubbleTexts}>
          <p>{children}</p>
        </div>
      </div> */}
      <div className={classes.tipContainer}>
        {/* <div className='position-absolute top-0'>
          <h1>ZipAds</h1>
          <h1>Tip</h1>
        </div> */}
        <img src={tipBoxText} className={classes.tipBoxText} />
        <CloseIcon fontSize="small" className={classes.tipBoxCloseBtn} />
        <p className={classes.bubbleTexts}>{children}</p>
      </div>
    </Box>
  );
}
