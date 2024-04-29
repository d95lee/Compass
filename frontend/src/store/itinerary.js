import jwtFetch from "./jwt";
import {createSelector} from 'reselect'

export const RECEIVE_ITINERARY = "itinerary/RECEIVE_ITINERARY"
export const RECEIVE_ITINERARIES = 'itinerary/RECEIVE_ITINERARIES'
export const NEW_ITINERARY = "itinerary/NEW_ITINERARY"
export const CHANGE_ITINERARY = "itinerary/CHANGE_ITINERARY"
export const REMOVE_ITINERARY = "itinerary/REMOVE_ITINERARY"

export const receiveItinerary = (itinerary) => ({
    type: RECEIVE_ITINERARY,
    itinerary
})

export const receiveItineraries = (itineraries) => ({
    type: RECEIVE_ITINERARIES,
    itineraries
})

export const removeItinerary = (itineraryId) => ({
    type: REMOVE_ITINERARY,
    itineraryId
})

export const newItinerary = (itinerary) => ({
    type: NEW_ITINERARY,
    itinerary
})

export const selectItineraries = state => state.itinerary
export const selectItinerary = (itineraryId) => createSelector([selectItineraries], itinerary => itinerary[itineraryId])
export const selectItineraryByUser = (user) => createSelector([selectItineraries], itinerary => Object.values(itinerary).find(el => el?.author._id === user?._id))
export const selectLikedItinerary = (user) => createSelector(
    [selectItineraries],
    (itineraries) => {
      if (!user || !user.likes) {
        return [];
      }

      return user.likes.map(like => itineraries[like.itinerary]);
    }
  );

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
export const createItinerary = (itineraryData) => (dispatch) => (
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
        return data
    })
)

export const updateItinerary = (itineraryData) => (dispatch) => (
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

export const deleteItinerary = (itineraryId) => (dispatch) => (
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


// from express/mongoDB, receiveItineraries as an array of objects, instead of as an object of objects
// [itinerary1, itinerary2, ....] --> each itinerary still an object
// {itinerary1, itinerary2, ...}
const itineraryReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_ITINERARY:
        // console.log("action.itinerary:", action.itineraryId)
        nextState[action.itinerary._id] = action.itinerary;
            return nextState
        case RECEIVE_ITINERARIES:
            action.itineraries.map(itinerary => nextState[itinerary._id] = itinerary);
            return nextState
        default:
            return state;
    }
}

export default itineraryReducer
