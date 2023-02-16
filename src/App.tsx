import React from 'react';

import Board from './components/ButtonBoard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Board />
      </header>
    </div>
  );
}

export default App;
