import React from 'react';
import { connect } from 'react-redux';
import BlueTecLogin from '../../../BlueTecUIKit/BlueTecLogin';
import BlueTecFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

import { login, connectGoogleOAuth, connectFacebookAuth } from '../../../actions/authActions';

const LoginModalContainer = ({ login }) => (
  <>
    <BlueTecLogin handleLogin={login} />
    <BlueTecFooter />
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
  connectFacebookAuth,
  connectGoogleOAuth,
})(LoginModalContainer);
