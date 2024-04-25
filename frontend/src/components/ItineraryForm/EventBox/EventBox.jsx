import { useState } from "react";
import EventItem from "./EventItem";
import EventForm from "./EventForm";
import { eventSort } from "../../../utils/calenderSort";
import EventDateBox from "./EventDateBox";
import "./EventBox.css"

const EventBox = ({itinerary}) => {
    const events = itinerary?.events
    const [eventModalState, setEventModalState] = useState(null)
    const [event, setEvent] = useState({})

    const sortedEvents = eventSort(itinerary);
    //console.log(sortedEvents, 'sorted events object');

    // need to pass down the 3 props for eventItem

    const createEventCalendar = (sortedEvents) => {
        // can't use for loop bc we need to return the subcomponent each time 

        return Object.values(sortedEvents).map((ele, idx) => (<EventDateBox key={idx} eventsArray={ele} date={Object.keys(sortedEvents)[idx]} setEventModalState={setEventModalState} setEvent={setEvent}/>))
    }

    // sub component by date, and then within that map out all the event items 
    return(
        <>
            <div className="event-form-box">
                <div className="event-form-box-header">
                    <h3>Events</h3>
                    <div>
                        <svg className="event-form-add-button" fill="#9c9696" height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402" onClick={e=>setEventModalState('Add')}>
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
                        </svg>
                    </div>      
                </div>

                
                <div className="event-days-container">
                   {sortedEvents && createEventCalendar(sortedEvents)} 
                </div>
                
            </div>
            {eventModalState && <EventForm itinerary = {itinerary} event = {event} eventModalState = {eventModalState} setEventModalState={setEventModalState} setEvent={setEvent}/>}

        </>
    );
};

export default EventBox
