import { Select } from '@mui/material';
import React, { useState } from 'react';
import '../css/SongGrid.css'
import Rock from '../images/classic-rock.jpg'
import Jazz from '../images/jazz.jpg'
import Rap from '../images/randb.jpg'
import Trending from '../images/trending.jpg'



function SongGrid({songs}) {


   function getSong() {
    //captureSong = songs.map(song => song.songFile)
    // setSelectSong(captureSong)
    console.log('clicked')
   }

  // const [selectSong, setSelectSong] = useState(songs[1]); // Array of songs index 1 = Drake
  // console.log(selectSong);

  return (

    <div className="song-main-container">
        <div className="song-container">
            <img src={Rap} onClick={getSong} />
            <img src={Rock} onClick={getSong}/>
        </div>
        <div className="song-container">
            <img src={Trending} onClick={getSong} />
            <img src={Jazz} onClick={getSong}/>
        </div>
    </div>

  )
}

export default SongGrid