import './ItineraryItem.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';

const ItineraryItem = ({itinerary}) => {
    console.log(itinerary, 'item');
    return (
        <>
            <div className='itinerary-index-item'>
                <div className='itinerary-index-image'>
                    <img className='image' src={nyc} />
                </div>

                <div className='index-item-details'>
                    <span className='index-item-author'>Created by: {itinerary?.author} </span>
                    <span className='index-item-title'>Fall in New York</span>
                    <span className='index-item-description'>4 days in NYC</span>
                </div>
            </div>
        </>
    )
}

export default ItineraryItem;