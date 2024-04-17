
export const RECEIVE_ITINERARY = "itinerary/RECEIVE_ITINERARY"
export const RECEIVE_ITINERARIES = 'itinerary/RECEIVE_ITINERARIES'
export const CREATE_ITINERARY = "itinerary/CREATE_ITINERARY"
export const CHANGE_ITINERARY = "itinerary/CHANGE_ITINERARY"
export const CLEAR_ITINERARY = "itinerary/CLEAR_ITINERARY"

export const receiveItinerary = (itineraryId) => ({
    type: RECEIVE_ITINERARY,
    itineraryId
})

export const receiveItineraries = (itinerary) => ({
    type: RECEIVE_ITINERARIES,
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


const itineraryReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_ITINERARY:
            nextState[action.itineraryId] = action.itinerary;
            console.log("action.itinerary:", action.itineraryId)
            return nextState
        case RECEIVE_ITINERARIES:
            return action.itinerary;
        default:
            return state;
    }
}

export default itineraryReducer