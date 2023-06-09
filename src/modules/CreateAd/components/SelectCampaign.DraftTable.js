import React, { useState, useEffect, memo, useCallback, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
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

const DraftTable = ({ campaigns, deleteCampaign, submitSelectedData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const windowSize = useWindowSize();
  const classes = useStyles();
  const [campaignModalInfo, setCampaignModalInfo] = useState({
    id: 0,
    campaignName: '',
  });

  console.log('Draft Tables ', campaigns);
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

  const columnHeaders = [
    {
      title: 'No.',
      dataIndex: 'index',
      key: 'index',
      responsive: ['lg'],
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
        <Tooltip placement="bottom" title="This is the industry this template is designed for.">
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
      dataIndex: 'upload_time',
      key: 'upload_time',
      width: '120px',
      render: (value) => (
        <p>
          {new Date(value).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      ),
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the description of your campaign.">
          Preview
        </Tooltip>
      ),
      dataIndex: 'square_img_url',
      key: 'square_img_url',
      width: '120px',
      render: (src) => (
        <div style={{ width: '100px', height: '100px', border: '1px solid #7a746c' }}>
          <img className="w-100 h-100" src={src} />
        </div>
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
          onClick={() => submitSelectedData(id, campaigns, 'Draft')}
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
            maxWidth: '220px',
          }}
        >
          Select
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <div className="d-flex justify-content-center">
        <Button
          style={{
            backgroundColor: '#00468f',
            color: 'white',
            borderRadius: '50px',
            margin: '30px 0px',
            fontSize: '18px',
            height: '50px',
          }}
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
                <div className="accountId">
                  <Typography component="h6">Account ID: </Typography>
                  <div>{campaignModalInfo.accountId}</div>
                </div>
                <div className="campaignName">
                  <Typography component="h6">Campaign Name: </Typography>
                  <div>{campaignModalInfo.campaignName}</div>
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
        Select Saved Draft
      </Typography>
      <Table
        className="table-striped-rows"
        pagination={false}
        columns={columnHeaders}
        scroll={{ x: 210 }}
        sticky
        dataSource={
          campaigns.length > 0 &&
          campaigns.map((element, index) => ({ ...element, index: index + 1 }))
        }
      />
    </Box>
  );
};

export default memo(DraftTable);
