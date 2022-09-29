import React, { useState, useEffect } from 'react'

//Components
import Slideshow from '../components/Slideshow'
import Weather from '../components/Weather'
import MiniSlider from '../components/MiniSlider'
import PopUp from '../components/PopUp'

//CSS
import '../css/Slideshow.css'
import '../css/Weather.css'


function Home() {

//State 
const [buttonPopUp, setButtonPopUp] = useState(false);
const [timedPopUp, setTimedPopUp] = useState(false);



useEffect(() => {
  setTimeout(() => {
    setTimedPopUp(true);
  }, 500);
}, []);


    return (
      
      <div className='container'>

        <Slideshow />
        {/* <h3 className='greeting-message'>Welcome Aboard! Enjoy your flight to Barcelona (BCN)</h3> */}
         {/* <Weather /> */}
        <MiniSlider />

        <PopUp trigger={timedPopUp} setTrigger={setTimedPopUp}>
          <h3 className='popup-text'>Welcome Aboard!</h3>
          <br></br>
          <p className='popup-text'>Please sit back and relax. We hope you enjoy your flight from Dublin (DUB) to Barcelona (BCN)</p>
        </PopUp>
      
      </div>



    );
  }

  export default Home