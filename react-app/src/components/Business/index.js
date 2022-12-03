import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, useParams } from 'react-router-dom';
import * as businessActions from "../../store/business"
import * as reviewActions from "../../store/review"
import './Business.css';
import userLogo from "./amazon-customer-icon.jpg"
import ReviewDropdown from '../ReviewDropDown';

function Business() {
    const dispatch = useDispatch();
    const { bizId } = useParams();
    const history = useHistory();

    // console.log("bizId", bizId)

    const businessImagesArray = useSelector((state) => {
        let urlArray = Object.values(state?.business?.allBusinessImages)
        // console.log(urlArray)
        return urlArray
    })

    const businessById = useSelector((state) => {
        return state?.business?.businessById
    })

    const currSessionUser = useSelector(state => state?.session?.user?.id)
    // console.log("currSessionUser", currSessionUser, businessById?.user_id)

    let isBizOwner = false;
    if (currSessionUser === businessById.user_id) {
        isBizOwner = true
    }

    const currBizImages = useSelector((state) => {
        return state?.business?.businessById?.prev_image
    })

    // console.log("currBizImages", currBizImages)

    const currBizRating = useSelector((state) => {
        return state?.business?.businessById?.avg_rating
    })

    const currBizPhone = useSelector((state) => {
        return state?.business?.businessById?.phone_number
    })

    let phone1 = null;
    let phone2 = null;
    let phone3 = null;

    if (currBizPhone) {
        phone1 = currBizPhone.slice(0, 3)
        phone2 = currBizPhone.slice(3, 6)
        phone3 = currBizPhone.slice(6, 10)
    }

    // console.log("currBizPhone", currBizPhone, phone1, phone2, phone3)

    const currBizReviews = useSelector((state) => {
        return Object.values(state?.review?.currentBizReviews)
    })

    // console.log("currBizReviews", currBizReviews)

    const handleDelete = async (e) => {
        e.preventDefault();

        await dispatch(businessActions.deleteBusiness(parseInt(bizId)))
        // console.log("a")
        await dispatch(businessActions.getAllBusinesses())
        // console.log("b")
        history.push("/")
    }

    // Styles for JSX
    const circleStyle = {
        fontSize: "4px",
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
        dispatch(reviewActions.getCurrentBizReviews(bizId))
    }, [dispatch]);

    if (!businessImagesArray || !businessById || !currBizReviews) {
        return null
    }

    let rating = currBizRating

    return (
        <div className='biz-wrapper'>
            <div className='biz-image-wrapper'>
                <div className='biz-image-slideshow'>
                    <div className="biz-image-info-div">
                        <div className="biz-image-info">
                            <div className="biz-image-info-1">
                                {businessById.business_name}
                            </div>
                            <div className="biz-image-info-2">
                                <div className={currBizRating}>
                                    {[...Array(5)].map((star, i) => {
                                        {/* console.log("rating", rating) */ }
                                        if (i < Math.floor(rating)) return <i class="fa-solid fa-star" />;
                                        else if (rating % Math.floor(rating) >= 0.5) {
                                            rating = 0;
                                            return <i class="fa-regular fa-star-half-stroke" />;
                                        } else return <i class="fa-regular fa-star" />;
                                    })}
                                </div>
                                &nbsp;
                                &nbsp;
                                <div>
                                    {businessById.num_reviews} reviews
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
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <NavLink to={`/biz/${bizId}/edit`} className="edit-button">Edit</NavLink>
                                &nbsp;
                                {(isBizOwner && (
                                    <button className="edit-button" onClick={handleDelete}>Delete</button>
                                ))}
                            </div>
                            <div className="biz-image-info-4">
                                {businessById.operating_time}
                            </div>
                        </div>
                    </div>
                    <div className='biz-image-div'>
                        <div className='biz-image-blur'></div>
                        {currBizImages && currBizImages.map(image => {
                            return (
                                <img className="biz-image" src={image} onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://axiomhrs.com/wp-content/uploads/2019/07/claim.png";
                                }} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='biz-body-wrapper'>
                <div className='biz-body-container-left'>
                    <div className='biz-buttons-container'>
                        <NavLink to={`/biz/${bizId}/writeareview`} className='biz-buttons-write'>
                            <i class="fa-regular fa-star"></i>
                            &nbsp;
                            Write a review
                        </NavLink>
                        {/* <div className='biz-buttons-share biz-buttons-white'>
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            &nbsp;
                            Share
                        </div>
                        <div className='biz-buttons-save biz-buttons-white'>
                            <i class="fa-regular fa-bookmark"></i>
                            &nbsp;
                            Save
                        </div>
                        <div className='biz-buttons-follow biz-buttons-white'>
                            <i class="fa-solid fa-plus"></i>
                            &nbsp;
                            Follow
                        </div> */}
                    </div>
                    <div className='biz-review-container'>
                        <div className='biz-review-title'>Recommended Reviews</div>
                        {currBizReviews.map(review => {
                            const reviewDate = new Date(review.created_at).toLocaleDateString();
                            const imgArr = Object.values(review.reviewImages).slice(0, 4)
                            return (
                                <div className="biz-review-card">
                                    <div className='biz-review-author'>
                                        <div className="biz-review-author-container">
                                            <img src={userLogo} className="user-icon" />
                                            &nbsp;&nbsp;
                                            {review.author.first_name} {review.author.last_name}
                                        </div>
                                        <div className='review-dropdown'>
                                            {isBizOwner && (
                                                <ReviewDropdown review={review} bizId={bizId} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="stars">
                                        {[...Array(5)].map((star, i) => {
                                            let reviewRating = review.stars
                                            {/* console.log("rating", rating) */ }
                                            if (i < Math.floor(reviewRating)) return <i class="fa-solid fa-star" />;
                                            else if (reviewRating % Math.floor(reviewRating) >= 0.5) {
                                                reviewRating = 0;
                                                return <i class="fa-regular fa-star-half-stroke" />;
                                            } else return <i class="fa-regular fa-star" />;
                                        })}
                                        &nbsp;
                                        {reviewDate}
                                    </div>
                                    <div className='biz-review-description'>
                                        {review.review_content}
                                    </div>
                                    <div className="biz-review-images">
                                        {imgArr.map(img => {
                                            return (
                                                <img src={img} alt="Review Image" className='biz-review-image pop-out'></img>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='biz-body-container-right'>
                    <div className="biz-contact-info">
                        <div className='biz-contact-div'>
                            <div className="biz-contact biz-contact-website">
                                <a href={businessById.web_address} className="biz-contact-website-anchor">
                                    {businessById.web_address}
                                </a>
                            </div>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                        <div className='biz-contact-div'>
                            <div className="biz-contact biz-contact-phone">
                                ({phone1})&nbsp;{phone2}-{phone3}
                            </div>
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="biz-contact-div">
                            <div className="biz-contact biz-contact-address">
                                <div>
                                    {businessById.address}
                                    &nbsp;
                                    {businessById.city},
                                    &nbsp;
                                    {businessById.state}
                                </div>
                                <div>
                                    {businessById.postal_code}
                                </div>
                            </div>
                            <i class="fa-solid fa-location-arrow"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;
