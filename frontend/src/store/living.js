import { receiveItinerary } from "./itinerary";
import jwtFetch from "./jwt";

// Thunk action for livings
export const createLiving = (itineraryId, livingData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/livings`, {
        method: 'PATCH',
        body: JSON.stringify(livingData)
    })
    .then(res=>{
        if (res.ok) {
        return res.json();
        } else {
            throw res;
        }
    })
    .then(data =>{
        dispatch(receiveItinerary(data))
    })
)

//Update living in the itinerary
export const updateLiving = (itineraryId, livingData) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/livings/${livingData._id}`, {
        method: "PATCH",
        body: JSON.stringify(livingData)
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

//Delete living in the itinerary
export const deleteLiving = (itineraryId, livingId) => (dispatch) => (
    jwtFetch(`/api/itinerary/${itineraryId}/livings/${livingId}/delete`, {
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
