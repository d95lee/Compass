import { useDispatch, useSelector } from 'react-redux'
import './ItineraryForm.css'
import { useParams } from 'react-router-dom';
import { fetchItinerary, selectItinerary } from '../../store/itinerary';
import { useEffect } from 'react';

const ItineraryForm = () => {
    const dispatch = useDispatch();
    const { itineraryId } = useParams();
    const itinerary = useSelector(selectItinerary(itineraryId))

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])

    return (
        <div className='form-background'>

<div className='event-form'>
            <h1>Events title:{itinerary?.events[0]?.eventTitle} </h1>
            <hr />

            {itinerary?.events.map(event => (
                
                <div key={event._id} className='event-item'>
                    <div className='event-start-time'>
                        <h4>Start time</h4>
                        <p>{event.startTime}</p>
                    </div>

                    <div className='event-end-time'>
                        <h4>End time</h4>
                        <p>{event.endTime}</p>
                    </div>

                    <div className='event-location'>
                        <h4>Location</h4>
                        <p>{event.location}</p>
                    </div>

                    <div className='event-cost'>
                        <h4>Cost</h4>
                        <p>{event.cost}</p>
                    </div>

                    <div className='event-description'>
                        <h4>Description</h4>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>

            {/* <div className='event-form'>
                <h1>Events title: </h1>
                <hr />

                <div className='event-start-time'>
                    <h4>Start time</h4>
                    <p>{itinerary?.event[0]?.eventTitle}</p>
                </div> */}

                {/* <div className='event-end-time'>
                    <h4>End time</h4>
                    <p></p>
                </div>

                <div className='event-location'>
                    <h4>Location</h4>
                    <p></p>
                </div>

                <div className='event-cost'>
                    <h4>Cost</h4>
                    <p></p>
                </div>

                <div className='event-description'>
                    <h4>Description</h4>
                    <p></p>
                </div> */}

            {/* </div> */}





            <div className='transportation-form'>
                <h1>Transportation</h1>
                <hr />
            </div>

            <div className='living-form'>
                <h1>Living</h1>
                <hr />
            </div>
        </div>
    )
}

export default ItineraryForm