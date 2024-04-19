import { useState } from "react";
import EventItem from "./EventItem";
import EventForm from "./EventForm";


const EventBox = ({itinerary}) => {
    const events = itinerary?.events
    const [eventModalState, setEventModalState] = useState(null)
    const [event, setEvent] = useState({})

    return(
        <>
            <div className="event-form-box">
                <h3>Events</h3>
                <button onClick={e=>setEventModalState('Add')}>Add</button>
                {events && events.map((el,idx) => (<EventItem key={idx} event={el} setEventModalState={setEventModalState} setEvent={setEvent}/>))}

            </div>
            {eventModalState && <EventForm itinerary = {itinerary} event = {event} eventModalState = {eventModalState} setEventModalState={setEventModalState} setEvent={setEvent}/>}

        </>
    );
};

export default EventBox
