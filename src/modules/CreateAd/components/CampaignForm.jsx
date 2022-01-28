import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from 'clsx';

const useStyles = makeStyles({
  TitleText: {
    fontSize: '2.5rem',
    width: '100%',
    textAlign: 'center',
    color: '#00468f',
    fontFamily: 'sans-serif',

    ['@media (max-width:576px)']: {
      fontSize: '2rem',
    },
  },
  InputItem: {
    display: 'block',
    width: '100%',
    fontSize: '1.25rem',
    margin: '0.75em auto 0px auto',
    padding: '14px 8px',
    backgroundColor: 'inherit',
    border: '1px solid #b7b7b7',
    borderRadius: '0.25rem',

    ['@media (min-width:750px)']: {
      margin: '1em auto 0px auto',
    },

    '&:focus-visible': {
      outline: 'none',
    },
  },
  selectItem: {
    borderColor: '#c7c7c7',
    borderWidth: '2px',
    borderRadius: 'inherit',
    padding: '5px 2px',
    width: '150px !important',
    fontFamily: 'Nunito',
    color: 'grey',
    fontSize: '20px',

    ['& > option']: {
      fontFamily: 'Nunito',
      color: 'grey',
      fontSize: '20px',
      padding: '10px 5px',
    },
  },
  InputLabel: {
    display: 'block',
    margin: '0.5em auto 0 auto',
    fontSize: '0.8rem',
    color: '#979797',
    ['@media (min-width:750px)']: {
      fontSize: '1.15rem',
    },
  },
  ClearAllButton: {
    display: 'flex',
    fontFamily: 'Nunito',
    justifyContent: 'start',
    alignItems: 'center',
    alignItems: 'middle',
    backgroundColor: 'inherit',
    border: '0px',
    color: '#00468f',
    textDecoration: 'underline #00468f',
    marginTop: '1em',
    fontSize: '1.15rem',
    fontStyle: 'italic',
    fontSize: '20px',
  },
  ClearIcon: {
    color: 'white',
    height: '1.2em',
    width: '1.2em',
    marginRight: '0.25em',
    backgroundColor: '#00468f',
    borderRadius: '100%',
    display: 'inline-block',
    padding: '2px',
  },
});

export default function CampaignForm({ formInfo }) {
  const classes = useStyles();

  const handleClearForm = () => {
    formInfo.setCampaignName('');
    formInfo.setHeadline('');
    formInfo.setHeadline2('');
    formInfo.setAdDescription('');
    formInfo.setAdLink('');
    formInfo.setCta('Blank');
    formInfo.setCta2('Blank');
  };

  return (
    <div className="form-vessel create-input">
      <h2 className={classes.TitleText}>Enter Your Ad Content</h2>

      <input
        className={classes.InputItem}
        placeholder="Campaign name (seen only by you)"
        name="campaign_name"
        id="campaign_name"
        value={formInfo.campaignName}
        onChange={(e) => formInfo.setCampaignName(e.target.value)}
      />

      <input
        className={classes.InputItem}
        placeholder="Your headline"
        name="headline"
        id="headline"
        value={formInfo.headline}
        onChange={(e) => formInfo.setHeadline(e.target.value)}
      />

      <input
        className={classes.InputItem}
        placeholder="Your sub-headline"
        name="headline2"
        id="headline2"
        value={formInfo.headline2}
        onChange={(e) => formInfo.setHeadline2(e.target.value)}
      />

      <textarea
        className={classes.InputItem}
        placeholder="One or two sentences describing your business and why people should engage with it"
        rows={4}
        cols={33}
        maxLength={160}
        name="ad_description"
        id="ad_description"
        value={formInfo.adDescription}
        onChange={(e) => formInfo.setAdDescription(e.target.value)}
      />

      <input
        className={classes.InputItem}
        placeholder="URL that your ad will link to"
        name="ad_link"
        id="ad_htmlLink"
        value={formInfo.adLink}
        onChange={(e) => formInfo.setAdLink(e.target.value)}
      />

      <select
        style={{
          width: '50%',
          borderTop: '0px',
          borderRight: '0px',
          borderLeft: '0px',
          marginLeft: '0px',
        }}
        className={clsx(classes.InputItem, classes.selectItem)}
        name="cta"
        id="cta"
        value={formInfo.cta}
        onChange={(e) => formInfo.setCta(e.target.value)}
      >
        <option>Blank</option>
        <option>Apply Now</option>
        <option>Book Now</option>
        <option>Contact Us</option>
        <option>Donate Now</option>
        <option>Download</option>
        <option>Get Offer</option>
        <option>Get Quote</option>
        <option>Get Showtime</option>
        <option>Learn More</option>
        <option>Listen Now</option>
        <option>Play Game</option>
        <option>Request Time</option>
        <option>See Menu</option>
        <option>Shop Now</option>
        <option>Sign Up</option>
        <option>Subscribe</option>
        <option>Watch More</option>
      </select>
      <label
        style={{
          padding: '0.8rem 0',
          fontSize: '1.25rem',
          color: 'grey',
          fontFamily: 'Nunito',
          fontSize: '20px',
        }}
      >
        Text that will appear on the clickable button
      </label>

      <select
        style={{
          width: '50%',
          borderTop: '0px',
          borderRight: '0px',
          borderLeft: '0px',
          marginLeft: '0px',
          marginTop: '0px',
        }}
        className={clsx(classes.InputItem, classes.selectItem)}
        name="cta2"
        id="cta2"
        value={formInfo.cta2}
        onChange={(e) => formInfo.setCta2(e.target.value)}
      >
        <option>Blank</option>
        <option>Apply Now</option>
        <option>Book Now</option>
        <option>Contact Us</option>
        <option>Donate Now</option>
        <option>Download</option>
        <option>Get Offer</option>
        <option>Get Quote</option>
        <option>Get Showtime</option>
        <option>Learn More</option>
        <option>Listen Now</option>
        <option>Play Game</option>
        <option>Request Time</option>
        <option>See Menu</option>
        <option>Shop Now</option>
        <option>Sign Up</option>
        <option>Subscribe</option>
        <option>Watch More</option>
      </select>
      <label
        style={{
          padding: '0.8rem 0',
          fontSize: '1.25rem',
          color: 'grey',
          fontFamily: 'Nunito',
          fontSize: '20px',
        }}
      >
        Text that will appear on a second clickable button
      </label>

      <button className={classes.ClearAllButton} onClick={handleClearForm}>
        <ClearIcon className={classes.ClearIcon} />
        Clear Form
      </button>
    </div>
  );
}
