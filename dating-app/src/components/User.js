import { BsHeartFill } from 'react-icons/bs';

const User = ({ id,name, location, deleteUser,photos }) => {
  return (
    <article className='card'>
      <img src={photos} alt={name} />
      <h4>{name}</h4>
      <h5>{location}</h5>
      <button className='btn btn-transparent mt' onClick={() => deleteUser(id)} >
        <BsHeartFill />
      </button>
    </article>
  );
};

export default User;