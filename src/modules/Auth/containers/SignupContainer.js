import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, connectGoogleOAuth, connectFacebookAuth } from '../../../actions/authActions';

import BlueTecRegister from '../../../BlueTecUIKit/BlueTecRegister';
import BlueTecFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const SignupContainer = ({ login, isAuthenticated, connectGoogleOAuth, connectFacebookAuth }) => {
  const history = useHistory();

  const handleLogin = (formData) => {
    login(formData);
    history.push('/onboarding/1');
  };

  return (
    <>
      <BlueTecRegister handleLogin={handleLogin} />
      <BlueTecFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
  connectFacebookAuth,
  connectGoogleOAuth,
})(SignupContainer);
