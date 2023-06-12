import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Errors';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import MainPage from './components/MainPage'
import Messages from './components/Messages'
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Logout from './components/Logout';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    
    <BrowserRouter>

    {isLoggedIn?<div>
    <NavBar/>
    
      <Routes> 

        {/* <Route path="login" element={<Login/>} /> */}
        <Route path='main' element ={<MainPage />} />
        <Route path='messages' element ={<Messages />} />
        <Route path='/profile/:id' element ={<Profile/>}/>
        <Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
     
    
    </div>:
    
<Routes> 
<Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="signup" element={<SignUp/>} />
<Route path='main' element ={<MainPage isLoggedIn={isLoggedIn}/>} />
<Route path="/" element={<Home/>} />
<Route path="*" element={<Error/>} />
<Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>}/>

</Routes>}
      {/* // <Login setIsLoggedIn={setIsLoggedIn}/>} */}
    </BrowserRouter>
  );
}

export default App;
