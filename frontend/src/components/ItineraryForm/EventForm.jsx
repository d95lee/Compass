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
            eventTitle: setEventTitle,
            startTime: setStartTime,
            endTime: setEndTime,
            date: setDate,
            location: setLocation,
            description: setDescription,
            category: setCategory,
            cost: setCost
    }))
        // setData('')
    }
    // eventTitle
    // startTime (Could be optional)
    // endTime (Could be optional)
    // Date *
    // Location
    // Description (optional)
    // Category
    // cost
    

    return (
        <>
            <div className="event-form-container">
                <form className="event-form">
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
                        placeholder="Start time"
                        />
                    </label>

                    <label>End Time
                        <input type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="End Time"
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