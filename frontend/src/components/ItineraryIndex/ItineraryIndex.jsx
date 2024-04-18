import './ItineraryIndex.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';
import sydney from '../../../../assets/sydney.png';
import paris from '../../../../assets/paris.jpeg';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchItineraries, fetchItinerary, selectItinerary, selectItineraryArray } from '../../store/itinerary';
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { useEffect } from 'react';

const ItineraryIndex = () => {

    const dispatch = useDispatch();
    const itinerary = useSelector(selectItinerary('661f1eac27ea3103d469a6db'));
    // const currentUser = useSelector(selectCurrentUser);
    const itineraries = useSelector(selectItineraryArray);
    console.log(itinerary, 'itinerary');
    console.log(itineraries, 'itineraries');

    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])

    return (
        <>
            <div className='itinerary-index'>
                {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                {itineraries?.map(itinerary => <ItineraryItem key={itinerary._id} itinerary={itinerary._id} />)}
                
                
                {/* <div className='itinerary-index-item'>
                    <div className='itinerary-index-image'>
                        <img className='image' src={paris} />
                    </div>

                    <div className='index-item-details'>
                        <span>Created by: Helen</span>
                        <span>Paris Adventure</span>
                        <span>5 days in Paris</span>
                    </div>
                </div>

                <div className='itinerary-index-item'>
                    <div className='itinerary-index-image'>
                        <img className='image' src={sydney} />
                    </div>

                    <div className='index-item-details'>
                        <span>Created by: Margaret</span>
                        <span>Sydney Trip</span>
                        <span>Explore Sydney! Week long guide</span>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default ItineraryIndex;