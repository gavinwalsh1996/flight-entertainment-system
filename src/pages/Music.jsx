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

//Ambience Files 

// Ambience Audio
import CalmStudy from '../music/ambience/Calm Study.mp3'
import CalmOcean from '../music/ambience/Calming Ocean.mp3'
import CoffeeShop from '../music/ambience/Coffee Shop.mp3'
import ElevatorMusic from '../music/ambience/Elevator.mp3'
import FallingRain from '../music/ambience/Falling Rain.mp3'
import JazzMusic from '../music/ambience/Jazz.mp3'
// import NoisyNeighbours from '../music/Noisy-neighbour.mp3'
import RelaxingPiano from '../music/ambience/Relaxing Piano.mp3'
import Seaside from '../music/ambience/Sounds of the seaside.mp3'
import Swamp from '../music/ambience/Swamp.mp3'
import Space from '../music/ambience/Vacuum Of Space.mp3'
import WhiteNoise from '../music/ambience/White Noise.mp3'

// Ambience Image
import CalmStudyImg from '../images/ambience/study.jpg'
import CalmOceanImg from '../images/ambience/ocean.jpg'
import CoffeeShopImg from '../images/ambience/coffeeShop.jpg'
import ElevatorMusicImg from '../images/ambience/Elevator.jpg'
import FallingRainImg from '../images/ambience/rain.jpg'
import JazzMusicImg from '../images/ambience/jazz.jpg'
// import NoisyNeighboursImg from '../images/ambience/neighbourhood.jpg'
import RelaxingPianoImg from '../images/ambience/Piano.jpg'
import SeasideImg from '../images/ambience/seaside.jpg'
import SwampImg from '../images/ambience/swamp.jpg'
import SpaceImg from '../images/ambience/space.jpg'
import WhiteNoiseImg from '../images/ambience/whiteNoise.jpeg'


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

//Ambience Files

const ambience = [
    {
        artist: 'Calm Study',
        songName: 'Ambience',
        poster: CalmStudyImg,
        aambienceFile: CalmStudy
    },
    {
        artist: 'Calm Ocean',
        songName: 'Ambience',
        poster: CalmOceanImg,
        aambienceFile: CalmOcean
    },
    {
        artist: 'Coffee Shop',
        songName: 'Ambience',
        poster: CoffeeShopImg,
        aambienceFile: CoffeeShop
    },
    {
        artist: 'Elevator Music',
        songName: 'Ambience',
        poster: ElevatorMusicImg,
        aambienceFile: ElevatorMusic
    },
    {
        artist: 'Falling Rain',
        songName: 'Ambience',
        poster: FallingRainImg,
        aambienceFile: FallingRain
    },
    {
        artist: 'Jazz',
        songName: 'Ambience',
        poster: JazzMusicImg,
        aambienceFile: JazzMusic
    },
    // {
    //     artist: 'Noisy Neighbours',
    //     songName: 'Ambience',
    //     poster: NoisyNeighboursImg,
    //     aambienceFile: NoisyNeighbours
    // },
    {
        artist: 'Relaxing Piano',
        songName: 'Ambience',
        poster: RelaxingPianoImg,
        aambienceFile: RelaxingPiano
    },
    {
        artist: 'Seaside',
        songName: 'Ambience',
        poster: SeasideImg,
        aambienceFile: Seaside
    },
    {
        artist: 'Swamp',
        songName: 'Ambience',
        poster: SwampImg,
        aambienceFile: Swamp
    },
    {
        artist: 'Space',
        songName: 'Ambience',
        poster: SpaceImg,
        aambienceFile: Space
    },
    {
        artist: 'White Noise',
        songName: 'Ambience',
        poster: WhiteNoiseImg,
        aambienceFile: WhiteNoise
    },
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
          <SongSlider songs={ambience}/>
          <MusicPlayer songs={songs}/>
      </div>
     
    );
  }

  export default Music