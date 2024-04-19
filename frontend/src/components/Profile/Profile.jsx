import { useEffect, useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItineraries, selectItineraries } from '../../store/itinerary';
import { fetchUser } from '../../store/user'
import ItineraryItem from '../ItineraryItem/ItineraryItem';


const Profile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.user);



    // const [itinerary, setItinerary] = useState('myItinerary');


    const itineraries = useSelector(selectItineraries);
    console.log(itineraries, 'itineraries');

    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])



    // if (itinerary === 'myItinerary') {

    // }


    return (
        <div className='profile-background'>

            <img className='background-img' src="https://wallpapers.com/images/featured/widescreen-3ao0esn9qknhdudj.jpg" alt="" />
            <div className='pic-div'>
                <img className='user-img' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
            </div>

            <div className='user-info'>
                <h3>Bio</h3>

                <p>I love to travel and learn about new culture, meet people and help other find their way around cities</p>
            </div>
            <button className='profile-edit-button'>Edit</button>

            <div className='profile-itineraries'>
                <div className='itinerary-buttons'>
                    <button className='my-button' onClick={() => setItinerary('myItinerary')}>My itineraries</button>
                    <button className='saved-button' onClick={() => setItinerary('savedItinerary')}>Saved itineraries</button>
                    <button className='liked-button' onClick={() => setItinerary('likedItinerary')}>Liked itineraries</button>
                </div>
                <div className='blocks'>
                    <div className='my-itineraries'>
                            <div className='itinerary-index'>
                            {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                            {Object.values(itineraries).map((itinerary, idx) => <ItineraryItem key={idx} itinerary={itinerary} />)}

                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Profile
