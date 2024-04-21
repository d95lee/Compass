import './EventItem.css'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {deleteEvent} from "../../../store/event.js"

const EventItem = ({event, setEventModalState, setEvent})=>{
    const dispatch = useDispatch();
    const {itineraryId} = useParams();

    const handleEditButton = e => {
        setEventModalState('Edit')
        setEvent(event)
    }

    const handleDeleteButton = e => {
        dispatch(deleteEvent(itineraryId, event._id));
    }
    return (
        <>
            <ul>
                <li>Event Title: {event.eventTitle}</li>
                <li>Start Time: {event.startTime}</li>
                <li>End Time: {event.endTime}</li>
                <li>Date: {event.date.slice(0,10)}</li>
                <li>Location: {event.location}</li>
                <li>Description: {event.description}</li>
                <li>Category: {event.category}</li>
                <li>Cost: {event.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
        </>
    );
};

export default EventItem;
