import { useEffect, useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItineraries, selectItineraries, selectLikedItinerary } from '../../store/itinerary';
import { fetchUser, selectUser } from '../../store/user'
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import { removeGlobe } from '../Globe/Globe';
import BioModal from './BioModal';


const Profile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const [bioState, setBioState] = useState(null);


    const itineraries = useSelector(selectItineraries);
    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])


    const user = useSelector(selectUser(userId));
    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId])


    removeGlobe()

    // Editing the bio

    // const [bioState, setBioState] = useState(user?.bio);

    // const handleEdit = e => {
    //     setBioState(e.target.value)
    // }

    return (
        <>
        
        <div className='profile-background'>
        {bioState && (
                <BioModal 
                    bioState={bioState} 
                    setBioState={setBioState}
                />
            )}
            <img className='background-img' src="https://wallpapers.com/images/featured/widescreen-3ao0esn9qknhdudj.jpg" alt="" />
            <div className='pic-div'>
                {user?.profileImageUrl && (<img className='user-img' src={user.profileImageUrl}/>)}
            </div>

            <div className='user-info'>
                <h3>Bio</h3>
                <p className='user-bio'>{user?.bio}</p>

            </div>
            <button onClick={() => setBioState(true)} className='profile-edit-button'>Edit</button>
            {/* {bioState && (
                <BioModal bioState={bioState}/>
            )} */}

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
        </>
    )
}


export default Profile
