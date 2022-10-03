import React, { useState, useEffect } from 'react'

//Images Posters
import BackDrop from '../images/sandwich.jpg'
import FoodBanner from '../images/foodbanner.jpg'
import Batman from '../images/batman.jpg'
import Pulpfiction from '../images/pulp-fiction.jpg'

const posters = [Pulpfiction, Batman, BackDrop, FoodBanner, FoodBanner];
const delay = 20000;




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