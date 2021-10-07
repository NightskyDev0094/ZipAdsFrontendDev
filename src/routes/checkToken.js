import React from 'react';
import { connect } from 'react-redux';
import { history } from 'react-router-dom';
import { setTokenTime } from '../actions/account.tokenActions';
import { logout } from '../actions/authActions';

Date.prototype.today = function () {
  return `${(this.getDate() < 10 ? '0' : '') + this.getDate()}/${
    this.getMonth() + 1 < 10 ? '0' : ''
  }${this.getMonth() + 1}/${this.getFullYear()}`;
};

/**
 * if no expiration time:
 *      set expiration time
 * if old token and new token are different:
 *      set new token time
 * if token is a day old:
 *         logout user
 */

/**
 * @param currentTokenTime: string {The token time saved to the store}
 * @param pastToken: string {The current token in the store}
 * @param setTokenTime: function {A redux action that sets the token time}
 * @param logout: function that logs out user
 */

const CheckToken = ({ currentTokenTime, pastToken, setTokenTime, logout }) => {
  const date = new Date();
  const currentTime = date.today();

  if (!currentTokenTime) {
    setTokenTime(currentTime);
    return <div />;
  }

  const currentDay = currentTime.split('/')[0];
  const savedTokenDay = currentTokenTime.split('/')[0];
  const currentToken = localStorage.getItem('token');

  if (savedTokenDay !== currentDay) {
    logout();
  } else if (pastToken !== currentToken) {
    setTokenTime(currentTime);
  }
  return <div />;
};

const mapStateToProps = (state) => ({
  currentTokenTime: state.auth.tokenTime,
  pastToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => logout(dispatch),
  setTokenTime: (token) => setTokenTime(dispatch, token),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckToken);
