
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as businessActions from "../../store/business"

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [match, setMatch] = useState()
    const allBiz = useSelector((state) => {
        let allBiz = Object.values(state?.business?.allBusinesses)
        // console.log("allBiz", allBiz)
        return allBiz;
    })

    useEffect(() => {
        dispatch(businessActions.getAllBusinesses())

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
                setSearchResults(matches.sort());
            }
            handleSearch(search);
            document.addEventListener("click", () => {
                setSearchOpen(false)
            })
            setMatch(matches)
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
        <div className="reviewSplash-search-bar-div">
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
                            // { console.log("Galio", search, match) }
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
                            history.push(`/biz/${result[1]}`);
                            history.go(0);
                        }}
                    >
                        <span id="search-result-ticker">{result[0]}</span>
                    </div>
                ))}
        </div>
    )
}

export default SearchBar
