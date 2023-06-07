import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './Components/Error';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
     
        <Route path="*" element={<Error/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
