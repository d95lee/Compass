import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createEvent, updateEvent } from "../../../store/event"
import './EventForm.css'

const EventForm = ({itinerary, event, eventModalState, setEventModalState, setEvent}) => {
    const dispatch = useDispatch()

    const [eventTitle, setEventTitle] = useState(eventModalState === 'Add' ? '' : event.eventTitle)
    const [startTime, setStartTime] = useState(eventModalState === 'Add' ? '' : event.startTime)
    const [endTime, setEndTime] = useState(eventModalState === 'Add' ? '' : event.endTime)
    const [date, setDate] = useState(eventModalState === 'Add' ? '' : event.date)
    const [location, setLocation] = useState(eventModalState === 'Add' ? '' : event.location)
    const [description, setDescription] = useState(eventModalState === 'Add' ? '' : event.description)
    const [category, setCategory] = useState(eventModalState === 'Add' ? '' : event.category)
    const [cost, setCost] = useState(eventModalState === 'Add' ? '' : event.cost)
    const [errors, setErrors] = useState([])

    useEffect(() => {

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(eventModalState === 'Add'){
            dispatch(createEvent(itinerary._id, {
                eventTitle,
                startTime,
                endTime,
                date,
                location,
                description,
                category,
                cost
            }))
            .then(()=> setEventModalState(null))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }else{
            dispatch(updateEvent(itinerary._id, {
                ...event,
                eventTitle,
                startTime,
                endTime,
                date,
                location,
                description,
                category,
                cost
            }))
            .then(() => setEventModalState(null))
            .then(() => setEvent({}))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }
    }

    const handleClose = e => {
        setEventModalState(null);
        setEvent(null)
    }
    return (
        <>
            <div className="modal-background" onClick={handleClose}>
                <div className="add-event-modal-content" onClick={e => e.stopPropagation()}>
                    <h3>{eventModalState === "Add" ? 'Add Event' : 'Edit Event'}</h3>
                    <form className="event-form-modal" onSubmit={handleSubmit}>
                        <label>
                            <input className='timeline-form-input' type="text"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                            placeholder="Event Title"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="Start time 12:00"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="Start time 12:00"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Date 01/01/2020"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description (optional)"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category"
                            />
                        </label>

                        <label>
                            <input className='timeline-form-input' type="text"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            placeholder="Cost"
                            />
                        </label>
                        <input className='timeline-form-input-submit' type="submit" value={"Save"} />
                    </form>
                </div>
            </div>
        </>
    )
}


export default EventForm
