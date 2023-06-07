
import { Route, Router } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Messages from './components/Messages';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Router>
    </div>
  );
}

export default App;
