import React, { Fragment } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';

const FacebookConnect = ({ handleFacebookLogin }) => {
  const [code, setCode] = React.useState('');
  const responseFacebook = (response) => {
    setCode(response);
    const formData = new FormData();
    formData.append('access_token', code);
    handleFacebookLogin(formData);
  };
  return (
    <>
      <FacebookLogin
        appId="230330218311850"
        buttonText="Connect to Facebook"
        autoLoad={false}
        disableMobileRedirect={true}
        fields="name,email,picture"
        callback={responseFacebook}
        isDisabled={true}
      />
      {/* <button onClick={getUserInfo}>get info</button> */}
    </>
  );
};

FacebookConnect.defaultProps = {
  handleFacebookLogin: () => {},
};

FacebookConnect.propTypes = {
  handleFacebookLogin: PropTypes.func,
};

export default FacebookConnect;
