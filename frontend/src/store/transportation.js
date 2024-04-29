import { receiveItinerary } from "./itinerary";
import jwtFetch from "./jwt"

//Thunk action for transportation
export const createTransportation = (itineraryId, transportationData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/transportations`, {
        method: 'PATCH',
        body: JSON.stringify(transportationData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
)

//Update transportation itinerary

export const updateTransportation = (itineraryId, transportationData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/transportations/${transportationData._id}`, {
        method: 'PATCH',
        body: JSON.stringify(transportationData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
)

//Delete transportation
export const deleteTransportation = (itineraryId, transportationId) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/transportations/${transportationId}/delete`, {
        method: 'PATCH'
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
)
