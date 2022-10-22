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

import Pringles1 from '../images/pringles1.jpg'
import Earphones from '../images/earphones.jpeg'
import CokeCan from '../images/cokecan.jpg'


function Home({movies}) {

//State 
const [buttonPopUp, setButtonPopUp] = useState(false);
const [timedPopUp, setTimedPopUp] = useState(false);



useEffect(() => {
  setTimeout(() => {
    setTimedPopUp(true);
  }, 500);
}, []);


// Snacks 


const products = [

  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: CokeCan,
    name: 'Coke',
    type: 'drinks'
  },
  {
    image: Pringles1,
    name: 'Pringles',
    type: 'chips'
  },
  {
    image: Pringles1,
    name: 'Pringles',
    type: 'chips'
  },
  {
    image: Pringles1,
    name: 'Pringles',
    type: 'chips'
  },
  {
    image: Pringles1,
    name: 'Pringles',
    type: 'chips'
  },
  {
    image: Pringles1,
    name: 'Pringles',
    type: 'chips'
  },
   {
     image: Earphones,
     name: 'Earphones',
     type: 'accessories'
   },
   {
     image: Earphones,
     name: 'Earphones',
     type: 'accessories'
   },
   {
     image: Earphones,
     name: 'Earphones',
     type: 'accessories'
   },
   {
     image: Earphones,
     name: 'Earphones',
     type: 'accessories'
   },
   {
     image: Earphones,
     name: 'Earphones',
     type: 'accessories'
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
           <Slideshow movies={movies}/>
        </div>
        
        <div className="main-section-one">
          <Weather />
          <ToDoWidget />
        </div>

        <div className="main-section-two">
            <div className="genre">
              <h3>Food, Drinks & Accessories</h3>
            </div>
            <MiniSlider items={products}/>
            {/* <div className="genre">
              <h3>Accessories</h3>
            </div>
            <MiniSlider items={accessories}/> */}

          <PopUp trigger={timedPopUp} setTrigger={setTimedPopUp}>
          <h3 className='popup-text'>Welcome Aboard!</h3>
          <br></br>
          <p className='popup-text'>Please sit back and relax. We hope you enjoy your flight from Dublin (DUB) to Barcelona (BCN)</p>
        </PopUp>

            
        </div>
        
      
      </div>



    );
  }

  export default Home