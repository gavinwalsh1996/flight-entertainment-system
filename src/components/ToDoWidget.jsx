import React from 'react'

//CSS
import '../css/ToDoWidget.css'

//Images
import barcelona from '../images/bcnn.jpg'

function ToDoWidget() {


  return (

    <div className="widget-container">
      
      <img src={barcelona} className='widget-img' alt='' />

        <div className="things-todo">
          <div className="todo-title">Top 5 things to see in Barcelona</div>
          <div className="todos">
          <div className="todo">• Sangrada Familia</div>
          <div className="todo">• Park Guell</div>
          <div className="todo">• Casa Batllo</div>
          <div className="todo">• Barcelona Cathedral</div>
          <div className="todo">• Mercat de la Boqueria</div>
          </div>
        </div>

    </div>

  )
}

export default ToDoWidget