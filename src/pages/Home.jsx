import React, { useState, useEffect } from 'react'

//Components
import Slideshow from '../components/Slideshow'
import Weather from '../components/Weather'
import MiniSlider from '../components/MiniSlider'
import PopUp from '../components/PopUp'
import ToDoWidget from '../components/ToDoWidget'

//CSS
import '../css/Slideshow.css'
import '../css/Weather.css'

import Pringles from '../images/pringles.jpeg'
import Earphones from '../images/earphones.jpeg'


function Home() {

//State 
const [buttonPopUp, setButtonPopUp] = useState(false);
const [timedPopUp, setTimedPopUp] = useState(false);



useEffect(() => {
  setTimeout(() => {
    setTimedPopUp(true);
  }, 500);
}, []);


// Snacks 


const snacks = [
  {
    image: Pringles,
    name: 'Pringles',
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
  {
    image: Pringles,
    name: 'Pringles'
  },
]

const accessories = [
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
  {
    image: Earphones,
    name: 'Earphones'
  },
]


    return (
      
      <div className='container'>

        {/* <Slideshow />
        <Weather />
        <MiniSlider items={snacks}/>
        <MiniSlider items={accessories}/>

        <PopUp trigger={timedPopUp} setTrigger={setTimedPopUp}>
          <h3 className='popup-text'>Welcome Aboard!</h3>
          <br></br>
          <p className='popup-text'>Please sit back and relax. We hope you enjoy your flight from Dublin (DUB) to Barcelona (BCN)</p>
        </PopUp> */}

        <div className="hero-section">
           <Slideshow />
        </div>
        
        <div className="main-section-one">
          <Weather />
          <ToDoWidget />
        </div>

        <div className="main-section-two">
            {/* <Weather /> */}
            <div className="genre">
              <h3>Snacks</h3>
            </div>
            <MiniSlider items={snacks}/>
            <div className="genre">
              <h3>Accessories</h3>
            </div>
            <MiniSlider items={accessories}/>
        </div>
        
      
      </div>



    );
  }

  export default Home