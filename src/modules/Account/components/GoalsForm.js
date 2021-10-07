import React from 'react';

import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const GoalsForm = ({ updateGoals }) => {
  const GOALS = [
    'Make people aware of my business',
    'Aquire new customers',
    'Generate web traffic',
    'Retain my current customers',
    'All of the above',
    'Note Sure',
  ];

  return (
    <RadioGroup aria-label="gender">
      {GOALS.map((goal) => (
        <FormControlLabel
          value={goal}
          control={<Radio />}
          label={goal}
          // onBlur={handleUpdate}
        />
      ))}
    </RadioGroup>
  );
};

export default GoalsForm;
