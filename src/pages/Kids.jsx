import React from 'react'
import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider'


function Kids({kidsMovies, kidsTv, kidsTvSeries}) {
    
return (
      
   <>
    
    <HeroSlider items={kidsMovies} />
    <Slider items={kidsTvSeries} />

   </>
      
    );
  }

  export default Kids