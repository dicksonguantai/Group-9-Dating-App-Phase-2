import React, { useEffect } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'


function NavBar({cards, setCards}) {

    const navigate = useNavigate()

    function handleSignout(e){
        navigate("/login")
    }


  return (
    <div>
        <nav style={{ marginTop:"10px"}}>
            <div style={{background:"",marginTop:"20px", marginLeft:"10px", display:"flex"}}>
            <NavLink exact to="main"
            style={{marginRight:"50px", color:"#6f0d11", fontFamily:"cursive", fontSize:"20px", marginBottom:"2px",textDecoration:"overline"}}
            activeStyle={{color:"gray", textDecoration:"underline"}}
            >
                L L H
            </NavLink> 
            <NavLink to="messages"
            id="nav"
            style={{marginRight:"50px", textDecoration:"none", color:"#6f0d11"}}
            activeStyle={{color:"gray", textDecoration:"underline"}}
            >
                Messages
            </NavLink>
            {/* <NavLink to="/blog"
            id="nav"
            style={{marginRight:"50px", textDecoration:"none", color:"#6f0d11"}}
            activeStyle={{color:"gray", textDecoration:"underline"}}
            >
                Blog
            </NavLink> */}
            <NavLink to="/logout"
            style={{marginRight:"10px", textDecoration:"none", color:"#6f0d11"}}
            onClick={handleSignout}>
                Signout
            </NavLink >
            </div>
            <hr style={{marginTop:"20px"}}></hr>
        </nav>
    </div>
  )
}

export default NavBar