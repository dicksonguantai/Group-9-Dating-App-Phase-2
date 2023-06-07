import { Link, useParams } from 'react-router-dom';
import users from '../db'

const SingleProduct = () => {
  const { profileID } = useParams();
  const profile = users.find((user) => user.id === profileID);
  const { image, name } = profile;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/profile'>back to profile</Link>
    </section>
  );
};

export default SingleProduct;
