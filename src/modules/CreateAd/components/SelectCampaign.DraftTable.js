import React, { useState, useEffect, memo, useCallback, useLayoutEffect } from 'react';
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

const DraftTable = ({ campaigns, deleteCampaign, submitSelectedData, }) => {
  
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
        <EditIcon onClick={() => submitSelectedData(id, campaigns, 'Draft')} />
        // </button>
      ),
    },
  ];

  return (
    <Box>
      <div className="d-flex justify-content-center">
        <Button
          style={{ backgroundColor: '#017DFC', color: 'white', borderRadius: '50px' }}
          onClick={() => submitSelectedData(null, null, 'New')}
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
