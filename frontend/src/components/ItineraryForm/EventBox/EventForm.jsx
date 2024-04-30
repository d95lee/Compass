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

    console.log(errors, 'errors');

    const hasErrors = Object.values(errors).length !== 0;
    const handleClose = () => {
        setEventModalState(null);
        setEvent(null)
    }
    return (
        <>
            <div className="modal-background" onClick={handleClose}>
                <div className="add-event-modal-content" onClick={e => e.stopPropagation()}>

                    <svg className="event-modal-close-button" fill="#000000" height="23px" width="23px" viewBox="0 0 1792 1792" onClick={handleClose}>
                        <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"></path>
                    </svg>

                    <div className="event-form-modal-title">{eventModalState === "Add" ? 'Add Event' : 'Edit Event'}</div>
                    <form className="event-form-modal" onSubmit={handleSubmit}>
                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Event Title:</div>
                            <input className='timeline-form-input' type="text"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                            placeholder="Add a title"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.eventTitle ? errors.errors.eventTitle : ''}</div>
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Start Time:</div>
                            <input className='timeline-form-input' type="text"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="Enter time in 00:00 format"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.startTime ? errors.errors.startTime : ''}</div>
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">End Time:</div>
                            <input className='timeline-form-input' type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="Enter time in 00:00 format"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.endTime ? errors.errors.endTime : ''}</div>
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Date:</div>
                            <input className='timeline-form-input' type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Enter date in MM/DD/YYYY format"
                            />
                            {/* change date from text to Date format */}
                            <div className="event-modal-input-error">{hasErrors && errors.errors.date ? errors.errors.date : ''}</div>
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Location:</div>
                            <input className='timeline-form-input' type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Add a location"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.location ? errors.errors.location : ''}</div>
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Description:</div>
                            <input className='timeline-form-input' type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add a description (optional)"
                            />
                        </label>

                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Category:</div>
                            <input className='timeline-form-input' type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Add a category"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.category ? errors.errors.category : ''}</div>
                        </label>
                        
                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Cost:</div>
                            <input className='timeline-form-input' type="text"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            placeholder="Add a cost"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.cost ? errors.errors.cost : ''}</div>
                        </label>

                        {/* {errors?.map(error => <p>{error}</p>)} */}
                        <input className='timeline-form-input-submit' type="submit" value={"Save"} />
                    </form>
                </div>
            </div>
        </>
    )
}


export default EventForm
