import React, { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const MaskedInputCheckBox = ({ setFormState, formState }) => (
  <FormGroup row>
    <FormControlLabel
      control={
        <Switch
          checked={formState.isPasswordMasked}
          onChange={(e) =>
            setFormState({
              ...formState,
              isPasswordMasked: !formState.isPasswordMasked,
            })
          }
          name="passwordSwitch"
          color="primary"
        />
      }
      label="Reveal Password"
    />
  </FormGroup>
);

export default MaskedInputCheckBox;
