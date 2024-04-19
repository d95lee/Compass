import newGlobe from '../Globe/Globe.js';
import './HomePage.css';
import React, { useEffect } from 'react';


const HomePage = ()=> {
    useEffect(() => {
      newGlobe()
    }, [])
  
  return (
      <>
        <p>Compass</p>
        <footer>
          Copyright &copy; 2024 Compass
        </footer>
      </>
    );
  }
  
  export default HomePage;