import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createEvent } from "../../store/event"
import './EventForm.css'
import { useParams } from "react-router-dom"

const Event = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    const [eventTitle, setEventTitle] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [cost, setCost] = useState('')
    
    useEffect(() => {

    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createEvent(itineraryId, {
            eventTitle: eventTitle,
            startTime: startTime,
            endTime: endTime,
            date: date,
            location: location,
            description: description,
            category: category,
            cost: cost
        }))    
    }
    

    return (
        <>
            <div className="event-form-container">
                <form className="event-form-modal">
                    <label>Event Title
                        <input type="text"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="Event Title"
                        />
                    </label>

                    <label>Start Time
                        <input type="text"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="Start time 12:00"
                        />
                    </label>

                    <label>End Time
                        <input type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="Start time 12:00"
                        />
                    </label>

                    <label>Date
                        <input type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date 01/01/2020"
                        />
                    </label>

                    <label>Location
                        <input type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        />
                    </label>

                    <label>Description
                        <input type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description (optional)"
                        />
                    </label>

                    <label>Category
                        <input type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                        />
                    </label>

                    <label>Cost
                        <input type="text"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        placeholder="Cost"
                        />
                    </label>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}


export default Event