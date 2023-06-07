import React from 'react'
import data from '../data';
import { useNavigate, useParams } from 'react-router';
import {BsFillCaretLeftFill} from 'react-icons/bs'
function Profile() {


const idToBe =(useParams()['id'])-1

const userData = data.users[idToBe]//take prop from the address
const {name,age,photos,height,bodyType,interests} =userData //destructure the specific user data
    const history = useNavigate();

    const goBack =(e) =>{
        e.preventDefault();
            history(-1)


    }
  return (
    <>
    <article className='card'>
        <div onClick={(e)=>{
        e.preventDefault()    
        goBack(e)}} className='icon-wrapper'><BsFillCaretLeftFill/></div>
      <img src={photos[0]} alt={name} />
      <h4>{name}</h4>
      <h5>age:{age} height:{height} cm</h5>
      <h4>{bodyType}</h4>
      <h4>{interests[0]}, {interests[1]}, {interests[2]}</h4>

      
      {/* <button className='btn btn-transparent mt' onClick={() =>setliked(!like)} >
        {!like?<BsHeartFill />:<h4>LIKED</h4>}
      </button>
      {like?
      <Link to='/messages' className='link'>
      <button className='btn btn-transparent '  >
        <BsFillChatFill/>
      </button>
      </Link>:null} */}
    </article>
  </>


    
  )

}
export default Profile
