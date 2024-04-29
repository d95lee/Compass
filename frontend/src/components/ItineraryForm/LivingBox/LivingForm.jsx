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

    const handleClose = () => {
        setLivingModalState(null);
        setLiving({})
    }

    return (
        <>
        <div className="modal-background" onClick={handleClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <h3>{livingModalState === "Add" ? 'Add Living Accomodation' : 'Edit Living Accomodation'}</h3>
                    <form className="living-form-modal" onSubmit={handleSubmit}>
                        <label>Housing Title
                            <input type="text"
                            value={livingTitle}
                            onChange={(e) => setLivingTitle(e.target.value)}
                            placeholder="Housing Title"
                            />
                        </label>

                        <label>Start Time:
                            <input type="text"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="Start time 12:00"
                            />
                        </label>

                        <label>End Time:
                            <input type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="Start time 12:00"
                            />
                        </label>

                        <label>Start Date:
                            <input type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Date 01/01/2020"
                            />
                        </label>

                        <label>End Date:
                            <input type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
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


                        <label>Cost
                            <input type="text"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            placeholder="Cost"
                            />
                        </label>
                        <input type="submit" value={"Save"} />
                    </form>
                    {errors && errors.map((err, idx) => (<p key={idx}>{err}</p>))}
                </div>
            </div>

        </>
    )
}

export default LivingForm;
