import React from 'react';
import '../App.css';
import Squares from './Squares.jsx';
import Direction from './Direction';
import Start from './Start';



function App() {
  return (
    <div className="App">
      <div className='container'>
        <Start />
      </div>
      <div className='placeholder'>
        <Squares />
      </div>
      <Direction />
    </div>
  );
}

export default App;
