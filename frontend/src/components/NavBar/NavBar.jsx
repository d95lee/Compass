import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
// import { logout } from '../../store/session';

function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  };

  const getLinks = () => {
    // if (loggedIn) {
    //   return (
    //     <div className="links-nav">
          {/* <Link to={'/tweets'}>All Tweets</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/tweets/new'}>Write a Tweet</Link> */}
          {/* <button onClick={logoutUser}>Logout</button> */}
    //     </div>
    //   );
    // } else {
      return (
        <>
          <nav>
            <div className="links-auth">
              <div className='signup-button'><span>Signup</span></div>
              <div className='login-button'><span>Login</span></div>
            </div>          
          </nav>
        </>

      );
    // }
  };

  return (
    <>
      { getLinks() }
    </>
  );
}

export default NavBar;
