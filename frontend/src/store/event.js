import { receiveItinerary } from "./itinerary";
import jwtFetch from "./jwt";

//Thunk action for events

//Create event in the itinerary
export const createEvent = (itineraryId, eventData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/events`, {
        method: "PATCH",
        body: JSON.stringify(eventData)
    })
    .then(res =>{
        if(res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
);

//Update event in the itinerary
export const updateEvent = (itineraryId, eventData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/events/${eventData._id}`, {
        method: "PATCH",
        body: JSON.stringify(eventData)
    })
    .then(res =>{
        if(res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
);

//Delete event in the itinerary
export const deleteEvent = (itineraryId, eventId) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/events/${eventId}/delete`, {
        method: "PATCH"
    })
    .then(res =>{
        if(res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
);
