import { useState } from 'react';
import './TransportationBox.css'
import TransportationItem from './TransportationItem';
import TransportationForm from './TransportationForm';
import { transportationSort } from '../../../utils/calenderSort';
import TransportationDateBox from './TransportationDateBox';

const TransportationBox = ({itinerary}) => {

    const transportations = itinerary?.transportations
    const [transModalState, setTransModalState] = useState(null)
    const [transportation, setTransportation] = useState({})

    const sortedTransportation = transportationSort(itinerary)

    const createTransportationCalendar = (sortedTransportation) => {
        // can't use for loop bc we need to return the subcomponent each time

        return Object.values(sortedTransportation).map((ele, idx) => (<TransportationDateBox key={idx} trasnportationArray={ele} date={Object.keys(sortedTransportation)[idx]} setTransModalState={setTransModalState} setTransportation={setTransportation}/>))
    }

    return (
        <>
            <div className='transportation-form-box'>
                <h3>Transportation</h3>
                <button onClick={e=>setTransModalState('Add')}>Add</button>
                {sortedTransportation && createTransportationCalendar(sortedTransportation)}

            </div>
            {transModalState && <TransportationForm itinerary={itinerary}
                transportation={transportation} transModalState={transModalState}
                setTransModalState={setTransModalState} setTransportation={setTransportation} /> }
        </>
    );
};

export default TransportationBox;
