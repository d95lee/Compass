import { useState } from 'react';
import './TransportationBox.css'
import TransportationItem from './TransportationItem';
import TransportationForm from './TransportationForm';

const TransportationBox = ({itinerary}) => {

    const transportations = itinerary?.transportations
    const [transModalState, setTransModalState] = useState(null)
    const [transportation, setTransportation] = useState({})

    return (
        <>
            <div className='transportation-form-box'>
                <h3>Transportation</h3>
                <button onClick={e=>setTransModalState('Add')}>Add</button>
                {transportations && transportations.map((el, idx) =>(<TransportationItem key={idx}
                    transportation={el} setTransModalState={setTransModalState}
                    setTransportation={setTransportation} /> ))}

            </div>
            {transModalState && <TransportationForm itinerary={itinerary}
                transportation={transportation} transModalState={transModalState}
                setTransModalState={setTransModalState} setTransportation={setTransportation} /> }
        </>
    );
};

export default TransportationBox;
