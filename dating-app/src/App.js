import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errors from './components/Errors';
import Login from './components/Login';
import Signup from './components/SignUp';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="*" element={<Errors/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
