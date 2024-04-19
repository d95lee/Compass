import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import "./ItineraryShow.css"
import TimelineBox from "./TimelineBox"
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg'

const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId));
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))


    const itinerarySubobjectsArray = ( itinerary )=> {
        const newArray = [];  // event = { title: '', date: ''}
        itinerary?.events.map(event => (newArray.push({...event, 'type': 'event'})));
        itinerary?.transportations.map(transportation =>newArray.push({...transportation, 'type': 'transportation'}));
        itinerary?.livings.map(living => newArray.push({...living, 'type':'living'}));
        return newArray;
    }

    const timelineArray = itinerarySubobjectsArray();
    // add in username too and link to user profile page

    // Add date key for each activity to show in different date/day columns
    // what about flights that are overnight?

    // always order hotel at top or bottom after first day?

    // figure out ordering chronologically of activities
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