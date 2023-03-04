import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <Login/>
    </div>
  );
}

export default App;
