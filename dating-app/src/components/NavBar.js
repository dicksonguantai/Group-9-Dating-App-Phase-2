import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <nav style={{ marginTop:"20px"}}>
            <div style={{background:"#FFF", marginLeft:"10px"}}>
            <NavLink exact to="/"
            style={{marginRight:"50px", textDecoration:"none", color:"#B31312"}}
            >
                Love App
            </NavLink>
            <NavLink to="/messages"
            style={{marginRight:"50px", textDecoration:"none", color:"#B31312"}}>
                Messages
            </NavLink>
            <NavLink to="/signout"
            style={{marginRight:"10px", textDecoration:"none", color:"#B31312"}}>
                Signout
            </NavLink>
            </div>
            <hr style={{marginTop:"20px"}}></hr>
        </nav>
    </div>
  )
}

export default NavBar