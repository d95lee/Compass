import { useEffect, useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItineraries, selectItineraries } from '../../store/itinerary';
import { fetchUser, selectUser } from '../../store/user'
import ItineraryItem from '../ItineraryItem/ItineraryItem';


const Profile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    // const [itinerary, setItinerary] = useState('myItinerary');


    const itineraries = useSelector(selectItineraries);
    // console.log(itineraries, 'itineraries');
    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])


    const user = useSelector(selectUser(userId));

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId])


    // if (itinerary === 'myItinerary') {

    // }
    

    return (
        <div className='profile-background'>

            <img className='background-img' src="https://wallpapers.com/images/featured/widescreen-3ao0esn9qknhdudj.jpg" alt="" />
            <div className='pic-div'>
                {user?.profileImageUrl && (<img className='user-img' src={user.profileImageUrl}/>)}
            </div>

            <div className='user-info'>
                <h3>Bio</h3>
                {user?.profileImageUrl && (<img src={user.profileImageUrl}/>)}
                <p>{user?.bio}</p>
            </div>
            <button className='profile-edit-button'>Edit</button>

            <div className='profile-itineraries'>
                <div className='itinerary-buttons'>
                    <button className='my-button' onClick={() => setItinerary('myItinerary')}>My itineraries</button>
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
