import React, { useState } from 'react'

//Components
// import MusicPlayer from '../components/MusicPlayer';
import SongGrid from '../components/SongGrid';

//Song Images 
//  import Drake from '../images/Drake.jpg'
//  import Adelle from '../images/adelle.png'
//  import JuiceWrld from '../images/Juicewrld.jpg'
//  import KingsOfLeon from '../images/Pyroalbum.jpg'


//Song files
import DrakeOneDance from '../music/Drake_One_Dance.mp3'
import AdelleHello from '../music/Adele_Hello.mp3'
import JuiceWrldLucidDreams from '../music/Lucid_Dreams.mp3'
import KingsOfLeonPyro from '../music/Pyro.mp3'


//Song array 

const songs = [
  
  {
    artist: 'Drake',
    songName: 'One Dance',
    // poster: Drake,
    songFile: DrakeOneDance
  },
  {
    artist: 'Adelle',
    songName: 'Hello',
    // poster: Adelle,
    songFile: AdelleHello
  },
  {
     artist: 'Kings of Leon',
     songName: 'Pyro',
    //  poster: KingsOfLeon,
     songFile: KingsOfLeonPyro
   },
   {
     artist: 'Juice Wrld',
     songName: 'Lucid Dreams',
    //  poster: JuiceWrld,
     songFile: JuiceWrldLucidDreams
   }
  ]


function Music() {

  const [setSongClicked] = useState();
  //songClicked

  const songFiles = songs.map(song => song.songFile)


      return (

        <div className='music-container'>
            <SongGrid songs={songs} setSongClicked={setSongClicked} songFiles={songFiles} />
            {/* <MusicPlayer songs={songs} songFiles={songFiles} songClicked={songClicked}/> */}
        </div>
      
      );
  }

  export default Music