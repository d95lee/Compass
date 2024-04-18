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
          <div>
            <p>Hello {currentUser.username}</p>
            <button onClick={logoutUser}>
              Logout
            </button>
          </div>
        </>
      );
    } else {

      return (
        <>
          <nav>
            <div className='navbar-left'>
              <img className='logo' src={logo}/>
              <div className='create-button' onClick={() => setModalState('create')}><span>Create</span></div>
            </div>

            {/* <div>
                <Link to={'itinerary'}>Itinerary</Link> <br />
                <Link to={`itinerary/${itineraryId}`}>Itinerary Show</Link> <br />
                <Link to={`itinerary/${itineraryId}/form`}>Itinerary Form</Link> <br />
                <Link to={'itinerary/form'}>Profile Show</Link> <br />
            </div>  */}

            <div className="links-auth">
              <div className='signup-button' onClick={() => setModalState('signup')}><span>Signup</span></div>
              <div className='login-button' onClick={() => setModalState('login')}><span>Login</span></div>
            </div>
         
          </nav>
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
          <img className='logo' src={logo}/>
          <div className='create-button' onClick={() => setModalState('create')}><span>Create</span></div>
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
