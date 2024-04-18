import { useDispatch, useSelector } from 'react-redux'
import './ItineraryForm.css'
import { useParams } from 'react-router-dom';
import { fetchItinerary, selectItinerary } from '../../store/itinerary';
import { useEffect, useState } from 'react';
import BasicModal from './BasicModal'
import EventBox from './EventBox/EventBox';
const ItineraryForm = () => {
    const dispatch = useDispatch();
    const { itineraryId } = useParams();
    const itinerary = useSelector(selectItinerary(itineraryId));
    const [basicModalState, setBasicModalState] = useState(false)

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])
    return (
       <>
        <h2>Create Itinerary Details</h2>
        <div className='basic info'>
            <h3>Basic info</h3>
            <button onClick={e => setBasicModalState(!basicModalState)}>Edit</button>
            <ul>
                <li>{itinerary?.title}</li>
                <li>{itinerary?.description}</li>
                <li>{itinerary?.country}</li>
            </ul>
        </div>
        <EventBox itinerary={itinerary}/>
        {basicModalState && <BasicModal basicModalState={basicModalState} setBasicModalState={setBasicModalState} itinerary={itinerary}/>}

       </>
    );
};

export default ItineraryForm;
