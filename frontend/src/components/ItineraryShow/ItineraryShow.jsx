import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import { fetchUser, selectUser } from "../../store/user"
import "./ItineraryShow.css"
import TimelineBox from "./TimelineBox"
import ItineraryShowDateBox from "./ItineraryShowDateBox"
import editbutton from '../../assets/edit-button.png'
import { likeItinerary, unlikeItinerary } from "../../store/like"
import { selectCurrentUser } from "../../store/session"
import { oneDaySort, timelineSort, newItineraryObject } from "../../utils/calenderSort"

const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [heartColor, setHeartColor] = useState("#000000");

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId));
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))

    const userId = itinerary?.author._id
    const user = useSelector(selectUser(userId));
    const currentUser = useSelector(selectCurrentUser)
    const currentUserDetails = useSelector(selectUser(currentUser?._id))

    const author = user === currentUser
    useEffect(() => {
        dispatch(fetchUser(userId));
        dispatch(fetchUser(currentUser?._id))
    }, [dispatch, userId, currentUser])

    // useEffect to check the like status of the current itinerary
    useEffect(() =>{

        const likeStatus = (user, itineraryId) => {
            let liked = false;
            user?.likes.forEach(like => {
                if (itineraryId === like.itinerary) {
                    liked = true;
                    setHeartColor('#ff0000');
                }
            })
            return liked;
        }

        setLiked(likeStatus(currentUserDetails, itineraryId));

    }, [itineraryId, currentUserDetails, itinerary])

    // helper function that takes (user, itineraryId)- returns boolean whether user has liked the itinerary or not
// when you fetch the user object,

    // use timeline chronological sort on array from date key
    const handleLike = e => {
        // on click - like it or unlike it
        e.preventDefault()
        if (!liked){
           dispatch(likeItinerary(itineraryId))
            .then(()=>setHeartColor('#ff0000'));
        } else {
            let likeIdValue;
            currentUserDetails.likes.forEach(like =>{
                if (like.itinerary === itineraryId) {
                    likeIdValue = like._id
                }
            })
            dispatch(unlikeItinerary(likeIdValue, itineraryId))
                .then(()=>setHeartColor('#000000'))
        }
    }

    const handleEditClick = () => {
        navigate(`/itinerary/form/${itinerary?._id}`);
    }
// mongoDB database technically only stores likeId in the likes array of each user, but when we fetch it from the
// frontend, due to extra information added for the routes, we will have likes: [{likeId:xxx, itinerary:xxxx},... ]
    // console.log(user, 'user');
    const itinerarySubobjectsArray = ( itinerary )=> {
        const newArray = [];  // event = { title: '', date: ''}
        itinerary?.events.map(event => (newArray.push({...event, 'type': 'event'})));
        itinerary?.transportations.map(transportation =>newArray.push({...transportation, 'type': 'transportation'}));
        itinerary?.livings.map(living => newArray.push({...living, 'type':'living'}));
        return newArray;
    }

    // const newItineraryObject = ( itinerary )=> {
    //     const eventsArray = itinerary?.events.map(event => ({...event, 'type': 'event'}));

    //     const transportationArray = itinerary?.transportations.map(transportation =>({...transportation, 'type': 'transportation'}));
        
    //     const livingsArray = itinerary?.livings.map(living => ({...living, 'type':'living'}));
        
    //     if (itinerary) {
    //         itinerary[events] = eventsArray;
    //         itinerary[transportations] = transportationArray;
    //         itinerary[livings] = livingsArray;
    //     }

    //     return itinerary;
    // }
    // add in imageUrl to connect to each itinerary

    // Add date key for each activity to show in different date/day columns

    // always order hotel at top or bottom after first day?

    // figure out ordering chronologically of activities, maybe try to by ordering by key value

    const handleUserShow = () => {
        navigate(`/profile/${user?._id}`);
    }
    // console.log(itinerary, 'itinerary');
    // console.log(itinerarySubobjectsArray(itinerary), 'test array');
    // console.log(timelineSort(itinerary), 'sorted activities');
    
    // console.log(newItineraryObject(itinerary), 'new itinerary obj');


    const sortedActivities = timelineSort(itinerary);
    const createShowCalendar = (sortedActivities) => {
        // can't use for loop bc we need to return the subcomponent each time


        return Object.values(sortedActivities).map((ele, idx) => (<ItineraryShowDateBox key={idx} activitiesArray={ele} date={Object.keys(sortedActivities)[idx]} />))
    }

    return (
        <>
            <div className="itinerary-show-page-container">
                <div className='itinerary-show-page-header'>
                    <div className='itinerary-photo-box'>
                        <img className='itinerary-cover-photo' src={itinerary?.imageUrls} />
                    </div>

                    <div className='itinerary-show-page-header-text'>
                        <div className='itinerary-show-page-title'>{itinerary?.title ? itinerary?.title.toUpperCase() : ''}</div>
                        <div className='itinerary-show-page-description'>{itinerary?.description ? itinerary?.description.toUpperCase() : ''}</div>
                        <div className='itinerary-show-page-username' onClick={handleUserShow}>@{user?.username}</div>
                        <div className="itinerary-show-likes">
                           <svg xmlns="http://www.w3.org/2000/svg" fill={heartColor} x="0px" y="0px" height="23px" width="23px" viewBox="0 0 122.88 107.41" onClick={handleLike}><g>
                            <path d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z" /></g>
                        </svg>
                        <div className="likes-number-text">{itinerary?.likes} likes</div> 
                        </div>
                        
                    </div>

                    <div className='itinerary-edit-button-box'>
                        {<img className='itinerary-edit-button' src={editbutton} onClick={handleEditClick} />}
                    </div>

                </div>


                <div className='itinerary-show-page-content'>
                    <div className="itinerary-display-items-container">
                        {/* <div className="day-header"> Date</div> */}
                        {sortedActivities && createShowCalendar(sortedActivities)}
                        {/* {itinerary ? itinerarySubobjectsArray(itinerary).map((activity, idx) => <TimelineBox key={idx} activity={activity} />) : ''} */}
                    </div>

                </div>



            </div>
        </>
    )
}

export default ItineraryShow
