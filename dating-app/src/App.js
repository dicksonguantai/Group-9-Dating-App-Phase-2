import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Errors';
import Login from './components/Login';
import Signup from './components/SignUp';
import MainPage from './components/MainPage'
import Messages from './components/Messages'
import Profile from './components/Profile';
function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path='main' element ={<MainPage />} />
        <Route path='messages' element ={<Messages />} />
        <Route path='/profile/:id' element ={<Profile/>}/>
        <Route path="/" element={<Login/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
