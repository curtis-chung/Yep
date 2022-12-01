
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import YepLogo from "./yep-logo-transparent.png"
import "./BizNavBar.css"
import ProfileButton from './ProfileButton';

const BizNavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <div className='nav-bar-container'>
            <div className='nav-bar-left'>
                <NavLink to="/">
                    <img
                        alt="logo"
                        src={YepLogo}
                        className="yep-logo"
                    />
                </NavLink>
            </div>
            <div className='nav-bar-center'>
                <div className="search-bar-div">
                    <div className="search-bar search-bar-type">
                        <input
                            id="type-search"
                            placeholder="food, drinks"
                            className='search-bar-input search-bar-input-left'
                        />
                    </div>
                    <div className='search-bar-divider'></div>
                    <div className="search-bar search-bar-location">
                        <input
                            id="type-search"
                            placeholder="address, neighborhood, city, state or zip"
                            className='search-bar-input'
                        />
                    </div>
                    <button className="magnifying-glasses-submit-button">
                        <i className="fa-solid fa-magnifying-glass" id="magnifying-glass" />
                    </button>
                </div>
            </div>
            <div className='nav-bar-right'>
                <div className="nav-bar-right-buttons">
                    <div className='business-reviews'>
                        <NavLink to="/signup_biz/new" className='biz-fake-buttons'>For Businesses</NavLink>
                        <div className='biz-fake-buttons'>Write a Review</div>
                    </div>
                    {!user && (
                        <div className='nav-bar-login-signup'>
                            <NavLink to="/login" className='bold-button biz-small-login-button'>Log In</NavLink>
                            <NavLink to="/sign-up" className='bold-button small-signup-button'>Sign Up</NavLink>
                        </div>
                    )}
                    {user && (
                        <ProfileButton />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BizNavBar;
