import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import Color from './Color';

const ColorContext = createContext();

function App() {

  return (
    <div className="App">
      <ColorContext.Provider value="green">
        <Color />
      </ColorContext.Provider>
    </div>
  );
}


export default App;
export {ColorContext}

