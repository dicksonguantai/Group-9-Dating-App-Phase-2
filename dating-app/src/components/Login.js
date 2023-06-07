import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsLoggedIn(true)
    // setUser({ name: name, email: email });
    navigate('/main');
  };


  return (
    <section className='section'>''
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>


          <label htmlFor='name' className='form-label'>
            Name
          </label><br/>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'
        style={{marginTop:"30px"}}>
          <label htmlFor='email' className='form-label'>
            Email
          </label><br/>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'
        style={{marginTop:"30px", marginLeft:"1px", width:"170px", background:"#B04759", boxShadow:"unset"}}
        >
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
