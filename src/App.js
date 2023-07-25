import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react';

function App() {
  const [data,  setData] =useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>{data}</h3>
        <button onClick={() => setData(data+1)}>Add me</button>
        <button onClick={() => setData(data-1)}>Subtract me</button>
      
      </header>
    </div>
  );
}

export default App;
