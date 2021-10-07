import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FormWrapper from '../components/FormWrapper';
import LeftColumn from '../components/LeftColumn';
import EndSummary from '../components/EndSummary';

const useStyles = makeStyles({
  root: {},
});
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const CreateAdMainPage = () => {
  const classes = useStyles();
  const [page, setPage] = useState(5);
  const [socials, setSocials] = useState(null);
  const [formData, setFormData] = useState({
    image: DEFAULT_IMAGE,
    description: 'text',
    callToAction: 'GO TO',
  });
  const formUpdate = (formInfo) => {
    const { description, image } = formInfo;
    setFormData(formInfo);
    // setImageDisplay({ ...imageDisplay, text: description, image });
  };

  const updateSocial = (socials) => {
    setSocials(socials);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };
  const goToBackPage = () => {
    setPage(page - 1);
  };
  return (
    <Box maxWidth="1000px">
      <Box marginBottom="3rem">
        <Typography variant="h2">Create an Ad</Typography>
      </Box>
      {page <= 4 ? (
        <Grid container width="100%">
          <Grid item sm={12} md={6}>
            {page === 1 && <LeftColumn page={page} form={formData} />}
          </Grid>
          <Grid item xs={12} md={6}>
            <FormWrapper
              handleUpdateForm={formUpdate}
              page={page}
              // handleUpdateSocial={updateSocial}
            />
            <Box width="400px" display="flex" justifyContent="space-between" marginTop="1rem">
              <Button
                variant="contained"
                color="primary"
                onClick={goToBackPage}
                style={{ visibility: page > 1 ? 'visible' : 'hidden' }}
              >
                back
              </Button>
              <Button variant="contained" color="primary" onClick={goToNextPage}>
                Next
              </Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <EndSummary />
          <Button variant="contained" color="primary" onClick={goToBackPage}>
            back
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CreateAdMainPage;
