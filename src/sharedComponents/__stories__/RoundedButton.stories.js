import React from 'react';
import RoundedButton from '../components/RoundedButton';

export default {
  title: 'elements/Button',
  component: RoundedButton,
};
export const rounded = () => (
  <RoundedButton variant="contained" color="primary">
    Hello
  </RoundedButton>
);
