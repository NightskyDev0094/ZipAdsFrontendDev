import React, { useState, memo, useCallback, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Box, Typography, Modal, Backdrop, Fade, Paper, makeStyles } from '@material-ui/core';
import { Table, Alert, Button, Tooltip } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useWindowSize } from '../shared_logic/custom_hooks';
import 'antd/dist/antd.css';
import '../../../BlueTecUIKit/css/style.css';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '0px !important',
    color: '#00468f',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    '@media (max-width:576px)': {
      fontSize: '2rem',
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

const TemplateTable = ({ recommendedTemplate, templates, deleteCampaign, addCampaign, submitSelectedData }) => {
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
  const templateTableData = (id, data, campaignType) => {
    const search = () => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          return data[i];
        }
      }
    };
    if (campaignType === 'Draft') {
      let selected = search(data);

      const formData = new FormData();
      formData.append('campaign_name', selected.campaign_name);
      formData.append('campaign_type', 'template');
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
      formData.append('street_address', selected.street_address);
      formData.append('city_name', selected.city_name);
      formData.append('state_code', selected.state_code);
      formData.append('zip_code', selected.zip_code);
      formData.append('google_account_id', selected.google_account_id);
      formData.append('facebook_account_id', selected.facebook_account_id);
      formData.append('facebook_page_id', selected.facebook_page_id);
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
      formData.append('file_url', selected.file_url);
      // formData.append('file_upload', selected.file_upload);
      // formData.append('fb_feed_img', selected.fb_feed_img);
      // formData.append('instagram_img', selected.instagram_img);
      // formData.append('fb_audience_img', selected.fb_audience_img);
      // formData.append('ga_display_img', selected.ga_display_img);
      // formData.append('ga_square_display_img', selected.ga_square_display_img);
      addCampaign(formData);
    } else if (campaignType === 'New') {
      const formData = new FormData();
      formData.append('campaign_name', 'New Campaign');
      addCampaign(formData);
    }
    history.push('create/connect-social');
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

  console.log(recommendedTemplate);

  const columns = [
    // {
    //   title: 'Delete Item',
    //   dataIndex: 'id',
    //   key: 'id',
    //   render: (id) => (
    //     <div>
    //       <DeleteIcon onClick={() => openModalAndGetData(id, templates)} />
    //     </div>
    //   ),
    // },
    {
      title: 'No.',
      dataIndex: 'index',
      key: 'index',
      width: '70px',
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the name of your campaign.">
          Campaign Name
        </Tooltip>
      ),
      dataIndex: 'campaign_name',
      key: 'campaign_name',
      width: '190px',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the headline of your campaign.">
          Industry
        </Tooltip>
      ),
      dataIndex: 'industry',
      key: 'industry',
      width: '110px',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the headline of your campaign.">
          Last Modified
        </Tooltip>
      ),
      dataIndex: 'headline2',
      key: 'headline2',
      width: '120px',
      render: (value) => <p>{value}</p>,
    },
    // {
    //   title: (
    //     <Tooltip placement="bottom" title="This is the description of your campaign.">
    //       Description
    //     </Tooltip>
    //   ),
    //   dataIndex: 'ad_description',
    //   key: 'ad_description',
    //   render: (value) => <p>{value}</p>,
    // },
    {
      title: (
        <Tooltip placement="bottom" title="This is the link associated with your campaign.">
          Preview
        </Tooltip>
      ),
      dataIndex: 'square_img_url',
      key: 'square_img_url',
      width: '120px',
      render: (src) => (
        <img
          src={src}
          style={{
            maxWidth: '100px',
            maxHeight: '100px',
            border: '1px solid #7a746c',
          }}
        />
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      fixed: 'right',
      width: '210px',
      render: (id) => (
        <Button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00468f',
            color: 'white',
            borderRadius: '8px',
            width: '220px',
            height: '50px',
            fontSize: '18px',
            width: '80%',
            maxWidth: '210px',
          }}
          onClick={() => submitSelectedData(id, templates, 'Template')}
        >
          {/* <EditIcon onClick={() => submitSelectedData(id, templates, 'Template')} /> */}
          Select
        </Button>
      ),
    },
  ];

  useEffect(() => {
    // console.log('RECOMMENDED TEMPLATE: ', recommendedTemplate);
  }, [recommendedTemplate]);

  return (
    <Box>
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
        Recommended Template
      </Typography>
      {/* <Typography
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 50px',
        }}
      >
        Based on your industry your recommended template is:
      </Typography> */}
      <Table
        className="table-striped-rows"
        pagination={false}
        columns={columns}
        scroll={{ x: 210 }}
        sticky
        dataSource={
          recommendedTemplate &&
          [recommendedTemplate]?.map((element, index) => ({ ...element, index: index + 1 }))
        }
      />
    </Box>
  );
};

export default memo(TemplateTable);
