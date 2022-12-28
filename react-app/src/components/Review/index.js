
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import review from "./review.png"
import "./Review.css"
import * as businessActions from "../../store/business"

const ReviewSplash = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [search, setSearch] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [stars, setStars] = useState("");
    const allBiz = useSelector((state) => {
        let allBiz = Object.values(state?.business?.allBusinesses)
        // console.log("allBiz", allBiz)
        return allBiz.sort((a, b) => parseFloat(b.num_reviews) - parseFloat(a.num_reviews))
    })

    const [match, setMatch] = useState()

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
                setSearchResults(matches);
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

    const myStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "4px",
        objectFit: "cover"
    }

    const redStyle = {
        color: "#d32323"
    }

    const grayStyle = {
        color: "rgba(110,112,114,1)",
        fontWeight: "400"
    }

    const circleStyle = {
        fontSize: "3px",
        color: "gray"
    }

    const numDollarSigns = {
        1: "$",
        2: "$$",
        3: "$$$",
        4: "$$$$"
    }

    return (
        <div className='reviewSplash-wrapper'>
            <div className='reviewSplash-top-outter-container'>
                <div className='reviewSplash-top-inner-container'>
                    <div className='reviewSplash-top-left'>
                        <div className='reviewSplash-top-title' style={{ fontSize: "28px", fontWeight: "700", lineHeight: "36px" }}>
                            Find a business to review
                        </div>
                        <div className='reviewSplash-top-body' style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px", marginTop: "24px" }}>
                            Review anything from your favorite patio spot to your local coffee shop.
                        </div>
                        <div className='reviewSplash-top-search' style={{ marginTop: "24px", zIndex: "2" }}>
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
                        </div>
                    </div>
                    <div className='reviewSplash-top-right'>
                        <img src={review} />
                    </div>
                </div>
            </div>
            <div className='reviewSplash-bottom-container'>
                <div className='reviewSplash-bottom-title' style={{ fontSize: "20px", fontWeight: "700", lineHeight: "28px" }}>
                    Visited one of these places recently?
                </div>
                <div className='reviewSplash-bottom-cards' style={{ marginTop: "32px" }}>
                    {allBiz.slice(0, 6).map((business) => {
                        return (
                            <NavLink to={`/biz/${business.id}/writeareview`} className='review-card-nav'>
                                <div className='review-card-left'>
                                    <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                                    }} />
                                </div>
                                <div className='review-card-right' style={{ marginLeft: "16px" }}>
                                    <div style={{ fontSize: "20px", fontWeight: "700", lineHeight: "28px", marginTop: "24px" }}>
                                        {business.business_name}
                                    </div>
                                    <div style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>Do you recommend this business?</div>
                                    <div class="rate" style={{ padding: "0" }}>
                                        <input type="radio" id="star5" name="rate" value={5} onChange={(e) => setStars(e.target.value)} />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value={4} onChange={(e) => setStars(e.target.value)} />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value={3} onChange={(e) => setStars(e.target.value)} />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value={2} onChange={(e) => setStars(e.target.value)} />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value={1} onChange={(e) => setStars(e.target.value)} />
                                        <label for="star1" title="text">1 star</label>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReviewSplash
