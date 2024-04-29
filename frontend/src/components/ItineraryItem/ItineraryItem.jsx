import './ItineraryItem.css';

import { Link } from 'react-router-dom';

const ItineraryItem = ({itinerary}) => {

    return (
        <>
            <Link to={`/itinerary/${itinerary?._id}`}>
                <div className='itinerary-index-item'>
                    <div className='itinerary-index-image'>
                        <img className='image' src={itinerary?.imageUrls}/>
                    </div>

                    <div className='index-item-details'>
                        <span className='index-item-author'>Created by: {itinerary?.author.username} </span>
                        <span className='index-item-title'>{itinerary?.title}</span>
                        <span className='index-item-description'>{itinerary?.description}</span>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default ItineraryItem;
