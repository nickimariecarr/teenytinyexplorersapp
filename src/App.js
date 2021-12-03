import logo from './logo.svg';
import './App.css';
import React from 'react';

import Home from './home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


      </header>
      <main style={{width:"100%"}}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                


              </Routes>
      </main>
    </div>
  );
}

export default App;
