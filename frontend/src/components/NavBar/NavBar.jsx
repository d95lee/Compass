import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import logo from '../../assets/compass.png';
import add_icon from '../../assets/plus.png';
import { useState } from 'react';
import SessionModal from '../Modal/SessionModal';
import CreateItineraryModal from '../Modal/CreateItineraryModal';

function NavBar () {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => !!state.session.user);
  const currentUsername = useSelector(state => state.session.user?.username)
  const currentUserId= useSelector(state => state.session.user?._id)
  const loggedInUser = useSelector(state => state.session.user)
  const [modalState, setModalState] = useState(null);

  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  };




  // console.log(modalState, 'modal state');
  const getLinks = () => {
    if (currentUser) {
      return (
        <>
          <div className='username-text-container'>
            <span className='username-text'><Link to={`profile/${currentUserId}`}><p className='navbar-username-text'>{currentUsername}</p></Link></span>
            <button className='username-text-button' onClick={logoutUser}>
              Logout
            </button>
          </div>
          {/* <div className='navbar-profile-right-container'> */}
            <span className='navbar-profile-right'><Link to={`profile/${currentUserId}`}>{loggedInUser?.profileImageUrl && (<img className='navbar-profile-pic' src={loggedInUser.profileImageUrl}/>)}</Link></span>
          {/* </div> */}
        </>
      );
    } else {

      return (
        <>
              <div className='signup-button' onClick={() => setModalState('signup')}><span>Signup</span></div>
              <div className='login-button' onClick={() => setModalState('login')}><span>Login</span></div>
        </>
      )
    }
  };

  return (
    <>

      <nav>
        <div className='navbar-left'>
            <Link to={'/'}><img className='logo' src={logo}/></Link>
            <Link to={'/itinerary'}><div className='navbar-itineraries-text'>Itineraries</div></Link>
        </div>
        <div className='navbar-mid'>
       
        {currentUser ?
    
          // (<><svg className="event-form-add-button" fill="#9c9696" height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402" onClick={()=>setModalState('create')}>
          //   <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
          //   </svg></>) ?
          //               (<><svg className="event-form-add-button" fill="#9c9696" height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402" onClick={()=>setModalState('login')}>
          //               <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
          //               </svg></>)
            (<img src={add_icon} className='navbar-add-icon' onClick={() => setModalState('create')}/>) :
            (<img src={add_icon} className='navbar-add-icon' onClick={() => setModalState('login')}/>)
          }
          {currentUser ?
            (<div className='create-button' onClick={() => setModalState('create')}><span>Create</span></div>) :
            (<div className='create-button' onClick={() => setModalState('login')}><span>Create</span></div>)
          }
        </div>

        {/* <div className="links-auth"> */}
        <div className={currentUser ? 'links-auth-currentuser' : 'links-auth'}>
            {getLinks()}
        </div>

      </nav>

      {modalState && (
        <>
          <SessionModal modalState={modalState} setModalState={setModalState} />
          <CreateItineraryModal modalState={modalState} setModalState={setModalState}/>
        </>
      )}
    </>
  );
}

export default NavBar;
