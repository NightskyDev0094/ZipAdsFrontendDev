import React, { Fragment } from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import {FACEBOOK_KEY} from '../../../environmentVariables';

const FacebookConnect = ({ handleFacebookLogin }) => {
  const [code, setCode] = React.useState('');
  const responseFacebook = (response) => {
    // setCode(response);
    // console.log('RUNNING CODE::::', response.accessToken);
    const formData = new FormData();
    formData.append('access_token', response.accessToken);
    handleFacebookLogin(formData);
  };
  return (
    <>
      <FacebookLogin
        appId={FACEBOOK_KEY}
        buttonText="Connect to Facebook"
        autoLoad={false}
        fields="name,email,picture"
        disabled={true}
        callback={responseFacebook}
      />
      {/* <button onClick={getUserInfo}>get info</button> */}
    </>
  );
};

FacebookConnect.propTypes = {
  handleFacebookLogin: PropTypes.func,
};

FacebookConnect.defaultProps = {
  handleFacebookLogin: () => {},
};

export default FacebookConnect;
