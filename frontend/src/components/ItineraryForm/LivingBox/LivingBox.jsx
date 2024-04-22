import { useState } from "react";
import LivingItem from "./LivingItem";
import LivingForm from "./LivingForm";
import { livingSort } from "../../../utils/calenderSort";
import LivingDateBox from "./LivingDateBox";


const LivingBox = ({itinerary}) => {
    const livings = itinerary?.livings
    const [livingModalState, setLivingModalState] = useState(null)
    const [living, setLiving] = useState({})

    const sortedLiving = livingSort(itinerary)
    const createLivingCalendar = (sortedLiving) => {
        // can't use for loop bc we need to return the subcomponent each time

        return Object.values(sortedLiving).map((ele, idx) => (<LivingDateBox key={idx} livingArray={ele} date={Object.keys(sortedLiving)[idx]} setLivingModalState={setLivingModalState} setLiving={setLiving}/>))
    }

    return(
        <>
            <div className="living-form-box">
                <h3>Living Accommodation</h3>
                <button onClick={e=>setLivingModalState('Add')}>Add</button>
                {sortedLiving && createLivingCalendar(sortedLiving)}

            </div>
            {livingModalState && <LivingForm itinerary = {itinerary}
                living = {living} livingModalState = {livingModalState}
                setLivingModalState={setLivingModalState} setLiving={setLiving}/>}

        </>
    );
};

export default LivingBox;
