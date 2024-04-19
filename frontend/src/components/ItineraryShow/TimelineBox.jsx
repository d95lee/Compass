
import './TimelineBox.css';

const TimelineBox = ({activity}) => {
    
    console.log(activity, 'activity');

    if (activity.type === "event"){
        return (
            <>
                <div className='event-box'>
                    <div className='timeline-box-date'>Date: {activity.date.slice(0,10)}</div>
                    <div className='event-box-title'>Event: {activity.eventTitle}</div>
                    
                    <div className='timeline-box-description'>Description: {activity.description}</div>

                    <div className='timeline-box-location'>Location: {activity.location}</div>
                    <div className='timeline-box-time'>Start Time: {activity.startTime}</div>
                    <div className='timeline-box-time'>End Time: {activity.endTime}</div>

                    <div className='timeline-box-cost'>Cost: ${activity.cost}</div>
                </div>
            </>
        )
    } else if (activity.type === "transportation"){
        return (
            <>
                <div className='transportation-box'>
                    <div className='timeline-box-date'>Date: {activity.date.slice(0,10)}</div>
                    <div className='event-box-title'>Transportation: {activity.transportationTitle}</div>
                    <div className='timeline-box-description'>Description: {activity.description}</div>

                    <div className='transportation-box-location'>Start Location: {activity.startLocation}</div>
                    <div className='transportation-box-time'>Start Time: {activity.startTime}</div>
                    
                    <div className='transportation-box-location'>End Location: {activity.endLocation}</div>
                    <div className='transportation-box-time'>End Time: {activity.endTime}</div>
                    <div className='timeline-box-cost'>Cost: ${activity.cost}</div>
                </div>
            </>
        )
    } else if (activity.type === "living") {
        return (
            <>
                <div className='living-box'>
                    <div className='timeline-box-date'>Dates: {activity.startDate.slice(0,10)} - {activity.endDate.slice(0,10)}</div>
                    <div className='event-box-title'>Living: {activity.livingTitle}</div>
                    <div className='timeline-box-description'>Description: {activity.description}</div>

                    <div className='timeline-box-location'>Location: {activity.location}</div>

                    <div className='timeline-box-time'>Start Date: {activity.startDate.slice(0,10)}</div>
                    <div className='location-box-time'>Start Time: {activity.startTime}</div>
                    <div className='timeline-box-time'>End Date: {activity.endDate.slice(0,10)}</div>
                    <div className='location-box-time'>End Time: {activity.endTime}</div>
                    
                    <div className='timeline-box-cost'>Cost: ${activity.cost}</div>
                </div> 
            </>
        )
    }
    
}

export default TimelineBox;