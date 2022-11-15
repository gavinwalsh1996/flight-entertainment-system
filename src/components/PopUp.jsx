import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

//CSS
import '../css/PopUp.css'


function PopUp(props) {

  return (props.trigger) ? (
    
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false )}>
                <CloseIcon style={{ fill: '#222222' }} />
            </button>
            { props.children }
        </div>
    </div>

  ) : "" ;
}

export default PopUp