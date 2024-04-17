import './ItineraryIndex.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';
import sydney from '../../../../assets/sydney.png';
import paris from '../../../../assets/paris.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries, fetchItinerary, selectItineraries, selectItinerary } from '../../store/itinerary';
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { useEffect } from 'react';

const ItineraryIndex = () => {

    const dispatch = useDispatch();
    const itinerary = useSelector(selectItinerary('661f1eac27ea3103d469a6db'));

    const itineraries = useSelector(selectItineraries);
    // console.log(itinerary, 'itinerary');
    // console.log(itineraries, 'itineraries');

    useEffect(() => {
        dispatch(fetchItineraries());
    }, [])

    return (
        <>
            <div className='itinerary-index'>
                {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                <ul>
                {Object.values(itineraries).map(itinerary => {
                    console.log(itinerary, 'itinerary');
                    return <ItineraryItem key={itinerary._id} itineraryId={itinerary._id} />})}
                </ul>

                
                
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