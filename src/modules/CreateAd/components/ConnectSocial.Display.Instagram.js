import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import useCustomBackgroundImage from '../hooks/useCusomBackgroundImage';
import AdPreviewDisplayContainer from './AdPreviewDisplayContainer';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles(() => ({
  root: {
    width: '340px',
    height: '544px', // (340 *2) - (340 *2 /5)
    border: '1px solid black',

    ['@media (min-width:450px)']: {
      width: '450px',
      height: '720px', // (450 *2) - (450 *2 /5)
    },
  },
  image: {
    width: '340px',
    height: '340px',

    ['@media (min-width:450px)']: {
      width: '450px',
      height: '450px',
    },
  },
  header: {
    height: '51px', // 1/4 of remaining height after image
    width: '100%',
    padding: '0.5em 1em',

    ['@media (min-width:450px)']: {
      height: '68px',
    },
  },
  HeadlinePrime: {
    fontSize: '1.25em',
    marginBottom: '0.5em',
    ['@media (min-width:450px)']: {
      fontSize: '1.75em',
    },
  },
  HeadlineBeta: {
    fontSize: '1em',
    marginBottom: 0,
    ['@media (min-width:450px)']: {
      fontSize: '1.25em',
    },
  },
  icon: {
    width: '45px',
    height: '45px',
    ['@media (max-width:450px)']: {
      height: '8.88888888888889vw',
      width: '10vw',
    },
  },
  actionIcons: {
    fontSize: '30px',
    ['@media (max-width:450px)']: {
      fontSize: '6.666666666666667vw',
    },
  },
  cardActionsContainer: {
    height: '45px',
    marginTop: '5px',

    ['@media (min-width:450px)']: {
      height: '60px',
    },
  },
  CtaButton: {
    borderColor: '#8ABBE6',
    color: '#8DB2CF',
    width: '170px',
    height: '35px',
    fontSize: '1em',

    ['@media (min-width:450px)']: {
      width: '224px',
      height: '50px',
      fontSize: '1.25em',
    },
  },
  actionIconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
  },
  iconButton: {
    padding: '5px 8px',
    '&:hover': {
      backgroundColor: 'white',
    },
    ['@media (max-width:450px)']: {
      padding: '5px 3px',
    },
  },
  AdHeadline: {
    fontSize: '1.1em',
    color: '1D447B',

    ['@media (min-width:450px)']: {
      fontSize: '1.15em',
    },
  },
  adDescription: {
    fontSize: '0.9em',
    padding: '5px',

    ['@media (min-width:450px)']: {
      fontSize: '1em',
    },
  },
}));

/**
 *
 * @param {object} currentCampaign
 * @returns
 */
const InstagramSocialDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();
  const { backgroundImageProp } = useCustomBackgroundImage(
    currentCampaign.squareImgUrl,
    previewUrl
  );

  const AdPreviewDisplayContainerProps = {
    mobileWidth: '340px',
    mobileHeight: '544px', // (340 *2) - (340 *2 /5)
    width: '450px',
    height: '720px', // (450 *2) - (450 *2 /5)
  };

  return (
    <AdPreviewDisplayContainer {...AdPreviewDisplayContainerProps}>
      <CardHeader
        classes={{
          root: classes.header,
          action: classes.action,
        }}
        avatar={
          <Avatar
            src={`${
              currentCampaign.secondary_image_url ||
              currentCampaign.company_logo_url ||
              currentCampaign.comapny_logo_file
            }`}
            aria-label="company logo"
            className={classes.icon}
          />
        }
        title={
          <>
            <h5 className={classes.HeadlinePrime}>{currentCampaign.headline}</h5>
            <h6 className={classes.HeadlineBeta}>Sponsored</h6>
          </>
        }
      />
      <img className={classes.image} src={backgroundImageProp} />
      <CardActions className={classes.cardActionsContainer}>
        <div className={classes.actionIconContainer}>
          <IconButton classes={{ root: classes.iconButton }} aria-label="like">
            <FavoriteBorderIcon className={classes.actionIcons} />
          </IconButton>
          <IconButton classes={{ root: classes.iconButton }} aria-label="comment">
            <ChatBubbleOutlineIcon className={classes.actionIcons} />
          </IconButton>
          <IconButton classes={{ root: classes.iconButton }} aria-label="send">
            <SendIcon className={classes.actionIcons} />
          </IconButton>
        </div>
        <Button className={classes.CtaButton} size="small" variant="outlined" color="primary">
          {currentCampaign.cta}
        </Button>
      </CardActions>
      <CardContent>
        <Typography className={classes.adDescription} variant="body2" component="p">
          <strong className={classes.AdHeadline}>{currentCampaign.headline2}</strong>:
          {currentCampaign.adDescription}
        </Typography>
      </CardContent>
    </AdPreviewDisplayContainer>
  );
};

InstagramSocialDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    ad_description: PropTypes.string,
    file_url: PropTypes.string,
    cta: PropTypes.string,
    secondary_image_url: PropTypes.string,
  }),
};

export default InstagramSocialDisplay;
