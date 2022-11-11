// import { Select } from '@mui/material';
import React from 'react';
import '../css/SongGrid.css'
import Rock from '../images/Rock-img.png'
import Jazz from '../images/jazz.jpg'
import Rap from '../images/randb.jpg'
import Trending from '../images/trending.jpg'



function SongGrid({songs, setSongClicked}) {

  let songFiles = songs.map(song => song.songFile)


  function getSong(index) {
    setSongClicked(songFiles[index])
  }

  return (

    <div className="song-main-container">
        <div className="song-container">

          <div className="songs">
            <img src={Rap} onClick={() => getSong(0)} alt='' />
            <p className='song-name'>Drake, Weeknd, Juice Wrld</p>
          </div>

          <div className="songs">
            <img src={Rock} onClick={() => getSong(1)} alt='' />
            <p className='song-name'>Kings of Leon, The Killers, RHCP</p>
          </div>
        </div>

        <div className="song-container">

          <div className="songs">
            <img src={Trending} onClick={() => getSong(2)} alt='' />
            <p className='song-name'>Oliver Tree, Taylor Swift, Ye</p>
          </div>

          <div className="songs">
            <img src={Jazz} onClick={() => getSong(3)} alt='' />
            <p className='song-name'>Big Mama Thornton, Ray Charles, B.B King</p>
          </div>
          
        </div>
    </div>

  )
}

export default SongGrid