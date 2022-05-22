import React from 'react'

export const Button = () => {
     const btn =["Home","office","School","Garden"]
  return (
    <div className='btn'>
         {btn.map((u)=>
         <button>{u}</button>)}
         
    </div>
  )
}
export default Button
