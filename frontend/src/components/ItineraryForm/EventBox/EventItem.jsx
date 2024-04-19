import './EventItem.css'

const EventItem = ({event, setEventModalState, setEvent})=>{

    const handleEditButton = e => {
        setEventModalState('Edit')
        setEvent(event)
    }
    return (
        <>
            <ul>
                <li>{event.eventTitle}</li>
                <li>{event.startTime}</li>
                <li>{event.endTime}</li>
                <li>{event.date}</li>
                <li>{event.location}</li>
                <li>{event.description}</li>
                <li>{event.category}</li>
                <li>{event.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
        </>
    );
};

export default EventItem;
