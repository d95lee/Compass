import './ItineraryItem.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { selectItinerary, fetchItinerary } from '../../store/itinerary';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItineraryItem = ({itinerary}) => {
    // const dispatch = useDispatch();
    // const itinerary = useSelector(selectItinerary(itineraryId));

    // useEffect(() => {
    //     dispatch(fetchItinerary(itineraryId));
    // }, [dispatch, itineraryId])

    console.log(itinerary, 'item');
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