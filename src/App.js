import React, { useState, useEffect } from 'react';
import { songContext } from './pages/Context';

//Components
import MusicPlayer from './components/MusicPlayer';
import Header from './components/Header'

//Song files
// import JuiceWrldLucidDreams from './music/Lucid_Dreams.mp3'
// import Blues from './music/Blues.mp3'
// import Rock from './music/rock.mp3'
// import Trending from './music/Oliver-Tree.mp3'
import Pyro from './music/Pyro.mp3'
import Fade from './music/Fade.mp3'
import Rhcp from './music/Rhcp.mp3'
import Toxic from './music/Toxic.mp3'

//CSS
import './css/Header.css'
import './App.css';
import './css/Movies-Kids.css'
import './css/Music.css'
import './css/Home.css'
import './css/HeroSlider.css'
import './css/FilterButton.css'
import './css/MusicPlayer.css'

//Pages
import Home from './pages/Home';
import Kids from './pages/Kids';
import Movies from './pages/Movies';

// Check
const lazyMusic = React.lazy(() => import('./pages/Music'))

// Movie API keys
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=1f7c961ae4f02a23e0968d449c15bc98'


//Songs array 

const songs = [
  
  {
    artist: 'Blues Mix',
    songName: 'Blues Mix',
    poster: 'Blues',
    songFile: Pyro
  },
  {
    artist: 'Rock Mix',
    songName: 'Rock Mix',
    poster: 'Rock',
    songFile: Fade
  },
  {
     artist: 'Top-Trending Mix',
     songName: 'Top-Trending Mix',
     poster: 'Top Trending',
     songFile: Rhcp
   },
   {
     artist: 'Hip-Hop Mix',
     songName: 'Hip-Hop Mix',
     poster: 'Hip-Hop Mix',
     songFile: Toxic
   }
  ]



function App() {

// * MOVIE API *


//State 
const [movies, setMovies] = useState([])
const [topMovies, setTopMovies] = useState([])
const [kidsMovies, setKidsMovies] = useState([])
const [kidsTv, setKidsTv] = useState([])
const [TvShows, setTvShows] = useState([])
const [kidsTvSeries, setKidsTvSeries] = useState([])




//API URL 
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=28/';
// let test = 'http://api.themoviedb.org/3/movie/131634/videos?api_key=1f7c961ae4f02a23e0968d449c15bc98'
const tvUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=1f7c961ae4f02a23e0968d449c15bc98&language=en-US&page=1';
const kidsMovieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&certification_country=US&certification.lte=G&with_genres=16&include_adult=false&sort_by=popularity.desc';
const kidsTvURL = 'https://api.themoviedb.org/3/tv/popular?api_key=1f7c961ae4f02a23e0968d449c15bc98&language=en-US&page=1&with_genres=16&include_adult=false&sort_by=popularity.desc';
const topPicks = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1f7c961ae4f02a23e0968d449c15bc98&${process.env.API_KEY}&language=en-US&page=1';
// const kidsAnimatedMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=16';
const kidsSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=10762'

//Async function to fetch API
async function getMoviesData (url, tvUrl, topPicks, kidsMovieURL, kidsTvUrl, kidsSeries) {

  await fetch(url).then(res => res.json()).then(data => setMovies(data.results))
  await fetch(topPicks).then(res => res.json()).then(data => setTopMovies(data.results))
  await fetch(tvUrl).then(res => res.json()).then(data => setTvShows(data.results))
  await fetch(kidsMovieURL).then(res => res.json()).then(data => setKidsMovies(data.results))
  await fetch(kidsTvUrl).then(res => res.json()).then(data => setKidsTv(data.results))
  await fetch(kidsSeries).then(res => res.json()).then(data => setKidsTvSeries(data.results))
}



//Use Effect 
 useEffect(() => { 
  getMoviesData(url, tvUrl, topPicks, kidsMovieURL, kidsTvURL, kidsSeries);

}, [])

const [songClicked, setSongClicked] = useState({})


  return (

  <songContext.Provider value={{songClicked, setSongClicked}}>

    <div className='app'>

      {/* <div className="header"> */}
        <Header Home={Home} Movies={Movies} Kids={Kids} Music={lazyMusic} movies={movies} topMovies={topMovies} kidsMovies={kidsMovies} kidsTvSeries={kidsTvSeries} songs={songs} setSongClicked={setSongClicked} />
      {/* </div> */}

      <div className="music-player">
        {/* <MusicPlayer /> */}
        <MusicPlayer songs={songs} songClicked={songClicked}/>
      </div>
  

    </div>
    </songContext.Provider>
  )
}

export default App