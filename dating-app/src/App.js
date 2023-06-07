
import { Route,Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Messages from './components/Messages';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" >
          <MainPage/>
        </Route>
        <Route path="/messages">
          <Messages/>
        </Route >
      </Switch>
    </div>
  );
}

export default App;
