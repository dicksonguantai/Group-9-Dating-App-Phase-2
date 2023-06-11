import { Link } from 'react-router-dom';

import lovelycouple from './assets/lovelycouple.png';

// import Wrapper from '../styles/styled/Landing.styled';
import Logo from './Logo';


const Home = () => {
  return (
    <>
     <nav>
    <Logo/> 
    

    </nav>
      <div className='container page'>
     
        <div className='info'>
        <h1>
            Love <span>Lives</span> Here
          </h1>
          <p>
            Welcome to Love lives Here
          </p>
          <Link to='/login' className='btn btn-hero'>
            Log In
          </Link> &ensp;
          <Link to='/signup' className='btn btn-hero'>
            SignUp
          </Link>
        </div>
        <img src= {lovelycouple} alt='love finding app' className='img main-img' />
      </div>
    
      </>
  );
};

export default Home;
