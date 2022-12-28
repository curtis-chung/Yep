
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import review from "./review.png"
import "./Review.css"
import * as businessActions from "../../store/business"
import SearchBar from '../SearchBar';

const ReviewSplash = () => {
    const [stars, setStars] = useState("");
    const allBiz = useSelector((state) => {
        let allBiz = Object.values(state?.business?.allBusinesses)
        // console.log("allBiz", allBiz)
        for (let i = allBiz.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allBiz[i], allBiz[j]] = [allBiz[j], allBiz[i]];
        }
        return allBiz;
    })

    const myStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "4px",
        objectFit: "cover"
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
                            <SearchBar />
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
