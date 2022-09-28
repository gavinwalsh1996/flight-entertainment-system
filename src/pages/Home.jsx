import React from 'react'

//Components
import Slideshow from '../components/Slideshow'
import Weather from '../components/Weather'

//CSS
import '../css/Slideshow.css'
import '../css/Weather.css'



function Home() {


    return (
      
      <div className='container'>

        <Slideshow />
        <h3 className='greeting-message'>Welcome Aboard! Enjoy your flight to Barcelona (BCN)</h3>
        <Weather />
      
      </div>



    );
  }

  export default Home