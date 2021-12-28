import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  FormVessel: {
    width: '100%',
    backgroundColor: 'inherit',
    margin: 'auto auto',

    ['@media (min-width:750px)']: {
      width: '90%',
      padding: '2em',
    },
  },
  TitleText: { fontSize: '2rem', width: '100%', textAlign: 'center' },
  InputItem: {
    display: 'block',
    width: '100%',
    fontSize: '1.25rem',
    margin: '0.75em auto 0px auto',
    padding: '0.5rem',
    backgroundColor: 'inherit',
    border: '1px solid #b7b7b7',
    borderRadius: '0.25rem',

    ['@media (min-width:750px)']: {
      fontSize: '1.75rem',
      margin: '1em auto 0px auto',
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
    justifyContent: 'start',
    alignItems: 'middle',
    backgroundColor: 'inherit',
    border: '0px',
    color: 'blue',
    textDecoration: 'underline blue',
    marginTop: '1em',
    fontSize: '1.15rem',
  },
  ClearIcon: {
    color: 'white',
    height: '1em',
    width: '1em',
    marginRight: '0.25em',
    backgroundColor: 'blue',
    borderRadius: '100%',
    display: 'inline-block',
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
    <div className={classes.FormVessel}>
      <h2 className={classes.TitleText}>Enter Your Content</h2>

      <input
        className={classes.InputItem}
        placeholder="Campaign Name"
        name="campaign_name"
        id="campaign_name"
        value={formInfo.campaignName}
        onChange={(e) => formInfo.setCampaignName(e.target.value)}
      />
      <label className={classes.InputLabel} htmlFor="campaign_name">
        The name of your campaign (seen only by you)
      </label>

      <input
        className={classes.InputItem}
        placeholder="Headline"
        name="headline"
        id="headline"
        value={formInfo.headline}
        onChange={(e) => formInfo.setHeadline(e.target.value)}
      />
      <label className={classes.InputLabel} htmlFor="headline">
        Your Headline
      </label>

      <input
        className={classes.InputItem}
        placeholder="Sub-Headline"
        name="headline2"
        id="headline2"
        value={formInfo.headline2}
        onChange={(e) => formInfo.setHeadline2(e.target.value)}
      />
      <label className={classes.InputLabel} htmlFor="headline2">
        Your Sub-Headline (Does not appear for ads 2, 5, and 6)
      </label>

      <textarea
        className={classes.InputItem}
        placeholder="Description"
        rows={4}
        cols={33}
        maxLength={160}
        name="ad_description"
        id="ad_description"
        value={formInfo.adDescription}
        onChange={(e) => formInfo.setAdDescription(e.target.value)}
      />
      <label className={classes.InputLabel} htmlFor="ad_description">
        One or two sentences describing your business and why people should engage with it.
      </label>

      <input
        className={classes.InputItem}
        placeholder="Web Address"
        name="ad_link"
        id="ad_link"
        value={formInfo.adLink}
        onChange={(e) => formInfo.setAdLink(e.target.value)}
      />
      <label className={classes.InputLabel} htmlFor="ad_link">
        The URL that your ad will link to. Enter in the format: https://www.example.com
      </label>

      <select
        style={{
          width: '50%',
          borderTop: '0px',
          borderRight: '0px',
          borderLeft: '0px',
          marginLeft: '0px',
        }}
        className={classes.InputItem}
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
      <label className={classes.InputLabel} htmlFor="cta">
        Text that will appear on the clickable button
      </label>

      <select
        style={{
          width: '50%',
          borderTop: '0px',
          borderRight: '0px',
          borderLeft: '0px',
          marginLeft: '0px',
        }}
        className={classes.InputItem}
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
      <label className={classes.InputLabel} htmlFor="cta">
        Text that will appear on the second clickable button
      </label>

      <button className={classes.ClearAllButton} onClick={handleClearForm}>
        <ClearIcon className={classes.ClearIcon} />
        Clear All
      </button>
    </div>
  );
}
