import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, such as making an API call
    console.log('Signup clicked');
  };

  return (
    <div style={{justifyContent:"center", border:"2px solid", paddingLeft:"80px",paddingRight:"50px", marginLeft:"500px", width:"200px", height:"300px", marginTop:"30px"}}>
      <h2 style={{textAlign:"center"}}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginTop:"30px"}}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div style={{marginTop:"30px"}}>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div >
        <button type="submit" style={{marginTop:"30px", width:"170px"}}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, such as making an API call
    console.log('Signup clicked');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

