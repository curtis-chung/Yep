import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect, useParams } from 'react-router-dom';
import * as businessActions from "../../store/business"
import './Business.css';

function Business() {
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
        <div className='biz-wrapper'>
        </div>
    )
}

export default Business;
