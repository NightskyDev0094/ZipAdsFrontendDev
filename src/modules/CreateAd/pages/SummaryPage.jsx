import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import AdPreviewCarousel from '../components/AdPreviewCarousel';

const SummaryPage = ({ onHandleClick, formInfo, selectedNetworks, previews, SUBMIT_STATUS }) => {
  return (
    <>
      <AdPreviewCarousel
        chosenSocialNetworks={selectedNetworks}
        formInfo={formInfo}
        previews={previews}
      />
    </>
  );
};

export default SummaryPage;
