import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
function NavBar() {
    const[cards, setCards] = useState([])
    const history = useHistory()
    function handleSignout(e){
        history.push("/login")
    }

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(resp=>resp.json())
        .then(data=>setCards(data))
    })

    function handleFilter(e){
        const filter = cards.filter(item=>item.location.includes(e.target.value))
        setCards(filter)
    }
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
            <NavLink to="/login"
            style={{marginRight:"10px", textDecoration:"none", color:"#B31312"}}
            onClick={handleSignout}>
                Signout
            </NavLink>
            <input type='search' placeholder="Location" style={{marginLeft:"150px"}} onChange={handleFilter}/>
            </div>
            <hr style={{marginTop:"20px"}}></hr>
        </nav>
    </div>
  )
}

export default NavBar