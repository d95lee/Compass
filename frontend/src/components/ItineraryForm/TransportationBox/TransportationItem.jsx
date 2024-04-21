import { useDispatch } from 'react-redux';
import './TransportationItem.css'
import { useParams } from 'react-router-dom';
import {deleteTransportation} from "../../../store/transportation.js"

const TransportationItem = ({transportation, setTransModalState, setTransportation}) =>{
    const dispatch = useDispatch();
    const {itineraryId} = useParams();

    const handleEditButton = e =>{
        setTransModalState('Edit');
        setTransportation(transportation)
    }

    const handleDeleteButton = e => {
        dispatch(deleteTransportation(itineraryId, transportation._id));
    }

    return (
        <>
            <ul>
                <li>Transportation Title: {transportation.transportationTitle}</li>
                <li>Start Time: {transportation.startTime}</li>
                <li>End Time: {transportation.endTime}</li>
                <li>Start Date: {transportation.startDate}</li>
                <li>End Date: {transportation.endDate}</li>
                <li>Start Location: {transportation.startLocation}</li>
                <li>End Location: {transportation.endLocation}</li>
                <li>Description: {transportation.description}</li>
                <li>Cost: {transportation.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
        </>
    );
};

export default TransportationItem
