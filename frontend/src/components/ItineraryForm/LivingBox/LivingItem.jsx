import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteLiving } from "../../../store/living.js"

const LivingItem = ({living, setLivingModalState, setLiving})=>{
    const dispatch = useDispatch();
    const {itineraryId} = useParams();

    const handleEditButton = e => {
        setLivingModalState('Edit')
        setLiving(living)
    }

    const handleDeleteButton = e => {
        dispatch(deleteLiving(itineraryId, living._id));
    }
    return (
        <>
            <ul>
                <li>Accomodation Title: {living.livingTitle}</li>
                <li>Start Time: {living.startTime}</li>
                <li>End Time: {living.endTime}</li>
                <li>Start Date: {living.startDate.slice(0,10)}</li>
                <li>End Date: {living.endDate.slice(0,10)}</li>
                <li>Location: {living.location}</li>
                <li>Description: {living.description}</li>
                <li>Cost: ${living.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
        </>
    );
};

export default LivingItem;
