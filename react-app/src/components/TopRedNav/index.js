import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import YepLogo from "../yep-logo-white.png"
import './TopRedNav.css';

const TopRedNav = () => {

    return (
        <div className="top-red-nav-container">
            <NavLink to="/">
                <img
                    alt="logo"
                    src={YepLogo}
                    className="yep-logo"
                />
            </NavLink>
        </div>
    );
};

export default TopRedNav;
