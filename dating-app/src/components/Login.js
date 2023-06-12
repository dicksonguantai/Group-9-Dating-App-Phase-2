import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import swal from 'sweetalert';
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const button = document.getElementById('login');
    button.textContent = 'Loading';
  
    fetch('https://short-internal-elk.glitch.me/users')
      .then((response) => response.json())
      .then((usersFetched) => {
        const userLogging = usersFetched.find((user) => user.email === email);
  
        if (userLogging && userLogging.password === password) {
          setIsLoggedIn(true);
          navigate('/main');
        } else {
          swal('Incorrect credentials', 'Please try again', 'error');
          button.textContent = 'Login';
        }
      });
  };


    // if (!password || !email) return;
    // setIsLoggedIn(true)
    // // setUser({ password: password, email: email });
    // navigate('/main');
  // };


  return (
    <section className='section'>
      
      <form className='form' onSubmit={handleSubmit}>
      &ensp;&ensp;&ensp;&ensp;<Logo className="form-row" /> 
        <h5><span>Login</span></h5>
        <div className='form-row'>


          <label htmlFor='password' className='form-label'>
            EMAIL
          </label><br/>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'
        style={{marginTop:"30px"}}>
          <label htmlFor='email' className='form-label'>
            PASSWORD
          </label><br/>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block' id="login"
        style={{marginTop:"30px", marginLeft:"1px", width:"170px", background:"#B04759", boxShadow:"unset"}}
        >
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
