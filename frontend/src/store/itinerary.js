import {createSelector} from 'reselect'

export const RECEIVE_ITINERARY = "itinerary/RECEIVE_ITINERARY"
export const RECEIVE_ITINERARIES = 'itinerary/RECEIVE_ITINERARIES'
export const CREATE_ITINERARY = "itinerary/CREATE_ITINERARY"
export const CHANGE_ITINERARY = "itinerary/CHANGE_ITINERARY"
export const CLEAR_ITINERARY = "itinerary/CLEAR_ITINERARY"

export const receiveItinerary = (itinerary) => ({
    type: RECEIVE_ITINERARY,
    itinerary
})

export const receiveItineraries = (itinerary) => ({
    type: RECEIVE_ITINERARIES,
    itinerary
})

export const clearItineraries = (itinerary) => ({
    type: CLEAR_ITINERARY,
    itinerary
})

export const selectItineraries = state => state.itinerary
export const selectItinerary = (itineraryId) => createSelector([selectItineraries], itinerary => itinerary[itineraryId])
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

export const removeItinerary = (itinerary) => async dispatch => {
    const res = await fetch(``)
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
