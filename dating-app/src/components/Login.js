import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };


  return (
    <section className='section' style={{border:"0.5px solid #F8F6F4",height:"300px",width:"250px", paddingLeft:"80px", marginRight:"400px", marginLeft:"440px", marginTop:"30px"}}>
    <div style={{width:"250px", height:"2px", background:"#B04759", marginRight:"200px", padding:"0px"}}></div>
      <form className='form' onSubmit={handleSubmit} style={{alignContent:"center"}}>
        <h2 style={{marginTop:"20px", marginLeft:"2px", fontFamily: "cursive"}}>LOVE LIVES HERE</h2>
        <div className='form-row' style={{marginTop:"40px"}}>
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
