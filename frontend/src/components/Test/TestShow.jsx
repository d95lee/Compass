import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItinerary, selectItinerary } from "../../store/itinerary"
import { useParams } from "react-router-dom"


const ItineraryShow = () => {
    const dispatch = useDispatch()
    const { itineraryId } = useParams()

    useEffect(() => {
        dispatch(fetchItinerary(itineraryId))
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))

    
    return (
        <>
            <p>Test</p>
            <p>{itinerary?.title}</p>
        </>
    )
}

export default ItineraryShow