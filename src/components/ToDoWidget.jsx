import React from 'react'

import '../css/ToDoWidget.css'
import barcelona from '../images/bcnn.jpg'

function ToDoWidget() {


  return (

    <div className="widget-container" style={{backgroundImage: `url(${barcelona})`}}>
        <h4>Top 5 things to see in Barcelona:</h4>
        <div className="todo">- Sangrada Familia</div>
        <div className="todo">- Park Guell</div>
        <div className="todo">- Casa Batllo</div>
        <div className="todo">- Barcelona Cathedral</div>
        <div className="todo">- Mercat de la Boqueria</div>
    </div>

  )
}

export default ToDoWidget