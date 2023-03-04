import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';
import ComposeEmail from './components/ComposeEmail';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      <ComposeEmail/>
    </div>
  );
}

export default App;
