import { useState } from 'react';
import { BsHeartFill,BsFillChatFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const User = ({ id,name,bio,location, job,deleteUser,photos }) => {
 const [like,setliked] =useState(false)


  return (
    <article className='card'>
      <img src={photos[0]} alt={name} />
      <h4>{name}</h4>
      <h5>{location}</h5>
      <h4>{job}</h4>
      <p>{bio}</p>
      <button className='btn btn-transparent mt' onClick={() =>setliked(!like)} >
        {!like?<BsHeartFill />:<h4>LIKED</h4>}
      </button>
      <Link to='/messages' className='link'>
      <button className='btn btn-transparent '  >
        <BsFillChatFill/>
      </button>
      </Link>
    </article>
  );
};

export default User;