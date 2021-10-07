import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import BasicInfoForm from './BasicInfoForm';

import OnboardingText from './OnboardingText';
import BackAndNextButtons from './BackAndNextButtons';
import OnboardingHeader from './OnboardingHeader';

const OnboardingWrapper = (props) => (
  <>
    {
      // <OnboardingHeader />
    }
    <BackAndNextButtons {...props} />
    <OnboardingText {...props} />
    {props.children}
  </>
);

export default OnboardingWrapper;
