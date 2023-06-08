// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // const Login = ({ setUser }) => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');

// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!name || !email) return;
// //     setUser({ name: name, email: email });
// //     navigate('/dashboard');
// //   };


// //   return (
// //     <section className='section'>``
// //       <form className='form' onSubmit={handleSubmit}>
// //         <h5>login</h5>
// //         <div className='form-row'>
// //           <label htmlFor='name' className='form-label'>
// //             name
// //           </label>
// //           <input
// //             type='text'
// //             className='form-input'
// //             id='name'
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         <div className='form-row'>
// //           <label htmlFor='email' className='form-label'>
// //             email
// //           </label>
// //           <input
// //             type='email'
// //             className='form-input'
// //             id='email'
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <button type='submit' className='btn btn-block'>
// //           login
// //         </button>
// //       </form>
// //     </section>
// //   );
// // };
// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send login request to the server
//       const response = await axios.post('/api/login', { email, password });

//       // Handle successful login (e.g., store user data in state or localStorage)
//       console.log('Logged in successfully:', response.data);
//     } catch (error) {
//       // Handle login error (e.g., display error message)
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Login;

