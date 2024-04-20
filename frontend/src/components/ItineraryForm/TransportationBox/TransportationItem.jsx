import './TransportationItem.css'

const TransportationItem = ({transportation, setTransModalState, setTransportation}) =>{
    const handleEditButton = e =>{
        setTransModalState('Edit');
        setTransportation(transportation)
    }
    return (
        <>
            <ul>
                <li>Transportation Title: {transportation.transportationTitle}</li>
                <li>Start Time: {transportation.startTime}</li>
                <li>End Time: {transportation.endTime}</li>
                <li>Date: {transportation.date.slice(0,10)}</li>
                <li>Start Location: {transportation.startLocation}</li>
                <li>End Location: {transportation.endLocation}</li>
                <li>Description: {transportation.description}</li>
                <li>Cost: {transportation.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
        </>
    );
};

export default TransportationItem
