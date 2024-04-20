import { useDispatch, useSelector } from 'react-redux'
import './ItineraryForm.css'
import { useParams, Link } from 'react-router-dom';
import { fetchItinerary, selectItinerary } from '../../store/itinerary';
import { useEffect, useState } from 'react';
import BasicModal from './BasicModal'
import EventBox from './EventBox/EventBox';
import LivingBox from './LivingBox/LivingBox';
import TransportationBox from './TransportationBox/TransportationBox';

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
        <div className='edit-form-header'>
           <div className='edit-form-header-text'>Edit Itinerary Details</div> 
           
           <Link to={`/itinerary/${itinerary?._id}`}>
                <div className='itinerary-view-button-box'>
                    <div className='itinerary-view-button'>View Itinerary</div>
                </div>                    
            </Link>
        </div>
        
        <div className='edit-contents'>
            <div className='basic-info'>
                <h3>Basic info</h3>
                <button onClick={e => setBasicModalState(!basicModalState)}>Edit</button>
                <ul>
                    <li>Title: {itinerary?.title}</li>
                    <li>Description: {itinerary?.description}</li>
                    <li>Country: {itinerary?.country}</li>
                </ul>
            </div>
            <EventBox itinerary={itinerary}/>
            <LivingBox itinerary={itinerary} />
            <TransportationBox itinerary={itinerary} />

        </div>
        {basicModalState && <BasicModal basicModalState={basicModalState} setBasicModalState={setBasicModalState} itinerary={itinerary}/>}

       </>
    );
};

export default ItineraryForm;
