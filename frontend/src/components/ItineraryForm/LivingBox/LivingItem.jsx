

const LivingItem = ({living, setLivingModalState, setLiving})=>{

    const handleEditButton = e => {
        setLivingModalState('Edit')
        setLiving(living)
    }
    return (
        <>
            <ul>
                <li>{living.livingTitle}</li>
                <li>{living.startTime}</li>
                <li>{living.endTime}</li>
                <li>{living.startDate}</li>
                <li>{living.endDate}</li>
                <li>{living.location}</li>
                <li>{living.description}</li>
                <li>{living.cost}</li>
            </ul>
            <button onClick={handleEditButton}>Edit</button>
        </>
    );
};

export default LivingItem;
