import EventItem from "./EventItem";
import { oneDaySort } from "../../../utils/calenderSort";
// passing in an array of the events for the day
const EventDateBox = ({eventsArray, date, setEventModalState, setEvent}) => {
    return (
        <>
            <div className="event-date-box">
                <div className="event-date-box-header">{date}</div>
                {oneDaySort(eventsArray).map((el,idx) => (<EventItem key={idx} event={el} setEventModalState={setEventModalState} setEvent={setEvent}/>))}
            </div>
        </>
    )

}

export default EventDateBox;