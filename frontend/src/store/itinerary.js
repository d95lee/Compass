import jwtFetch from "./jwt";

export const RECEIVE_ITINERARY = "itinerary/RECEIVE_ITINERARY"
export const RECEIVE_ITINERARIES = 'itinerary/RECEIVE_ITINERARIES'
export const NEW_ITINERARY = "itinerary/NEW_ITINERARY"
export const CHANGE_ITINERARY = "itinerary/CHANGE_ITINERARY"
export const REMOVE_ITINERARY = "itinerary/REMOVE_ITINERARY"

export const receiveItinerary = (itinerary) => ({
    type: RECEIVE_ITINERARY,
    itinerary
})

export const receiveItineraries = (itinerary) => ({
    type: RECEIVE_ITINERARIES,
    itinerary
})

export const removeItinerary = (itineraryId) => ({
    type: REMOVE_ITINERARY,
    itineraryId
})

export const newItinerary = (itinerary) => ({
    type: NEW_ITINERARY,
    itinerary
})

export const selectItinerary = itineraryId => state => state.itinerary[itineraryId]
// export const selectItineraryArray = state => Object.values(state.itinerary)

export const fetchItinerary = (itineraryId) => async dispatch => {
    const res = await fetch(`/api/itinerary/${itineraryId}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveItinerary(data))
    }
} 

export const fetchItineraries = () => async dispatch => {
    const res = await fetch(`/api/itinerary`)

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveItineraries(data))
    }
}


//Create, update, delete
export const createItinerary = (itineraryData) => (dispatch, getState) => (
    jwtFetch(`/api/itinerary`, {
        method: "POST",
        body: JSON.stringify(itineraryData)
    })
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data => {
        dispatch(newItinerary(data))
    })
)

export const updateItinerary = (itineraryData) => (dispatch, getState) => (
    jwtFetch(`/api/itinerary/${itineraryData._id}`, {
        method: "PATCH",
        body: JSON.stringify(itineraryData)
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data => {
        dispatch(receiveItinerary(data))
    })
)



export const deleteItinerary = (itineraryId) => (dispatch, getState) => (
    jwtFetch(`/api/itinerary/${itineraryId}`, {
        method: "DELETE",
    })
    .then(data => {
        dispatch(removeItinerary(data))
    })
)


// Get for specific user's itineraries

export const fetchUserItineraries = (userId) => async dispatch => {
    const res = await jwtFetch(`/api/itinerary/user/${userId}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveItineraries(data))
    }
}



const itineraryReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_ITINERARY:
        // console.log("action.itinerary:", action.itineraryId)    
        nextState[action.itinerary._id] = action.itinerary;
            return nextState
        case RECEIVE_ITINERARIES:
            return action.itinerary;
        default:
            return state;
    }
}

export default itineraryReducer