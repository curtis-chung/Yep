import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../store/session';
import './Profile.css';

function ProfileButton() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div onClick={openMenu} className="profile-button">
                <i class="fa-solid fa-circle-user"></i>
            </div>
            {showMenu && user && (
                <div className="profile-dropdown-container">
                    <div className="profile-dropdown-cards">
                        <div className="profile-dropdown-personal-info">
                            <div className="icon-div">
                                <i class="fa-regular fa-circle-user"></i>
                            </div>
                            {user.first_name}
                        </div>
                        <div className="profile-dropdown-personal-info">
                            <div className="icon-div">
                                <i class="fa-solid fa-user-plus"></i>
                            </div>
                            Find Friends
                        </div>
                        <div className="profile-dropdown-personal-info">
                            <div className="icon-div">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                            Account Settings
                        </div>

                        <div className='line'></div>

                        <div className="profile-dropdown-content">
                            <div onClick={logout} className="profile-dropdown-personal-info profile-logout">
                                <div className="icon-div">
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </div>
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
