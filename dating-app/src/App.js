import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Errors';
import Login from './components/Login';
import Signup from './components/SignUp';
import { AuthContext } from './components/AuthContext';
import AnyComponent from './components/AnyComponent';
function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="AuthContext" element={<AuthContext/>} />
        <Route path="AnyComponent" element={<AnyComponent/>} />

     
        <Route path="*" element={<Error/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Error from './components/Errors';
// import Login from './components/Login';
// import Signup from './components/SignUp';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/">
//             <h2>Welcome to the Home page</h2>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

