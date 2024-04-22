import newGlobe from '../Globe/Globe.js';
import './HomePage.css';
import React, { useEffect } from 'react';
import linkedin from '../../../../assets/linkedin.png'
import github from '../../../../assets/github.png'
import logo from '../../../../assets/compass.png';
import { fetchItineraries, selectItinerary, selectItineraryByUser } from '../../store/itinerary.js';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUserByUsername } from '../../store/user.js';


const HomePage = ()=> {
  const dispatch = useDispatch()

  useEffect(() => {
    newGlobe()
  }, [])

  useEffect(() => {
    dispatch(fetchItineraries())
    dispatch(fetchUsers())
  }, [])

    const caroline = useSelector(selectUserByUsername('caroline'))
    const jerry = useSelector(selectUserByUsername('jerry'))
    const jhon = useSelector(selectUserByUsername('jhon'))
    const david = useSelector(selectUserByUsername('david'))


    const carolineItinerary = useSelector(selectItineraryByUser(caroline))
    const davidItinerary = useSelector(selectItineraryByUser(david))
    const jerryItinerary = useSelector(selectItineraryByUser(jerry))
    const jhonItinerary = useSelector(selectItineraryByUser(jhon))

  return (
      <>
        <div className='homepage-container'>
            <div className='homepage-left-right-container'>
                <div className='homepage-right'>
                    <div className='homepage-right-container'>
                        <div className='homepage-right-title'>
                            <h1 className='homepage-right-title-welcome' >Welcome to C<img className='homepage-logo' src={logo}/>mpass</h1>
                            <h2 className='homepage-right-title-plan'>Plan your next trip here</h2>
                        </div>
                    </div>


                    <div className='homepage-socials'>
                      <div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p>Name: <b>Caroline Zhang</b></p>
                          <p>Itinerary: <b>{carolineItinerary?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p>Description: <b>{carolineItinerary?.description}</b></p>
                          <p>Country: <b>{carolineItinerary?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                          <img className='linkedin-logo' src={linkedin} alt="" />
                          <img className='github-logo' src={github} alt="" />
                        </div>
                      </div>

                      <div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p>Name: <b>David Lee</b></p>
                          <p>Itinerary: <b>{davidItinerary?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p>Description: <b>{davidItinerary?.description}</b></p>
                          <p>Country: <b>{davidItinerary?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                          <img className='linkedin-logo' src={linkedin} alt="" />
                          <img className='github-logo' src={github} alt="" />
                        </div>
                      </div>

                      <div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p>Name: <b>Jerry Wang</b></p>
                          <p>Itinerary: <b>{jerryItinerary?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p>Description: <b>{jerryItinerary?.description}</b></p>
                          <p>Country: <b>{jerryItinerary?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                          <img className='linkedin-logo' src={linkedin} alt="" />
                          <img className='github-logo' src={github} alt="" />
                        </div>
                      </div>

                      <div className='homepage-socials-box'>
                        <div className='homepage-socials-box-left'>
                          <p>Name: <b>Jhon Salazar</b></p>
                          <p>Itinerary: <b>{jhonItinerary?.title}</b></p>
                        </div>
                        <div className='homepage-socials-box-mid'>
                          <p>Description: <b>{jhonItinerary?.description}</b></p>
                          <p>Country: <b>{jhonItinerary?.country}</b></p>
                        </div>
                        <div className='homepage-socials-box-right'>
                          <img className='linkedin-logo' src={linkedin} alt="" />
                          <img className='github-logo' src={github} alt="" />
                        </div>
                      </div>
                    </div>
                </div>

                <div className='homepage-left'>

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
