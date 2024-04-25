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
                <div className="event-form-box-header">
                    <h3>Transportation</h3>
                    <div>
                        <svg className="event-form-add-button" fill="#9c9696" height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402" onClick={e => setTransModalState('Add')}>
                            <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
                        </svg>
                    </div> 
                    
                </div>
                
                <div className="event-days-container">
                    {sortedTransportation && createTransportationCalendar(sortedTransportation)}
                </div>

            </div>

            {transModalState && <TransportationForm itinerary={itinerary}
                transportation={transportation} transModalState={transModalState}
                setTransModalState={setTransModalState} setTransportation={setTransportation} /> }
        </>
    );
};

export default TransportationBox;
