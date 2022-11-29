import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect, useParams } from 'react-router-dom';
import business, * as businessActions from "../../store/business"
import './Business.css';

function Business() {
    const dispatch = useDispatch();
    const { bizId } = useParams();

    // console.log("bizId", bizId)

    const businessImagesArray = useSelector((state) => {
        let urlArray = Object.values(state?.business?.allBusinessImages)
        // console.log(urlArray)
        return urlArray
    })

    const businessById = useSelector((state) => {
        return state?.business?.businessById
    })

    const currBizImages = useSelector((state) => {
        return state?.business?.businessById?.prev_image
    })

    // console.log("currBizImages", currBizImages)

    const currBizRating = useSelector((state) => {
        return state?.business?.businessById?.avg_rating
    })

    // console.log("currBizRating", currBizRating)
    // if (currBizRating) {
    //     const numStars = () => {
    //         if (currBizRating < 2) return 'oneStar';
    //         if (currBizRating < 3) return 'twoStars';
    //         if (currBizRating < 4) return 'threeStars';
    //         if (currBizRating < 5) return 'fourStars';
    //         else return 'fiveStars';
    //     }
    // }

    // console.log("numStars", numStars())

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
        color: "white"
    }

    const numDollarSigns = {
        1: "$",
        2: "$$",
        3: "$$$",
        4: "$$$$"
    }

    useEffect(() => {
        dispatch(businessActions.getAllBusinessImages())
        dispatch(businessActions.getCurrBusiness(bizId))
    }, [dispatch]);

    if (!businessImagesArray || !businessById || !currBizImages) {
        return null
    }

    let rating = currBizRating

    return (
        <div className='biz-wrapper'>
            <div className='biz-image-wrapper'>
                <div className='biz-image-slideshow'>
                    <div className="biz-image-info">
                        <div className="biz-image-info-1">
                            {businessById.business_name}
                        </div>
                        <div className="biz-image-info-2">
                            <div className={currBizRating}>
                                {[...Array(5)].map((star, i) => {
                                    console.log("rating", rating)
                                    if (i < Math.floor(rating)) return <i class="fa-solid fa-star" />;
                                    else if (rating % Math.floor(rating) >= 0.5) {
                                        rating = 0;
                                        return <i class="fa-regular fa-star-half-stroke" />;
                                    } else return <i class="fa-regular fa-star" />;
                                })}
                            </div>
                            &nbsp;
                            <div>
                                {businessById.num_reviews} Reviews
                            </div>
                        </div>
                        <div className="biz-image-info-3">
                            <div className='biz-image-claimed'>
                                <i class="fa-solid fa-circle-check"></i>
                                &nbsp;
                                Claimed
                            </div>
                            &nbsp;
                            &nbsp;
                            <i class="fa-solid fa-circle" style={circleStyle}></i>
                            &nbsp;
                            &nbsp;
                            {numDollarSigns[businessById.price]}
                            &nbsp;
                            &nbsp;
                            <i class="fa-solid fa-circle" style={circleStyle}></i>
                            &nbsp;
                            &nbsp;
                            {businessById.business_type}
                        </div>
                        <div className="biz-image-info-4">
                            {businessById.operating_time}
                        </div>
                    </div>
                    <div className='biz-image-image'>
                        <div className='biz-image-empty'></div>
                        {currBizImages.map(image => {
                            return (
                                <img className="biz-image" src={image} />
                            )
                        })}
                    </div>
                </div>
                <div className='biz-body-wrapper'>
                    <div className='biz-body-container-left'></div>
                    <div className='biz-body-container-right'></div>
                </div>
            </div>
        </div>
    )
}

export default Business;
