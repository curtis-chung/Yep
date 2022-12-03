import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../store/review';
import * as businessActions from "../store/business"
import { NavLink, useHistory } from "react-router-dom";
import "./ReviewDropDown.css";

function ReviewDropdown({ review, bizId }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user);

    let isReviewOwner = false;
    if (user?.id === review?.user_id) isReviewOwner = true

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const deleteReview = async (e) => {
        e.preventDefault();

        await dispatch(reviewActions.deleteReview(review.id));
        await dispatch(businessActions.getCurrBusiness(bizId));
        await dispatch(reviewActions.getCurrentBizReviews(bizId));
        // history.push(`/biz/${review.business_id}`);
    };

    return (
        <div>
            {isReviewOwner && (
                <>
                    <div onClick={openMenu} className="review-button">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    {showMenu && (
                        <div className="review-dropdown-container">
                            <div className="review-dropdown-cards">
                                <div className="review-dropdown-personal-info">
                                    <NavLink to={`/reviews/${review.id}/edit`} className="review-dropdown-button">Edit review</NavLink>
                                </div>
                                <div className="review-dropdown-personal-info" onClick={deleteReview}>
                                    <div className="review-dropdown-button">Delete review</div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ReviewDropdown;
