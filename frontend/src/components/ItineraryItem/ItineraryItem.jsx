import './ItineraryItem.css';
import nyc from '../../../../assets/nyc-brooklyn-bridge.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { selectItinerary, fetchItinerary } from '../../store/itinerary';
import { useEffect } from 'react';

const ItineraryItem = ({itineraryId}) => {
    const dispatch = useDispatch();
    const itinerary = useSelector(selectItinerary(itineraryId));

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId));
    }, [dispatch, itineraryId])

    console.log(itineraryId, 'item');
    return (
        <>
            <li>
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
            </li>

        </>
    )
}

export default ItineraryItem;