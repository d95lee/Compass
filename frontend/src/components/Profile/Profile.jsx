import { useEffect, useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItineraries, selectItineraryByUser, selectLikedItinerary } from '../../store/itinerary';
import { fetchUser, selectUser } from '../../store/user'
import { removeGlobe } from '../Globe/Globe';
import BioModal from './BioModal';
import ProfileItineraryIndex from './ProfileItineraryIndex';


const Profile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const [bioState, setBioState] = useState(null);
    const [indexState, setIndexState] = useState('user')
    const user = useSelector(selectUser(userId));
    const userItineraries = useSelector(selectItineraryByUser(user));
    const likeItineraries = useSelector(selectLikedItinerary(user))
    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])



    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId])




    const filterItineraries = ()=>{
        switch(indexState){
            case 'user':
                return userItineraries;
            case 'likes':
                return likeItineraries;
            default:
                return [];
        }
    }

    removeGlobe()

    return (
        <>

        <div className='profile-background'>
        {bioState && (
                <BioModal
                    bioState={bioState}
                    setBioState={setBioState}
                    userBio = {user?.bio}
                />
            )}

            <div className='user-info-box'>
                <div className='pic-div'>
                    {user?.profileImageUrl && (<img className='user-img' src={user.profileImageUrl}/>)}
                </div>

                <div className='user-info'>
                    <h3>Bio: </h3>
                    <p className='user-bio'>{user?.bio}</p>

                </div>
                <button onClick={() => setBioState(true)} className='profile-edit-button'>Edit</button>
            </div>

            <div className='filter-buttons'>
                <button onClick={()=> setIndexState('user')} className={indexState === 'user' ? 'filter-button active' : 'filter-button'}>Created itineraries</button>
                <button onClick={()=> setIndexState('likes')} className={indexState === 'likes' ? 'filter-button active' : 'filter-button'}> Liked itineraries</button>

            </div>


            {filterItineraries() && <ProfileItineraryIndex itineraries={filterItineraries()} />}
        </div>
        </>
    )
}


export default Profile
