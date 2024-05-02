import {  useState } from "react"
import { useDispatch } from "react-redux"

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

    //  console.log(errors, 'errors');
     const hasErrors = Object.values(errors).length !== 0;

     const handleClose = () => {
        setTransModalState(null);
        setTransportation({})
    }


    return (
        <>
        <div className="modal-background" onClick={handleClose}>
            <div className="add-event-modal-content" onClick={e => e.stopPropagation()}>

                <svg className="event-modal-close-button" fill="#000000" height="23px" width="23px" viewBox="0 0 1792 1792" onClick={handleClose}>
                    <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"></path>
                </svg>

                <div className="event-form-modal-title">{transModalState ==="Add" ? "Add Transportation" : "Edit Transportation"}</div>
                <form className="event-form-modal" onSubmit={handleSubmit}>

                    <label className="event-modal-input-box">
                        <div className="event-modal-input-label">Transportation Title:</div>
                        <input className='timeline-form-input' type="text"
                        value={transportationTitle}
                        onChange={(e) => setTransportationTitle(e.target.value)}
                        placeholder="Add a title"
                        />
                        <div className="event-modal-input-error">{hasErrors && errors.errors.transportationTitle ? errors.errors.transportationTitle : ''}</div>
                    </label>

                    <label className="event-modal-input-box">
                        <div className="event-modal-input-label">Start Location:</div>
                        <input className='timeline-form-input' type="text"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                        placeholder="Add a start location"
                        />
                        <div className="event-modal-input-error">{hasErrors && errors.errors.startLocation ? errors.errors.startLocation : ''}</div>
                    </label>
                    <label className="event-modal-input-box">
                        <div className="event-modal-input-label">Start Date:</div>
                        <input className='timeline-form-input' type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="Enter date in MM/DD/YYYY format"
                        />
                        <div className="event-modal-input-error">{hasErrors && errors.errors.startDate ? errors.errors.startDate : ''}</div>
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
                        <div className="event-modal-input-label">End Location:</div>
                        <input className='timeline-form-input' type="text"
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
                        placeholder="Add an end location"
                        />
                        <div className="event-modal-input-error">{hasErrors && errors.errors.endLocation ? errors.errors.endLocation : ''}</div>
                    </label>

                    <label className="event-modal-input-box">
                        <div className="event-modal-input-label">End Date:</div>
                        <input className='timeline-form-input' type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="Enter date in MM/DD/YYYY format"
                        />
                        <div className="event-modal-input-error">{hasErrors && errors.errors.endDate ? errors.errors.endDate : ''}</div>
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
                        <div className="event-modal-input-label">Description:</div>
                        <input className='timeline-form-input' type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a description (optional)"
                        />
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
                    <input className='timeline-form-input-submit' type="submit" value={"Save"} />
                </form>
                {/* {errors && errors.map((err, idx) => (<p key={idx}>{err}</p>))} */}
            </div>
        </div>
        </>
    )
}


export default TransportationForm
