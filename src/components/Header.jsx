import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Header({Home, Movies, Kids, Music, movies, kidsMovies, topMovies, kidsTvSeries}) {

  return (
    
<>

<Router>
    
<div className="header-container">

    
        <div className="header-links">
            <div className="items"><Link to="/">Home</Link></div>
            <div className="items"><li><Link to="/movies">Movies</Link></li></div>
            <div className="items"><li><Link to="/kids">Kids</Link></li></div>
            <div className="items"><li><Link to="/music">Music</Link></li> </div>
        </div>

        <div className="header-icons">
            <div className="icons">
                <span>Volume Down</span>
                <span>Volume Mute</span>
            </div>

            <div className="icons">
                <span>Dark Mode</span> 
            {/* <span><FaIcons.FaCircleNotch /></span> */}
            </div>
    
            <div className="icons">
                <span>Brightness</span>
            </div>
         </div>


</div> 

    {/* Mobile */}

    <div className="header-icons-mobile">
        <div className="icons">
            <span>Volume Down</span>
             {/* <span><FaIcons.FaVolumeMute /></span> */}
        </div>

        <div className="icons">
            <span>Dark Mode</span> 
            {/* <span><FaIcons.FaCircleNotch /></span> */}
        </div>
    
        <div className="icons">
            <span>Brightness</span>
        </div>
    </div> 


    
    {/* Routes */}

<Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies movies={movies} topMovies={topMovies}/>}/>
    <Route path='/kids' element={<Kids kidsMovies={kidsMovies} kidsTvSeries={kidsTvSeries}/>} />
    <Route path='/music' element={<Music/>} />

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