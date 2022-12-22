import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import YepLogo from "./yep-logo-transparent.png"
import "./BizNavBar.css"
import ProfileButton from './ProfileButton';
import * as businessActions from "../store/business"

const BizNavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [search, setSearch] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const allBiz = useSelector((state) => {
        let allBiz = Object.values(state?.business?.allBusinesses)
        // console.log("allBiz", allBiz)
        return allBiz
    })

    const [match, setMatch] = useState()

    useEffect(() => {
        dispatch(businessActions.getAllBusinesses())
        // console.log(search)

        if (search.length > 0) {
            let matches = [];
            setSearchOpen(true);
            function handleSearch(search) {
                for (let i = 0; i < allBiz.length; i++) {
                    if (allBiz[i].business_name.toLowerCase().includes(search.toLowerCase()) || allBiz[i].business_type.toLowerCase().includes(search.toLowerCase())) {
                        matches.push([allBiz[i].business_name, allBiz[i].id]);
                        // console.log(matches)
                    }
                }
                setSearchResults(matches);
            }
            handleSearch(search);
            document.addEventListener("click", () => {
                setSearchOpen(false)
            })
            setMatch(matches)
            // console.log("LUX", document.getElementById("type-search"))
            // console.log("NILAH", matches)
        } else {
            setSearchOpen(false);
        }
    }, [search]);

    function handleSearchInputShadow() {
        const searchInput = document.getElementById('type-search');
        const searchDiv = document.getElementsByClassName(
            'search-bar-type'
        );
        searchDiv[0].classList.add('search-bar-div-focus');
        searchInput.addEventListener('focusout', () => {
            searchDiv[0].classList.remove('search-bar-div-focus');
        });
    }

    return (
        <div className='biz-nav-bar-container biz-nav-bar'>
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
                    <div className='search-bar-div-top'>
                        <div className="search-bar search-bar-type">
                            <input
                                id="type-search"
                                placeholder="food, drinks"
                                className='search-bar-input search-bar-input-left'
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleSearchInputShadow()
                                    setSearchOpen(true)
                                    { console.log("Galio", search, match) }
                                }}
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                autoComplete="off"
                            />
                        </div>
                        <div className='search-bar-divider'></div>
                        <div className="search-bar search-bar-location">
                            <input
                                id="type-search"
                                placeholder="address, neighborhood, city, state or zip"
                                className='search-bar-input search-bar-location'
                                value="New York, NY"
                            />
                        </div>
                        <button
                            className="magnifying-glasses-submit-button"
                            onClick={() => {
                                history.push(`/search_results/${search}`)
                            }}>
                            <i className="fa-solid fa-magnifying-glass" id="magnifying-glass" />
                        </button>
                    </div>
                    {searchOpen &&
                        searchResults.length > 0 &&
                        searchResults.map((result) => (
                            <div
                                className="search-results"
                                key={result}
                                onClick={() => {
                                    setSearch('');
                                    setSearchResults([]);
                                    setSearchOpen(false);
                                    history.push(`/biz/${result[1]}`);
                                    history.go(0);
                                }}
                            >
                                <span id="search-result-ticker">{result[0]}</span>
                            </div>
                        ))}
                </div>
            </div>
            <div className='nav-bar-right'>
                <div className="nav-bar-right-buttons">
                    <div className='business-reviews'>
                        <NavLink to="/signup_biz/new" className='biz-fake-buttons'>For Businesses</NavLink>
                        <div className="biz-fake-buttons write-a-review">Write a Review</div>
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
