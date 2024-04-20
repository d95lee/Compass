

const LivingItem = ({living, setLivingModalState, setLiving})=>{

    const handleEditButton = e => {
        setLivingModalState('Edit')
        setLiving(living)
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
        </>
    );
};

export default LivingItem;
