import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FlightIcon from '@mui/icons-material/Flight';

// Components 
import Timer from '../components/Timer'



function Header({Home, Movies, Kids, Music, movies, kidsMovies, topMovies, kidsTvSeries}) {

  return (
    
<>

<Router>
    
<div className="header-container">

    
        <div className="header-links">
            <div className="items"><Link to="/">Home</Link></div>
            <div className="items"><li><Link to="/movies">Movies</Link></li></div>
            <div className="items"><li><Link to="/kids">Kids</Link></li></div>
            <div className="items"><li><Link to="/music">Music / Audio</Link></li> </div>
        </div>

        <div className="header-icons">

            <div className="icons">
                {/* <IconButton>
                    <DarkModeIcon fontSize='medium' />
                </IconButton> */}
            </div>
    
            <div className="icons">
                <IconButton>
                     <FlightIcon fontSize='medium' />
                </IconButton>
                <Timer duration={5 * 60 * 30 * 1000}/>
            </div>
         </div>


</div> 

    {/* Mobile */}

    <div className="header-icons-mobile">

        <div className="icons">
        {/* <IconButton>
            <DarkModeIcon fontSize='medium' />
        </IconButton> */}
        </div>
    
        <div className="icons">
        <IconButton>
            <FlightIcon fontSize='medium' />
        </IconButton>
        </div>
    </div> 


    
    {/* Routes */}

<Routes>

    <Route path='/' element={<Home movies={movies}/>} />
    <Route path='/movies' element={<Movies movies={movies} topMovies={topMovies} />}/>
    <Route path='/kids' element={<Kids kidsMovies={kidsMovies} kidsTvSeries={kidsTvSeries}/>} />
    <Route path='/music' element={<React.Suspense fallback='Loading...'>
        <Music />
    </React.Suspense>} />

    {/* elements*/}

    {/* element={<Music Songs={Songs} />}
    element={<Kids kidsMovies={kidsMovies} kidsTv={kidsTv} />}
    element={<Movies movies={movies} TvShows={TvShows} />}
    element={<Home />} */}

</Routes>
</Router>

    </>

  )
}

export default Header