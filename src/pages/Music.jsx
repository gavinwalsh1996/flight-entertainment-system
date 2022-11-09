import React, { useState } from 'react'

//Components
import SongGrid from '../components/SongGrid';

//Song files
// import DrakeOneDance from '../music/Drake_One_Dance.mp3'
// import AdelleHello from '../music/Adele_Hello.mp3'
// import JuiceWrldLucidDreams from '../music/Lucid_Dreams.mp3'
// import KingsOfLeonPyro from '../music/Pyro.mp3'


function Music({songs, setSongClicked}) {

  // const songFiles = songs.map(song => song.songName)


      return (

        <div className='music-container'>
            <SongGrid songs={songs} setSongClicked={setSongClicked} />
            {/* <MusicPlayer songs={songs} songFiles={songFiles}/> */}
        </div>
      
      );
  }

  export default Music