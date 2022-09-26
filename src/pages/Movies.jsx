import React, { useState } from 'react'
import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider'



function Movies({movies, topMovies, TvShows}) {

    

    // STATE
    const [selectMovie, setSelectMovie] = useState(movies[3]);

    // YOUTUBE TRAILER TEST

    // const API_URL = 'https://api.themoviedb.org/3'
    // const API_KEY = '1f7c961ae4f02a23e0968d449c15bc98'
    // const [selectedMovie, setSelectedMovie] = useState({});


    

    // async function getMovieVideos(id) {
    //     let data = await fetch(`${API_URL}/${id}/${API_KEY}`)
    //     return data
    //   }
      
      
    //   // &append_to_response=videos
      
    //   function MovieReturned(id) {
    //   const video = getMovieVideos(id)
    //   console.log(video)
    //   }
  


    return (

        <>

            <HeroSlider items={movies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
            <Slider items={movies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
            <Slider items={topMovies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
           
        </>
    );
  }

  export default Movies


