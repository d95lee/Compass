import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import { fetchUser } from "../../store/user"
import "./ItineraryShow.css"
import TimelineBox from "./TimelineBox"
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg'
import editbutton from '../../../../assets/edit-button.png'

const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId));
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))

    const userId = itinerary?.author._id
    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId])

    console.log(userId, 'userId')

    const itinerarySubobjectsArray = ( itinerary )=> {
        const newArray = [];  // event = { title: '', date: ''}
        itinerary?.events.map(event => (newArray.push({...event, 'type': 'event'})));
        itinerary?.transportations.map(transportation =>newArray.push({...transportation, 'type': 'transportation'}));
        itinerary?.livings.map(living => newArray.push({...living, 'type':'living'}));
        return newArray;
    }

    const timelineArray = itinerarySubobjectsArray();
    // add in username too and link to user profile page
    // add in imageUrl to connect to each itinerary

    // Add date key for each activity to show in different date/day columns

    // always order hotel at top or bottom after first day?

    // figure out ordering chronologically of activities, maybe try to by ordering by key value
    const orderActivitiesArray = (activitiesArray) => {
        activitiesArray.map(activity => {
            if (activity['eventTitle']) {

            }
        })
    }


    console.log(itinerarySubobjectsArray(itinerary), 'test array');
    console.log(itinerary);    
    return (
        <>
            <div className="itinerary-show-page-container">
                <div className='itinerary-show-page-header'>
                    <div className='itinerary-photo-box'>
                        <img className='itinerary-cover-photo' src={nyc} />
                    </div>

                    <div className='itinerary-show-page-header-text'>
                        <div className='itinerary-show-page-title'>{itinerary?.title.toUpperCase()}</div>  
                        <div className='itinerary-show-page-description'>{itinerary?.description.toUpperCase()}</div> 

                    </div>
                    <svg fill="#000000" height="23px" width="23px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> 
                        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path> </g> </g></svg>
                    <Link to={`/itinerary/form/${itinerary?._id}`}>
                    <div className='itinerary-edit-button-box'>

                        <img className='itinerary-edit-button' src={editbutton} />
                    </div>                    
                    </Link>
                </div>


                <div className='itinerary-show-page-content'>
                    <div className="itinerary-display-items-container">
                        <div className="day-header"> Date</div>
                    
                        {itinerary ? itinerarySubobjectsArray(itinerary).map((activity, idx) => <TimelineBox key={idx} activity={activity} />) : ''}
                    </div>

                    <div className="itinerary-display-items-container"></div>

                    <div className="itinerary-display-items-container"></div>
                    
                </div>



            </div>
        </>
    )
}

export default ItineraryShow