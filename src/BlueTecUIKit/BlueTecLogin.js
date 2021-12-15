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
import { func } from 'prop-types';

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
  const INPUT_MAX_LENGTH = 80;

  const handleLoginSubmit = async (data, event) => {
    event.preventDefault();
    loginLoading(true);
    // console.log('Login Data Test', data);
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
        {/* <div id="top" />
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
        {} */}
        <section
          className="no-top"
          // data-bgimage="url(images/background/3.png) top"
        >
          <div className="row m-0">
            <div className="col-lg-6 p-5" style={{minHeight: '526px'}}>
              <form
                name="contactForm"
                className="form-border"
                onSubmit={handleSubmit((data, e) => {
                  e.preventDefault();
                  handleLoginSubmit(data, e);
                })}
              >
                <h1 className="text-center mb-4" style={{color: '#00468f'}}>Login</h1>
                <div className="field-set">
                  <Controller
                    as={<LargeInput placeholder="Username" />}
                    name="username"
                    control={control}
                    rules={{ required: true, maxLength: INPUT_MAX_LENGTH }}
                  />
                </div>
                <div className="field-set">
                  <Controller
                    as={<LargeInput isPasswordMasked="true" placeholder="Password" />}
                    name="password"
                    control={control}
                    rules={{ required: true, maxLength: INPUT_MAX_LENGTH }}
                  />
                </div>
                <div>
                  <div className="d-flex align-items-center" style={{padding: '25px 0'}}>
                    <input type="checkbox" className="mr-2"/>
                    <p>Remember Me</p>
                  </div>
                </div>
                <div id="submit" className="pull-left w-100">
                  <input
                    type="submit"
                    id="send_message"
                    defaultValue="Login"
                    style={{ border: 'solid 1px #cccccc', color: 'white', padding: '10px 0', backgroundColor: '#005dbf', fontSize: '18px' }}
                    className="btn btn-custom color-2 w-100 border-0"
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
            <div className="col-lg-6" style={{backgroundColor: '#2772dd', minHeight: '526px'}}></div>
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

Login.propTypes = {
  loginSuccessAndRedirect: func,
  loginError: func,
  loginLoading: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
