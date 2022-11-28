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
        console.log(urlArray)
        return urlArray
    })

    useEffect(() => {
        dispatch(businessActions.getAllBusinessImages())
    }, [dispatch]);

    if (!businessImagesArray) {
        console.log("BIA", businessImagesArray)
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
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='splash-chart top-rated'>
                        <div className='splash-chart-title'>
                            Top Rated
                        </div>
                        <div className='splash-chart-body'>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='splash-chart new-on-yep'>
                        <div className='splash-chart-title'>
                            New On Yep
                        </div>
                        <div className='splash-chart-body'>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>

                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>

                                    </div>
                                </div>
                            </div>
                            <div className='splash-chart-body-card'>
                                <div className='splash-chart-body-card-image'>

                                </div>
                                <div className='splash-chart-body-card-details'>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-name'>
                                        Rolo's
                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-rating'>
                                        American
                                    </div>
                                    <div className='splash-chart-body-card-details-div splash-chart-body-card-location'>
                                        Greenpoint
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
