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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 4px',

    ['& div h2']: { fontSize: '0.75em', lineHeight: '0.75em', margin: '0px' },
    ['& div h3']: { fontSize: '0.5em' },
    ['& img']: { height: '22px', width: '22px' },
    ['& svg']: { height: '20px', width: '20px' },

    ['@media(min-width:450px)']: {
      padding: '4px 8px',
      ['& div h2']: { fontSize: '1.25em', lineHeight: '1.25em' },
      ['& div h3']: { fontSize: '.85em' },
      ['& img']: { height: '45px', width: '45px' },
      ['& svg']: { height: '40px', width: '40px' },
    },
  },
  TextSection: {
    width: '100%',
    minHeight: '12%',
    padding: '4px 4px 2px 4px',
    fontSize: '0.75em',

    ['@media(min-width:450px)']: {
      padding: '8px 8px 4px 8px',
      fontSize: '1.25em',
    },
  },
  BottomSection: {
    padding: '2px 2px 0px 2px',
    fontSize: '0.55em',

    ['@media(min-width:450px)']: {
      padding: '4px 8px 0px 8px',
      fontSize: '1.25em',
    },
  },
  InteractionSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0px',
    padding: '2px 0px',
    borderTop: '1px solid rgb(220, 220, 220)',
    borderBottom: '1px solid rgb(220, 220, 220)',

    ['@media(min-width:450px)']: {
      marginBottom: '8px',
      padding: '3px 0px',
    },
  },
  InteractionIcon: {
    borderRadius: '100%',
    display: 'inline-block',
    padding: '1px',
    width: '0.65em',
    height: '0.65em',

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
    padding: '1px',
    width: '0.65em',
    height: '0.65em',

    ['@media(min-width:450px)']: {
      padding: '0.15em',
      width: '1.4em',
      height: '1.4em',
    },
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
    width: '550px',
    height: '650px',
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <div className={classes.TopSection}>
        <img src={facebookLogoRounded} />
        <div style={{ width: '80%' }}>
          <h2>UserName</h2>
          <h3>Monday at 11:00 AM</h3>
        </div>
        <MoreHorizIcon />
      </div>
      <div className={classes.TextSection}>
        {currentCampaign.headline}:{currentCampaign.headline2}
      </div>
      <img className={classes.AdImage} src={backgroundImageProp} />
      <div className={classes.BottomSection}>
        <div className={classes.InteractionSection}>
          <div>
            <FavoriteIcon
              className={classes.InteractionIcon}
              style={{ fill: 'white', backgroundColor: 'red' }}
            />
            <ThumbUpIcon
              className={classes.InteractionIcon}
              style={{ fill: 'white', backgroundColor: 'blue' }}
            />
            <EmojiEmotionsIcon
              className={classes.InteractionIcon}
              style={{ fill: 'rgb(205, 207, 12)', padding: '0px', backgroundColor: 'black' }}
            />
            {'   Lorem ipsum and 291 others'}
          </div>
          <div>55 comments</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <ThumbUpIcon className={classes.InteractionIconPlus} /> Like
          </div>
          <div>
            <ChatBubbleOutlineIcon className={classes.InteractionIconPlus} /> Comment
          </div>
          <div>
            <ReplyIcon
              className={classes.InteractionIconPlus}
              style={{ transform: 'scaleX(-1)' }}
            />
            Share
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
