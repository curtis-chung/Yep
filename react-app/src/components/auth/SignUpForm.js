import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignInForm.css';
import image from "./signup_illustration.png"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]); // reset errors when input fields are corrected => displays errors dynamically
    const data = await dispatch(signUp(first_name, last_name, email, password));
    if (data) {
      setErrors(data)
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
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
            <div className="sign-in-text-title">Sign Up for Yelp</div>
            <div className="sign-in-text" style={{ fontSize: "14px", fontWeight: "600", height: "17px" }}>Connect with great local businesses</div>
            <div className="sign-in-text" style={{ fontSize: "12px", height: "36px", textAlign: "center" }}>By logging in, you agree to Yelp's Terms of Service and Privacy Policy.</div>
          </div>

          <button type="submit" className="sign-in-button demo-button">Continue as Demo User</button>

          <div className='login-separator'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

          <form onSubmit={onSignUp}>
            <span className='sign-up-form-names'>
              <input
                type='text'
                name='firstName'
                onChange={updateFirstName}
                value={first_name}
                placeholder="First Name"
                className="input-fields input-fields-name"
              ></input>
              <input
                type='text'
                name='lastName'
                onChange={updateLastName}
                value={last_name}
                placeholder="Last Name"
                className="input-fields input-fields-name"
              ></input>
            </span>
            {errors.first_name && (
              <div className='errors'>{errors.first_name}</div>
            )}
            {errors.last_name && (
              <div className='errors'>{errors.last_name}</div>
            )}
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder="Email"
              className="input-fields"
            ></input>
            {errors.email && (
              <div className='errors'>{errors.email}</div>
            )}
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder="Password"
              className="input-fields"
            ></input>
            {errors.password && (
              <div className='errors'>{errors.password}</div>
            )}
            <div className='login-button-div'>
              <button type="submit" className="sign-in-button login-button">Sign up</button>
            </div>
          </form>
        </div>

        <div className="sign-in-container-bottom">
          <div className='sign-in-container-bottom-text'>
            Already on Yelp? &nbsp;
            <NavLink to="/login" className="sign-up-navlink">
              Log In
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

export default SignUpForm;
