import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Components
import Header from './components/Header'

//Pages
import Home from './pages/Home';
import Kids from './pages/Kids';
import Movies from './pages/Movies';
import Music from './pages/Music'

//CSS
import './css/Header.css'
import './App.css';
import './css/Movies-Kids.css'
import './css/Music.css'
import './css/Home.css'
import './css/HeroSlider.css'
// import './css/MusicPlayer.css' 



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
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=28';
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
  console.log(kidsSeries)



}


//Use Effect 
 useEffect(() => { 
  getMoviesData(url, tvUrl, topPicks, kidsMovieURL, kidsTvURL, kidsSeries);


}, [])




  return (

    <>
    

      <Header Home={Home} Movies={Movies} Kids={Kids} Music={Music} movies={movies} topMovies={topMovies} kidsMovies={kidsMovies} kidsTvSeries={kidsTvSeries} />



    </>
  )
}

export default App