
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, such as making an API call
    fetch("https://short-internal-elk.glitch.me/users",
  {
    method: 'POST',
    headers :{
      "Accept": 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email":email,
      "password" : password


    })
  }
  )
.then(
  navigate('/')
)






  };

  return (
    <section className='section'>
      
      <form className="form" onSubmit={handleSubmit}>
      <h5>Signup</h5>
        <div className='form-row'>
          <label className='form-label'>Email:</label><br/>
          <input className='form-input' type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='form-row'  style={{marginTop:"30px"}}>
          <label className='form-label'>Password:</label><br/>
          <input className='form-input' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className='btn btn-block'
        style={{marginTop:"30px", marginLeft:"1px", width:"170px", background:"#B04759", boxShadow:"unset"}}>Signup</button>
      </form>
    </section>
  );
};

export default SignUp;

