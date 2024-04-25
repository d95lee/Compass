import {  useState } from "react"
import { useDispatch } from "react-redux"
import './TransportationForm.css'

import { createTransportation, updateTransportation } from "../../../store/transportation"

const TransportationForm = ({itinerary, transportation, transModalState, setTransModalState, setTransportation}) => {
    const dispatch = useDispatch()

    const [transportationTitle, setTransportationTitle] = useState(transModalState === 'Add' ? '' : transportation.transportationTitle)
    const [startLocation, setStartLocation] = useState(transModalState === 'Add' ? '' : transportation.startLocation)
    const [endLocation, setEndLocation] = useState(transModalState === 'Add' ? '' : transportation.endLocation)
    const [ startTime, setStartTime] = useState(transModalState === 'Add' ? '' : transportation.startTime)
    const [endTime, setEndTime] = useState(transModalState === 'Add' ? '' : transportation.endTime)
    const [startDate, setStartDate] = useState(transModalState === 'Add' ? '' : transportation.startDate)  // updated
    const [endDate, setEndDate] = useState(transModalState === 'Add' ? '' : transportation.endDate)  // updated
    const [description, setDescription] = useState(transModalState === 'Add' ? '' : transportation.description)
    const [cost, setCost] = useState(transModalState === 'Add' ? '' : transportation.cost)
    const [errors, setErrors] =useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(transModalState === 'Add'){
            dispatch(createTransportation(itinerary._id, {
                transportationTitle,
                startLocation,
                endLocation,
                startTime,
                endTime,
                startDate,
                endDate,
                description,
                cost
            }))
            .then(()=> setTransModalState(null))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }else{
            dispatch(updateTransportation(itinerary._id, {
                ...transportation,
                transportationTitle,
                startLocation,
                endLocation,
                startTime,
                endTime,
                startDate,
                endDate,
                description,
                cost
            }))
            .then(()=> setTransModalState(null))
            .then(() => setTransportation({}))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }

     }

     const handleClose = e => {
        setTransModalState(null);
        setTransportation({})
    }


    return (
        <>
        <div className="modal-background" onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>{transModalState ==="Add" ? "Add Transportation" : "Edit Transportation"}</h3>
                <form className="event-form-modal" onSubmit={handleSubmit}>
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
                    <input type="submit" value={"Save"} />
                </form>
            </div>
        </div>
            <div className="event-form-container">
            </div>
        </>
    )
}


export default TransportationForm
