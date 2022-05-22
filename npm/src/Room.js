import React from 'react'
import './Room.css';
import room from "./images/room.png"
import sofa_icon from "./images/sofa_icon.png"
import plus_circle from "./images/plus-circle.svg"

const Room = () => {
  return (
    <div>
    <div className='row m-2'>

  <div className='colom'>
   <img src={room} width="70px" height="70px"></img>
       studyRoom
  </div>
  <div className='colom'>
  <img src={sofa_icon} width="70px" height="70px"></img>
       sitting Room
  </div>
  <div className='colom' id='add'>
  <img src={plus_circle} width="30px" height="110px"></img>
  
  </div>

    </div>
    <h6><span className="m-2 badge bg-danger">2rooms</span></h6>
    </div>
  )
}

export default Room