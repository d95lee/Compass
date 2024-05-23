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
    const [image, setImage] = useState(null);
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

    const updateFile = e => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            // Further processing for file upload can be done here
        }
    };

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

               
                <button className='modal-session-text'>Edit Profile Image:
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={updateFile} />
                </button>
                

                <div className='user-info'>
                    <div className='user-bio-username'>@{user?.username}</div>
                    
                    <div className='user-bio'>
                        <span className='user-bio-title'>B I O <hr className='user-bio-line'></hr></span>
                        
                        {user?.bio}
                        <svg className="user-bio-edit-button" fill="#847e7e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.936 494.936" onClick={() => setBioState(true)}>
                            <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path>
                            <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path>
                        </svg>
                    </div>
                </div>
                {/* <button onClick={() => setBioState(true)} className='profile-edit-button'>Edit</button> */}

            </div>

            <div className='filter-buttons'>
                <button onClick={()=> setIndexState('user')} className={indexState === 'user' ? 'filter-button active' : 'filter-button'}>Created Itineraries</button>
                <button onClick={()=> setIndexState('likes')} className={indexState === 'likes' ? 'filter-button active' : 'filter-button'}> Liked Itineraries</button>

            </div>
            <div className='profile-line'></div>

            {filterItineraries() && <ProfileItineraryIndex itineraries={filterItineraries()} />}
        </div>
        </>
    )
}


export default Profile
