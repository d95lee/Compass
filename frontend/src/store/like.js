import { fetchItinerary } from "./itinerary";
import jwtFetch from "./jwt";
import { fetchUser } from "./user";



//Thunk action for post and delete like

export const likeItinerary= (itineraryId) => (dispatch, getState) => (
    jwtFetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify({itineraryId})
    })
    .then(res=>{
        if (res.ok) {
        return res.json();
        } else {
            throw res;
        }
    })
    .then(()=>{
        const {session} = getState()
        const userId = session.user._id
        dispatch(fetchItinerary(itineraryId));
        dispatch(fetchUser(userId));
        return
    })
);

export const unlikeItinerary=(likeId, itineraryId) => (dispatch, getState) => (
    jwtFetch(`/api/likes/${likeId}`,{
        method: 'DELETE'
    })
    .then(()=>{
        const {session} = getState()
        const userId = session.user._id
        dispatch(fetchItinerary(itineraryId));
        dispatch(fetchUser(userId));
        return
    })
)
