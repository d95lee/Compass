import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import logo from '../../../../assets/compass.png';
import { useState } from 'react';
import SessionModal from '../Modal/SessionModal';
import CreateItineraryModal from '../Modal/CreateItineraryModal';

function NavBar () {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => !!state.session.user);
  const currentUsername = useSelector(state => state.session.user?.username)
  const currentUserId= useSelector(state => state.session.user?._id)
  const [modalState, setModalState] = useState(null);

  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  };




  console.log(modalState, 'modal state');
  const getLinks = () => {
    if (currentUser) {
      return (
        <>
          <div className='username-text-container'>
            <span className='username-text'><Link to={`profile/${currentUserId}`}><p className='navbar-username-text'>Hello {currentUsername}</p></Link></span>
            <button className='username-text-button' onClick={logoutUser}>
              Logout
            </button>
          </div>
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
          {currentUser ?
            (<div className='create-button' onClick={() => setModalState('create')}><span>Create</span></div>) :
            (<div className='create-button' onClick={() => setModalState('login')}><span>Create</span></div>)
          }

          <Link to={'/itinerary'}><div className='navbar-itineraries-text'>&nbsp;&nbsp;&nbsp;&nbsp;Itineraries</div></Link>
        </div>

        <div className="links-auth">
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
