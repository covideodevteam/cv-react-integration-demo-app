import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    addOnLoadEventListener();
  }, []);

  const addOnLoadEventListener = () => {
    window.addEventListener('load', (event) => {
      //@ts-ignore
      if (window && window.Covideo) {
        //@ts-ignore
        window.Covideo.loadRecorder('covideo-container');
      }
    });
  }

  return (<div>
    <div id='covideo-container' />
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
