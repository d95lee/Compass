import './ItineraryIndex.css';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchItineraries, fetchItinerary, selectItinerary, selectItineraryArray } from '../../store/itinerary';
import { fetchItineraries, selectItineraries, selectItineraryByContinent } from '../../store/itinerary';
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { useEffect, useState } from 'react';
import { removeGlobe } from '../Globe/Globe';

const ItineraryIndex = () => {

    const dispatch = useDispatch();
    // console.log(itineraries, 'itineraries');
    const [filterLocation, setFilterLocation] = useState('all')
    const filtered = useSelector(selectItineraryByContinent(filterLocation))
    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])

    const handleFilterClick = (e)=>{
        setFilterLocation(e.target.id)
    }




    return (
        <>
            <div className='itinerary-index-page'>
                <div className='itinerary-index-left'>
                    <div className='index-all-title' id='all' onClick={handleFilterClick}>All Itineraries</div>
                    <div className='index-locations-title'>Locations</div>
                    <div className='index-locations'>
                        <div className='index-location-text' id='NorthAmerica' onClick={handleFilterClick}>North America</div>
                        <div className='index-location-text' id='Europe' onClick={handleFilterClick}>Europe</div>
                        <div className='index-location-text' id='Asia' onClick={handleFilterClick}>Asia</div>
                        <div className='index-location-text' id='SouthAmerica' onClick={handleFilterClick}>South America</div>
                        <div className='index-location-text' id='Africa' onClick={handleFilterClick}>Africa</div>
                        <div className='index-location-text' id='Oceania' onClick={handleFilterClick}>Oceania</div>
                    </div>

                </div>
                <div className='itinerary-index-right'>
                    <div className='itinerary-index'>

                        {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                        {filtered.map((itinerary, idx) => <ItineraryItem key={idx} itinerary={itinerary} />)}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ItineraryIndex;
