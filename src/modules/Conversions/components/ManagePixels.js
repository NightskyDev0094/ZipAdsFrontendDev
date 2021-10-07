import React, { useEffect, useState, memo, useCallback } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Modal,
  Backdrop,
  Fade,
  Paper,
} from '@material-ui/core';
import { Table, Alert, Button, Tooltip } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';

const ManagePixels = ({ pixels, deletePixel }) => {
  const [isPixelCodeCopied, setPixelCodeCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pixelModalInfo, setPixelModalInfo] = useState({
    accountId: '',
    id: 0,
    pixelName: '',
  });

  // copy text action
  const copyText = (value) => {
    setPixelCodeCopied(true);
    navigator.clipboard.writeText(value); //copy text
    setTimeout(() => setPixelCodeCopied(false), 1000);
  };

  // when modal is opened
  //set conversion data to show user
  const openModalAndGetData = (id, data) => {
    setModalOpen(true);
    setPixelModalInfo({
      id,
      accountId: data.filter((data) => data.id === id)[0]?.account_id,
      pixelName: data.filter((data) => data.id === id)[0]?.name,
    });
  };

  const deleteRow = useCallback(async () => {
    await deletePixel(pixelModalInfo?.id);
    setModalOpen(false);
  });

  const columnStyle = {
    backgroundColor: '#1890ff',
    minWidth: '100px',
  };
  const columns = [
    {
      title: 'Delete Item',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <div>
          <DeleteIcon onClick={() => openModalAndGetData(id, pixels)} />
        </div>
      ),
    },
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the id of your Facebook Ads account.">
          Account Id
        </Tooltip>
      ),
      dataIndex: 'account_id',
      key: 'account_id',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the name of your conversion.">
          Conversion Name
        </Tooltip>
      ),
      dataIndex: 'name',
      key: 'name',
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip
          placement="bottom"
          title="This is your pixel code.  You can place it in your website header to track conversions."
        >
          Pixel Code
        </Tooltip>
      ),
      dataIndex: 'pixel_code',
      key: 'pixel_code',
      render: (value) => <p>{value}</p>,
    },
    {
      title: 'Copy Pixel Code',
      dataIndex: 'pixel_code',
      key: 'pixel_code',
      render: (value) => (
        <Button
          type="primary"
          style={{ '&:hover': { cursor: 'pointer' } }}
          onClick={() => copyText(value)}
        >
          Copy Pixel Code Text
        </Button>
      ),
    },
  ];

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
          <Paper elevation={3} style={{ width: '600px', margin: '400px auto', height: '330px' }}>
            <Box style={{ height: '200px', padding: '30px', textAlign: 'center' }}>
              <Typography component="h4" className="title">
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
                  <div>{pixelModalInfo.accountId}</div>
                </div>
                <div style={{}} className="pixelName">
                  <Typography component="h6">Pixel Name: </Typography>
                  <div style={{}}>{pixelModalInfo.pixelName}</div>
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
      {isPixelCodeCopied && (
        <div primary="primary" style={{ width: '100%', position: 'absolute', top: '55px' }}>
          <Alert
            style={{ width: '400px', margin: '100px auto', textAlign: 'center' }}
            message="Pixel code copied!"
            type="info"
          />
        </div>
      )}
      <Typography variant="h1" component="h2">
        Copy your facebook pixel
      </Typography>
      <Typography>
        Copy your facebook pixel and install it on the header of your website, landing page, or
        thank you page to start tracking.
      </Typography>
      <Table
        columns={columns}
        style={{
          width: '60%',
          margin: '75px auto',
          border: ' .5px solid rgb(220,220,220, .4)',
          padding: '10px',
          borderRadius: '15px',
        }}
        dataSource={
          pixels.length && pixels?.map((element, index) => ({ ...element, index: index + 1 }))
        }
      />
    </Box>
  );
};

export default memo(ManagePixels);
