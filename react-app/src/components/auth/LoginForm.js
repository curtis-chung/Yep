import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './SignInForm.css';
import image from "./signup_illustration.png"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]); // reset errors when input fields are corrected => displays errors dynamically
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-in-page'>
      <div className='sign-in-container'>
        <div className="sign-in-container-top">
          <div className='sign-in-container-top-text'>
            <div className="sign-in-text-title">Log in to Yep</div>
            <div className="sign-in-text" style={{ fontSize: "14px", fontWeight: "600", height: "17px" }}>New to Yep? &nbsp;
              <NavLink to="/sign-up" className="sign-up-navlink">
                Sign up
              </NavLink>
            </div>
            <div className="sign-in-text" style={{ fontSize: "12px", height: "36px", textAlign: "center" }}>By logging in, you agree to Yep's Terms of Service and Privacy Policy.</div>
          </div>

          <button type="submit" className="sign-in-button demo-button">Continue as Demo User</button>

          <div className='login-separator'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

          <form onSubmit={onLogin}>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              className="input-fields"
            />
            {errors.email && (
              <div className='errors'>{errors.email}</div>
            )}
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              className="input-fields"
            />
            {errors.password && (
              <div className='errors'>{errors.password}</div>
            )}
            <div className='login-button-div'>
              <button type="submit" className="sign-in-button login-button">Log In</button>
            </div>
          </form>
        </div>

        <div className="sign-in-container-bottom">
          <div className='sign-in-container-bottom-text'>
            New to Yep? &nbsp;
            <NavLink to="/sign-up" className="sign-up-navlink">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
      <div className='sign-in-picture-div'>
        <div className='sign-in-picture-container'>
          <img className='big-image' src={image} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
