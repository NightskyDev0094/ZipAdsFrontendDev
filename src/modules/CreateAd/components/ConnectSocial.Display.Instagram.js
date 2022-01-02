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

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow:
      '--tw-drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))',
    width: '340px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    height: '340px',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    verticalAlign: 'middle',
  },
  title: {
    marginBottom: '1px',
  },
  subTitle: {
    color: '#403f45',
    marginBottom: 0,
  },
  icon: {
    width: '45px',
    height: '40px',
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
    ['@media (max-width:450px)']: {
      height: '10vw',
      marginTop: '1.1111111111111112vw',
    },
  },
  learnMoreButtonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  learnMoreButton: {
    borderColor: '#8ABBE6',
    color: '#8DB2CF',
    width: '125px',
    height: '35px',
    marginTop: '10px',
    fontSize: '15px',
    ['@media (max-width:450px)']: {
      height: '10vw',
      fontSize: '3.3333333333333335vw',
      marginTop: '2.2222222222222223vw',
      width: '27.77777777777778vw',
    },
  },
  actionIconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    // paddingLeft: '8px',
    // ['@media (max-width:450px)']: {
    //   paddingLeft: '1.7777777777777777vw',
    // },
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
  numberOfLikes: {
    fontSize: '15px',
    color: '#1D447B',
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 800,
    ['@media (max-width:450px)']: {
      fontSize: '3.3333333333333335vw',
    },
  },
  likes: {
    marginLeft: '5px',
  },
  adDescription: {
    padding: '5px',
    minHeight: '10em',
  },
}));

/**
 *
 * @param {object} currentCampaign
 * @returns
 */
const InstagramSocialDisplay = ({ currentCampaign, previewUrl }) => {
  const classes = useStyles();
  console.log(`${currentCampaign.squareImgUrl}`);
  const [backgroundImageProp, setBackgroundImageProp] = useState(currentCampaign.squareImgUrl);

  useEffect(() => {
    if (previewUrl) {
      setBackgroundImageProp(previewUrl);
    }
  }, [previewUrl]);

  return (
    <Card className={classes.root}>
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
            <h5 className={classes.title}>{currentCampaign.headline}</h5>
            <h6 className={classes.subTitle}>Sponsored</h6>
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
        <div className={classes.learnMoreButtonContainer}>
          <Button
            className={classes.learnMoreButton}
            size="small"
            variant="outlined"
            color="primary"
          >
            {currentCampaign.cta}
          </Button>
        </div>
      </CardActions>
      <CardContent>
        <Typography
          className={classes.adDescription}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          <strong style={{ fontSize: '13px', color: '#1D447B' }}>
            {currentCampaign.headline2}
          </strong>
          : {currentCampaign.adDescription}
        </Typography>
      </CardContent>
    </Card>
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

//TODO: this still needs to display the image