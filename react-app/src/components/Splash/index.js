import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as businessActions from "../../store/business"
import './Splash.css';

function Splash() {
    const dispatch = useDispatch();

    const businessImagesArray = useSelector((state) => {
        let urlArray = Object.values(state?.business?.allBusinessImages)
        // console.log(urlArray)
        return urlArray
    })

    const businessesSortedByRating = useSelector((state) => {
        let businessArray = Object.values(state?.business?.allBusinesses)
        // console.log(businessArray)
        return businessArray.sort((a, b) => parseFloat(b.avg_rating) - parseFloat(a.avg_rating)).slice(0, 5)
    })

    const businessesSortedByReviewsDes = useSelector((state) => {
        let businessArray = Object.values(state?.business?.allBusinesses)
        // console.log(businessArray)
        return businessArray.sort((a, b) => parseFloat(b.num_reviews) - parseFloat(a.num_reviews)).slice(0, 5)
    })

    const businessesSortedByReviewsAsc = useSelector((state) => {
        let businessArray = Object.values(state?.business?.allBusinesses)
        // console.log(businessArray)
        return businessArray.sort((a, b) => parseFloat(a.num_reviews) - parseFloat(b.num_reviews)).slice(0, 5)
    })

    // console.log("AAA", businessesSortedByReviewsAsc)
    // console.log("BBB", businessesSortedByReviewsDes)

    // Styles for JSX
    const myStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "4px"
    }

    const redStyle = {
        color: "#d32323"
    }

    const grayStyle = {
        color: "gray"
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

    // console.log("AAA", businessesSortedByRating)

    useEffect(() => {
        dispatch(businessActions.getAllBusinessImages())
        dispatch(businessActions.getAllBusinesses())
    }, [dispatch]);

    if (!businessImagesArray || !businessesSortedByRating || !businessesSortedByReviewsDes) {
        // console.log("BIA", businessImagesArray, "ABA", businessesSortedByRating)
        return null
    }

    return (
        <div className='splash-wrapper'>
            <div className='image-slideshow'></div>
            <div className='charts-wrapper'>
                <div className='charts-container'>
                    <div className='splash-chart climbing'>
                        <i class="fa-solid fa-bolt"></i>
                        <div className='splash-chart-title'>
                            Climbing
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByReviewsDes.map(business => {
                                return (
                                    <NavLink to={`/biz/${business.id}`} className='splash-chart-body-card splash-navlink'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = "https://axiomhrs.com/wp-content/uploads/2019/07/claim.png";
                                            }} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                <i class="fa-solid fa-star" style={redStyle}></i>
                                                &nbsp;
                                                <div style={redStyle}>
                                                    {business.avg_rating.toFixed(1)}
                                                </div>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    ({business.num_reviews})
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {business.business_type}
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {numDollarSigns[business.price]}
                                                </div>
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location' style={grayStyle}>
                                                <i class="fa-solid fa-location-dot"></i>
                                                &nbsp;
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    <div className='splash-chart top-rated'>
                        <i class="fa-solid fa-trophy"></i>
                        <div className='splash-chart-title'>
                            Top Rated
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByRating.map(business => {
                                return (
                                    <NavLink to={`/biz/${business.id}`} className='splash-chart-body-card splash-navlink'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = "https://axiomhrs.com/wp-content/uploads/2019/07/claim.png";
                                            }} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                <i class="fa-solid fa-star" style={redStyle}></i>
                                                &nbsp;
                                                <div style={redStyle}>
                                                    {business.avg_rating.toFixed(1)}
                                                </div>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    ({business.num_reviews})
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {business.business_type}
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {numDollarSigns[business.price]}
                                                </div>
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location' style={grayStyle}>
                                                <i class="fa-solid fa-location-dot"></i>
                                                &nbsp;
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    <div className='splash-chart new-on-yep'>
                        <i class="fa-solid fa-wand-sparkles"></i>
                        <div className='splash-chart-title'>
                            New On Yep
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByReviewsAsc.map(business => {
                                return (
                                    <NavLink to={`/biz/${business.id}`} className='splash-chart-body-card splash-navlink'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = "https://axiomhrs.com/wp-content/uploads/2019/07/claim.png";
                                            }} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                <i class="fa-solid fa-star" style={redStyle}></i>
                                                &nbsp;
                                                <div style={redStyle}>
                                                    {business.avg_rating == 0 ? "New" : business.avg_rating.toFixed(1)}
                                                </div>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    ({business.num_reviews})
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {business.business_type}
                                                </div>
                                                &nbsp;
                                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                                &nbsp;
                                                <div style={grayStyle}>
                                                    {numDollarSigns[business.price]}
                                                </div>
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location' style={grayStyle}>
                                                <i class="fa-solid fa-location-dot"></i>
                                                &nbsp;
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Splash;
