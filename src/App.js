import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Greetings from './components/Greetings';
import Calc from './components/calculations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings />
        <Calc />

        <p>&copy; Copyright 2022</p>
      </header>
    </div>
  );
}

export default App;
