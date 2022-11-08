// import { width } from '@mui/system';
import React from 'react';
// import FilterButton from './FilterButton';
// import Youtube from 'react-youtube'

//Test
// import YouTube from 'react-youtube';



function HeroSlider({selectMovie}) {
      
return (

<>

    {/* Hero Section */}

        
    <div className="hero">
        {/* <Youtube /> */}

        <div className="bg-image">
            <img src={'https://image.tmdb.org/t/p/w500' + selectMovie.backdrop_path} className="banner-img" alt='' />
        </div>
        <div className="movie-details">
            <h1>{selectMovie.original_title}</h1>
            <p>{selectMovie.overview}</p> 
            <button className='trailer-btn'>Watch Trailer</button>
        </div>

    </div>




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

    {/* <div className="filter">
        <h3 className='movie-genre'>New Releases</h3>
        <FilterButton />
    </div>  */}

    
    {/* Test */}

{/* 



<div className="media-scroller snaps-inline">
    
    {items.map((image, index) => (

                
        

        <div className="media-element">
            <img src={'https://image.tmdb.org/t/p/w500' + image.poster_path} onClick={()=>{setSelectMovie(image)}} />
        </div>

   

   ))}
   </div>  */}

   {/* <Slider items={items}/>
   <Slider items={items}/> */}





</>

    );
}


export default HeroSlider;