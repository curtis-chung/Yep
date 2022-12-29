import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as businessActions from "../../store/business"
import './SearchResults.css';
import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker, OverlayView } from '@react-google-maps/api';

function SearchResults() {
    const dispatch = useDispatch();
    const { search } = useParams();
    const history = useHistory();
    let resultsFound = false;
    let noSearchParams = false;
    const [selected, setSelected] = useState(false);

    const businessImagesArray = useSelector((state) => {
        let urlArray = Object.values(state?.business?.allBusinessImages)
        // console.log(urlArray)
        return urlArray
    })

    console.log(search)

    const businessesSortedByReviewsDes = useSelector((state) => {
        let businessArray = Object.values(state?.business?.allBusinesses)

        let matches = [];

        if (search === "noparams") return businessArray.sort((a, b) => parseFloat(b.num_reviews) - parseFloat(a.num_reviews))

        if (search === "notfound") return businessArray.sort((a, b) => parseFloat(b.num_reviews) - parseFloat(a.num_reviews))

        for (let i = 0; i < businessArray.length; i++) {
            if (businessArray[i].business_name.toLowerCase().includes(search.toLowerCase()) || businessArray[i].business_type.toLowerCase().includes(search.toLowerCase())) {
                matches.push(businessArray[i]);
                resultsFound = true;
            }
        }

        return matches.sort((a, b) => parseFloat(b.num_reviews) - parseFloat(a.num_reviews))
    })

    // console.log("AAA", businessesSortedByReviewsAsc)
    // console.log("BBB", businessesSortedByReviewsDes)

    // Styles for JSX
    const myStyle = {
        width: "100%",
        height: "100%",
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

    const [currentPosition, setCurrentPosition] = useState({ lat: 40.7580, lng: -73.9855 })

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const dotstyle = {
        color: "#d32323",
        fontSize: "36px"
    }

    const [map, setMap] = useState(null)

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    // console.log("AAA", businessesSortedByRating)

    useEffect(() => {
        dispatch(businessActions.getAllBusinessImages())
        dispatch(businessActions.getAllBusinesses())
    }, [dispatch]);

    if (!businessImagesArray.length || !businessesSortedByReviewsDes.length) {
        // console.log("BIA", businessImagesArray, "ABA", businessesSortedByRating)
        return null
    }

    return (
        <div className='search-wrapper'>
            <div className='results-container'>
                <div className='search-chart climbing'>
                    {resultsFound && (
                        <div className='search-chart-title'>
                            All "{search}" results in New York, NY
                        </div>
                    )}
                    {!resultsFound && (
                        <div>
                            <div className='search-chart-title'>
                                Sorry, we couldn't find any results
                            </div>
                            <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px 0" }}>
                                Explore other options
                            </div>
                        </div>
                    )}
                    <div className='search-chart-body'>
                        {businessesSortedByReviewsDes.map((business, i) => {
                            let rating = business.avg_rating
                            return (
                                <NavLink to={`/biz/${business.id}`} className='search-chart-body-card search-navlink'>
                                    <div className='search-chart-body-card-image'>
                                        <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                                        }} />
                                    </div>
                                    <div className='search-chart-body-card-details'>
                                        <div className='search-chart-body-card-details-div search-chart-body-card-name' style={{ marginTop: "8px" }}>
                                            {i + 1}. {business.business_name}
                                        </div>
                                        <div className="currBizRating" style={{ marginTop: "8px", color: "#d32323" }}>
                                            {[...Array(5)].map((star, i) => {
                                                {/* console.log("rating", rating) */ }
                                                if (i < Math.floor(rating)) return <i class="fa-solid fa-star" />;
                                                else if (rating % Math.floor(rating) >= 0.5) {
                                                    rating = 0;
                                                    return <i class="fa-regular fa-star-half-stroke" />;
                                                } else return <i class="fa-regular fa-star" />;
                                            })}
                                            &nbsp;
                                            <span style={{ fontSize: "14px", color: "rgba(110,112,114,1)" }}>{business.num_reviews}</span>
                                        </div>
                                        <div className='search-chart-body-card-details-div search-chart-body-card-rating' style={{ marginTop: "8px" }}>
                                            <div
                                                className="biz-type-filter-button"
                                                onClick={
                                                    (e) => {
                                                        e.preventDefault()
                                                        history.push(`/search_results/${business.business_type}`
                                                        )
                                                    }
                                                }>
                                                {business.business_type}
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <div style={grayStyle}>
                                                {numDollarSigns[business.price]}
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <div className='search-chart-body-card-details-div search-chart-body-card-location' style={grayStyle}>
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                &nbsp;
                                                {business.city}
                                            </div>
                                        </div>

                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="fullmap-container">
                <div style={{ height: '100%', width: '100%' }}>
                    {isLoaded && businessesSortedByReviewsDes ? <GoogleMap
                        mapContainerStyle={containerStyle}
                        zoom={13}
                        center={currentPosition}
                        onUnmount={onUnmount}
                    >
                        {businessesSortedByReviewsDes.map((business, i) => (
                            <OverlayView
                                position={{ lat: business.lat, lng: business.lng }}
                                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                streetView={false}
                            >
                                <div
                                    className={`marker-circle ${selected ? 'selected' : ''}`}
                                    onClick={() => history.push(`/biz/${business.id}`)}
                                // onMouseOver = {() => setShowPreview(true)}
                                // onMouseLeave={() => setShowPreview(false)}
                                >
                                    <div className="marker-circle-content">{i + 1}</div>
                                </div>
                            </OverlayView>
                        ))}
                    </GoogleMap> : null}
                </div>
            </div>
        </div >
    )
}

export default SearchResults;
