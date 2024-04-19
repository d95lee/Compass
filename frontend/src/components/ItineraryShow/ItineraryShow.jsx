import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import "./ItineraryShow.css"


const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))


    const itinerarySubobjectsArray = ( itinerary )=> {
        const newArray = [];
        itinerary.events.map(event => (newArray.push(event)));
        itinerary.transportations.map(transportation =>newArray.push(transportation));
        itinerary.livings.map(living => newArray.push(living));
        return newArray;
    }

    console.log(itinerary);    
    return (
        <>
            <div className="itinerary-show-page-container">

                <div className="itinerary-timeline-container">
                    <p>Test</p>
                    <p>{itinerary?.title}</p>
                </div>

                <div className="itinerary-display-items-container">
                    <div className="day-header"> Day 1</div>
                    <div className='event-box'>
                        <div>Event: {itinerary ? itinerary.events[0].eventTitle : 'no event'}</div>
                        <div> </div>
                    </div>
                    <div className='transportation-box'>
                        <div>Transportation: {itinerary ? itinerary.transportations[0].transportationTitle : 'no event'}</div>
                    </div>
                    <div className='living-box'>
                    <div>Living: {itinerary ? itinerary.livings[0].livingTitle : 'no event'}</div>  
                    </div>                       
                </div>

            </div>
        </>
    )
}

export default ItineraryShow