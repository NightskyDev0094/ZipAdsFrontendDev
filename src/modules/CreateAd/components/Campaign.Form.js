import React, { useState, useEffect } from 'react';
import {
  Box,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { Input, InputMainLabel, InputSmallLabel } from '../../../sharedComponents/components';
import { CAMPAIGN_DEFINITION } from '../shared_logic/definitions/campaign';
import ThumbnailImage from './Campaign.ThumbnailImage';
import Cropper from './Campaign.Cropper';

const STORE_IMG =
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80';

const COFFEE_IMG =
  'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const CLOTHES_IMG =
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';

const THANK_YOU_LOGO =
  'https://images.unsplash.com/photo-1503980599186-9cc36eda351a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const BEER_LOGO =
  'https://images.unsplash.com/photo-1558642891-54be180ea339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

const FOOD_ONE =
  'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80';

const FOOD_TWO =
  'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

const useStyles = makeStyles((theme) => ({
  iconContainer: {},
  formContainer: {
    // overflowY: 'scroll',
    padding: '0 50px',
    // height: '1200px',
    width: '40%',
    paddingBottom: '200px',
    ['@media (max-width:1550px)']: {
      width: '80%',
      height: 'fit-content',
      maxHeight: '1200px',
    },
    ['@media (max-width:1000px)']: {
      width: '100%',
    },
    // '@media (max-width:500px)': {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  },
  input: {
    marginTop: '1.5rem',
    '@media (max-width:500px)': {
      width: '80%',
    },
  },
  inputDescription: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontWeight: 400,
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    width: '100%',
    opacity: '0.5',
    '@media (max-width:500px)': {
      whiteSpace: 'pre-wrap',
      fontSize: '13px',
      height: '50px',
      tetxAlign: 'center !important',
      maxWidth: '60vw',
    },
  },
  randomRow: {
    backgroundColor: theme.palette.primary.light,
    padding: '1rem 2rem',
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '70%',
    '@media (max-width:500px)': {
      width: '100%',
    },
  },
  notSel: {
    padding: '.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
    padding: '.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'auto',
    borderRadius: '50%',
  },
  textAreaInput: {
    width: '100%',
    padding: '20px 0px 0px 0px',
  },
  picturesAndVideoContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media (max-width:500px)': {
      height: '275px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  },
  radioGroupOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const FormContent1 = ({
  formInfo,
  setFormInfo,
  clicked,
  setError,
  handleUpdateForm,
  currentCampaign,
  urlVal,
  setFBFeedPreviewUrl,
  fbFeedPreviewUrl,
  setFBAudiencePreviewUrl,
  fbAudiencePreviewUrl,
  setInstagramPreviewUrl,
  instagramPreviewUrl,
  setGADisplayPreviewUrl,
  setGASquareDisplayPreviewUrl,
  gaDisplayPreviewUrl,
  gaDisplaySquarePreviewUrl,
  imgOption,
  setImgOption,
  ...props
}) => {
  const classes = useStyles();
  const [randomTerm, setRandomTerm] = React.useState('');
  console.log({
    formInfo,
    setFormInfo,
    clicked,
    setError,
    handleUpdateForm,
    currentCampaign,
    urlVal,
    setFBFeedPreviewUrl,
    fbFeedPreviewUrl,
    setFBAudiencePreviewUrl,
    fbAudiencePreviewUrl,
    setInstagramPreviewUrl,
    instagramPreviewUrl,
    setGADisplayPreviewUrl,
    setGASquareDisplayPreviewUrl,
    gaDisplayPreviewUrl,
    gaDisplaySquarePreviewUrl,
    imgOption,
    setImgOption,
  });
  // const [formInfo, setFormInfo] = useState({
  //   campaign_name: '',
  //   headline: '',
  //   headline2: '',
  //   ad_description: '',
  //   cta: 'Learn More',
  //   cta2: 'Get Offer',
  //   ad_link: 'https://',
  //   file_url: DEFAULT_IMAGE,
  //   fb_feed_img: '',
  //   instagram_img: '',
  //   fb_audience_img: '',
  //   ga_display_img: '',
  //   ga_square_display_img: '',
  //   secondary_image_url: BEER_LOGO,
  // });
  const [previewUrl, setPreviewUrl] = useState();
  const [fbFeedImg, setFBFeedImg] = useState();
  const [fbAudienceImg, setFBAudienceImg] = useState();
  const [instagramImg, setInstagramImg] = useState();
  const [gaDisplayImg, setGADisplayImg] = useState();
  const [gaSquareDisplayImg, setGASquareDisplayImg] = useState();

  // useEffect(() => {
  //   // Get info from server to populate defaults when component loads
  //   setFormInfo({
  //     campaign_name: '',
  //     headline: '',
  //     headline2: '',
  //     ad_description: '',
  //     cta: 'Learn More',
  //     cta2: 'Get Offer',
  //     ad_link: urlVal,
  //     file_url: DEFAULT_IMAGE,
  //     fb_feed_img: '',
  //     instagram_img: '',
  //     fb_audience_img: '',
  //     ga_display_img: '',
  //     ga_square_display_img: '',
  //     secondary_image_url: BEER_LOGO,
  //   });
  //   console.log('RUNNING', urlVal);
  //   // eslint-disable-next-line
  // }, [urlVal]);
  // useEffect(() => {
  //   // Get info from server to populate defaults when component loads
  //   // eslint-disable-next-line
  // }, [formInfo]);

  const getRandom = (term) => {
    const collections = {
      restaurants:
        'https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      pets:
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      sports:
        'https://images.unsplash.com/photo-1560012057-4372e14c5085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      bar:
        'https://images.unsplash.com/photo-1505104805083-91fe4b9e14df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      clothing:
        'https://images.unsplash.com/photo-1524275461690-a79bfeaf1f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      coffee:
        'https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    };
    setRandomTerm(term);
    setFormInfo({ ...formInfo, file_url: collections[term] });
    setFBFeedPreviewUrl(collections[term]);
    setFBAudiencePreviewUrl(collections[term]);
    setInstagramPreviewUrl(collections[term]);
    setGADisplayPreviewUrl(collections[term]);
    setGASquareDisplayPreviewUrl(collections[term]);
  };

  const handleFormChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const updateFBFeedImage = (image) => {
    setFormInfo({ ...formInfo, fb_feed_img: image });
  };
  const updateInstagramImage = (image) => {
    setFormInfo({ ...formInfo, instagram_img: image });
  };
  const updateFBAudienceImage = (image) => {
    setFormInfo({ ...formInfo, fb_audience_img: image });
  };
  const updateGADisplayImage = (image) => {
    setFormInfo({ ...formInfo, ga_display_img: image });
  };
  const updateGASquareDisplayImage = (image) => {
    setFormInfo({ ...formInfo, ga_square_display_img: image });
  };
  const updateImage = (image) => {
    // setFormInfo({ ...formInfo, file_url: image });
    setFormInfo({ ...formInfo, fb_feed_img: image });
    setFormInfo({ ...formInfo, instagram_img: image });
    setFormInfo({ ...formInfo, fb_audience_img: image });
    setFormInfo({ ...formInfo, ga_display_img: image });
    setFormInfo({ ...formInfo, ga_square_display_img: image });
    setFBFeedPreviewUrl(image);
    setFBAudiencePreviewUrl(image);
    setInstagramPreviewUrl(image);
    setGADisplayPreviewUrl(image);
    setGASquareDisplayPreviewUrl(image);
  };

  React.useEffect(() => {
    handleUpdateForm(formInfo);
  }, [formInfo]);

  return (
    <Box data-test="formContainer" className={classes.formContainer}>
      <InputMainLabel>Enter Your Content</InputMainLabel>
      <Input
        placeholder="Campaign Name"
        name="campaign_name"
        onChange={handleFormChange}
        inputProps={{
          maxLength: CAMPAIGN_DEFINITION.CAMPAIGN_NAME.max_length,
        }}
        value={formInfo.campaign_name}
        className={classes.input}
        defaultValue={currentCampaign?.campaign || ''}
      />
      <div className={classes.inputDescription}>The name of your campaign</div>
      <Input
        placeholder="Headline"
        className={classes.input}
        name="headline"
        onChange={handleFormChange}
        inputProps={{
          maxLength: CAMPAIGN_DEFINITION.HEADLINE.max_length,
        }}
        value={formInfo.headline}
        defaultValue={currentCampaign?.headline || ''}
        multiline
      />
      <div className={classes.inputDescription}>Your Headline</div>
      <Input
        placeholder="Sub-Headline"
        className={classes.input}
        name="headline2"
        onChange={handleFormChange}
        inputProps={{
          maxLength: CAMPAIGN_DEFINITION.HEADLINE2.max_length,
        }}
        value={formInfo.headline2}
        defaultValue={currentCampaign?.headline2 || ''}
        multiline={true}
      />
      <InputSmallLabel></InputSmallLabel>
      <div className={classes.inputDescription}>
        Your Sub-Headline (Does not appear for ads 2, 5, and 6)
      </div>
      <TextField
        placeholder="Description"
        classes={{ root: classes.textAreaInput, multiline: { height: '100px' } }}
        name="ad_description"
        onChange={handleFormChange}
        value={formInfo.ad_description}
        inputProps={{
          maxLength: CAMPAIGN_DEFINITION.AD_DESCRIPTION.max_length,
        }}
        defaultValue={currentCampaign?.ad_description || ''}
        variant="outlined"
        rows={4}
        multiline={true}
        rowsMax={3}
      />
      <div className={classes.inputDescription}>
        Text why people should engage with your business (Does not appear for ad 1)
      </div>
      <Input
        placeholder="Web address"
        name="ad_link"
        onChange={handleFormChange}
        value={formInfo.ad_link}
        className={classes.input}
        inputProps={{
          maxLength: CAMPAIGN_DEFINITION.AD_LINK.max_length,
        }}
        defaultValue=""
      />
      <div className={classes.inputDescription}>
        The Url your ad will link to. Enter in the format: https://example.com/
      </div>

      <Select
        placeholder="Call to action"
        value={formInfo.cta}
        name="cta"
        className={classes.input}
        onChange={handleFormChange}
        defaultValue={currentCampaign?.cta || ''}
      >
        <MenuItem value="Blank">Blank</MenuItem>
        <MenuItem value="Apply Now">Apply Now</MenuItem>
        <MenuItem value="Book Now">Book Now</MenuItem>
        <MenuItem value="Contact Us">Contact Us</MenuItem>
        <MenuItem value="Donate Now">Donate Now</MenuItem>
        <MenuItem value="Download">Download</MenuItem>
        <MenuItem value="Get Offer">Get Offer</MenuItem>
        <MenuItem value="Get Quote">Get Quote</MenuItem>
        <MenuItem value="Get Showtimes">Get Showtimes</MenuItem>
        <MenuItem value="Learn More">Learn More</MenuItem>
        <MenuItem value="Listen Now">Listen Now</MenuItem>
        <MenuItem value="Play Game">Play Game</MenuItem>
        <MenuItem value="Request Time">Request Time</MenuItem>
        <MenuItem value="See Menu">See Menu</MenuItem>
        <MenuItem value="Shop Now">Shop Now</MenuItem>
        <MenuItem value="Sign Up">Sign U</MenuItem>
        <MenuItem value="Subscribe">Subscribe</MenuItem>
        <MenuItem value="Watch More">Watch More</MenuItem>
      </Select>

      <div className={classes.inputDescription}>Text that will appear on the button</div>
      <Select
        placeholder="Alternate Call to action"
        value={formInfo.cta2}
        name="cta2"
        className={classes.input}
        onChange={handleFormChange}
        defaultValue={currentCampaign?.cta2 || ''}
      >
        <MenuItem value="Blank">Blank</MenuItem>
        <MenuItem value="Apply Now">Apply Now</MenuItem>
        <MenuItem value="Book Now">Book Now</MenuItem>
        <MenuItem value="Contact Us">Contact Us</MenuItem>
        <MenuItem value="Donate Now">Donate Now</MenuItem>
        <MenuItem value="Download">Download</MenuItem>
        <MenuItem value="Get Offer">Get Offer</MenuItem>
        <MenuItem value="Get Quote">Get Quote</MenuItem>
        <MenuItem value="Get Showtimes">Get Showtimes</MenuItem>
        <MenuItem value="Learn More">Learn More</MenuItem>
        <MenuItem value="Listen Now">Listen Now</MenuItem>
        <MenuItem value="Play Game">Play Game</MenuItem>
        <MenuItem value="Request Time">Request Time</MenuItem>
        <MenuItem value="See Menu">See Menu</MenuItem>
        <MenuItem value="Shop Now">Shop Now</MenuItem>
        <MenuItem value="Sign Up">Sign Up</MenuItem>
        <MenuItem value="Subscribe">Subscribe</MenuItem>
        <MenuItem value="Watch More">Watch More</MenuItem>
      </Select>
      <div className={classes.inputDescription}>
        Alternate Text that will appear on a second link
      </div>
      <Box style={{ padding: '40px 0px' }}>
        <InputMainLabel>How do you want to select an image?</InputMainLabel>
        <RadioGroup
          aria-label="distance"
          name="distance"
          value={imgOption}
          onChange={(e) => setImgOption(e.target.value)}
        >
          <FormControlLabel
            className={classes.radioGroupOptions}
            value="library"
            control={<Radio />}
            label="Select Image from Library"
          />
          <FormControlLabel
            className={classes.radioGroupOptions}
            value="custom"
            control={<Radio />}
            label="Upload Custom Image"
          />
        </RadioGroup>
      </Box>
      <Box marginTop="2rem">
        {imgOption === 'library' && (
          <>
            <InputMainLabel>Pictures & Videos</InputMainLabel>
            <Box className={classes.picturesAndVideoContainer} display="flex">
              <ThumbnailImage
                file={DEFAULT_IMAGE}
                onClick={() => updateImage(DEFAULT_IMAGE)}
                clicked={formInfo.file_upload === DEFAULT_IMAGE}
              />
              <ThumbnailImage
                file={COFFEE_IMG}
                onClick={() => updateImage(COFFEE_IMG)}
                clicked={formInfo.file_upload === COFFEE_IMG}
              />
              <ThumbnailImage
                file={STORE_IMG}
                onClick={() => updateImage(STORE_IMG)}
                clicked={formInfo.file_upload === STORE_IMG}
              />
              <ThumbnailImage
                file={CLOTHES_IMG}
                onClick={() => updateImage(CLOTHES_IMG)}
                clicked={formInfo.file_upload === CLOTHES_IMG}
              />
            </Box>
            <Box className={classes.randomRow}>
              <span
                role="img"
                aria-label="restaurant icon"
                className={randomTerm === 'restaurants' ? classes.selected : classes.notSel}
                onClick={() => getRandom('restaurants')}
              >
                🍕
              </span>
              <span
                role="img"
                aria-label="pets"
                className={randomTerm === 'pets' ? classes.selected : classes.notSel}
                onClick={() => getRandom('pets')}
              >
                🐶
              </span>
              <span
                role="img"
                aria-label="sports"
                className={randomTerm === 'sports' ? classes.selected : classes.notSel}
                onClick={() => getRandom('sports')}
              >
                🏈
              </span>
              <span
                role="img"
                aria-label="bar"
                className={randomTerm === 'bar' ? classes.selected : classes.notSel}
                onClick={() => getRandom('bar')}
              >
                🍻
              </span>
              <span
                role="img"
                aria-label="clothing"
                className={randomTerm === 'clothing' ? classes.selected : classes.notSel}
                onClick={() => getRandom('clothing')}
              >
                👔
              </span>
              <span
                role="img"
                aria-label="coffee"
                className={randomTerm === 'coffee' ? classes.selected : classes.notSel}
                onClick={() => getRandom('coffee')}
              >
                ☕️
              </span>
            </Box>
          </>
        )}
        {/* FB Feed Cropper */}
        {imgOption === 'custom' && (
          <Box marginTop="1rem">
            <Cropper
              setError={setError}
              handleUpdateImage={updateImage}
              setPreviewUrl={setPreviewUrl}
              previewUrl={previewUrl}
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              imgData={fbFeedImg}
              setImgData={setFBFeedImg}
              fbAudienceImg={fbAudienceImg}
              setFBAudienceImg={setFBAudienceImg}
              instagramImg={instagramImg}
              setInstagramImg={setInstagramImg}
              gaDisplayImg={gaDisplayImg}
              setGADisplayImg={setGADisplayImg}
              gaSquareDisplayImg={gaSquareDisplayImg}
              setGASquareDisplayImg={setGASquareDisplayImg}
              fbFeedImg={fbFeedImg}
              setFBFeedImg={setFBFeedImg}
              setFBFeedPreviewUrl={setFBFeedPreviewUrl}
              fbFeedPreviewUrl={fbFeedPreviewUrl}
              setFBAudiencePreviewUrl={setFBAudiencePreviewUrl}
              fbAudiencePreviewUrl={fbAudiencePreviewUrl}
              setInstagramPreviewUrl={setInstagramPreviewUrl}
              instagramPreviewUrl={instagramPreviewUrl}
              setGADisplayPreviewUrl={setGADisplayPreviewUrl}
              setGASquareDisplayPreviewUrl={setGASquareDisplayPreviewUrl}
              gaDisplayPreviewUrl={gaDisplayPreviewUrl}
              updateFBFeedImage={updateFBFeedImage}
              updateInstagramImage={updateInstagramImage}
              updateFBAudienceImage={updateFBAudienceImage}
              updateGADisplayImage={updateGADisplayImage}
              updateGASquareDisplayImage={updateGASquareDisplayImage}
              {...props}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FormContent1;
