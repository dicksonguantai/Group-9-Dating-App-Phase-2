
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Messages from './components/Messages';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="main" element={<MainPage/>}/>
        <Route path="/messages" element={<Messages />}/>
        {/* <Route path="blog" element={<Blog/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
