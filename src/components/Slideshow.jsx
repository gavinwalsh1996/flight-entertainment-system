import React, { useState, useEffect } from 'react'

//Images 
import Elvis from '../images/elvis.jpeg'
import Adelle from '../images/adelle.png'
import JuiceWrld from '../images/Juicewrld.jpg'

const posters = [Elvis, Adelle, JuiceWrld];
const delay = 8000;




function Slideshow() {

//State 
const [index, setIndex] = useState(0)

//UseEffect
useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === posters.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);


  return (

    <div className="slideshow">
      <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {posters.map((poster, index) => (
          <img src={poster} className="slide" key={index} style={{ poster }}/>
          
        ))}
      </div>

      {/* <div className="slideshowDots">
        {posters.map((_, index) => (
          <div key={index} className="slideshowDot"></div>
        ))}
      </div> */}


      
    </div>
    
  );
}

export default Slideshow