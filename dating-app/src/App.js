import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Errors';
import Login from './components/Login';
import Signup from './components/SignUp';
import MainPage from './components/MainPage';
import Messages from './components/Messages';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path='main' element ={<MainPage />} />
        <Route path="*" element={<MainPage/>} />
        <Route path="/messages" element={<Messages />} />

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
