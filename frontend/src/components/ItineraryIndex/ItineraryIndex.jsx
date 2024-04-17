import './ItineraryIndex.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';
import sydney from '../../../../assets/sydney.png';
import paris from '../../../../assets/paris.jpeg';

const ItineraryIndex = () => {
    return (
        <>
            <div className='itinerary-index'>

                <div className='itinerary-index-item'>
                    <div className='itinerary-index-image'>
                        <img className='image' src={nyc} />
                    </div>

                    <div className='index-item-details'>
                        <span className='index-item-author'>Created by: Jimmy</span>
                        <span className='index-item-title'>Fall in New York</span>
                        <span className='index-item-description'>4 days in NYC</span>
                    </div>
                </div>

                <div className='itinerary-index-item'>
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
                </div>

            </div>
        </>
    )
}

export default ItineraryIndex;