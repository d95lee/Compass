import { useDispatch, useSelector } from 'react-redux'
import './ItineraryForm.css'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteItinerary, fetchItinerary, selectItinerary } from '../../store/itinerary';
import { useEffect, useState } from 'react';
import BasicModal from './BasicModal'
import EventBox from './EventBox/EventBox';
import LivingBox from './LivingBox/LivingBox';
import TransportationBox from './TransportationBox/TransportationBox';
import { removeGlobe } from '../Globe/Globe';

const ItineraryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { itineraryId } = useParams();
    const itinerary = useSelector(selectItinerary(itineraryId));
    const [basicModalState, setBasicModalState] = useState(false)

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])

    removeGlobe()

    const handleDelete = () => {
        dispatch(deleteItinerary(itineraryId))
            .then(() => navigate(`/itinerary`))
    }

    return (
       <>
       <div className='itinerary-back-button-circle'>
            <svg className='itinerary-back-button' fill="#000000" width='32px' height='32px' viewBox="0 0 24 24" onClick={()=> navigate(`/itinerary/${itinerary?._id}`)}>
                {/* <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <g data-name="Layer 2"> <g data-name="arrow-back"> <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect>  */}
                <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"></path> 
                {/* </g> </g> </g> */}
            </svg>        
       </div>

        <div className='edit-form-header'>
           <div className='edit-form-header-text'>Edit Itinerary</div>
           {/* <Link to={`/itinerary/${itinerary?._id}`}>
                <div className='itinerary-view-button-box'>
                    <div className='itinerary-view-button'>View Itinerary</div>
                </div>
            </Link> */}
        </div>

        <div className='edit-contents'>
            <div className='basic-info'>
                <div className='basic-info-header'>
                    <div className='basic-info-header-text'>ITINERARY DETAILS</div>
                    
                    <svg className="timeline-event-edit-button" fill="#9c9696" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.936 494.936" onClick={() => setBasicModalState(!basicModalState)}>
                        <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path>
                        <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path>
                    </svg>
                    
                </div>
                <hr className='itinerary-details-line'></hr>
                <div className='basic-info-details'>
                    <div className='basic-info-details-field'><span className='basic-info-title'>TITLE:</span> {itinerary?.title}</div>
                    <div className='basic-info-details-field'><span className='basic-info-title'>DESCRIPTION:</span> {itinerary?.description}</div>
                    <div className='basic-info-details-field'><span className='basic-info-title'>COUNTRY:</span> {itinerary?.country}</div>
                </div>
            </div>
            <EventBox itinerary={itinerary}/>
            <LivingBox itinerary={itinerary} />
            <TransportationBox itinerary={itinerary} />
            <div className='itinerary-delete-button-box' onClick={handleDelete}>
                <div className='itinerary-delete-button'>Delete Itinerary</div>
            </div>
        </div>
        {basicModalState && <BasicModal basicModalState={basicModalState} setBasicModalState={setBasicModalState} itinerary={itinerary}/>}

       </>
    );
};

export default ItineraryForm;
