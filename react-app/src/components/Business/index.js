import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, useParams } from 'react-router-dom';
import * as businessActions from "../../store/business"
import * as reviewActions from "../../store/review"
import './Business.css';
import userLogo from "./amazon-customer-icon.jpg"
import ReviewDropdown from '../ReviewDropDown';
import SimpleMap from '../GoogleMaps';
import BizImageModal from '../BizImage';

function Business() {
    const dispatch = useDispatch();
    const { bizId } = useParams();
    const history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false);

    const businessImagesArray = useSelector((state) => {
        let urlArray = Object.values(state?.business?.allBusinessImages)
        // console.log(urlArray)
        return urlArray
    })

    const businessById = useSelector((state) => {
        return state?.business?.businessById
    })
    // console.log(businessById)

    const currBizReviews = useSelector((state) => {
        return Object.values(state?.review?.currentBizReviews)
    })

    // let authorList;
    // const getReviewAuthor = currBizReviews.forEach(review => {
    //     authorList.push(review.user_id)
    //     return "done"
    // })
    // console.log("currBizReviews", currBizReviews)

    let dateArr = []

    if (Object.values(businessById).length) {
        dateArr = businessById.operating_time.split(",")
    }

    // console.log(dateArr)

    const currSessionUser = useSelector(state => state?.session?.user?.id)
    // console.log("currSessionUser", currSessionUser, businessById?.user_id)

    let isBizOwner = false;
    let allowCreateReview = true;

    // console.log("isBizOwner", isBizOwner, "allowCreateReview", allowCreateReview)

    if (businessById && currBizReviews && currSessionUser) {
        // console.log("HHH", currSessionUser, businessById.user_id)
        if (currSessionUser === businessById.user_id) {
            isBizOwner = true
        }

        if ((currSessionUser === businessById.user_id) && (currSessionUser)) {
            allowCreateReview = false;
        }

        currBizReviews.forEach(review => {
            // console.log("review?.user_id", review?.user_id, "currSessionUser", currSessionUser)
            if (review.user_id === currSessionUser) {
                allowCreateReview = false;
            }
        })

        // console.log("allowCreateReview2", allowCreateReview)
        // console.log("isBizOwner", isBizOwner)
        // console.log("currSessionUser", currSessionUser, "businessById.user_id", businessById.user_id)
        // if ((currSessionUser !== businessById.user_id) && (currSessionUser)) {
        //     allowCreateReview = true;
        // }
        // console.log("allowCreateReview1", allowCreateReview)
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

    const today = new Date()
    const day = today.getDay()

    const week = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }

    const dayOfTheWeek = week[day]
    // console.log(dayOfTheWeek)

    // console.log("bizId", bizId)

    useEffect(() => {
        dispatch(businessActions.getAllBusinessImages())
        dispatch(businessActions.getCurrBusiness(bizId))
        dispatch(reviewActions.getCurrentBizReviews(bizId))

        return () => {
            dispatch(reviewActions.cleanUpReviews()); dispatch(businessActions.cleanUpBusinesses())
        }
    }, [dispatch]);

    if (!businessImagesArray || (!Object.values(businessById).length)) {
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
                                <div className="currBizRating">
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
                            <div className="biz-image-info-4">
                                <div className='biz-image-info-4-left'>
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
                                        {(isBizOwner && (
                                            <NavLink to={`/biz/${bizId}/edit`} className="edit-button">Edit</NavLink>
                                        ))}
                                        &nbsp;
                                        {(isBizOwner && (
                                            <button className="edit-button" onClick={handleDelete}>Delete</button>
                                        ))}
                                    </div>
                                    <div>
                                        {dateArr.length > 0 && dateArr.map(date => {
                                            {/* console.log(date.split("-").includes(dayOfTheWeek)) */ }
                                            {/* console.log(dayOfTheWeek) */ }
                                            {/* console.log("date", date) */ }
                                            if (date.includes(dayOfTheWeek) && date.split("-").length === 3) return <div className="daily-hours"><div>{date.split("-")[1]} - {date.split("-")[2]}</div></div>
                                            if (date.includes(dayOfTheWeek) && date.split("-").length === 2) return <div className="daily-hours"><div>{date.split("-")[1]}</div></div>
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <BizImageModal bizImgArr={currBizImages} businessById={businessById} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='biz-image-div'>
                        <div className='biz-image-blur'></div>
                        {currBizImages && currBizImages.map(image => {
                            return (
                                <img className="biz-image" src={image} onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                                }} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='biz-body-wrapper'>
                <div className='biz-body-container-left'>
                    <div className='biz-buttons-container'>
                        {allowCreateReview && (
                            <NavLink to={`/biz/${bizId}/writeareview`} className='biz-buttons-write'>
                                <i class="fa-regular fa-star"></i>
                                &nbsp;
                                Write a review
                            </NavLink>
                        )}
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
                    <div className='biz-review-container hours-div'>
                        <div className='biz-review-title'>Location & Hours</div>
                        <div className='hours-div-container'>
                            <div className='biz-map'>
                                {/* {console.log(businessById.lat, businessById.lng)} */}
                                <SimpleMap lat={businessById.lat} lng={businessById.lng} name={businessById.business_name} />
                            </div>
                            <div>
                                {dateArr.length > 0 && dateArr.map(date => {
                                    if (date.split("-").length === 3) return <div className="daily-hours"><div>{date.split("-")[0]}</div><div>{date.split("-")[1]} - {date.split("-")[2]}</div></div>

                                    else if (date.split("-").length === 2) return <div className="daily-hours"><div>{date.split("-")[0]}</div><div>{date.split("-")[1]}</div><div></div></div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='biz-review-container'>
                        <div className='biz-review-title'>Recommended Reviews</div>
                        {currBizReviews.length > 0 && currBizReviews.reverse().map(review => {
                            {/* console.log("currBizReviews", currBizReviews) */ }
                            const reviewDate = new Date(review.created_at).toLocaleDateString();
                            {/* console.log("review.reviewImages", review.reviewImages) */ }
                            const imgArr = Object.values(review.reviewImages).slice(0, 4)
                            {/* console.log("imgArr", imgArr) */ }
                            return (
                                <div className="biz-review-card">
                                    <div className='biz-review-author'>
                                        <div className="biz-review-author-container">
                                            <img src={userLogo} className="user-icon" />
                                            &nbsp;&nbsp;
                                            {review.author.first_name} {review.author.last_name}
                                        </div>
                                        <div className='review-dropdown'>
                                            <ReviewDropdown review={review} bizId={bizId} />
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
                        {currBizReviews.length == 0 && (
                            <div>No reviews yet</div>
                        )}
                    </div>
                </div>
                <div className='biz-body-container-right'>
                    <div className="biz-contact-info">
                        <div className='biz-contact-div'>
                            <div className="biz-contact biz-contact-website">
                                <a href={getValidUrl(businessById.web_address)} target="_blank" rel="noopener noreferrer" className="biz-contact-website-anchor">
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



// this function is used to convert url to clickable https links
export const getValidUrl = (url = "") => {
    let newUrl = window.decodeURIComponent(url);
    newUrl = newUrl.trim().replace(/\s/g, "");

    if (/^(:\/\/)/.test(newUrl)) {
        return `http${newUrl}`;
    }
    if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
        return `http://${newUrl}`;
    }

    return newUrl;
};
