import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import "./ItineraryShow.css"


const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))

    
    return (
        <>
            <div className="itinerary-show-page-container">
                <div className="itinerary-timeline-container">
                    <p>Test</p>
                    <p>{itinerary?.title}</p>
                </div>
            </div>
        </>
    )
}

export default ItineraryShow