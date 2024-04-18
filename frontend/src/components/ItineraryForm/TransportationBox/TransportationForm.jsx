import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import './EventForm.css'
import { useParams } from "react-router-dom"
import { createTransportation } from "../../../store/transportation"

const TransportationForm = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    const [transportationTitle, setTransportationTitle] = useState('')
    const [startLocation, setStartLocation] = useState('')
    const [endLocation, setEndLocation] = useState('')
    const [ startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')

    useEffect(() => {

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTransportation(itineraryId, {
            transportationTitle: transportationTitle,
            startLocation: startLocation,
            endLocation: endLocation,
            startTime: endTime,
            endTime: endTime,
            date: date,
            description: description,
            cost: cost
        }))
     }



    return (
        <>
            <div className="event-form-container">
                <form className="event-form-modal">
                    <label>Transportation Title
                        <input type="text"
                        value={transportationTitle}
                        onChange={(e) => setTransportationTitle(e.target.value)}
                        placeholder="Transportation Title"
                        />
                    </label>

                    <label>Start Location
                        <input type="text"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                        placeholder="Start Location"
                        />
                    </label>

                    <label>End Location
                        <input type="text"
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
                        placeholder="End Location"
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

                    <label>Date
                        <input type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date 01/01/2020"
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


export default TransportationForm
