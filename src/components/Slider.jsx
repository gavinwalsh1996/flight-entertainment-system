// import { width } from '@mui/system';
import React, {useState }from 'react';



function Slider ({items}) {


//state 
// const [selectMovie, setSelectMovie] = useState(items.at(10));
   
   
return (

<>


    <h3 className='movie-genre'>Picked For You</h3>
<div className="media-scroller snaps-inline">
    
    {items.map((image, index) => (

                
        // onClick={()=>{setSelectMovie(image)}}

        <div className="media-element">
            <img src={'https://image.tmdb.org/t/p/w500' + image.poster_path} />
            {/*  onClick={()=>{setSelectMovie(image)}} */}
        </div>

   

   ))}
   
   </div>



</>

    );
}


export default Slider;