import { useState } from "react"
import { useDispatch } from "react-redux"
import './LivingForm.css'
import { createLiving, updateLiving } from "../../../store/living"

const LivingForm = ({itinerary, living, livingModalState, setLivingModalState, setLiving }) => {
    const dispatch = useDispatch()

    const [livingTitle, setLivingTitle] = useState(livingModalState === 'Add' ? '' : living.livingTitle)
    const [startTime, setStartTime] = useState(livingModalState === 'Add' ? '' :living.startTime)
    const [endTime, setEndTime] = useState(livingModalState === 'Add' ? '' : living.endTime)
    const [startDate, setStartDate] = useState(livingModalState === 'Add' ? '' : living.startDate)
    const [endDate, setEndDate] = useState(livingModalState === 'Add' ? '' : living.endDate)
    const [location, setLocation] = useState(livingModalState === 'Add' ? '' : living.location)
    const [description, setDescription] = useState(livingModalState === 'Add' ? '' : living.description)
    const [cost, setCost] = useState(livingModalState === 'Add' ? '' : living.cost)
    const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        if(livingModalState === 'Add'){
            dispatch(createLiving(itinerary._id, {
                livingTitle,
                startTime,
                endTime,
                startDate,
                endDate,
                location,
                description,
                cost
            }))
            .then(()=> setLivingModalState(null))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }else{
            dispatch(updateLiving(itinerary._id, {
                ...living,
                livingTitle,
                startTime,
                endTime,
                startDate,
                endDate,
                location,
                description,
                cost
            }))
            .then(()=> setLivingModalState(null))
            .then(()=> setLiving({}))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }
    }
    // console.log(errors, 'errors');
    const hasErrors = Object.values(errors).length !== 0;

    const handleClose = () => {
        setLivingModalState(null);
        setLiving({})
    }

    return (
        <>
        <div className="modal-background" onClick={handleClose}>
                <div className="add-event-modal-content" onClick={e => e.stopPropagation()}>
                    
                    <svg className="event-modal-close-button" fill="#000000" height="23px" width="23px" viewBox="0 0 1792 1792" onClick={handleClose}>
                        <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"></path>
                    </svg>
                    
                    <div className="event-form-modal-title">{livingModalState === "Add" ? 'Add Living Accomodation' : 'Edit Living Accomodation'}</div>
                    <form className="event-form-modal" onSubmit={handleSubmit}>
                        
                        
                        <label className="event-modal-input-box">
                            <div className="event-modal-input-label">Living Accomodation Title:</div>
                            <input className='timeline-form-input' type="text"
                            value={livingTitle}
                            onChange={(e) => setLivingTitle(e.target.value)}
                            placeholder="Add a title"
                            />
                            <div className="event-modal-input-error">{hasErrors && errors.errors.livingTitle ? errors.errors.livingTitle : ''}</div>
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

export default LivingForm;
