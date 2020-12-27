import React from 'react';
import './App.css';
import {SearchBar, Button} from './components';

function App() {
  return (
    <div className="container">
      <header>
        <span className="header1">VUTTR</span>
        <span className="header4">Very Useful Tools to Remember</span>
      </header>
      <div className="searchSpace">
        <SearchBar />
        <Button title="neutral" />
      </div>
    </div>
  );
}

export default App;
