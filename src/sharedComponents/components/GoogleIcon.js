import React from 'react';

import GoogleImage from '../../img/googleIcon.png';

const GoogleIcon = ({ isIconButton }) => (
  <img src={GoogleImage} width={isIconButton ? '24px' : '24px'} alt="google icon" />
);

export default GoogleIcon;
