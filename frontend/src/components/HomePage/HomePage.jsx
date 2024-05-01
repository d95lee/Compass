// import newGlobe from '../Globe/Globe.js';
import './HomePage.css';
import { useEffect } from 'react';
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import logo from '../../assets/compass.png';
import { fetchItineraries , selectItineraryByUser } from '../../store/itinerary.js';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUserByUsername } from '../../store/user.js';
import { Link } from 'react-router-dom';


const HomePage = ()=> {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   newGlobe()
  // }, [])

  useEffect(() => {
    dispatch(fetchItineraries())
    dispatch(fetchUsers())
  }, [dispatch])

    const caroline = useSelector(selectUserByUsername('caroline'))
    const jerry = useSelector(selectUserByUsername('jerry'))
    const jhon = useSelector(selectUserByUsername('jhon'))
    const david = useSelector(selectUserByUsername('david'))
    console.log(jerry)


    const carolineItinerary = useSelector(selectItineraryByUser(caroline))
    const davidItinerary = useSelector(selectItineraryByUser(david))
    // console.log(davidItinerary);
    const jerryItinerary = useSelector(selectItineraryByUser(jerry))
    const jhonItinerary = useSelector(selectItineraryByUser(jhon))

    // const carolineId = () => {
    //   const carolineUser = users.find(user => user.username === "caroline");
    //   return carolineUser ? carolineUser._id : null;
    // }

  return (
      <>
        <div className='homepage-container'>
            <div className='homepage-left-right-container'>
                <div className='homepage-right'>
                </div>

                <div className='homepage-left'>
                    <div className='homepage-right-container'>
                        <div className='homepage-right-title'>
                            <h1 className='homepage-right-title-welcome' >Welcome to C<img className='homepage-logo' src={logo}/>mpass.</h1>
                            <h2 className='homepage-right-title-plan'>Plan your next trip here.</h2>
                            <Link to={'/itinerary'}><button className='homepage-explore-button'>Explore</button></Link>
                        </div>

                        <div className='homepage-socials'>
                <Link to={`profile/${caroline?._id}`}><div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p><b>Caroline Zhang</b></p>
                          <p><b>{carolineItinerary[0]?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p><b>{carolineItinerary[0]?.description}</b></p>
                          <p><b>{carolineItinerary[0]?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                          <a href="https://www.linkedin.com/in/carolineczhang/"><img className='linkedin-logo' src={linkedin} alt="" /></a>
                          <a href="https://github.com/caroline495"><img className='github-logo' src={github} alt="" /></a>
                        </div>
                      </div></Link>

                <Link to={`profile/${david?._id}`}><div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p><b>David Lee</b></p>
                          <p><b>{davidItinerary[0]?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p><b>{davidItinerary[0]?.description}</b></p>
                          <p><b>{davidItinerary[0]?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                        <a href="https://www.linkedin.com/in/david-lee-49959a20a/"><img className='linkedin-logo' src={linkedin} alt="" /></a>
                        <a href="https://github.com/d95lee"><img className='github-logo' src={github} alt="" /></a>
                        </div>
                      </div></Link>

                <Link to={`profile/${jerry?._id}`}><div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p><b>Jerry Wang</b></p>
                          <p><b>{jerryItinerary[0]?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p><b>{jerryItinerary[0]?.description}</b></p>
                          <p><b>{jerryItinerary[0]?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                        <a href="https://www.linkedin.com/in/zwang01/"><img className='linkedin-logo' src={linkedin} alt="" /></a>
                        <a href="https://github.com/ziyanwang1105"><img className='github-logo' src={github} alt="" /></a>
                        </div>
                      </div></Link>

                <Link to={`profile/${jhon?._id}`}><div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p><b>Jhon Salazar</b></p>
                          <p><b>{jhonItinerary[0]?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p><b>{jhonItinerary[0]?.description}</b></p>
                          <p><b>{jhonItinerary[0]?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                        <a href="https://www.linkedin.com/in/jhon-salazar-655b24208/"><img className='linkedin-logo' src={linkedin} alt="" /></a>
                        <a href="https://github.com/JhonJSC182"><img className='github-logo' src={github} alt="" /></a>
                        </div>
                      </div></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <footer>
          Copyright &copy; 2024 Compass
        </footer> */}
      </>
    );
  }

  export default HomePage;
