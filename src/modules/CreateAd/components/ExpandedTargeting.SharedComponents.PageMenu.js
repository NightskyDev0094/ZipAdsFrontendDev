import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const createTableDataIntoMatrix = (tableRows) => tableRows.map((row) => Object.values(row));

export const ExpandedTargetingPageMenu = ({ handleChange, state, classes }) => (
  <>
    <FormControlLabel
      control={
        <Checkbox
          checked={state.displayGoogleComponent}
          onChange={(e) => handleChange(e)}
          name="displayGoogleComponent"
          color="primary"
        />
      }
      label="Google Information"
      className={classes.checkBox}
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={state.displayFacebookComponent}
          onChange={(e) => handleChange(e)}
          name="displayFacebookComponent"
          color="primary"
        />
      }
      className={classes.checkBox}
      label="Facebook Information"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={state.displayAllComponents}
          onChange={(e) => handleChange(e)}
          name="displayAllComponents"
          color="primary"
        />
      }
      className={classes.checkBox}
      label="All Information"
    />
  </>
);
