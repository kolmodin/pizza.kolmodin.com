import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Pizza} from './Pizza';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        */}
        <Pizza />
      </header>
    </div>
  );
}

export default App;
