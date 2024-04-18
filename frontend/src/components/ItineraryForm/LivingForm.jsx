import { useState } from "react"
import { useDispatch } from "react-redux"
import './EventForm.css'
import { useParams } from "react-router-dom"
import { createLiving } from "../../store/living"

const LivingForm = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()
    
    const [livingTitle, setLivingTitle] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    
   
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createLiving(itineraryId, {
            livingTitle: setLivingTitle,
            startTime: setStartTime,
            endTime: setEndTime,
            startDate: setStartDate,
            endDate: setEndDate,
            location: setLocation,
            description: setDescription,
            cost: setCost
        }))
    }
   

    return (
        <>
            <div className="event-form-container">
                <form className="event-form-modal">
                    <label>Housing Title
                        <input type="text"
                        value={livingTitle}
                        onChange={(e) => setLivingTitle(e.target.value)}
                        placeholder="Housing Title"
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
                        placeholder="End time 01:00"
                        />
                    </label>

                    <label>Start Date
                        <input type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="Date 01/01/2020"
                        />
                    </label>

                    <label>End Date
                        <input type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="Date 02/01/2020"
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

export default LivingForm