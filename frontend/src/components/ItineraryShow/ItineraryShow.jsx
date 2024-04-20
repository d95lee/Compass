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
    // what about flights that are overnight?

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