import React from 'react'

import Image from '../images/Juicewrld.jpg'

//CSS
import '../css/MiniSlider.css'

function MiniSlider() {


  return (

    <div className="media-scroller snaps-inline">

        <div className="media-element">
            <img src={Image} />
        </div>
        <div className="media-element">
            <img src={Image} />
        </div>
        <div className="media-element">
            <img src={Image} />
        </div>
        <div className="media-element">
            <img src={Image} />
        </div>
        <div className="media-element">
            <img src={Image} />
        </div>
        <div className="media-element">
            <img src={Image} />
        </div>
   
   </div>

  )
}

export default MiniSlider