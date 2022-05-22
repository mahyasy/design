import React from 'react'
import room from "./images/room.png"
import sofa_icon from "./images/sofa_icon.png"
import plus_circle from "./images/plus-circle.svg"
import tv from "./images/tv.svg"
import airr from "./images/airr.svg"
import lightbulb from "./images/lightbulb.svg"
import "./Plug.css"

const Plug = () => {
  return (
    <div>
         
    <div className='row m-2'>

  <div className='colom'>
   <img src={tv} width="70px" height="70px"></img>
       tv
       <i class="bi bi-tv"></i>
       <label className='switch'>
  <input type="checkbox"></input>
  <span className='slider'></span>
</label>
  </div>
  
  <div className='colom'>
  <img src={airr} width="70px" height="70px"></img>
       Ac
       <label className='switch'>
  <input type="checkbox"></input>
  <span className='slider'></span>
</label>
  </div>
  <div className='colom' >
  <img src={lightbulb} width="60px" height="60px"></img>
  light
<label className='switch'>
  <input type="checkbox"></input>
  <span className='slider'></span>
</label>
</div>
<h6><span className="m-2 badge bg-danger">3 devices</span></h6>

</div>
    </div>
  )
}

export default Plug