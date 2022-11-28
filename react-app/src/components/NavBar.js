
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import YepLogo from "./yep-logo-transparent.png"
import "./NavBar.css"

const NavBar = () => {
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
            <button className='fake-buttons'>For Businesses</button>
            <button className='fake-buttons'>Write a Review</button>
          </div>
          <div className='nav-bar-login-signup'>
            <button className='bold-button small-login-button'>Log In</button>
            <button className='bold-button small-signup-button'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

<nav>
  <ul>
    <li>
      <NavLink to='/' exact={true} activeClassName='active'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/login' exact={true} activeClassName='active'>
        Login
      </NavLink>
    </li>
    <li>
      <NavLink to='/sign-up' exact={true} activeClassName='active'>
        Sign Up
      </NavLink>
    </li>
    <li>
      <NavLink to='/users' exact={true} activeClassName='active'>
        Users
      </NavLink>
    </li>
    <li>
      <LogoutButton />
    </li>
  </ul>
</nav>

export default NavBar;
