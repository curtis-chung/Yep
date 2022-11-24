import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignInForm.css';

function SignInForm() {

    return (
        <div className='sign-in-container'>
            <div className="sign-in-container-top">
                <div className='sign-in-container-top-text'>
                    <div className="sign-in-text-title">Log in to Yelp</div>
                    <div className="sign-in-text" style={{ fontSize: "14px", fontWeight: "600", height: "17px" }}>New to Yelp? Sign up</div>
                    <div className="sign-in-text" style={{ fontSize: "12px", height: "36px" }}>By logging in, you agree to Yelp's Terms of Service and Privacy Policy.</div>
                </div>

                <button type="submit" className="sign-in-button demo-button">Continue as Demo User</button>

                <div className='login-separator'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

                <form onSubmit={"handleSubmit"} className="form-box">
                    <div className='inputs'>
                        <input
                            type="text"
                            required
                            placeholder="Email"
                            className="input-fields"
                        />
                        <input
                            type="password"
                            required
                            placeholder='Password'
                            className="input-fields"
                        />
                    </div>
                    <div className='login-button-div'>
                        <button type="submit" className="sign-in-button login-button">Log In</button>
                    </div>
                </form>
            </div>

            <div className="sign-in-container-bottom">
                <div className='sign-in-container-bottom-text'>
                    New to Yelp? Sign up
                </div>
            </div>
        </div >
    );
}

export default SignInForm;
