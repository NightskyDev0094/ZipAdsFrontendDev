import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addBusinessInfo } from '../../../actions/businessInfoActions';
import OutlinedButton from '../../../sharedComponents/components/OutlinedButton';

const SaveButton = ({ currPage, handleSaveClick, addBusinessInfo, classes }) => {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = React.useState();

  React.useEffect(() => {
    const pageNum = location.pathname.split('/')[2];
    setPage(pageNum);
  }, []);

  const handleSubmit = () => {
    handleSaveClick();
    history.push(`/dashboard`);
  };

  return (
    <Box>
      <Box
        className={classes.submitButtonContainer ? classes.submitButtonContainer : {}}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className={classes.submitButton ? classes.submitButton : {}}
        >
          Submit &#8594;
        </Button>
      </Box>
    </Box>
  );
};

export default SaveButton;
