import { useState } from "react";
import LivingItem from "./LivingItem";
import LivingForm from "./LivingForm";


const LivingBox = ({itinerary}) => {
    const livings = itinerary?.livings
    const [livingModalState, setLivingModalState] = useState(null)
    const [living, setLiving] = useState({})

    return(
        <>
            <div className="living-form-box">
                <h3>Living Accommodation</h3>
                <button onClick={e=>setLivingModalState('Add')}>Add</button>
                {livings && livings.map((el,idx) => (<LivingItem key={idx} living={el}
                 setLivingModalState={setLivingModalState} setLiving={setLiving}/>))}

            </div>
            {livingModalState && <LivingForm itinerary = {itinerary}
                living = {living} livingModalState = {livingModalState}
                setLivingModalState={setLivingModalState} setLiving={setLiving}/>}

        </>
    );
};

export default LivingBox;
