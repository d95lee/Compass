import './ItineraryIndex.css';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchItineraries, fetchItinerary, selectItinerary, selectItineraryArray } from '../../store/itinerary';
import { fetchItineraries, selectItineraries } from '../../store/itinerary';
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { useEffect } from 'react';
import { removeGlobe } from '../Globe/Globe';

const ItineraryIndex = () => {

    const dispatch = useDispatch();

    const itineraries = useSelector(selectItineraries);
    // console.log(itineraries, 'itineraries');

    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])

    removeGlobe()

    return (
        <>
            <div className='itinerary-index-page'>
                <div className='itinerary-index-left'>
                    <div className='index-all-title'>All Itineraries</div>
                    <div className='index-locations-title'>Locations</div>
                    <div className='index-locations'>
                        <div className='index-location-text'>North America</div>
                        <div className='index-location-text'>Europe</div>
                        <div className='index-location-text'>Asia</div>
                        <div className='index-location-text'>South America</div>
                        <div className='index-location-text'>Africa</div>
                    </div>

                </div>
                <div className='itinerary-index-right'>
                    <div className='itinerary-index'>

                        {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                        {Object.values(itineraries).map((itinerary, idx) => <ItineraryItem key={idx} itinerary={itinerary} />)}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ItineraryIndex;
