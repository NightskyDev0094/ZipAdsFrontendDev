import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
 * @param logoutUser: function that logs out user
 */

const CheckToken = ({ currentTokenTime, pastToken, logoutUser, setTokenTime }) => {
  const history = useHistory();
  const currentDateTime = new Date();
  const tomorrowDateTime = new Date();
  tomorrowDateTime.setDate(currentDateTime.getDate() + 1);

  const savedTokenExpirationDate = new Date(currentTokenTime);
  const currentToken = localStorage.getItem('token');

  useEffect(() => {
    if (!currentTokenTime) {
      // set token expiration date to the day after login date
      setTokenTime(tomorrowDateTime.toLocaleString()); // saved as '11/29/2021, 10:46:36 PM'
    } else if (savedTokenExpirationDate < currentDateTime) {
      // if token expiration date has past then log out
      logoutUser();
      history.push('/');
    } else if (pastToken !== currentToken) {
      // not sure when we would be refreshing the token - but that is what this does
      setTokenTime(tomorrowDateTime.toLocaleDateString());
    }
  }, []);

  return <div />;
};

const mapStateToProps = (state) => ({
  currentTokenTime: state.auth.tokenTime,
  pastToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => logout(dispatch),
  setTokenTime: (token) => setTokenTime(dispatch, token),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckToken);
