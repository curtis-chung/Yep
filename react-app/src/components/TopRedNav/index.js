import { NavLink } from 'react-router-dom';
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
