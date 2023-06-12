import { useState } from 'react';
import { BsHeartFill,BsFillChatFill ,BsEmojiHeartEyes} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const User = ({ id,name,bio,location, job,deleteUser,photos }) => {
 const [like,setliked] =useState(false)


  return (
    <article className='card'>
      <Link to={`/profile/${id}`} className='link'>
      <img  src={photos[0]} alt={name} />
      </Link>
      <h4>{name}</h4>
      <h5>{location}</h5>
      <h4>{job}</h4>
      <p>{bio}</p>
      <button className='btn btn-transparent mt' onClick={(e) =>{
        e.preventDefault()
        setliked(!like)}} >
        {!like?<BsHeartFill />:<><BsEmojiHeartEyes/> <h4>LIKED</h4></>}
      </button>
      {like?
      <Link to='/messages' className='link'>
      <button className='btn btn-transparent '  >
        <BsFillChatFill/>
      </button>
      </Link>:null}
    </article>
  );
};

export default User;