import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import LargeInput from '../sharedComponents/components/LargeInput';
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
import { SERVER_URL } from '../environmentVariables';

const errorParsing = (errorMessage) =>
  errorMessage.length > 100 ? errorMessage.substring(0, 50) : errorMessage;

const Login = ({ loginSuccessAndRedirect, loginError, loginLoading }) => {
  const { control, handleSubmit } = useForm();
  const history = useHistory();
  const [formState, setFormState] = React.useState({
    userName: '',
    password: '',
    errorMessage: '',
    isErrors: false,
  });

  const handleLoginSubmit = async (data, event) => {
    event.preventDefault();
    loginLoading(true);
    console.log('Login Data Test', data);
    const submitLoginCredentials = axios
      .post(`${SERVER_URL}/api/auth/login`, data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/dashboard');
        loginSuccessAndRedirect(res.data);
      })
      .catch((err) => {
        setFormState({
          ...formState,
          errorMessage: err.message,
          isErrors: true,
        });
        loginError(err);
      });
    loginLoading(false);
  };

  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {}
        <section
          id="subheader"
          // data-bgimage="url(images/background/5.png) bottom"
        >
          <div className="center-y relative text-center" data-scroll-speed={4}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form className="row" id="form_subscribe" method="post" name="myForm">
                    <div className="col-md-12 text-center">
                      <h1>Login</h1>
                      <p />
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {}
        <section
          className="no-top"
          // data-bgimage="url(images/background/3.png) top"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form
                  name="contactForm"
                  className="form-border"
                  onSubmit={handleSubmit((data, e) => {
                    e.preventDefault();
                    handleLoginSubmit(data, e);
                  })}
                >
                  <h3>Login to your account</h3>
                  <div className="field-set">
                    <label>Username</label>
                    <Controller
                      as={<LargeInput placeholder="Username" />}
                      name="username"
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="field-set">
                    <label>Password</label>
                    <Controller
                      as={<LargeInput isPasswordMasked="true" placeholder="Password" />}
                      name="password"
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div id="submit" className="pull-left">
                    <input
                      type="submit"
                      id="send_message"
                      defaultValue="Login"
                      style={{ border: 'solid 1px #cccccc' }}
                      className="btn btn-custom color-2"
                    />
                    <div id="mail_success" className="success">
                      Your message has been sent successfully.
                    </div>
                    {formState.isErrors && (
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        style={{ width: '500px', margin: '30px auto' }}
                      >
                        {formState.errorMessage}{' '}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                          onClick={() =>
                            setFormState({
                              ...formState,
                              isErrors: false,
                            })
                          }
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    )}
                    <div className="clearfix" />
                    <div className="spacer-single" />
                    {}
                    {
                      // <ul className="list s3">
                      //   <li>Or login with:</li>
                      //   <li>
                      //     <a href="#">Facebook</a>
                      //   </li>
                      //   <li>
                      //     <a href="#">Google</a>
                      //   </li>
                      //   <li>
                      //     <a href="#">Instagram</a>
                      //   </li>
                      // </ul>
                    }
                    {}
                  </div>
                </form>
              </div>
            </div>
          </div>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isErrors: state.auth.errors.isError,
  isLoading: state.auth.isLoading,
  errorMessage: state.auth.errors.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccessAndRedirect: (data) =>
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data,
    }),
  loginLoading: (loading) =>
    dispatch({
      type: 'USER_LOADING',
      payload: loading,
    }),
  loginError: (err) =>
    dispatch({
      type: 'LOGIN_FAIL',
      payload: {
        isError: true,
        errorMessage: errorParsing(err.message),
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
