import { Select } from '@mui/material';
import React, { useState } from 'react';
import '../css/SongGrid.css'
import Rock from '../images/Rock-img.png'
import Jazz from '../images/jazz.jpg'
import Rap from '../images/randb.jpg'
import Trending from '../images/trending.jpg'



function SongGrid({songs, setSongClicked, songFiles}) {

  // let songFile = songs.map(song => song.songFile)


  function getSong(index) {
    setSongClicked(songFiles[index])
  }

  return (

    <div className="song-main-container">
        <div className="song-container">
            <img src={Rap} onClick={() => getSong(0)} />
            <img src={Rock} onClick={() => getSong(1)} />
        </div>
        <div className="song-container">
            <img src={Trending} onClick={() => getSong(2)} />
            <img src={Jazz} onClick={() => getSong(3)} />
        </div>
    </div>

  )
}

export default SongGrid