import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect, useParams } from 'react-router-dom';
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

    console.log("AAA", businessesSortedByReviewsAsc)
    console.log("BBB", businessesSortedByReviewsDes)

    const myStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "4px"
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
                        <div className='splash-chart-title'>
                            Climbing
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByReviewsDes.map(business => {
                                return (
                                    <div className='splash-chart-body-card'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                {business.avg_rating.toFixed(1)}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='splash-chart top-rated'>
                        <div className='splash-chart-title'>
                            Top Rated
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByRating.map(business => {
                                return (
                                    <div className='splash-chart-body-card'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                {business.avg_rating.toFixed(1)}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='splash-chart new-on-yep'>
                        <div className='splash-chart-title'>
                            New On Yep
                        </div>
                        <div className='splash-chart-body'>
                            {businessesSortedByReviewsAsc.map(business => {
                                return (
                                    <div className='splash-chart-body-card'>
                                        <div className='splash-chart-body-card-image'>
                                            <img src={business.prev_image[0]} style={myStyle} />
                                        </div>
                                        <div className='splash-chart-body-card-details'>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                                {business.business_name}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                                {business.avg_rating.toFixed(1)}
                                            </div>
                                            <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>
                                                {business.city}, {business.state}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
