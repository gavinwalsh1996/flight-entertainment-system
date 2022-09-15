import React from 'react'
import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider'




function Movies({movies, topMovies, TvShows}) {

    
  
    return (

        <>

           <HeroSlider items={movies} />
           <Slider items={topMovies} />
           
        </>
    );
  }

  export default Movies


