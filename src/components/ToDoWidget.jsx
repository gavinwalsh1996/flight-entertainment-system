import React from 'react'

import '../css/ToDoWidget.css'
import barcelona from '../images/bcnn.jpg'

function ToDoWidget() {


  return (

    <div className="widget-container">
      <img src={barcelona} className='widget-img' />
      {/* style={{backgroundImage: `url(${barcelona})`}} */}
        <h4>Top 5 things to see in Barcelona:</h4>
        <div className="todo-one">- Sangrada Familia</div>
        <div className="todo-two">- Park Guell</div>
        <div className="todo-three">- Casa Batllo</div>
        <div className="todo-four">- Barcelona Cathedral</div>
        <div className="todo-five">- Mercat de la Boqueria</div>
    </div>

  )
}

export default ToDoWidget