import React from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './BottomNav.css';
import burst from "./burst_red.png";
import logo from "./logo_desktop.png";

function BottomNav() {

    return (
        <div className='bottom-nav'>
            <div className='bottom-nav-inner'>
                <div className='bottom-inner-links'>
                    <div className='bottom-text-box'>
                        <span className='bottom-link-titles' style={{ color: 'black', marginBottom: '6px' }}>About</span>
                        <div className='bottom-link-list'>
                            <span className='hover-underline'>About Yep</span>
                            <span className='hover-underline'>Careers</span>
                            <span className='hover-underline'>Press</span>
                            <span className='hover-underline'>Investor Relations</span>
                            <span className='hover-underline'>Trust & Safety</span>
                            <span className='hover-underline'>Content Guidelines</span>
                            <span className='hover-underline'>Accessibility Statement</span>
                            <span className='hover-underline'>Terms of Service</span>
                            <span className='hover-underline'>Privacy Policy</span>
                            <span className='hover-underline'>Ad Choices</span>
                            <span className='hover-underline'>Manage Cookies</span>
                        </div>
                    </div>
                    <div className='bottom-text-box'>
                        <span className='bottom-link-titles' style={{ color: 'black', marginBottom: '6px' }}>Discover</span>
                        <div className='bottom-link-list'>
                            <span className='hover-underline'>Yep Project Cost Guides</span>
                            <span className='hover-underline'>Collections</span>
                            <span className='hover-underline'>Talk</span>
                            <span className='hover-underline'>Events</span>
                            <span className='hover-underline'>Yep Blog</span>
                            <span className='hover-underline'>Support</span>
                            <span className='hover-underline'>Yep Mobile</span>
                            <span className='hover-underline'>Developers</span>
                            <span className='hover-underline'>RSS</span>
                        </div>
                    </div>
                    <div className='bottom-text-box'>
                        <span className='bottom-link-titles' style={{ color: 'black', marginBottom: '6px' }}>Yep for Business</span>
                        <div className='bottom-link-list'>
                            <span className='hover-underline'>Claim your Business Page</span>
                            <span className='hover-underline'>Advertise on Yep</span>
                            <span className='hover-underline'>Yep for Restaurant Owners</span>
                            <span className='hover-underline'>Table Management</span>
                            <span className='hover-underline'>Business Success Stories</span>
                            <span className='hover-underline'>Business Support</span>
                            <span className='hover-underline'>Yep Blog for Business</span>
                        </div>
                    </div>
                    <div className='last-bottom-text-box'>
                        <span className='bottom-link-titles' style={{ color: 'black', marginBottom: '6px' }}>Language</span>
                        <div className='last-bottom-link-list'>
                            <span>English</span>
                        </div>
                        <span className='bottom-link-titles' style={{ color: 'black', marginBottom: '6px' }}>Country</span>
                        <div className='last-bottom-link-list'>
                            <span>United States</span>
                        </div>
                    </div>
                </div>
                <div className='bottom-div'>
                    <div className='bottom-copyright'>
                        <span className='bottom-copyright-list'>Copyright © 2022 Yep Inc. &nbsp; <img className="bottom-nav-img" src={burst} /> &nbsp; and related marks are registered trademarks of Yep.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNav;
