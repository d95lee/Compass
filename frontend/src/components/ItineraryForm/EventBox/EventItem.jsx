import './EventItem.css'

const EventItem = ({event, setEventModalState, setEvent})=>{

    const handleEditButton = e => {
        setEventModalState('Edit')
        setEvent(event)
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
        </>
    );
};

export default EventItem;
