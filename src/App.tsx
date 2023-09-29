import React from 'react';
import logo from './logo.svg';
import CovideoEmbed from 'react-covideo-embed';

import './App.css';

function App() {
  return (<div>
    <div id='covideo-container'> <CovideoEmbed/></div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
