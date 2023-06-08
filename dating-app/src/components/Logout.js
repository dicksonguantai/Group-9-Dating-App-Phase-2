import React from 'react'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'

function Logout({setIsLoggedIn}) {
    const navigate = useNavigate()
    function handleYes(){
        navigate("/login")
    }
    function handleNo(){
        navigate("/")
    }
     swal({
        title:"Are you sure you want to log out?",
        text:"You will be redirected to login",
        Icon:"warning",
        buttons:true,
        dangerMode:true,
     })
     .then((willDelete)=>{
        if(willDelete){
            swal("You have logged out!",{
                icon:"success",
            })
            setIsLoggedIn(false);
        }else{
            swal("Back To Love For You!",{
                icon:"warning",
            })
            navigate("/main")
        }
     })
  return (
    <div style={{textAlign:"center", borderRadius:"60px"}}>
       
    </div>
  )
}

export default Logout