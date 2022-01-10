import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '10px',
    fontStyle: 'italic',
    width: '120px',
    height: '142px',
    top: '35px',
    left: '32px',
    color: '#00468f',
    fontWeight: 'bold',
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
      <img src={ShoutBox} style={{ width: '100px' }} />
      <div className="position-relative">
        <img
          src={SpeechBubble}
          style={{ width: '250px', marginLeft: '-43px', marginBottom: '-23px' }}
        />
        <div className={classes.bubbleTexts}>
          <p>{children}</p>
        </div>
      </div>
    </Box>
  );
}
