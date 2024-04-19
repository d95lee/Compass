import './TransportationItem.css'

const TransportationItem = ({transportation, setTransModalState, setTransportation}) =>{
    const handleEditButton = e =>{
        setTransModalState('Edit');
        setTransportation(transportation)
    }
    return (
        <>
            <ul>
                <li>{transportation.transportationTitle}</li>
                <li>{transportation.startTime}</li>
                <li>{transportation.endTime}</li>
                <li>{transportation.startDate}</li>
                <li>{transportation.endDate}</li>
                <li>{transportation.startLocation}</li>
                <li>{transportation.endLocation}</li>
                <li>{transportation.description}</li>
                <li>{transportation.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
        </>
    );
};

export default TransportationItem
