import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { SERVER_URL } from '../environmentVariables';
import { TextField } from '@material-ui/core';
import SubHeaderBackgroundImage from './images/background/5.png';
import RegisterSectionImage from './images/background/3.png';

import './css/colors/scheme-02.css';
import './css/coloring.css';
import './css/bootstrap-grid.min.css';
import './css/bootstrap-reboot.min.css';
import './css/animate.css';
import './css/owl.carousel.css';
import './css/owl.theme.css';
import './css/owl.transitions.css';
import './css/magnific-popup.css';
import './css/jquery.countdown.css';
import './css/style.css';
import './css/blueteclanding.css';
import './css/colors/scheme-01.css';

import './css/blueteclogin.css';
import { bool } from 'prop-types';

const BlueTecRegister = ({ handleLogin, handleFbSignup, isAuthenticated, redirectAfterSignUp }) => {
  const INPUT_MAX_LENGTH = 80;
  const [formState, setFormState] = React.useState({
    successMessage: 'You have been registered, welcome to EzAd!',
    errorMessage: '',
    isError: false,
    data: {},
    isFormSubmitted: false,
    fields: {
      username: '',
      password: '',
      confirmedPassword: '',
      email: '',
      fieldHasWhitepace: {
        username: false,
        password: false,
        confirmedPassword: false,
        email: false,
      },
    },
  });

  const parseErrorMessage = (errorResponse) => {
    let errorMessage = '';
    if (!errorResponse || !Object.keys(errorResponse).length) {
      errorMessage = `
        An error has occured, please register with a different name
        or password
      `;
    } else {
      if (errorResponse.hasOwnProperty('username')) {
        errorMessage = errorResponse.username[0];
      } else if (errorResponse.hasOwnProperty('password')) {
        errorMessage = errorResponse.password[0];
      } else if (errorResponse.hasOwnProperty('email')) {
        errorMessage = errorResponse.email[0];
      } else {
        errorMessage = `
          An error has occured, please register with a different name
          or password
        `;
      }
      return errorMessage;
    }
  };

  const registerUser = async ({ email, username, password }) => {
    const postData = await axios
      .post(`${SERVER_URL}/api/auth/register`, {
        username,
        password,
        email,
      })
      .then((response) => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        handleLogin(formData);
        // redirectAfterSignUp(response.data);
      })
      .catch((error) => {
        const errorMessage = parseErrorMessage(error.response?.data);
        setFormState({
          ...formState,
          errorMessage,
          isError: true,
        });
      });
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section id="subheader" data-bgimage={`${SubHeaderBackgroundImage} bottom`}>
        <div className="center-y relative text-center" data-scroll-speed={4}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="col-md-12 text-center">
                  <h1>Register</h1>
                  <p>Awsome Page Teaser Here</p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="no-top" data-bgimage={`${RegisterSectionImage} top`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3>Dont have an account? Register now.</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="spacer-10" />
              <form
                name="contactForm"
                className="form-border"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (e.target.checkValidity()) {
                    registerUser(formState.fields);
                  }
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>User Name:</label>
                      <TextField
                        type="text"
                        name="name"
                        style={{ margin: '10px 0' }}
                        id="name"
                        required
                        variant="standard"
                        value={formState.fields.username}
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ maxLength: INPUT_MAX_LENGTH }}
                        onChange={(e) => {
                          if (e.target.value.includes(' ')) return;
                          setFormState({
                            ...formState,
                            fields: {
                              ...formState.fields,
                              username: e.target.value,
                            },
                          });
                        }}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Email Address:</label>
                      <TextField
                        type="text"
                        name="email"
                        id="email"
                        style={{ margin: '10px 0' }}
                        required
                        className="form-control"
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ maxLength: INPUT_MAX_LENGTH }}
                        value={formState.fields.email}
                        onChange={(e) => {
                          if (e.target.value.includes(' ')) return;
                          setFormState({
                            ...formState,
                            fields: {
                              ...formState.fields,
                              email: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Password:</label>
                      <TextField
                        type="password"
                        name="password"
                        id="password"
                        style={{ margin: '10px 0' }}
                        required
                        className="form-control"
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ maxLength: INPUT_MAX_LENGTH }}
                        value={formState.fields.password}
                        onChange={(e) => {
                          if (e.target.value.includes(' ')) return;
                          setFormState({
                            ...formState,
                            fields: {
                              ...formState.fields,
                              password: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Re-enter Password:</label>
                      <TextField
                        type="password"
                        name="re-password"
                        id="re-password"
                        style={{ margin: '10px 0' }}
                        required
                        className="form-control"
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ maxLength: INPUT_MAX_LENGTH }}
                        value={formState.fields.confirmedPassword}
                        onChange={(e) => {
                          if (e.target.value.includes(' ')) return;
                          setFormState({
                            ...formState,
                            fields: {
                              ...formState.fields,
                              confirmedPassword: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="submit" className="pull-left">
                      <input
                        style={{ border: 'solid 1px #cccccc' }}
                        type="submit"
                        className="btn btn-custom color-2"
                      />
                    </div>
                    <div id="mail_success" className="success">
                      Your message has been sent successfully.
                    </div>
                    <div id="mail_fail" className="error">
                      Sorry, error occured this time sending your message.
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {formState.isError && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
            style={{ width: '500px', margin: '0 auto' }}
          >
            {formState.errorMessage}{' '}
            <button type="button" className="close" aria-label="Close">
              <span
                onClick={() => setFormState({ ...formState, isError: false })}
                aria-hidden="true"
              >
                ×
              </span>
            </button>
          </div>
        )}
      </section>
      <section className="pt60 pb60 bg-color-2 text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 mb-sm-30 text-lg-left text-sm-center">
              <h3 className="no-bottom">Awesomeness begin here. Are you ready?</h3>
            </div>
            <div className="col-md-4 text-lg-right text-sm-center">
              <a href="#" className="btn-custom capsule med">
                Lets do it!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  redirectAfterSignUp: (data) =>
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: data,
    }),
});

// BlueTecRegister.propTypes = {
//   handleLogin: func,
//   handleFbSignup: func,
//   isAuthenticated: bool,
//   redirectAfterSignUp: bool,
// };

export default connect(mapStateToProps, mapDispatchToProps)(BlueTecRegister);