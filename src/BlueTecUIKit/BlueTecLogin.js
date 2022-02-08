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
import BlueTecAuthenticationSub from './BlueTecAuthenticationSub';
import { STATIC_URL } from '../environmentVariables';

const SignIn_Up = STATIC_URL + 'images/signin&up.png'
;
const errorParsing = (errorMessage) =>
  errorMessage.length > 100 ? errorMessage.substring(0, 50) : errorMessage;

const Login = ({ loginSuccessAndRedirect, loginError, loginLoading }) => {
  const { control, handleSubmit, setValue } = useForm();
  const history = useHistory();
  const [formState, setFormState] = React.useState({
    userName: '',
    password: '',
    errorMessage: '',
    isErrors: false,
  });
  const [password, setPassword] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const INPUT_MAX_LENGTH = 80;

  React.useEffect(() => {
    let account = JSON.parse(localStorage.getItem('account'));
    
    setValue('username', account.username);
    setValue('password', account.password);
    handleSubmit(account);
  }, []);

  const handleLoginSubmit = async (data, event) => {
    event.preventDefault();
    loginLoading(true);

    const submitLoginCredentials = axios
      .post(`${SERVER_URL}/api/auth/login`, data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        if (remember) localStorage.setItem('account', JSON.stringify(data));

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
        <section className="no-top p-0">
          <div className="row m-0">
            <div className="col-lg-6 px-5 pt-5" style={{ minHeight: '526px' }}>
              <form
                name="contactForm"
                className="form-border"
                onSubmit={handleSubmit((data, e) => {
                  e.preventDefault();
                  handleLoginSubmit(data, e);
                })}
              >
                <h1
                  className="text-center"
                  style={{
                    color: '#00468f',
                    fontFamily: 'sans-serif',
                    marginBottom: '80px',
                    fontSize: '42px',
                  }}
                >
                  Login
                </h1>
                <div className="field-set input-type mb-2">
                  <Controller
                    as={<LargeInput placeholder="Username" />}
                    name="username"
                    control={control}
                    rules={{ required: true, maxLength: INPUT_MAX_LENGTH }}
                  />
                </div>
                <div className="field-set input-type">
                  {/* <Controller
                    as={<LargeInput passwordMasked={!password} placeholder="Password" />}
                    name="password"
                    control={control}
                    rules={{ required: true, maxLength: INPUT_MAX_LENGTH }}
                  /> */}
                  <Controller
                    as={<LargeInput isPasswordMasked={!password} placeholder="Password" />}
                    name="password"
                    control={control}
                    rules={{ required: true, maxLength: INPUT_MAX_LENGTH }}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: '25px 0', cursor: 'pointer', userSelect: 'none' }}
                    onClick={() => {
                      setPassword(!password);
                    }}
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      style={{ width: '17px', height: '17px' }}
                      checked={password}
                    />
                    <p
                      style={{
                        color: '#5c5c5c',
                        fontSize: '17px',
                        fontWeight: 600,
                        fontFamily: 'Nunito',
                      }}
                    >
                      Show Password
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: '25px 0', cursor: 'pointer', userSelect: 'none' }}
                    onClick={() => {
                      setRemember(!remember);
                    }}
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      style={{ width: '17px', height: '17px' }}
                      checked={remember}
                    />
                    <p
                      style={{
                        color: '#5c5c5c',
                        fontSize: '17px',
                        fontWeight: 600,
                        fontFamily: 'Nunito',
                      }}
                    >
                      Remember Me
                    </p>
                  </div>
                </div>
                <div id="submit" className="pull-left w-100">
                  <button
                    type="submit"
                    id="send_message"
                    style={{
                      border: 'solid 1px #cccccc',
                      color: 'white',
                      padding: '14px 0',
                      backgroundColor: '#00468f',
                      fontSize: '23px',
                      marginTop: '80px',
                      borderRadius: '6px',
                    }}
                    className="btn btn-custom color-2 w-100 border-0"
                  >
                    Login
                  </button>
                  <p
                    className="text-right"
                    style={{
                      margin: '1rem 0',
                      color: '#a6a6a6',
                      cursor: 'pointer',
                      fontSize: '17px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Forgot password?
                  </p>
                  <div id="mail_success" className="success">
                    Your message has been sent successfully.
                  </div>
                  {formState.isErrors && (
                    <div
                      className="alert alert-danger alert-dismissible fade show m-0"
                      role="alert"
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
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 text-center d-flex flex-column feature-sub"
              style={{ padding: '40px 7vw' }}
            >
              <BlueTecAuthenticationSub />
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

Login.propTypes = {
  loginSuccessAndRedirect: func,
  loginError: func,
  loginLoading: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
