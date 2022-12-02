// Actions
const GET_CURRENT_BIZ_REVIEWS = "reviews/GET_CURRENT_BIZ_REVIEWS";
const CLEAN_UP_REVIEWS = "reviews/CLEAN_UP_REVIEWS";

// Action Creators
const getCurrentBizReviewAction = (payload) => ({
    type: GET_CURRENT_BIZ_REVIEWS,
    payload
})

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

export const getCurrentBizReviews = (bizId) => async (dispatch) => {

    const response = await fetch(`/api/biz/${bizId}/reviews`)

    if (response.ok) {
        const reviews = await response.json()
        console.log("thunk", reviews)
        dispatch(getCurrentBizReviewAction(reviews))
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
    currentBizReviews: {}
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

        case CLEAN_UP_REVIEWS:
            newState.currentBizReviews = {}
            return newState

        default:
            return state
    }
}

export default review;
