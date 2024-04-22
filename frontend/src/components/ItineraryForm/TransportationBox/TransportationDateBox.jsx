import { oneDaySort } from "../../../utils/calenderSort";
import TransportationItem from "./TransportationItem";


const TransportationDateBox = ({trasnportationArray, date, setTransModalState, setTransportation}) => {

    return(
        <>
        <div className="transportation-date-box">
                <div className="transportation-date-box-header">{date}</div>
                {oneDaySort(trasnportationArray).map((el,idx) => (<TransportationItem key={idx} transportation={el} setTransModalState={setTransModalState} setTransportation={setTransportation}/>))}
        </div>

        </>
    );
};

export default TransportationDateBox;
