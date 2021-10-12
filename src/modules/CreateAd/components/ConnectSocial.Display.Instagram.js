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

const TEST_IMAGE =
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const useStyles = makeStyles(() => ({
  root: {
    width: '340px',
    height: 'fit-content',
    padding: '5px 0',
    margin: '0 auto',
    ['@media (max-width:450px)']: {
      width: '75.55555555555556vw',
      padding: '1.1111111111111112vw',
    },
  },
  image: {
    height: '302px',
    width: '100%',
    // margin: '0',
    ['@media (max-width:450px)']: {
      height: '67.11111111111111vw',
      width: '69.33333333333334vw',
    },
  },
  header: {
    alignItems: 'center',
    height: '50px',
    maxWidth: '330px',
    padding: '0 12px',
    ['@media (max-width:450px)']: {
      height: '11.11111111111111vw',
      padding: '0 2.666666666666667vw',
    },
  },
  title: {
    marginBottom: '1px',
  },
  subTitle: {
    color: '#403f45',
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
    paddingLeft: '8px',
    ['@media (max-width:450px)']: {
      paddingLeft: '1.7777777777777777vw',
    },
  },
  iconButton: {
    padding: '10px',
    '&:hover': {
      backgroundColor: 'white',
    },
    ['@media (max-width:450px)']: {
      padding: '2.2222222222222223vw',
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
  },
}));

/**
 *
 * @param {object} currentCampaign
 * @returns
 */
const InstagramSocialDisplay = ({ currentCampaign, previewUrl, ...props }) => {
  const classes = useStyles();
  const [backgroundImageProp, setBackgroundImageProp] = useState('');

  useEffect(() => {
    if (previewUrl && previewUrl != '') {
      setBackgroundImageProp(previewUrl);
    } else {
      setBackgroundImageProp(DEFAULT_IMAGE);
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
          ></Avatar>
        }
        title={
          <>
            <h5 className={classes.title}>{currentCampaign.headline}</h5>
            <h6 className={classes.subtitle}>Sponsored</h6>
          </>
        }
      />
      <CardMedia className={classes.image} image={backgroundImageProp} />
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
          :{currentCampaign.ad_description}
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

InstagramSocialDisplay.defaultProps = {
  currentCampaign: {
    headline: 'htc',
    headline2: 'Lorem Ipsum',
    ad_description: `This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like`,
    file_url: TEST_IMAGE,
    cta: 'Learn More',
    secondary_image_url: '',
  },
};

export default InstagramSocialDisplay;
