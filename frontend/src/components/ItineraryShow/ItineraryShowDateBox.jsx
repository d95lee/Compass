import TimelineBox from "./TimelineBox";
import { oneDaySort } from "../../utils/calenderSort";

// passing in an array of the events for the day
const ItineraryShowDateBox = ({activitiesArray, date}) => {
    console.log(activitiesArray, 'activities array');
    return (
        <>
            <div className="event-date-box">
                <div className="event-date-box-header">{date}</div>
                {oneDaySort(activitiesArray).map((el,idx) => (<TimelineBox key={idx} activity={el} />))}
            </div>
        </>
    )

}

export default ItineraryShowDateBox;