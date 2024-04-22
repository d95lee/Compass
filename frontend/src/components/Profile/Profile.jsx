import { useEffect, useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItineraries, selectItineraries } from '../../store/itinerary';
import { fetchUser, selectUser } from '../../store/user'
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { removeGlobe } from '../Globe/Globe';


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
    
    
        const likeItineraries = useSelector(selectLikedItinerary(user))
        // console.log(likeItineraries, 'LIKED')


    // if (itinerary === 'myItinerary') {

    // }
    removeGlobe()

    return (
        <div className='profile-background'>
        {bioState && (
                <BioModal 
                    bioState={bioState} 
                    setBioState={setBioState}
                />
            )}
            {/* <img className='background-img' src="" alt="" /> */}
            <div className='pic-div'>
                {user?.profileImageUrl && (<img className='user-img' src={user?.profileImageUrl}/>)}
            </div>

            <div className='user-info'>
                <h3>Bio</h3>
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
