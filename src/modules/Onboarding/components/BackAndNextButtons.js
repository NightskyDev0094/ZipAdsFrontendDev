import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addBusinessInfo } from '../../../actions/businessInfoActions';
import OutlinedButton from '../../../sharedComponents/components/OutlinedButton';

const BackAndNextButtons = ({ currPage, handleNextClick, addBusinessInfo, classes }) => {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = React.useState();

  React.useEffect(() => {
    const pageNum = location.pathname.split('/')[2];
    setPage(pageNum);
  }, []);

  const handleNext = () => {
    handleNextClick();
    history.push(`/onboarding/${+page + 1}`);
  };

  const handleBack = () => {
    history.push(`/onboarding/${+page - 1}`);
  };

  return (
    <Box>
      {page === '1' ? (
        <Box
          className={classes.submitButtonContainer ? classes.submitButtonContainer : {}}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleNext}
            className={classes.submitButton ? classes.submitButton : {}}
          >
            Submit &#8594;
          </Button>
        </Box>
      ) : (
        <Box display="flex" justifyContent="space-between">
          <OutlinedButton onClick={handleBack}>Back</OutlinedButton>
          <Button variant="contained" color="primary" type="submit" onClick={handleNext}>
            Next &#8594;
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BackAndNextButtons;
