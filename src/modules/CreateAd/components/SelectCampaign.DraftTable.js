import React, { useState, memo, useCallback, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Box, Typography, Modal, Backdrop, Fade, Paper, makeStyles } from '@material-ui/core';
import { Table, Alert, Button, Tooltip } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useWindowSize } from '../shared_logic/custom_hooks';
import 'antd/dist/antd.css';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '60px !important',
    '@media (max-width:660px)': {
      fontSize: '7vw',
      marginBottom: '20px',
    },
  },
  alert: {
    '@media (max-width:660px)': {
      transform: 'translateY(30px)',
    },
  },
  modal: {
    '@media (max-width:700px)': {
      width: '99vw !important',
      transform: 'translateY(-25vw)',
    },
  },
}));

/**
 *  * @param { campaigns: CampaignInfo }  - redux state that contains information about the users campaigns, including the current one
 * @param { makeCurrent: Function } - a redux action that takes in a string representing a campaign, and makes it the current campaign
 *  * @param { postCampaigns: Function } - a redux action that creates new campaigns
 */

const DraftTable = ({ campaigns, deleteCampaign, addCampaign, updateSocials }) => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const windowSize = useWindowSize();
  const classes = useStyles();
  const [campaignModalInfo, setCampaignModalInfo] = useState({
    id: 0,
    campaignName: '',
  });

  // when modal is opened
  //set campaign data to show user
  const openModalAndGetData = (id, data) => {
    setModalOpen(true);
    setCampaignModalInfo({
      id,
      campaignName: data.filter((data) => data.id === id)[0]?.campaign_name,
    });
  };

  const deleteRow = useCallback(async () => {
    await deleteCampaign(campaignModalInfo?.id);
    setModalOpen(false);
  });

  const getImageFromUrl = async (url, imageType, formData) => {
    await fetch(`${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        console.log('Image function test', blob);
        let n = url.lastIndexOf('/');
        let fileName = url.substring(n + 1);
        const modDate = new Date();
        const newName = fileName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });
        console.log('File Creation test', jpgFile);
        formData.append(imageType, jpgFile);
        return jpgFile;
      });
  };

  const fetchImagesFromUrlThenSubmitCampaign = async (id, data, campaignType, streetVal,
    cityVal,
    stateVal,
    zipVal,) => {
    // console.log('DATA TEST:::', data);
    const search = () => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          return data[i];
        }
      }
    };
    let selected = search(data);
    // console.log('Selected::::', selected.ga_display_img, selected);
    const formData = new FormData();
    // load image files from urls
    if (selected.fb_feed_img !== null && selected.fb_feed_img !== '') {
      await getImageFromUrl(selected.fb_feed_img, 'fb_feed_img', formData);
    }
    if (selected.fb_audience_img !== null && selected.fb_audience_img !== '') {
      await getImageFromUrl(selected.fb_audience_img, 'fb_audience_img', formData);
    }
    if (selected.instagram_img !== null && selected.instagram_img !== '') {
      await getImageFromUrl(selected.instagram_img, 'instagram_img', formData);
    }
    if (selected.ga_display_img !== null && selected.ga_display_img !== '') {
      await getImageFromUrl(selected.ga_display_img, 'ga_display_img', formData);
      // console.log('Image post test!!!!');
    }

    if (selected.ga_square_display_img !== null && selected.ga_square_display_img !== '') {
      await getImageFromUrl(selected.ga_square_display_img, 'ga_square_display_img', formData);
    }
    // console.log('Submit Data test');
    submitDraftData(selected, formData, campaignType);
  };

  const setSocialsToPost = (selected) => {
    let socialsArray = [];
    if (selected.facebook_feed_ad === 'True') {
      socialsArray.push('facebook feed ad');
    }
    if (selected.facebook_display_ad === 'True') {
      socialsArray.push('facebook display ad');
    }
    if (selected.instagram_ad === 'True') {
      socialsArray.push('instagram ad');
    }
    if (selected.google_search_ad === 'True') {
      socialsArray.push('google search ad');
    }
    if (selected.google_display_ad === 'True') {
      socialsArray.push('google display ad');
    }
    // console.log('updateSocials Running', socialsArray);
    updateSocials(socialsArray);
  };

  const submitDraftData = (selected, formData, campaignType) => {
    if (campaignType === 'Draft') {
      formData.append('campaign_name', selected.campaign_name);
      formData.append('campaign_type', 'draft');
      formData.append('google_search_ad', selected.google_search_ad);
      formData.append('google_display_ad', selected.google_display_ad);
      formData.append('facebook_feed_ad', selected.facebook_feed_ad);
      formData.append('facebook_display_ad', selected.facebook_display_ad);
      formData.append('instagram_ad', selected.instagram_ad);
      formData.append('ga_keyword_plan', selected.ga_keyword_plan);
      formData.append('ga_location_plan', selected.ga_location_plan);
      formData.append('fb_interest_plan', selected.fb_interest_plan);
      formData.append('fb_location_plan', selected.fb_location_plan);
      formData.append('geotargeting', selected.geotargeting);
      formData.append('locale_type', selected.locale_type);
      formData.append('search_term', selected.search_term);
      formData.append('budget_type', selected.budget_type);
      formData.append('street_address', selected.street_address);
      formData.append('city_name', selected.city_name);
      formData.append('state_code', selected.state_code);
      formData.append('zip_code', selected.zip_code);
      formData.append('google_account_id', selected.google_account_id);
      formData.append('facebook_account_id', selected.facebook_account_id);
      formData.append('objective', selected.objective);
      formData.append('google_search_budget', selected.google_search_budget);
      formData.append('google_cpc', selected.google_cpc);
      formData.append('google_display_budget', selected.google_display_budget);
      formData.append('facebook_feed_budget', selected.facebook_feed_budget);
      formData.append('facebook_audience_budget', selected.facebook_audience_budget);
      formData.append('instagram_budget', selected.instagram_budget);
      formData.append('headline', selected.headline);
      formData.append('headline2', selected.headline2);
      formData.append('ad_description', selected.ad_description);
      formData.append('cta', selected.cta);
      formData.append('cta2', selected.cta2);
      formData.append('ad_link', selected.ad_link);
      formData.append('ga_campaign_length', selected.ga_campaign_length);
      formData.append('fb_campaign_length', selected.fb_campaign_length);
      formData.append('img_option', selected.img_option);

      // console.log('ADDING CAMPAIGN', formData);
      addCampaign(formData);
      setSocialsToPost(selected);
    } else if (campaignType === 'New') {
      createNewCampaign();
    }
    history.push('create/connect-social');
  };

  const createNewCampaign = () => {
    const formData = new FormData();
    formData.append('campaign_name', 'New Campaign');
    formData.append('street_address', streetVal);
    formData.append('city_name', cityVal);
    formData.append('state_code', stateVal);
    formData.append('zip_code', zipVal);
    addCampaign(formData);
  };

  /**
   * Table size for antd
   */
  useLayoutEffect(() => {
    if (windowSize.width < 1500) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [windowSize.width]);

  const columns = [
    {
      title: 'Delete Item',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        // <button style={{ borderWidth: '0px !important' }}>
        <DeleteIcon onClick={() => openModalAndGetData(id, campaigns)} />
        // </button>
      ),
    },
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
      responsive: ['lg'],
      sortOrder: 'descend',
      sorter: (a, b) => a.index - b.index,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the name of your campaign.">
          Campaign Name
        </Tooltip>
      ),
      dataIndex: 'campaign_name',
      key: 'campaign_name',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the headline of your campaign.">
          Headline
        </Tooltip>
      ),
      dataIndex: 'headline',
      key: 'headline',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the tagline of your campaign.">
          Tagline
        </Tooltip>
      ),
      dataIndex: 'headline2',
      key: 'headline2',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the description of your campaign.">
          Description
        </Tooltip>
      ),
      dataIndex: 'ad_description',
      key: 'ad_description',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the link associated with your campaign.">
          Link
        </Tooltip>
      ),
      dataIndex: 'ad_link',
      key: 'ad_link',
      render: (value) => <p>{value}</p>,
    },
    {
      title: 'Select Campaign',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        // <button style={{ borderWidth: '0px !important' }}>
        <EditIcon onClick={() => fetchImagesFromUrlThenSubmitCampaign(id, campaigns, 'Draft')} />
        // </button>
      ),
    },
  ];

  return (
    <Box>
      <div className="d-flex justify-content-center">
        <Button
          style={{ backgroundColor: '#017DFC', color: 'white', borderRadius: '50px' }}
          onClick={() => createNewCampaign()}
        >
          Create New Campaign
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Paper
            className={classes.modal}
            elevation={3}
            style={{ width: '600px', margin: '400px auto', height: '330px' }}
          >
            <Box style={{ height: '200px', padding: '30px', textAlign: 'center' }}>
              <Typography className="title">
                Are you sure you would like to delete this row?
              </Typography>
              <div
                style={{
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <div style={{}} className="accountId">
                  <Typography component="h6">Account ID: </Typography>
                  <div>{campaignModalInfo.accountId}</div>
                </div>
                <div style={{}} className="campaignName">
                  <Typography component="h6">Campaign Name: </Typography>
                  <div style={{}}>{campaignModalInfo.campaignName}</div>
                </div>
                <div>
                  <Button
                    type="primary"
                    style={{ width: '200px', margin: '0 auto' }}
                    onClick={() => deleteRow()}
                  >
                    Delete Row
                  </Button>
                </div>
              </div>
            </Box>
          </Paper>
        </Fade>
      </Modal>
      <Typography className={classes.title} variant="h1" component="h2">
        Select a Draft
      </Typography>
      <Typography
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 50px',
        }}
      >
        Select one of your previously made campaigns or drafts and edit it to create a new ad
        campaign.
      </Typography>
      <Table
        columns={columns}
        style={{
          width: isMobileView ? '100%' : '60%',
          margin: '75px auto',
          border: ' .5px solid rgb(220,220,220, .4)',
          padding: '10px',
          borderRadius: '15px',
        }}
        dataSource={
          campaigns.length && campaigns.map((element, index) => ({ ...element, index: index + 1 }))
        }
      />
    </Box>
  );
};

export default memo(DraftTable);
