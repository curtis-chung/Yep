const GET_ALL_BUSINESSES = "businesses/GET_ALL_BUSINESSES";
const GET_ALL_OF_MY_BUSINESSES = "businesses/GET_ALL_OF_MY_BUSINESSES";
const GET_CURR_BUSINESS = "businesses/GET_CURR_BUSINESS"
const UPDATE_BUSINESS = "businesses/UPDATE_BUSINESS";
const GET_ALL_BUSINESS_IMAGES = "businesses/GET_ALL_BUSINESS_IMAGES";
const CLEAN_UP_BUSINESSES = "businesses/CLEANUP";

const getAllBusinessesAction = (payload) => ({
    type: GET_ALL_BUSINESSES,
    payload
});

const getAllOfMyBusinessesAction = (payload) => ({
    type: GET_ALL_OF_MY_BUSINESSES,
    payload
})

const getCurrBusinessAction = (payload) => ({
    type: GET_CURR_BUSINESS,
    payload
})

const updateBusinessAction = (payload) => ({
    type: UPDATE_BUSINESS,
    payload
})

const getAllBusinessImagesAction = (payload) => ({
    type: GET_ALL_BUSINESS_IMAGES,
    payload
});

export const cleanUpBusinesses = () => {
    return {
        type: CLEAN_UP_BUSINESSES
    }
}

export const createBusiness = (business) => async () => {
    console.log("createBiz", business)
    const response = await fetch(`/api/biz`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(business)
    })
    // console.log(response)

    if (response.ok) {
        const data = await response.json()
        console.log("create if", data)
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        // console.log("elseif", data)
        if (data.errors) return data
    }
}

export const getAllBusinesses = () => async (dispatch) => {
    const response = await fetch("/api/biz")

    if (response.ok) {
        const allBusinesses = await response.json()
        // console.log("res", allBusinesses)
        dispatch(getAllBusinessesAction(allBusinesses))
    }
}

export const getAllOfMyBusinesses = () => async (dispatch) => {
    const response = await fetch(`/api/biz/my-listings`)

    if (response.ok) {
        const allMyBusinesses = await response.json()
        dispatch(getAllOfMyBusinessesAction(allMyBusinesses))
    }
}

export const getCurrBusiness = (bizId) => async (dispatch) => {
    // console.log("thunkget", bizId)
    const response = await fetch(`/api/biz/${bizId}`)

    if (response.ok) {
        const currBusiness = await response.json()
        dispatch(getCurrBusinessAction(currBusiness))
    }
}

export const updateBusiness = (business, businessId) => async (dispatch) => {
    // console.log("AAA", business, businessId)
    console.log("CCC", typeof businessId)
    const response = await fetch(`/api/biz/${businessId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(business)
    })
    console.log("res", response)

    if (response.ok) {
        const updatedBusiness = await response.json()
        dispatch(updateBusinessAction(updatedBusiness))
        // console.log("iffy", response)
        return updatedBusiness
    } else if (response.status < 500) {
        const updatedBusiness = await response.json()
        if (updatedBusiness.errors) {
            return updatedBusiness
        }
    }
}

export const deleteBusiness = (bizId) => async (dispatch) => {
    const response = await fetch(`/api/biz/${bizId}`, {
        method: "DELETE"
    })

    return response
}

export const getAllBusinessImages = () => async (dispatch) => {
    const response = await fetch("/api/biz/images")

    if (response.ok) {
        const allBusinessImages = await response.json()
        dispatch(getAllBusinessImagesAction(allBusinessImages))
    }
}

export const createBusinessImages = (images, businessId) => async () => {
    // console.log("buy", transaction)
    const response = await fetch(`/api/biz/${businessId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(images)
    })

    if (response.ok) {
        const data = await response.json()
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) return data
    }
}

const initialState = {
    // allBusinesses: {},
    allBusinesses: {},
    allOfMyBusinesses: {},
    businessById: {},
    allBusinessImages: {}
}

const business = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_ALL_BUSINESSES:
            const allBusinesses = {};
            action.payload.businesses.forEach(business => {
                allBusinesses[business.id] = business
            })
            newState.allBusinesses = allBusinesses
            return newState

        case GET_ALL_OF_MY_BUSINESSES:
            newState.allOfMyBusinesses = action.payload
            return newState

        case GET_CURR_BUSINESS:
            newState.businessById = action.payload
            return newState

        case UPDATE_BUSINESS:
            newState.businessById[action.payload.id] = action.payload
            return newState

        case GET_ALL_BUSINESS_IMAGES:
            newState.allBusinessImages = action.payload
            return newState

        case CLEAN_UP_BUSINESSES:
            newState.currentStockBusinessesByUserId = {}
            newState.allOfMyBusinesses = {}
            newState.businessById = {}
            newState.allBusinessImages = {}
            return newState

        default:
            return state
    }
}

export default business;
