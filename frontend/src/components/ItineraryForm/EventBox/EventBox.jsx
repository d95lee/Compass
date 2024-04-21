import { useState } from "react";
import EventItem from "./EventItem";
import EventForm from "./EventForm";
import { eventSort } from "../../../utils/calenderSort";


const EventBox = ({itinerary}) => {
    const events = itinerary?.events
    const [eventModalState, setEventModalState] = useState(null)
    const [event, setEvent] = useState({})

    const eventsArraybyDate = eventSort(itinerary);
    console.log(eventsArraybyDate, 'eventsArray');

    const divForDate = (dateArray) => {
        return (
            <>
                <div className="event-date-box">

                </div>
            </>
        )
    }

    return(
        <>
            <div className="event-form-box">
                <h3>Events</h3>
                <button onClick={e=>setEventModalState('Add')}>Add</button>
                {/* {events && events.map((el,idx) => (<EventItem key={idx} event={el} setEventModalState={setEventModalState} setEvent={setEvent}/>))} */}

                {events && Object.values(eventsArraybyDate).forEach(eventArray => {
                    eventArray.map((el,idx) => (<EventItem key={idx} event={el} setEventModalState={setEventModalState} setEvent={setEvent}/>))}
                )}
                
            </div>
            {eventModalState && <EventForm itinerary = {itinerary} event = {event} eventModalState = {eventModalState} setEventModalState={setEventModalState} setEvent={setEvent}/>}

        </>
    );
};

export default EventBox
