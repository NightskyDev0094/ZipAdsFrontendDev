import React, { useState, memo, useCallback, useLayoutEffect } from 'react';
import { Box, Typography, Modal, Backdrop, Fade, Paper, makeStyles } from '@material-ui/core';
import { Table, Alert, Button, Tooltip } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import { useWindowSizeHook } from '../shared_logic/customHooks';
import 'antd/dist/antd.css';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '60px !important',
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

const ManageConversions = ({ conversions, deleteConversion }) => {
  const [isConversionCodeCopied, setConversionCodeCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const windowSize = useWindowSizeHook();
  const classes = useStyles();
  const [conversionModalInfo, setConversionModalInfo] = useState({
    accountId: '',
    id: 0,
    conversionName: '',
  });

  // copy text action
  const copyText = (value) => {
    setConversionCodeCopied(true);
    navigator.clipboard.writeText(value); //copy text
    setTimeout(() => setConversionCodeCopied(false), 1000);
  };

  // when modal is opened
  //set conversion data to show user
  const openModalAndGetData = (id, data) => {
    setModalOpen(true);
    setConversionModalInfo({
      id,
      accountId: data.filter((data) => data.id === id)[0]?.account_id,
      conversionName: data.filter((data) => data.id === id)[0]?.name,
    });
  };

  const deleteRow = useCallback(async () => {
    await deleteConversion(conversionModalInfo?.id);
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
        <div>
          <DeleteIcon onClick={() => openModalAndGetData(id, conversions)} />
        </div>
      ),
    },
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
      responsive: ['lg'],
    },
    {
      title: (
        <Tooltip placement="bottom" title="This is the id of your Google Ads account.">
          Account Id
        </Tooltip>
      ),
      dataIndex: 'account_id',
      key: 'account_id',
      render: (value) => <p>{value}</p>,
      responsive: ['lg'],
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
        <Tooltip placement="bottom" title="This is the monetary value of your conversion.">
          Conversion Value
        </Tooltip>
      ),
      dataIndex: 'value',
      key: 'value',
      responsive: ['lg'],
      render: (value) => <p>{value}</p>,
    },
    {
      title: (
        <Tooltip
          placement="bottom"
          title="This is your conversion code.  You can place it in your website header to track conversions."
        >
          Conversion Code
        </Tooltip>
      ),
      dataIndex: 'conversion_code',
      key: 'conversion_code',
      responsive: ['md'],
      render: (value) => <p>{value}</p>,
    },
    {
      title: 'Copy Conversion Code',
      dataIndex: 'conversion_code',
      key: 'conversion_code',
      render: (value) => (
        <Button
          type="primary"
          style={{ '&:hover': { cursor: 'pointer' } }}
          onClick={() => copyText(value)}
        >
          {isMobileView ? 'Copy' : 'Copy Conversion Code Text'}
        </Button>
      ),
    },
  ];

  return (
    <div style={{height: '100%'}}>
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
                  <div>{conversionModalInfo.accountId}</div>
                </div>
                <div style={{}} className="conversionName">
                  <Typography component="h6">Conversion Name: </Typography>
                  <div style={{}}>{conversionModalInfo.conversionName}</div>
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
      {isConversionCodeCopied && (
        <div primary="primary" style={{ width: '100%', position: 'absolute', top: '55px' }}>
          <Alert
            style={{ width: '400px', margin: '100px auto', textAlign: 'center' }}
            message="Conversion code copied!"
            type="info"
          />
        </div>
      )}
      <Typography className={classes.title} variant="h1" component="h2">
        Copy your conversion code
      </Typography>
      <Typography
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 50px',
        }}
      >
        Copy your conversion code and install it on the header of your website, landing page, or
        thank you page to start tracking.
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
          conversions.length &&
          conversions?.map((element, index) => ({ ...element, index: index + 1 }))
        }
      />
    </div>
  );
};

export default memo(ManageConversions);
