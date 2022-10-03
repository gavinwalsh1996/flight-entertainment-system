import React from 'react'

import Image from '../images/Juicewrld.jpg'

//CSS
import '../css/MiniSlider.css'

function MiniSlider({items}) {


  return (

    <div className="mini-media-scroller mini-snaps-inline">

       {items.map((item, index) => (
        
        <div className="mini-media-element">
            <img src={item.image} />
            {/* <p className='item-name'>{item.name}</p> */}
        </div>

       ))}

       
        {/* <div className="media-element">
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
        </div> */}
   
   </div>

  )
}

export default MiniSlider