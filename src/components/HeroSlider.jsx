// import { width } from '@mui/system';
import React, {useState }from 'react';
import Elvis from '../images/elvis.jpeg'
import Slider from './Slider'
import FilterButton from './FilterButton';



function HeroSlider({items}) {


//state 
const [selectMovie, setSelectMovie] = useState(items.at(10));
   
   
return (

<>

    {/* Hero Section */}

        
    <div className="hero">


        <div className="bg-image">
            <img src={'https://image.tmdb.org/t/p/w500' + selectMovie.backdrop_path} className="banner-img" />
        </div>

        <div className="movie-details">
            <h1>{selectMovie.original_title}</h1>
            <p>{selectMovie.overview}</p> 
            <button className='trailer-btn'>Watch Trailer</button>
        </div>
        
    </div>

    {/* <div className="filter">Movies/TV</div> */}



    {/* Grid Section */}

    {/* <div className="movie-grid-container">

        <div className="movie-grid">
   
            {items.map((image, index) => (

            
                <div className='card'>

                    <img src={'https://image.tmdb.org/t/p/w500' + image.poster_path} className='movie-image' onClick={()=>{setSelectMovie(image)}}/>
                
                </div>

           ))}

        </div> 
    </div> */}


    {/* Filter Button */}

    <div className="filter">
        <h3 className='movie-genre'>New Releases</h3>
        <FilterButton />
    </div> 





<div className="media-scroller snaps-inline">
    
    {items.map((image, index) => (

                
        

        <div className="media-element">
            <img src={'https://image.tmdb.org/t/p/w500' + image.poster_path} onClick={()=>{setSelectMovie(image)}} />
        </div>

   

   ))}
   </div> 


   {/* Test */}

   {/* <Slider items={movies} setSelectMovie={setSelectMovie}/>
   <Slider items={topMovies} setSelectMovie={setSelectMovie}/> */}



</>

    );
}


export default HeroSlider;