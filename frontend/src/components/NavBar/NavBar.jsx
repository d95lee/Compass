import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import logo from '../../../../assets/compass.png';

function NavBar () {
  const currentUser = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  };

  const getLinks = () => {
    if (currentUser) {
      return (
        <>
          <p>Hello {currentUser.username}</p>
          <button onClick={() => dispatch(logoutUser())}>
            Logout
          </button>
        </>
      );
    } else {
        <>
        
        </>
    }
      return (
        <>
          <nav>
            <div>
              <img className='logo' src={logo}/>
            </div>

            <div className="links-auth">
              <div className='signup-button'><span>Signup</span></div>
              <div className='login-button'><span>Login</span></div>
            </div>          
          </nav>
        </>

      );
  };

  return (
    <>
      { getLinks() }
    </>
  );
}

export default NavBar;
