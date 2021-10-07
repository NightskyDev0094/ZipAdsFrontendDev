import React from 'react';
import { makeStyles, Paper, Button, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import Person1 from '../../../BlueTecUIKit/images/people/3.jpg';
import Person2 from '../../../BlueTecUIKit/images/people/4.jpg';

const useStyles = makeStyles(() => ({
  container: {
    width: '600px',
    height: 'fit-content',
    padding: '0 15px',
    ['@media (max-width:750px)']: {
      width: '70vw',
      height: '92vw',
    },
  },
  image: {
    maxWidth: '600px',
    width: '100%',
    height: '350px',
    ['@media (max-width:750px)']: {
      height: '46.666666666666664vw',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: '90px',
    padding: '15px',
    marginBottom: '10px',
    ['@media (max-width:750px)']: {
      height: '12vw',
    },
  },
  headerSubTitleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'space-between',
    flexDirection: 'column',
    height: '100%',
    // border: '1px solid black',
    width: '450px',
    height: '100%',
    maxHeight: '90px',
    padding: '15px 20px',
    ['@media (max-width:750px)']: {
      padding: '2vw 2.666666666666667vw',
      
    }
  },
  icon: {
    width: '125px',
    // border: '1px solid black',
    height: '100%',
    ['@media (max-width:750px)']: {
      width: '16.666666666666664vw',
      minHeight: '20px',
    },
  },
  title: {
    fontSize: '30px',
    fontWeight: 800,
    ['@media (max-width:750px)']: {
      fontSize: '4vw'
    },
  },
  subTitle: {
    fontWeight: 500,
    marginTop: '5px',
    paddingLeft: '5px',
    textOverflow: 'ellipsis',
    fontSize: '23px',
    whiteSpace: 'noWrap',
    overflow: 'hidden',
    maxWidth: '400px',
  },
  lowerContainer: {
    height: '120px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ['@media (max-width:750px)']: {
      height: '13.333333333333334vw',
      justifyContent: 'space-around',
    },
  },

  facebookFriendNumber: {
    // border: '1px solid black'
    fontSize: '30px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    ['@media (max-width:750px)']: {
      fontSize: '4vw',
    },
  },
  profileImages: {
    width: '60px',
    height: '60px',
    borderRadius: '5px',
    margin: '0 8px',
    ['@media (max-width:750px)']: {
      width: '8vw',
      height: '8vw',
    },
  },
  imgContainer: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1976d2',
    color: 'white',
    height: '60px',
    fontSize: '20px',
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#1976d2',
      color: 'white',
    },
    ['@media (max-width:750px)']: {
      height: '8vw',
      fontSize: '2.666666666666667vw',
    },
  },
  midContainer: {
    width: '100%',
    height: 'fit-content',
    minHeight: '140px',
    fontSize: '18px',
    fontWeight: '600',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media (max-width:750px)']: {
      minHeight: '2.666666666666667vw',
      textOverflow: 'ellipsis',
      padding: '0px 5px'
    },
  },
  addIcon: {
    ['@media (max-width:750px)']: {
      fontSize: '2.666666666666667vw',
    },
  },
  //p tag in descriptionContainer
  description: {
    // overflow: hidden;
    // /* height: 26.666666666666668vw; */
    // height: 40px;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    ['@media (max-width:750px)']: {
      overflow: 'hidden',
      /* height: 26.666666666666668vw; */
      height: '40px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
}));

const GoogleAdNetworkDisplay = ({ currentCampaign, styles }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.container}>
      <div className={classes.header}>
        <Avatar
          src={`${currentCampaign.secondary_image_url}`}
          variant="square"
          aria-label="business avatar"
          className={classes.icon}
        ></Avatar>
        <div className={classes.headerSubTitleContainer}>
          <div className={classes.title}>{currentCampaign.headline}</div>
        </div>
      </div>
      <img className={classes.image} src={currentCampaign.file_url} alt="Your Business Image" />
      <div className={classes.midContainer}>
        <p className={classes.description}>{currentCampaign.ad_description}</p>
      </div>
      <div className={classes.lowerContainer}>
        <div className={classes.imgContainer}>
          <div className={classes.facebookFriendNumber}>
            <AddIcon className={classes.addIcon} size="small" /> 348
          </div>
          <img className={classes.profileImages} src={Person1} alt="Facebook Friend 1" />
          <img className={classes.profileImages} src={Person2} alt="Facebook Friend 2" />
        </div>
        <div className={classes.buttonContainer}>
          <Button className={classes.button} variant="outlined" size="large">
            {currentCampaign.cta}
          </Button>
        </div>
      </div>
    </Paper>
  );
};

GoogleAdNetworkDisplay.propTypes = {
  currentCampaign: PropTypes.shape({
    headline: PropTypes.string,
    headline2: PropTypes.string,
    ad_description: PropTypes.string,
    file_url: PropTypes.string,
    cta: PropTypes.string,
    secondary_image_url: PropTypes.string,
  }),
  styles: PropTypes.object,
};

GoogleAdNetworkDisplay.defaultProps = {
  currentCampaign: {
    headline: 'Your Company Headline',
    headline2:
      'Lorem ipsum dolor sit amet consectetur, tempora cupiditate nulla, ducimus ipsam repudiandae asperiores.',
    ad_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias vero
      tempora cupiditate nulla, ducimus ipsam repudiandae asperiores. Iste aspernatur vitae
      suscipit doloremque, cupiditate dignissimos adipisci. Officiis, aperiam? A, ipsum.
    `,
    file_url:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    cta: 'Your Company motto',
  },
  styles: {},
};

export default GoogleAdNetworkDisplay;
