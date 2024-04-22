import { oneDaySort } from "../../../utils/calenderSort";
import LivingItem from "./LivingItem";


const LivingDateBox = ({livingArray, date, setLivingModalState, setLiving})=>{


    return(
        <>
            <div className="living-date-box">
                <div className="living-date-box-header">{date}</div>
                {oneDaySort(livingArray).map((el,idx) => (<LivingItem key={idx} living={el} setLivingModalState={setLivingModalState} setLiving={setLiving}/>))}
            </div>
        </>
    );
};

export default LivingDateBox;
