import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyIcon from '@material-ui/icons/Reply';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import facebookLogoRounded from '../../../img/facebook-logo-rounded.png';

import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';
import useCustomBackgroundImage from '../hooks/useCustomBackgroundImage';

const useStyles = makeStyles({
  AdImage: {
    width: '100%',
    height: '62%', // 5/8 of container height272/8
  },

  TopSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '25px 15px 0px 15px',

    ['& div h2']: { fontSize: '0.75em', lineHeight: '0.75em', margin: '0px' },
    ['& div h3']: { fontSize: '0.5em' },
    ['& img']: { height: '22px', width: '22px', marginRight: '10px' },
    ['& svg']: { height: '20px', width: '20px' },

    ['@media(min-width:450px)']: {
      ['& div h2']: { fontSize: '1.1em', fontWeight: 'bold', lineHeight: '1.25em' },
      ['& div h3']: { fontSize: '1em', color: 'grey' },
      ['& img']: { height: '45px', width: '45px', marginRight: '10px' },
      ['& svg']: { height: '40px', width: '40px' },
    },
  },
  TextSection: {
    width: '100%',
    padding: '8px 12px',
    fontSize: '16px',
    fontFamily: 'sans-serif',
  },
  BottomSection: {
    padding: '2px 2px 0px 2px',
    fontSize: '0.55em',
    fontFamily: 'sans-serif',

    ['& p']: {
      fontSize: '14px',
      fontFamily: 'sans-serif',
      color: '#686868',
      margin: 'auto',
      fontWeight: '600',
      paddingLeft: '8px',
    },

    ['@media(min-width:450px)']: {
      padding: '25px 8px 0px 8px',
      fontSize: '1.25em',
    },
  },
  InteractionSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0px',
    padding: '2px 5px',
    borderTop: '1px solid rgb(220, 220, 220)',
    borderBottom: '1px solid rgb(220, 220, 220)',

    ['& p']: {
      paddingLeft: '8px',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      fontWeight: 'bold',
      margin: 'auto',
      color: '#686868',
      fontWeight: '600',
    },
  },
  InteractionIcon: {
    borderRadius: '100%',
    display: 'inline-block',
    padding: '1px',
    width: '0.65em',
    height: '0.65em',
    margin: '10px 2px',

    ['@media(min-width:450px)']: {
      padding: '0.15em',
      width: '1em',
      height: '1em',
    },
  },
  InteractionIconPlus: {
    // copy of InteractionIcon but width and height is larger
    borderRadius: '100%',
    display: 'inline-block',
    padding: '0.15em',
    width: '1.8em',
    height: '1.8em',
    color: '#686868',
  },
});

const FacebookSocialDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();
  const { backgroundImageProp } = useCustomBackgroundImage(
    currentCampaign.rectangleImgUrl,
    previewUrl
  );

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '330px',
    mobileHeight: '390px',
    width: '480px',
    height: '650px',
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div className={classes.TopSection}>
        <img src={facebookLogoRounded} />
        <div className="d-flex flex-column justify-content-center" style={{ flex: 1 }}>
          <h2 style={{ paddingBottom: '4px' }}>My user name</h2>
          <h3>Monday at 11:00 AM</h3>
        </div>
        <MoreHorizIcon style={{ color: 'grey', width: '30px' }} />
      </div>
      <div className={classes.TextSection}>
        {currentCampaign.headline}:{currentCampaign.headline2}
      </div>
      <img className={classes.AdImage} src={backgroundImageProp} />
      <div className={classes.BottomSection}>
        <div className={classes.InteractionSection}>
          <div className="d-flex flex-row justify-content-center">
            <FavoriteIcon
              className={classes.InteractionIcon}
              style={{ fill: 'white', backgroundColor: 'red', marign: '5px 2px' }}
            />
            <ThumbUpIcon
              className={classes.InteractionIcon}
              style={{ fill: 'white', backgroundColor: 'blue', marign: '5px 2px' }}
            />
            <EmojiEmotionsIcon
              className={classes.InteractionIcon}
              style={{
                fill: 'rgb(205, 207, 12)',
                padding: '0px',
                backgroundColor: 'black',
                marign: '5px 2px',
              }}
            />
            <p>{'   Lorem ipsum and 291 others'}</p>
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#686868',
            }}
          >
            55 comments
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '16px' }}>
          <div className="d-flex flex-row">
            <ThumbUpIcon className={classes.InteractionIconPlus} /> <p>Like</p>
          </div>
          <div className="d-flex flex-row">
            <ChatBubbleOutlineIcon className={classes.InteractionIconPlus} /> <p>Comment</p>
          </div>
          <div className="d-flex flex-row">
            <ReplyIcon
              className={classes.InteractionIconPlus}
              style={{ transform: 'scaleX(-1)' }}
            />
            <p>Share</p>
          </div>
        </div>
      </div>
    </AdPreviewDisplayContainer>
  );
};

FacebookSocialDisplay.propTypes = {
  currentCampaign: PropTypes.object,
  previewUrl: PropTypes.string,
};

export default FacebookSocialDisplay;
