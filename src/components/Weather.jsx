import React, { useEffect, useState } from 'react'

//CSS
import '../css/Weather.css'

function Weather() {

// API 
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=fc676f0a98ebdc2ee6424a83bb7de1f8';

// State 
const [weatherDetails, setWeatherDetails] = useState({});

async function getWeather() {
let fetchUrl = await fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=fc676f0a98ebdc2ee6424a83bb7de1f8&units=metric');
let data = await fetchUrl.json()
console.log(data);
setWeatherDetails(data)
}

//Use Effect 
useEffect(() => { 
getWeather();
  
  
   }, [])

  return (

    <div className="weather-container">
        <div className="weather-one">
            <div className="city">
                <h3>Barcelona</h3>
                <h1 className='temp'>{weatherDetails.main.temp}°C</h1>
            </div>
            <div className="current-weather">
                <h3 className='current'>Sunny</h3>
            </div>
        </div>
        <div className="weather-two">
            <div className="">
                <p>{weatherDetails.main.feels_like}°C</p>
                <p>Feels Like</p>
            </div>
            <div className="">
                <p>{weatherDetails.main.humidity}%</p>
                <p>Humidity</p>
            </div>
            <div className="">
                <p>{weatherDetails.wind.speed} MPH</p>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>

  )
}

export default Weather