import React from 'react'
import './App.css';
import wh from "./images/wh.jpg"

const Topbar = () => {

  return (
    <div>
  
  
 
         <h6 className='sara'>Hi sarah</h6>
         <p className='sara'>welcome to your Home</p>
       
        

         <div className='sign'>
           <img src={wh} className="wh" ></img>
           <div className='text'>
              <p>Temperatur</p>
              <h3>19.5C</h3>
              <p>Electiricity Consumption</p>
              <h3>227 kWh</h3>
              </div> 
         </div>
    </div>
  )
}
export default Topbar
