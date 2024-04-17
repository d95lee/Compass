import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItineraries, selectItinerary } from "../../store/itinerary"
import { useParams } from "react-router-dom"


const ItineraryAll = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()
    const itinerary = useSelector(selectItinerary(itineraryId))

    const itineraries = useSelector((state) => state.itinerary)
    const itineraryArr = Object.values(itineraries)
    
    useEffect(() => {
        dispatch(fetchItineraries())
    }, [dispatch])

    
    return (
        <>
            <p>Test</p>
            {itineraryArr.map((itinerary, idx) => (
                <div key={idx}>
                    <div>
                        <p>{itinerary.title}</p>
                    </div>
                </div>
            ))}

            <p>{itinerary.title}</p>
        </>
    )
}

export default ItineraryAll 