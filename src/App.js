import React from 'react';
import './App.css';
import {SearchBar, InputText} from './components';

function App() {
  return (
    <div className="container">
      <header>
        <span className="header1">VUTTR</span>
        <span className="header4">Very Useful Tools to Remember</span>
      </header>
      <div className="searchSpace">
        <SearchBar />
        
      </div>
    </div>
  );
}

export default App;
