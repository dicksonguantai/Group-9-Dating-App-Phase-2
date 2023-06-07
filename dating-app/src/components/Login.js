import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Logo from './Logo';
import swal from 'sweetalert';
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
=======
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
>>>>>>> 0e5a2c99 (changes to the loinsignupcode)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const button =document.getElementById('login')
    button.textContent = 'Loading'

    fetch("https://short-internal-elk.glitch.me/users")
    .then((response) => response.json())
    .then ((usersFetched) =>{
      console.log(password)
    const userLogging = (usersFetched.filter((user)=>user.email === email))[0]
    console.log("🚀 ~ file: Login.js:16 ~ .then ~  userLogging:",  userLogging["password"])
    
      if(userLogging["password"] ===password){
        setIsLoggedIn(true)
        navigate('/main')
        
      }
else{
  return navigate('/')
}
      }

    
    )

    }


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
=======
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };


  return (
    <section className='section'>``
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
>>>>>>> 0e5a2c99 (changes to the loinsignupcode)
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
<<<<<<< HEAD
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
=======
        <button type='submit' className='btn btn-block'>
>>>>>>> 0e5a2c99 (changes to the loinsignupcode)
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
