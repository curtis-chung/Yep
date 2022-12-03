// Actions
const GET_CURRENT_BIZ_REVIEWS = "reviews/GET_CURRENT_BIZ_REVIEWS";
const CLEAN_UP_REVIEWS = "reviews/CLEAN_UP_REVIEWS";
const CLEAN_UP_CURR_REVIEWS = "reviews/CLEAN_UP_CURR_REVIEWS";
const GET_CURR_REVIEW = "reviews/GET_CURR_REVIEWS"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"

// Action Creators
const getCurrentBizReviewAction = (payload) => ({
    type: GET_CURRENT_BIZ_REVIEWS,
    payload
})

const getCurrReviewAction = (payload) => ({
    type: GET_CURR_REVIEW,
    payload
})

const updateReviewAction = (payload) => ({
    type: UPDATE_REVIEW,
    payload
})

// export const cleanUpCurrReviews = () => {
//     return {
//         type: CLEAN_UP_CURR_REVIEWS
//     }
// }

export const cleanUpReviews = () => {
    return {
        type: CLEAN_UP_REVIEWS
    }
}

// Thunks
export const createReview = (review, bizId) => async (dispatch) => {

    const response = await fetch(`/api/biz/${bizId}/reviews`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const newReview = await response.json()
        return newReview
    } else if (response.status < 500) {
        const newReview = await response.json()
        if (newReview.errors) return newReview
    }
}

export const updateReview = (review, reviewId) => async (dispatch) => {
    // console.log("AAA", business, businessId)
    // console.log("CCC", typeof businessId)
    const response = await fetch(`/api/reviews/${parseInt(reviewId)}/edit`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    // console.log("res", response)

    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(updateReviewAction(updatedReview))
        // console.log("iffy", response)
        return updatedReview
    } else if (response.status < 500) {
        const updatedReview = await response.json()
        if (updatedReview.errors) {
            return updatedReview
        }
    }
}

export const getCurrentBizReviews = (bizId) => async (dispatch) => {

    const response = await fetch(`/api/biz/${bizId}/reviews/currBiz`)

    if (response.ok) {
        const reviews = await response.json()
        // console.log("thunk", reviews)
        dispatch(getCurrentBizReviewAction(reviews))
    }
}

export const getCurrReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`)

    if (response.ok) {
        const currReview = await response.json()
        dispatch(getCurrReviewAction(currReview))
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })

    return response
}

// Initial state for store
const initialState = {
    currentBizReviews: {},
    reviewById: {}
}

// Reducers

const review = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_CURRENT_BIZ_REVIEWS:
            const currBizReviews = {};
            let arr = Object.values(action.payload)

            arr.forEach(review => {
                currBizReviews[review.id] = review
            })
            newState.currentBizReviews = currBizReviews
            return newState

        case GET_CURR_REVIEW:
            newState.reviewById = action.payload
            return newState

        case UPDATE_REVIEW:
            newState.currentBizReviews[action.payload.id] = action.payload
            return newState

        case CLEAN_UP_REVIEWS:
            newState.currentBizReviews = {}
            newState.reviewById = {}
            return newState

        // case CLEAN_UP_CURR_REVIEWS:
        //     newState.reviewById = {}
        //     return newState

        default:
            return state
    }
}

export default review;
