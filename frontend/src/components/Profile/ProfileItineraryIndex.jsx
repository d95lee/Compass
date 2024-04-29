import ItineraryItem from '../ItineraryItem/ItineraryItem';
import './ProfileItineraryIndex.css'

const ProfileItineraryIndex = ({itineraries}) =>{

    return (
        <>
            <div className='itinerary-box'>
                {Object.values(itineraries).map((itinerary, idx) => <ItineraryItem key={idx} itinerary={itinerary} />)}
            </div>

        </>
    );
};

export default ProfileItineraryIndex;
