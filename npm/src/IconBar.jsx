import React from 'react'
import "./IconBar.css"

export const IconBar = () => {
  return (
    <div className='con'>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" id='hov'><i class="bi bi-reception-3"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id='hov' ><i class="bi bi-house-fill"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link"  id='hov'><i class="bi bi-graph-up"></i></a>
  </li>
 
</ul>

    </div>
  )
}
export default IconBar
