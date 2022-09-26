import React from 'react'

//Components
import MusicPlayer from '../components/MusicPlayer';
import SongSlider from '../components/SongSlider';

//Song Images 
import Drake from '../images/Drake.jpg'
import Adelle from '../images/adelle.png'
import Elvis from '../images/Elvis_hounddog.jpg'
import JuiceWrld from '../images/Juicewrld.jpg'
import KingsOfLeon from '../images/Pyroalbum.jpg'
import BrittneySpears from '../images/bstoxic.jpg'
import Weeknd from '../images/starboyimg.jpg'
import LilMosey from '../images/noticed.jpg'
import ChainSmokers from '../images/chainsmokers.jpg'
import RedHotChilliPeppers from '../images/rhcp.jpg'
import TaylorSwift from '../images/TaylorSwift.jpg'

//Song files
import DrakeOneDance from '../music/Drake_One_Dance.mp3'
import AdelleHello from '../music/Adele_Hello.mp3'
import JuiceWrldLucidDreams from '../music/Lucid_Dreams.mp3'
import KingsOfLeonPyro from '../music/Pyro.mp3'
import BrittneySpearsToxic from '../music/Toxic.mp3'
import WeekndStarboy from '../music/Starboy.mp3'
import LilMoseyNoticed from '../music/Noticed.mp3'
import ChainSmokersSomething from '../music/chainsmokers.mp3'
import RhcpUnderTheBridge from '../music/Rhcp.mp3'
import TaylorSwiftLover from '../music/Taylor_Swift_Lover.mp3'
import ElvisReturnToSender from '../music/Elvis_Presley.mp3'


//Song array 

const songs = [
  
  {
    artist: 'Drake',
    songName: 'One Dance',
    poster: Drake,
    songFile: DrakeOneDance
  },
  {
    artist: 'Adelle',
    songName: 'Hello',
    poster: Adelle,
    songFile: AdelleHello
  },
  {
    artist: 'Juice Wrld',
    songName: 'Lucid Dreams',
    poster: JuiceWrld,
    songFile: JuiceWrldLucidDreams
  },
  {
    artist: 'Kings of Leon',
    songName: 'Pyro',
    poster: KingsOfLeon,
    songFile: KingsOfLeonPyro
  },
  {
    artist: 'Brittney Spears',
    songName: 'Toxic',
    poster: BrittneySpears,
    songFile: BrittneySpearsToxic
  },
  {
    artist: 'Weeknd',
    songName: 'Starboy',
    poster: Weeknd,
    songFile: WeekndStarboy
  },
  {
    artist: 'Lil Mosey',
    songName: 'Noticed',
    poster: LilMosey,
    songFile: LilMoseyNoticed
  },
  {
    artist: 'Chainsmokers',
    songName: 'Just like this',
    poster: ChainSmokers,
    songFile: ChainSmokersSomething
  },
  {
    artist: 'RHCP',
    songName: 'Under The Bridge',
    poster: RedHotChilliPeppers,
    songFile: RhcpUnderTheBridge
  },
  {
    artist: 'Taylor Swift',
    songName: 'Lover',
    poster: TaylorSwift,
    songFile: TaylorSwiftLover
  },
  {
    artist: 'Elvis',
    songName: 'Return To Sender',
    poster: Elvis,
    songFile: ElvisReturnToSender
  }

]


function Music() {

    return (

      <div className='music-container'>

        <div className="title">
            <h3>Today's Picks</h3>
        </div>
          <SongSlider songs={songs}/>
          
        <div className="title">
            <h3>Ambience</h3>
        </div>
          <SongSlider songs={songs}/>
          <MusicPlayer songs={songs}/>
      </div>
     
    );
  }

  export default Music